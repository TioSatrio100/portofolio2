"use client";
import { useEffect, useRef, useState } from "react";

const PacmanLoader = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // dots
      ctx.fillStyle = "white";
      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(40 + i * 30, canvas.height / 2, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // pacman animation (mulut buka tutup)
      const angle = (Math.sin(frame * 0.1) * 0.3 + 0.7) * Math.PI / 4;

      ctx.fillStyle = "yellow";
      ctx.beginPath();
      ctx.moveTo(50, canvas.height / 2);
      ctx.arc(50, canvas.height / 2, 25, angle, Math.PI * 2 - angle);
      ctx.closePath();
      ctx.fill();

      frame++;
    };

    const loop = () => {
      draw();
      requestAnimationFrame(loop);
    };

    loop();

    // counter 0 → 100
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setProgress(count);
      if (count >= 100) {
        clearInterval(interval);
        setDone(true);
      }
    }, 40); // 100 * 40ms = 4 detik

    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <canvas ref={canvasRef} width={400} height={200} />
      <div className="mt-6 text-white font-bold text-2xl">
        Loading {progress}%
      </div>
    </div>
  );
};

export default PacmanLoader;
