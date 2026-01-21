import { cn } from "@/lib/utils";
import { useId } from "react";

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}: OrbitingCirclesProps) {
  const id = useId();
  const fillGradientId = `orbit-fill-${id}`;
  const strokeGradientId = `orbit-stroke-${id}`;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          // Adicionado overflow-visible explicitamente para garantir que o brilho não seja cortado
          className="pointer-events-none absolute size-full overflow-visible"
        >
          <defs>
            {/* 1. Gradiente Radial (Efeito Vidro no Centro) */}
            <radialGradient id={fillGradientId} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="0.02" />
            </radialGradient>

            {/* 2. Gradiente Linear (O Traço da órbita) */}
            <linearGradient id={strokeGradientId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.01" />
              <stop offset="100%" stopColor="white" stopOpacity="0.01" />
            </linearGradient>
          </defs>

          {/* Círculo Principal */}
          <circle
            className="stroke-1 dark:stroke-white/5"
            cx="50%"
            cy="50%"
            r={radius}
            fill={`url(#${fillGradientId})`}
            stroke={`url(#${strokeGradientId})`}
          />
        </svg>
      )}

      {/* Container dos Ícones */}
      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--delay": -delay,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border-none [animation-delay:calc(var(--delay)*1000ms)] z-30",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        {children}
      </div>
    </>
  );
}