import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "./utils";

const Marquee = ({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = 40,
  ...props
}) => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marqueeContent = marqueeRef.current;
    const marqueeItems = marqueeContent.children;
    
    if (marqueeItems.length === 0) return;

    const direction = vertical ? "y" : "x";
    const size = vertical ? "height" : "width";
    
    gsap.set(marqueeContent, {
      [direction]: 0
    });

    const totalSize = Array.from(marqueeItems).reduce((acc, item) => {
      return acc + (vertical ? item.offsetHeight : item.offsetWidth);
    }, 0) / repeat;

    animationRef.current = gsap.to(marqueeContent, {
      [direction]: reverse ? totalSize : -totalSize,
      duration: duration,
      ease: "none",
      repeat: -1,
      modifiers: {
        [direction]: gsap.utils.wrap(reverse ? 0 : -totalSize, reverse ? totalSize : 0)
      }
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [reverse, vertical, repeat, duration, children]);

  const handleMouseEnter = () => {
    if (pauseOnHover && animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && animationRef.current) {
      animationRef.current.play();
    }
  };

  return (
    <div
      {...props}
      className={cn(
        "flex overflow-hidden [--duration:40s] [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={marqueeRef}
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)]",
          vertical ? "flex-col" : "flex-row"
        )}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              vertical ? "flex-col" : "flex-row"
            )}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;