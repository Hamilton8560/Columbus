import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils";

export function NumberCounter({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  prefix,
  suffix,
}) {
  const [displayValue, setDisplayValue] = useState(direction === "down" ? value : 0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const timer = setTimeout(() => {
      const startValue = direction === "down" ? value : 0;
      const endValue = direction === "down" ? 0 : value;
      const duration = 2000;
      const startTime = Date.now();

      const updateValue = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Use easeOutCubic for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + (endValue - startValue) * easeOutCubic;
        
        setDisplayValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(updateValue);
        } else {
          setDisplayValue(endValue);
        }
      };

      requestAnimationFrame(updateValue);
    }, delay);

    return () => clearTimeout(timer);
  }, [started, value, direction, delay]);

  const formattedValue = displayValue.toFixed(decimalPlaces);

  return (
    <motion.span
      ref={ref}
      className={cn("font-mono", className)}
      initial={{ opacity: 0, y: direction === "down" ? -20 : 20 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      {prefix}
      {formattedValue}
      {suffix}
    </motion.span>
  );
}