"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function QuantumBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let points: { x: number; y: number; originX: number; originY: number; vx: number; vy: number }[] = [];
    let width: number, height: number;
    let animationFrameId: number;
    let scrollY = 0;

    // Mouse tracking
    let mouse = {
      x: -1000,
      y: -1000,
      radius: 200 // Radius of interaction
    };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initPoints();
    };

    const initPoints = () => {
      points = [];
      const spacing = 70; // Distance between grid points
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          points.push({
            x: x,
            y: y,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      const maxScroll = window.innerHeight;
      const scrollProgress = Math.min(scrollY / maxScroll, 1);
      const baseOpacity = Math.max(0.05, 1 - scrollProgress * 1.5);

      ctx.strokeStyle = `rgba(56, 189, 248, ${0.25 * baseOpacity})`;
      ctx.fillStyle = `rgba(56, 189, 248, ${0.6 * baseOpacity})`;

      const spring = 0.05;
      const friction = 0.8;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // MOUSE INTERACTION
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distToMouse = Math.hypot(dx, dy);

        if (distToMouse < mouse.radius) {
          // Calculate force (closer = stronger pull)
          const force = (mouse.radius - distToMouse) / mouse.radius;
          
          // Add velocity towards mouse
          p.vx += dx * force * 0.02;
          p.vy += dy * force * 0.02;

          // Draw connection to cursor
          ctx.beginPath();
          ctx.globalAlpha = force * baseOpacity * 1.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // SPRING PHYSICS: Pull back to original grid position
        const dxOrigin = p.originX - p.x;
        const dyOrigin = p.originY - p.y;
        p.vx += dxOrigin * spring;
        p.vy += dyOrigin * spring;

        // Apply friction to slow down
        p.vx *= friction;
        p.vy *= friction;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Draw the dot
        ctx.globalAlpha = baseOpacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Connect dots to each other
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          
          // Connect if close enough (grid spacing + some buffer)
          if (dist < 100) {
            ctx.beginPath();
            ctx.globalAlpha = (1 - dist / 100) * baseOpacity;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1; // Reset alpha
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    
    const handleScroll = () => {
      scrollY = window.scrollY;
      const scrollPercent = Math.min(window.scrollY / 500, 1);
      
      if (scrollPercent > 0.1) {
        document.body.style.backgroundColor = "#000000";
      } else {
        document.body.style.backgroundColor = "#09090b";
      }
      
      canvas.style.opacity = (0.8 * Math.max(0.2, 1 - scrollPercent)).toString();
    };
    
    window.addEventListener("scroll", handleScroll);

    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hero-canvas"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-80"
    />
  );
}
