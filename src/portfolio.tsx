import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);
      
      // Add to trail
      setTrail((prev) => {
        const newTrail = [{ ...newPos, id: Date.now() }, ...prev.slice(0, 8)];
        return newTrail;
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Trail stars */}
      {trail.map((pos, index) => (
        <div
          key={pos.id}
          className="cursor-star-trail"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: 1 - index * 0.12,
            transform: `translate(-50%, -50%) scale(${1 - index * 0.1}) rotate(${index * 20}deg)`,
          }}
        />
      ))}
      
      {/* Main cursor star */}
      <div
        className="cursor-star"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.8 : 1}) rotate(${isHovering ? 180 : 0}deg)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
