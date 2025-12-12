import React, { forwardRef, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils";

export const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-black-50 bg-black-100 p-3 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export const AnimatedBeam = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#18CCFC",
  gradientStopColor = "#6344F5",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const pathRef = useRef(null);

  const getSVGPath = () => {
    if (!fromRef?.current || !toRef?.current || !containerRef?.current) {
      return "";
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const fromRect = fromRef.current.getBoundingClientRect();
    const toRect = toRef.current.getBoundingClientRect();

    const fromCenterX = fromRect.left + fromRect.width / 2 - containerRect.left + startXOffset;
    const fromCenterY = fromRect.top + fromRect.height / 2 - containerRect.top + startYOffset;
    const toCenterX = toRect.left + toRect.width / 2 - containerRect.left + endXOffset;
    const toCenterY = toRect.top + toRect.height / 2 - containerRect.top + endYOffset;

    const controlX = (fromCenterX + toCenterX) / 2;
    const controlY = (fromCenterY + toCenterY) / 2 - curvature;

    return `M ${fromCenterX},${fromCenterY} Q ${controlX},${controlY} ${toCenterX},${toCenterY}`;
  };

  return (
    <svg
      className={cn(
        "pointer-events-none absolute left-0 top-0 h-full w-full",
        className
      )}
      width="100%"
      height="100%"
    >
      <defs>
        <linearGradient
          id={`gradient-${fromRef?.current?.id}-${toRef?.current?.id}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor={gradientStartColor} />
          <stop offset="100%" stopColor={gradientStopColor} />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d={getSVGPath()}
        stroke={pathColor}
        strokeWidth={pathWidth}
        fill="none"
        opacity={pathOpacity}
      />
      <motion.path
        d={getSVGPath()}
        stroke={`url(#gradient-${fromRef?.current?.id}-${toRef?.current?.id})`}
        strokeWidth={pathWidth}
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: reverse ? 0 : 1 }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: 0,
        }}
      />
    </svg>
  );
};