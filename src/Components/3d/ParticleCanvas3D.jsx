"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "../../lib/ThemeContext";

const ParticleCanvas3D = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    screenX: -9999,
    screenY: -9999,
  });
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let isRunning = true;
    let time = 0;

    // Handle high-DPI displays (Retina, 4K) for ultra-crisp rendering
    let dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    const isMobile = width < 768;
    // Particle count: tuned for rich interconnected wire network at 60/120 FPS
    const particleCount = isMobile ? 45 : 82;
    const fov = 420; // 3D perspective field-of-view

    // Warm, luminous palette tailored to the portfolio accent
    const PALETTE = isDark
      ? [
          { r: 249, g: 115, b: 22 },  // Orange 500 (Brand primary)
          { r: 251, g: 146, b: 60 },  // Orange 400 (Vibrant Ember)
          { r: 251, g: 191, b: 36 },  // Amber 400 (Golden Spark)
          { r: 253, g: 186, b: 116 }, // Orange 300 (Warm Highlight)
          { r: 245, g: 158, b: 11 },  // Amber 500 (Deep Honey)
        ]
      : [
          { r: 234, g: 88, b: 12 },   // Orange 600 (Rich Sunlight)
          { r: 217, g: 119, b: 6 },   // Amber 600 (Warm Goldenrod)
          { r: 249, g: 115, b: 22 },  // Orange 500
          { r: 194, g: 65, b: 12 },   // Deep Rust / Orange 700
          { r: 245, g: 158, b: 11 },  // Amber 500
        ];

    // Initialize 3D particles with depth, organic phase, and magnetic physics
    const particles = Array.from({ length: particleCount }, () => {
      const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      return {
        x: (Math.random() - 0.5) * width * 1.3,
        y: (Math.random() - 0.5) * height * 1.3,
        z: (Math.random() - 0.5) * 550,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        vz: (Math.random() - 0.5) * 0.42,
        baseRadius: Math.random() * 1.6 + 1.2,
        color,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulsePhase: Math.random() * Math.PI * 2,
        wavePhase: Math.random() * Math.PI * 2,
        // Interactive magnetic offset
        offsetX: 0,
        offsetY: 0,
      };
    });

    const handleResize = () => {
      resizeCanvas();
    };

    const handleMouseMove = (e) => {
      mouseRef.current.screenX = e.clientX;
      mouseRef.current.screenY = e.clientY;
      mouseRef.current.targetX = (e.clientX - width / 2) / (width / 2);
      mouseRef.current.targetY = (e.clientY - height / 2) / (height / 2);
    };

    const handleMouseLeave = () => {
      mouseRef.current.screenX = -9999;
      mouseRef.current.screenY = -9999;
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    const handleVisibilityChange = () => {
      isRunning = !document.hidden;
      if (isRunning) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const render = () => {
      if (!isRunning) return;
      time += 0.02;

      // Smooth camera tilt tracking
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const cameraParallaxX = mouseRef.current.x * 55;
      const cameraParallaxY = mouseRef.current.y * 55;

      const mouseX = mouseRef.current.screenX;
      const mouseY = mouseRef.current.screenY;
      const cursorRadius = isMobile ? 90 : 130;
      const cursorRadiusSq = cursorRadius * cursorRadius;

      const projected = [];

      // 1. Update 3D physics and project to 2D
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Natural organic drift + sinusoidal floating wave
        p.x += p.vx + Math.sin(time + p.wavePhase) * 0.16;
        p.y += p.vy + Math.cos(time + p.wavePhase * 0.7) * 0.16;
        p.z += p.vz;

        // Wrap particles cleanly within the 3D volume
        const boundX = width * 0.75;
        const boundY = height * 0.75;
        if (p.x < -boundX) p.x = boundX;
        if (p.x > boundX) p.x = -boundX;
        if (p.y < -boundY) p.y = boundY;
        if (p.y > boundY) p.y = -boundY;
        if (p.z < -260) p.z = 260;
        if (p.z > 260) p.z = -260;

        // 3D Perspective calculation
        const perspective = fov / (fov + p.z);
        let screenX = centerX + (p.x + cameraParallaxX) * perspective;
        let screenY = centerY + (p.y + cameraParallaxY) * perspective;

        // Interactive subtle magnetic cursor deflection
        const dx = screenX - mouseX;
        const dy = screenY - mouseY;
        const distSq = dx * dx + dy * dy;

        if (distSq < cursorRadiusSq && distSq > 0) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / cursorRadius) * 22;
          p.offsetX += (dx / dist) * force * 0.12;
          p.offsetY += (dy / dist) * force * 0.12;
        }

        // Damping return to neutral position
        p.offsetX *= 0.92;
        p.offsetY *= 0.92;

        screenX += p.offsetX;
        screenY += p.offsetY;

        // Luminous pulse / breathing
        const pulse = 1 + Math.sin(time * 1.5 + p.pulsePhase) * 0.18;
        const size = Math.max(0.5, p.baseRadius * perspective * pulse);

        // Alpha based on depth: closer particles shine with higher intensity
        const normalizedZ = (p.z + 260) / 520; // 0 to 1
        const depthAlpha = isDark
          ? Math.max(0.12, Math.min(0.92, normalizedZ * 0.85 + 0.12))
          : Math.max(0.14, Math.min(0.85, normalizedZ * 0.75 + 0.14));

        projected.push({
          x: screenX,
          y: screenY,
          z: p.z,
          size,
          alpha: depthAlpha,
          color: p.color,
          isClose: p.z > 40,
        });
      }

      // 2. Draw crisp thin connected wires between nearby particles (constellation wire mesh)
      const maxDistance = isMobile ? 110 : 165;
      const maxDistSq = maxDistance * maxDistance;

      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];

          // Skip if particles are too far separated in 3D depth
          if (Math.abs(p1.z - p2.z) > 240) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const proximity = 1 - dist / maxDistance;
            // Clear, crisp thin wire visibility
            const lineAlpha = isDark
              ? proximity * 0.45 * Math.min(1, (p1.alpha + p2.alpha) * 0.65)
              : proximity * 0.35 * Math.min(1, (p1.alpha + p2.alpha) * 0.65);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            // Subtle color gradient connecting the two nodes
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            const c1 = p1.color;
            const c2 = p2.color;
            gradient.addColorStop(0, `rgba(${c1.r}, ${c1.g}, ${c1.b}, ${lineAlpha})`);
            gradient.addColorStop(1, `rgba(${c2.r}, ${c2.g}, ${c2.b}, ${lineAlpha * 0.85})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.75; // Crisp thin wire feel
            ctx.stroke();
          }
        }
      }

      // 3. Connect user cursor directly to nearby particles with thin laser wires
      if (mouseX > -500 && mouseY > -500) {
        const mouseWireDist = isMobile ? 110 : 160;
        const mouseWireDistSq = mouseWireDist * mouseWireDist;

        for (let i = 0; i < projected.length; i++) {
          const p = projected[i];
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouseWireDistSq) {
            const dist = Math.sqrt(distSq);
            const proximity = 1 - dist / mouseWireDist;
            const wireAlpha = isDark ? proximity * 0.52 : proximity * 0.38;

            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = isDark
              ? `rgba(249, 115, 22, ${wireAlpha})`
              : `rgba(234, 88, 12, ${wireAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 3. Draw luminous 3D glowing particles with radial bokeh halos
      for (let i = 0; i < projected.length; i++) {
        const { x, y, size, alpha, color, isClose } = projected[i];

        if (isClose) {
          // Multi-layer radiant bokeh glow for prominent foreground embers
          const glowRadius = size * 3.4;
          const radialGlow = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
          radialGlow.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.95})`);
          radialGlow.addColorStop(0.35, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.75})`);
          radialGlow.addColorStop(0.7, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.22})`);
          radialGlow.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

          ctx.beginPath();
          ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = radialGlow;
          ctx.fill();
        } else {
          // Soft ambient outer glow for mid/distant stars
          ctx.beginPath();
          ctx.arc(x, y, size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.22})`
            : `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.16})`;
          ctx.fill();

          // Luminous core
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.88})`
            : `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.78})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="global-particle-canvas pointer-events-none opacity-85"
    />
  );
};

export default ParticleCanvas3D;
