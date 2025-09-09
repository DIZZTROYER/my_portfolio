import { useEffect, useRef } from 'react';

interface PaintDrop {
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  createdAt: number;
}

export const MouseFollowPaint = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<PaintDrop[]>([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const lastDropTimeRef = useRef(0);
  const isMouseMovingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${document.documentElement.scrollHeight}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = [
      'rgba(0, 255, 159, 0.3)', // cyber-green
      'rgba(0, 191, 255, 0.3)', // cyber-blue
      'rgba(0, 255, 159, 0.2)',
      'rgba(0, 191, 255, 0.2)',
    ];

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY + window.scrollY };
      isMouseMovingRef.current = true;
      
      // Create paint drops while moving
      const now = Date.now();
      if (now - lastDropTimeRef.current > 50) { // Create drop every 50ms
        dropsRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + window.scrollY + (Math.random() - 0.5) * 20,
          size: Math.random() * 8 + 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 0.6,
          createdAt: now
        });
        lastDropTimeRef.current = now;
      }
    };

    const handleMouseStop = () => {
      setTimeout(() => {
        isMouseMovingRef.current = false;
      }, 100);
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const now = Date.now();
      
      // Filter out old drops and update existing ones
      dropsRef.current = dropsRef.current.filter(drop => {
        const age = now - drop.createdAt;
        const maxAge = 3000; // 3 seconds
        
        if (age > maxAge) return false;
        
        // Fade out over time
        drop.opacity = Math.max(0, 0.6 * (1 - age / maxAge));
        
        // Draw drop
        ctx.save();
        ctx.globalAlpha = drop.opacity;
        ctx.fillStyle = drop.color;
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        return true;
      });
      
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseStop);
    
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseStop);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};