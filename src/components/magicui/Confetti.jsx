"use client";

import confetti from "canvas-confetti";
import { useCallback } from "react";

const Confetti = (props = {}) => {
  const { 
    colors = ["#8B5CF6", "#FFFFFF", "#000000"], // Purple, White, Black
    particleCount = 100,
    spread = 70,
    origin = { x: 0.5, y: 0.5 },
    duration = 3000,
    ...otherProps
  } = props;
  const fire = useCallback((options = {}) => {
    const defaults = {
      particleCount,
      spread,
      origin,
      colors,
      ...options
    };

    confetti(defaults);
  }, [colors, particleCount, spread, origin]);

  const fireSideCannons = useCallback(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, colors };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Left cannon
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      }));

      // Right cannon
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      }));
    }, 250);
  }, [colors]);

  return {
    fire,
    fireSideCannons
  };
};

export default Confetti;