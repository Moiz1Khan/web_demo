"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function StickyBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white py-2.5 px-4 border-b border-white/10 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-center flex-1">
          Buy your home with us and save up to{" "}
          <span className="font-bold">AED 11,000</span> in fees.
        </p>
        <div className="flex items-center shrink-0">
          <button
            onClick={() => setVisible(false)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            aria-label="Dismiss"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
