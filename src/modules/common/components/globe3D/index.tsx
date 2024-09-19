// import createGlobe from "cobe";
// import { useEffect, useRef } from "react";

// // https://github.com/shuding/cobe

'use client'

import createGlobe from "cobe";
import { useEffect, useRef, MutableRefObject } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring } from 'react-spring';

export function Cobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Added typing for canvasRef
  const pointerInteracting = useRef<number | null>(null); // Ref to track interaction
  const pointerInteractionMovement = useRef<number>(0); // Track movement
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));
  const { ref: PartnersLeftRef, inView: PartnersLeftInView } = useInView({
    triggerOnce: false,
  });
  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    
    window.addEventListener('resize', onResize);
    onResize();

    if (canvasRef.current) {
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 5,
        mapSamples: 30000,
        mapBrightness: 2.0,
        baseColor: [0.1216, 0.349, 0.447],
        markerColor: [1.0, 0.647, 0.0],
        glowColor: [1.3, 1.3, 1.3],
        markers: [
         
          { location: [4.2105, 101.9758], size: 0.06 },  // Kuala Lumpur marker
          { location: [1.3521, 103.8198], size: 0.06 },  // Singapore marker
          { location: [19.8563, 102.4955], size: 0.06 },  // Laos marker
          { location: [12.5657, 104.9910], size: 0.06},  // Cambodia marker
          { location: [35.6762, 139.6503], size: 0.06 }   // Japan marker
        ],
        onRender: (state: any) => {
          // This prevents rotation while dragging
          if (!pointerInteracting.current) {
            phi += 0.005;
          }
          state.phi = phi + r.get();
          state.width = width * 2;
          state.height = width * 2;
        }
      });

      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = '1';
        }
      });

      return () => {
        globe.destroy();
        window.removeEventListener('resize', onResize);
      };
    }
  }, [r]);

  return (
    <div
    ref={PartnersLeftRef}
    className={`${
              PartnersLeftInView ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"
            } transition-all delay-200 duration-500 ease-in-out `}
      style={{
        width: '100%',
        maxWidth: 600,
        aspectRatio: 1,
        margin: 'auto',
        position: 'relative',
      }}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grabbing';
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 200,
            });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 100,
            });
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          contain: 'layout paint size',
          opacity: 0,
          transition: 'opacity 1s ease',
        }}
      />
    </div>
  );
}
