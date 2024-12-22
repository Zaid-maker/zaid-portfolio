"use client"

import React, { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  color: string;
  alpha: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  const createParticles = useCallback((width: number, height: number) => {
    const particleCount = Math.floor(width / 5);
    return Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
      color: `hsla(0, 0%, 100%, ${Math.random() * 0.7 + 0.3})`,
      alpha: Math.random() * 0.7 + 0.3
    }));
  }, []);

  const animateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current = particlesRef.current.map(particle => {
      // Move particle
      const newX = particle.x + particle.dx;
      const newY = particle.y + particle.dy;

      // Bounce off edges with wrap-around
      const x = newX < 0 ? canvas.width : newX > canvas.width ? 0 : newX;
      const y = newY < 0 ? canvas.height : newY > canvas.height ? 0 : newY;

      // Draw particle
      ctx.beginPath();
      ctx.arc(x, y, particle.radius, 0, Math.PI * 2);
      
      // Create a subtle glow effect
      const gradient = ctx.createRadialGradient(
        x, y, 0, 
        x, y, particle.radius * 3
      );
      gradient.addColorStop(0, `hsla(0, 0%, 100%, ${particle.alpha})`);
      gradient.addColorStop(1, `hsla(0, 0%, 100%, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.closePath();

      return {
        ...particle,
        x,
        y,
        // Slight random movement
        dx: particle.dx + (Math.random() - 0.5) * 0.05,
        dy: particle.dy + (Math.random() - 0.5) * 0.05
      };
    });

    animationRef.current = requestAnimationFrame(animateParticles);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Resize canvas and create particles
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recreate particles when canvas resizes
      particlesRef.current = createParticles(canvas.width, canvas.height);
    };

    // Initial setup
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Start animation
    animateParticles();

    // Interactive mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      particlesRef.current = particlesRef.current.map(particle => {
        // Attract particles to mouse
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          return {
            ...particle,
            dx: particle.dx + dx * 0.0001,
            dy: particle.dy + dy * 0.0001
          };
        }

        return particle;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createParticles, animateParticles]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-[-1] opacity-30 dark:opacity-20 pointer-events-none" 
    />
  );
}
