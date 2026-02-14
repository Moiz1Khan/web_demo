import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, children, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    const classes = cn(
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer relative overflow-hidden",
      {
        "bg-primary text-primary-foreground hover:bg-black/90 hover:opacity-90":
          variant === "primary",
        "bg-[#6c757d] text-white hover:bg-[#5a6268]":
          variant === "secondary",
        "border-2 border-black bg-white text-black hover:bg-gray-100 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white/10":
          variant === "outline",
        "text-foreground hover:bg-secondary/50": variant === "ghost",
      },
      {
        "h-9 px-4 text-sm": size === "sm",
        "h-12 px-6 text-base": size === "md",
        "h-14 px-8 text-lg": size === "lg",
      },
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(classes, (children.props as { className?: string }).className),
      });
    }

    return (
      <button
        className={cn(classes, "transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shine-sweep")}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
