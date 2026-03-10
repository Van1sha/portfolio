import { useEffect, useRef, useCallback } from 'react';

const TRAIL_LENGTH = 8;
const TRAIL_INTERVAL = 50; // ms between trail dots

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const trailPositions = useRef<Array<{ x: number; y: number }>>(
    Array(TRAIL_LENGTH).fill({ x: 0, y: 0 })
  );
  const isHovering = useRef(false);
  const lastTrailTime = useRef(0);
  const animFrameId = useRef<number>(0);

  const updateCursor = useCallback(() => {
    // Update main cursor position
    if (cursorRef.current) {
      cursorRef.current.style.left = `${mousePos.current.x}px`;
      cursorRef.current.style.top = `${mousePos.current.y}px`;
      cursorRef.current.style.transform = `translate(-50%, -50%) scale(${isHovering.current ? 1.8 : 1}) rotate(${isHovering.current ? 180 : 0}deg)`;
    }

    // Update trail positions at intervals
    const now = Date.now();
    if (now - lastTrailTime.current > TRAIL_INTERVAL) {
      trailPositions.current.pop();
      trailPositions.current.unshift({ ...mousePos.current });
      lastTrailTime.current = now;
    }

    // Update trail DOM elements directly (no React re-render)
    trailRefs.current.forEach((el, index) => {
      if (el) {
        const pos = trailPositions.current[index];
        el.style.left = `${pos.x}px`;
        el.style.top = `${pos.y}px`;
        el.style.opacity = `${1 - index * 0.12}`;
        el.style.transform = `translate(-50%, -50%) scale(${1 - index * 0.1}) rotate(${index * 20}deg)`;
      }
    });

    animFrameId.current = requestAnimationFrame(updateCursor);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHovering.current = !!(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    animFrameId.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animFrameId.current);
    };
  }, [updateCursor]);

  return (
    <>
      {/* Trail stars */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, index) => (
        <div
          key={index}
          ref={(el) => { trailRefs.current[index] = el; }}
          className="cursor-star-trail"
          style={{ transition: 'left 0.15s ease-out, top 0.15s ease-out, opacity 0.2s ease-out' }}
        />
      ))}

      {/* Main cursor star */}
      <div
        ref={cursorRef}
        className="cursor-star"
        style={{ transition: 'left 0.08s ease-out, top 0.08s ease-out, transform 0.3s ease-out' }}
      />
    </>
  );
};

export default CustomCursor;
