"use client";

import { useEffect, useState } from "react";

interface TextScramblerProps {
  text: string;
  className?: string;
  delay?: number;
}

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function TextScrambler({ text, className = "", delay = 100 }: TextScramblerProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let animationFrameId: number;
    let timeoutId: NodeJS.Timeout;
    
    // Start after optional initial delay
    timeoutId = setTimeout(() => {
      let step = 0;
      const totalSteps = text.length * 4; // Number of scramble frames per character

      const animate = () => {
        step++;
        const revealedCount = Math.floor(step / 4);

        if (revealedCount >= text.length) {
          setDisplayText(text);
          return;
        }

        const currentText = text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < revealedCount) {
              return text[index];
            }
            // Scramble active trailing character
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");

        setDisplayText(currentText);
        animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [text, delay]);

  return (
    <span className={`inline ${className}`}>
      {displayText || text}
    </span>
  );
}
