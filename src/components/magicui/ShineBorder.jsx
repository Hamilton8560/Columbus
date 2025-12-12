import React from "react";
import { cn } from "../utils";

export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  className,
  children,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative min-h-[60px] w-fit min-w-[300px] place-items-center rounded-lg bg-black-100 p-3",
        className
      )}
      style={{
        "--border-radius": `${borderRadius}px`,
      }}
      {...props}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden rounded-lg",
          `before:absolute before:aspect-square before:w-full before:rounded-full before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:animate-spin before:opacity-20 before:[animation-duration:6s] before:[background-size:50%_50%,50%_50%] before:[background-position:0_0,100%_0,100%_100%,0_100%]`
        )}
        style={{
          "--duration": `${duration}s`,
          "--border-width": `${borderWidth}px`,
          "--border-radius": `${borderRadius}px`,
          "--shine-pulse-color": color,
        }}
      />

      <div className={cn("relative z-[1]", className)}>{children}</div>
    </div>
  );
}