import React from "react";
import { cn } from "../utils";

export function ShimmerBadge({
  className,
  children,
  shimmerColor = "#ffffff",
  background = "rgba(255, 255, 255, 0.1)",
  borderColor = "rgba(255, 255, 255, 0.2)",
  ...props
}) {
  return (
    <div
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-out hover:scale-105",
        "bg-black-200 border border-black-50 text-white-50",
        className
      )}
      style={{
        "--shimmer-color": shimmerColor,
        "--bg-color": background,
        "--border-color": borderColor,
      }}
      {...props}
    >
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/20"></div>
      </div>
      <span className="relative z-10">{children}</span>
    </div>
  );
}