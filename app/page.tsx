"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let raf = 0;
    let targetX = -9999;
    let targetY = -9999;
    let currentX = -9999;
    let currentY = -9999;

    const tick = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      stage.style.setProperty("--mx", `${currentX}px`);
      stage.style.setProperty("--my", `${currentY}px`);
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      if (currentX < -1000) {
        currentX = targetX;
        currentY = targetY;
      }
    };

    const onLeave = () => {
      targetX = -9999;
      targetY = -9999;
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <main ref={stageRef} className={styles.stage}>
      <div className={styles.bg} />
      <div className={styles.bgBlack} />
      <header className={styles.header}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/odyssey-logo.svg" alt="Odyssey" className={styles.logo} />
      </header>
    </main>
  );
}
