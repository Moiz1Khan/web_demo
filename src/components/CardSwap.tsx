"use client";

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  activeIndex?: number;
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`absolute top-1/2 left-1/2 rounded-2xl border border-border bg-card [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] overflow-hidden shadow-lg ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
    />
  )
);
Card.displayName = "Card";

export interface CardSwapHandle {
  goToCard: (index: number) => void;
}

type CardRef = RefObject<HTMLDivElement | null>;
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (i: number, distX: number, distY: number, total: number): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap = forwardRef<CardSwapHandle, CardSwapProps>(
  (
    {
      width = 420,
      height = 480,
      cardDistance = 50,
      verticalDistance = 55,
      delay = 6000,
      pauseOnHover = true,
      onCardClick,
      skewAmount = 5,
      easing = "elastic",
      activeIndex,
      children,
    },
    ref
  ) => {
    const config =
      easing === "elastic"
        ? {
            ease: "elastic.out(0.6,0.9)" as const,
            durDrop: 1.2,
            durMove: 1,
            durReturn: 1.2,
            promoteOverlap: 0.85,
            returnDelay: 0.08,
          }
        : {
            ease: "power1.inOut" as const,
            durDrop: 0.6,
            durMove: 0.5,
            durReturn: 0.6,
            promoteOverlap: 0.5,
            returnDelay: 0.15,
          };

    const childArr = useMemo(
      () => Children.toArray(children) as ReactElement<CardProps>[],
      [children]
    );
    const refs = useMemo<CardRef[]>(
      () => childArr.map(() => React.createRef<HTMLDivElement>()),
      [childArr.length]
    );

    const order = useRef<number[]>(
      Array.from({ length: childArr.length }, (_, i) => i)
    );
    const isControlled = activeIndex !== undefined;
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const container = useRef<HTMLDivElement>(null);
    const isAnimating = useRef(false);
    const runSwapRef = useRef<() => void>(() => {});

    const goToCard = (index: number) => {
      const total = refs.length;
      if (index < 0 || index >= total || isAnimating.current) return;
      const currentFront = order.current[0];
      if (index === currentFront) return;

      const swapsNeeded = (index - currentFront + total) % total;
      let done = 0;
      const doNext = () => {
        if (done >= swapsNeeded) {
          isAnimating.current = false;
          return;
        }
        isAnimating.current = true;
        runSwapRef.current();
        done++;
        const tl = tlRef.current;
        if (tl) {
          tl.then(() => {
            if (done < swapsNeeded) setTimeout(doNext, 80);
            else isAnimating.current = false;
          });
        } else {
          isAnimating.current = false;
        }
      };
      doNext();
    };

    useImperativeHandle(ref, () => ({ goToCard }));

    useEffect(() => {
      const total = refs.length;
      refs.forEach((r, i) =>
        placeNow(r.current!, makeSlot(i, cardDistance, verticalDistance, total), skewAmount)
      );

      const swap = () => {
        if (order.current.length < 2) return;

        const [front, ...rest] = order.current;
        const elFront = refs[front].current!;
        const tl = gsap.timeline();
        tlRef.current = tl;

        tl.to(elFront, {
          y: "+=400",
          duration: config.durDrop,
          ease: config.ease,
        });

        tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
        rest.forEach((idx, i) => {
          const el = refs[idx].current!;
          const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
          tl.set(el, { zIndex: slot.zIndex }, "promote");
          tl.to(
            el,
            {
              x: slot.x,
              y: slot.y,
              z: slot.z,
              duration: config.durMove,
              ease: config.ease,
            },
            `promote+=${i * 0.12}`
          );
        });

        const backSlot = makeSlot(
          refs.length - 1,
          cardDistance,
          verticalDistance,
          refs.length
        );
        tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
        tl.call(
          () => {
            gsap.set(elFront, { zIndex: backSlot.zIndex });
          },
          undefined,
          "return"
        );
        tl.to(
          elFront,
          {
            x: backSlot.x,
            y: backSlot.y,
            z: backSlot.z,
            duration: config.durReturn,
            ease: config.ease,
          },
          "return"
        );

        tl.call(() => {
          order.current = [...rest, front];
        });
      };

      runSwapRef.current = swap;
      swap();

      if (!isControlled) {
        intervalRef.current = setInterval(swap, delay);
      }

      if (pauseOnHover && !isControlled) {
        const node = container.current!;
        const pause = () => {
          tlRef.current?.pause();
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        };
        const resume = () => {
          tlRef.current?.play();
          intervalRef.current = setInterval(swap, delay);
        };
        node.addEventListener("mouseenter", pause);
        node.addEventListener("mouseleave", resume);
        return () => {
          node.removeEventListener("mouseenter", pause);
          node.removeEventListener("mouseleave", resume);
          if (intervalRef.current) clearInterval(intervalRef.current);
        };
      }
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, [
      cardDistance,
      verticalDistance,
      skewAmount,
      easing,
      delay,
      pauseOnHover,
      isControlled,
    ]);

    const prevActiveIndex = useRef<number | undefined>(undefined);
    useEffect(() => {
      if (activeIndex === undefined || activeIndex < 0) return;
      if (prevActiveIndex.current !== activeIndex) {
        prevActiveIndex.current = activeIndex;
        goToCard(activeIndex);
      }
    }, [activeIndex]);

    const rendered = childArr.map((child, i) =>
      isValidElement<CardProps>(child)
        ? cloneElement(child, {
            key: i,
            ref: refs[i],
            style: { width, height, ...(child.props.style ?? {}) },
            onClick: (e: React.MouseEvent<HTMLDivElement>) => {
              (child.props as CardProps).onClick?.(e);
              onCardClick?.(i);
            },
          } as CardProps & React.RefAttributes<HTMLDivElement>)
        : child
    );

    return (
      <div
        ref={container}
        className="absolute bottom-0 right-0 -translate-x-[5%] translate-y-[5%] origin-bottom-right [perspective:900px] overflow-visible max-[768px]:translate-x-[2%] max-[768px]:translate-y-[10%] max-[768px]:scale-[0.7] max-[480px]:scale-[0.5]"
        style={{ width, height }}
      >
        {rendered}
      </div>
    );
  }
);
CardSwap.displayName = "CardSwap";

export default CardSwap;
