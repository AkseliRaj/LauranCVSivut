import React, { useEffect, useRef } from "react";
import { Noise } from "noisejs";

export default function MenuBackgroundAnimation() {
  const canvasRef = useRef(null);
  const animationFrameIdRef = useRef(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    const noise = new Noise(Math.random());
    const canvas = canvasRef.current;
    
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    isMountedRef.current = true;

    const resize = () => {
      if (!isMountedRef.current || !canvas) return;
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };
    
    // Initial resize
    resize();
    
    // Listen to window resize
    window.addEventListener("resize", resize);
    
    // Also observe container size changes
    const resizeObserver = new ResizeObserver(resize);
    const container = canvas.parentElement;
    if (container) {
      resizeObserver.observe(container);
    }

    let nt = 0;
    let params = {
      noiseSpeed: 0.0075,
      noiseScale: 500,
      dotSize: 15,
      gap: 4,
      hueBase: 0,
      hueRange: 0,
      shape: 0,
    };

    function lerp(x1, x2, n) {
      return (1 - n) * x1 + n * x2;
    }

    function clear() {
      if (!isMountedRef.current || !canvas) return;
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function draw() {
      if (!isMountedRef.current || !canvas) return;
      
      const { noiseSpeed, noiseScale, dotSize, gap, hueBase, hueRange, shape } =
        params;

      nt += noiseSpeed;
      const w = canvas.width;
      const h = canvas.height;

      for (let x = 0; x < w; x += dotSize + gap) {
        for (let y = 0; y < h; y += dotSize + gap) {
          const yn = noise.perlin3(y / noiseScale, x / noiseScale, nt) * 20;
          const cn = lerp(hueRange, yn * hueRange, 0.2);

          ctx.beginPath();
          // Match original structure exactly: hsla(hue, saturation, lightness, alpha)
          // Original was: hsla(0, 50%, 50%, yn) for red
          // Changed to: hsla(0, 0%, 100%, yn) for white (0% saturation, 100% lightness)
          ctx.fillStyle = `hsla(0, 0%, 100%, ${yn})`;

          if (shape === 0) {
            ctx.fillRect(x, y, dotSize, dotSize);
          } else if (shape === 1) {
            ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);
            ctx.fill();
          } else if (shape === 2) {
            ctx.moveTo(x + dotSize / 2, y + dotSize);
            ctx.lineTo(x, y);
            ctx.lineTo(x + dotSize, y);
            ctx.fill();
          } else if (shape === 3) {
            if (y % ((gap + dotSize) * 2) === gap + dotSize) {
              ctx.moveTo(x + dotSize / 2, y);
              ctx.lineTo(x + dotSize, y + dotSize);
              ctx.lineTo(x, y + dotSize);
            } else {
              ctx.moveTo(x + dotSize / 2, y + dotSize);
              ctx.lineTo(x, y);
              ctx.lineTo(x + dotSize, y);
            }
            ctx.fill();
          }

          ctx.closePath();
        }
      }
    }

    function render() {
      if (!isMountedRef.current) return;
      
      clear();
      draw();
      animationFrameIdRef.current = requestAnimationFrame(render);
    }

    render();

    return () => {
      isMountedRef.current = false;
      
      // Cancel the animation frame
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
      
      // Remove event listeners
      window.removeEventListener("resize", resize);
      
      // Clean up ResizeObserver
      if (resizeObserver && container) {
        resizeObserver.unobserve(container);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}