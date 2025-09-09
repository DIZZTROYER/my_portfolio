import { useEffect, useRef } from 'react';

export const CircleCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      // Smooth following animation
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
      cursorDot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      
      requestAnimationFrame(animateCursor);
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      cursorDot.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      cursorDot.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor circle */}
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 border-2 border-cyber-green rounded-full pointer-events-none z-50 opacity-0 transition-opacity duration-300"
        style={{
          mixBlendMode: 'difference',
          boxShadow: '0 0 20px hsl(var(--cyber-green) / 0.5)'
        }}
      />
      
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-cyber-blue rounded-full pointer-events-none z-50 opacity-0 transition-opacity duration-300"
        style={{
          mixBlendMode: 'screen'
        }}
      />
    </>
  );
};