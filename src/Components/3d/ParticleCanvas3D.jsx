"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "../../lib/ThemeContext";

const ParticleCanvas3D = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle count: optimized for high refresh (60/120fps) on all devices
    const isMobile = width < 768;
    const particleCount = isMobile ? 36 : 64;
    const fov = 400; // 3D Field of view

    // Initialize 3D particles with (x, y, z) coordinates and independent velocities
    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * width * 1.2,
      y: (Math.random() - 0.5) * height * 1.2,
      z: (Math.random() - 0.5) * 500,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      vz: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 1.2,
    }));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      // Normalized mouse offset from screen center (-1 to 1)
      mouseRef.current.targetX = (e.clientX - width / 2) / (width / 2);
      mouseRef.current.targetY = (e.clientY - height / 2) / (height / 2);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const render = () => {
      // Smoothly interpolate mouse tilt for floating camera parallax
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const mouseOffsetX = mouseRef.current.x * 60;
      const mouseOffsetY = mouseRef.current.y * 60;

      // Project each particle to 2D screen with 3D perspective
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update 3D position
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap around bounds in 3D box
        const boundX = width * 0.7;
        const boundY = height * 0.7;
        if (p.x < -boundX) p.x = boundX;
        if (p.x > boundX) p.x = -boundX;
        if (p.y < -boundY) p.y = boundY;
        if (p.y > boundY) p.y = -boundY;
        if (p.z < -250) p.z = 250;
        if (p.z > 250) p.z = -250;

        // 3D Perspective calculation
        const perspective = fov / (fov + p.z);
        const screenX = centerX + (p.x + mouseOffsetX) * perspective;
        const screenY = centerY + (p.y + mouseOffsetY) * perspective;
        const size = Math.max(0.4, p.radius * perspective);

        // Alpha based on depth: closer particles are brighter
        const depthAlpha = Math.max(0.1, Math.min(0.85, (p.z + 250) / 500));

        projected.push({ x: screenX, y: screenY, size, alpha: depthAlpha });
      }

      // Draw faint 3D connection lines between nearby particles
      const maxDistance = isMobile ? 85 : 120;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.12 * Math.min(projected[i].alpha, projected[j].alpha);
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.strokeStyle = isDark
              ? `rgba(249, 115, 22, ${lineAlpha})`
              : `rgba(234, 88, 12, ${lineAlpha * 0.9})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw 3D glowing particle spheres
      for (let i = 0; i < projected.length; i++) {
        const { x, y, size, alpha } = projected[i];

        // Soft outer glow
        ctx.beginPath();
        ctx.arc(x, y, size * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(249, 115, 22, ${alpha * 0.16})`
          : `rgba(234, 88, 12, ${alpha * 0.12})`;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(251, 146, 60, ${alpha * 0.75})`
          : `rgba(234, 88, 12, ${alpha * 0.65})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="global-particle-canvas pointer-events-none opacity-70"
    />
  );
};

export default ParticleCanvas3D;
