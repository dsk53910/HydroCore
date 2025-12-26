import React, { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  size: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  opacity: number;
}

export const BubbleBackground: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate random bubbles on mount
    const bubbleCount = 40;
    const newBubbles: Bubble[] = Array.from({ length: bubbleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 20 + 5, // 5px to 25px
      left: Math.random() * 100, // 0% to 100%
      animationDuration: Math.random() * 10 + 10, // 10s to 20s
      animationDelay: Math.random() * 10, // 0s to 10s
      opacity: Math.random() * 0.15 + 0.05, // 0.05 to 0.2 opacity (reduced from 0.1-0.4)
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <style>
        {`
          @keyframes rise {
            0% {
              bottom: -10vh;
              transform: translateX(0);
            }
            25% {
              transform: translateX(10px);
            }
            50% {
              transform: translateX(-10px);
            }
            75% {
              transform: translateX(5px);
            }
            100% {
              bottom: 110vh;
              transform: translateX(-5px);
            }
          }
          .bubble {
            position: absolute;
            background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.05));
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
            animation-name: rise;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
      </style>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            opacity: bubble.opacity,
            animationDuration: `${bubble.animationDuration}s`,
            animationDelay: `-${bubble.animationDelay}s`, // Negative delay to start mid-animation
          }}
        />
      ))}
      
      {/* Light rays effect - darkened */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] bg-gradient-to-b from-[#1e3a8a]/10 to-transparent pointer-events-none mix-blend-overlay" />
    </div>
  );
};