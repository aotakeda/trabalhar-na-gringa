"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const MOBILE_GLOBE_CONFIG: COBEOptions = {
  width: 600,
  height: 600,
  onRender: () => {},
  devicePixelRatio: 1.5,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 10000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [0, 155 / 255, 0],
  glowColor: [1, 1, 1],
  markers: [
    { location: [37.7749, -122.4194], size: 0.07 },
    { location: [40.7128, -74.006], size: 0.07 },
    { location: [51.5074, -0.1278], size: 0.07 },
    { location: [48.8566, 2.3522], size: 0.07 },
    { location: [52.52, 13.405], size: 0.07 },
    { location: [34.0522, -118.2437], size: 0.07 },
    { location: [39.7392, -104.9903], size: 0.07 },
    { location: [53.3498, -6.2603], size: 0.07 },
    { location: [48.1351, 11.582], size: 0.07 },
    { location: [59.4372, 24.7536], size: 0.07 },
  ],
};

const DESKTOP_GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [0, 155 / 255, 0],
  glowColor: [1, 1, 1],
  markers: [
    { location: [37.7749, -122.4194], size: 0.07 },
    { location: [40.7128, -74.006], size: 0.07 },
    { location: [47.6062, -122.3321], size: 0.07 },
    { location: [37.3382, -121.8863], size: 0.07 },
    { location: [38.9072, -77.0369], size: 0.07 },
    { location: [39.7392, -104.9903], size: 0.07 },
    { location: [42.3601, -71.0589], size: 0.07 },
    { location: [33.4484, -112.074], size: 0.07 },
    { location: [40.4406, -79.9959], size: 0.07 },
    { location: [34.0522, -118.2437], size: 0.07 },
    { location: [51.5074, -0.1278], size: 0.07 },
    { location: [48.8566, 2.3522], size: 0.07 },
    { location: [52.52, 13.405], size: 0.07 },
    { location: [50.1109, 8.6821], size: 0.07 },
    { location: [52.3667, 4.8945], size: 0.07 },
    { location: [48.2082, 16.3738], size: 0.07 },
    { location: [53.3498, -6.2603], size: 0.07 },
    { location: [60.1695, 24.9354], size: 0.07 },
    { location: [59.4372, 24.7536], size: 0.07 },
    { location: [48.1351, 11.582], size: 0.07 },
  ],
};

export function Globe({
  className,
  config,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const [isMobile, setIsMobile] = useState(false);
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globeConfig =
      config || (isMobile ? MOBILE_GLOBE_CONFIG : DESKTOP_GLOBE_CONFIG);
    const pixelRatio = isMobile ? 1.5 : 2;

    const globe = createGlobe(canvasRef.current!, {
      ...globeConfig,
      width: width * pixelRatio,
      height: width * pixelRatio,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += isMobile ? 0.002 : 0.005;
        state.phi = phi + rs.get();
        state.width = width * pixelRatio;
        state.height = width * pixelRatio;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config, isMobile]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
