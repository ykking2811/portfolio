"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use refs for values consumed inside the rAF loop
  // so React re-renders never clobber the transform.
  const isClickingRef = useRef(false);
  const [isClickingState, setIsClickingState] = useState(false); // only for ring size

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);

      cursor.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;

      // Combine translate + scale in one string so React state changes
      // on the dot element never reset the position.
      const scale = isClickingRef.current ? 0.6 : 1;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px) scale(${scale})`;

      rafId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => {
      isClickingRef.current = true;
      setIsClickingState(true);
    };
    const handleMouseUp = () => {
      isClickingRef.current = false;
      setIsClickingState(false);
    };

    const interactiveSelectors =
      "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]";

    const handleHoverIn = (e: Event) => {
      if ((e.target as Element).closest(interactiveSelectors)) {
        setIsHovering(true);
      }
    };

    const handleHoverOut = (e: Event) => {
      if ((e.target as Element).closest(interactiveSelectors)) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleHoverIn);
    document.addEventListener("mouseout", handleHoverOut);

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleHoverIn);
      document.removeEventListener("mouseout", handleHoverOut);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  return (
    <>
      {/* Outer ring — lags behind */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="cursor-ring"
        style={{
          opacity: isVisible ? 1 : 0,
          width: isHovering ? 48 : isClickingState ? 28 : 40,
          height: isHovering ? 48 : isClickingState ? 28 : 40,
          borderColor: isHovering
            ? "var(--color-primary)"
            : "rgba(56,189,248,0.55)",
          backgroundColor: isHovering
            ? "rgba(56,189,248,0.08)"
            : "transparent",
          borderWidth: isHovering ? 2 : 1.5,
        }}
      />
      {/* Inner dot — transform is fully managed by the rAF loop */}
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        className="cursor-dot"
        style={{
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering
            ? "var(--color-primary)"
            : "rgba(56,189,248,0.9)",
          // NO transform here — rAF owns it
        }}
      />
    </>
  );
}
