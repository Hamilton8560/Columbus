import { cn } from "../utils";

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  anchor = 90,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
  children,
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl",
        className
      )}
      style={{
        "--size": size,
        "--duration": duration,
        "--border-width": borderWidth,
        "--anchor": anchor,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": `-${delay}s`,
      }}
    >
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          padding: `${borderWidth}px`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: `xor`,
          maskComposite: `exclude`,
        }}
      >
        <div
          className="absolute aspect-square w-full animate-border-beam"
          style={{
            width: `calc(var(--size) * 1px)`,
            offsetPath: `rect(0 auto auto 0 round calc(var(--size) * 1px))`,
            background: `conic-gradient(from calc(var(--anchor) * 1deg), transparent, var(--color-from), var(--color-to), transparent)`,
            animation: `border-beam var(--duration)s infinite linear`,
            animationDelay: `var(--delay)`,
          }}
        />
      </div>
      {children}
    </div>
  );
}