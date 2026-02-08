import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-0.5 md:gap-1 ${className}`}>
      {/* Icon Section - Centered content in the SVG viewBox for perfect vertical alignment */}
      <div className="relative w-9 h-7 md:w-15 md:h-12 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="logo-bottom-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#d4d4d8" />
              <stop offset="100%" stopColor="#71717a" />
            </linearGradient>
            <linearGradient id="logo-top-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="80%" stopColor="#a1a1aa" />
              <stop offset="100%" stopColor="#52525b" />
            </linearGradient>
            <filter id="overlap-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.4" />
            </filter>
          </defs>
          
          {/* Bottom Semi-circle Arch - Shifted Y to center visually (original Y: 70 -> 64) */}
          <path 
            d="M 20 64 A 30 30 0 0 1 80 64 L 68 64 A 18 18 0 0 0 32 64 Z" 
            fill="url(#logo-bottom-grad)" 
          />
          
          {/* Top Quarter-circle Fin - Shifted Y to center visually (original Y: 70 -> 64, 22 -> 16, 38 -> 32) */}
          <path 
            d="M 20 64 A 48 48 0 0 1 68 16 L 68 32 A 32 32 0 0 0 36 64 Z" 
            fill="url(#logo-top-grad)"
            filter="url(#overlap-shadow)"
          />
        </svg>
      </div>

      {/* Text Section - Removed 'lowercase' to ensure capital 'E' is respected */}
      <span className="text-lg md:text-2xl font-light tracking-tight text-white/95 font-sans whitespace-nowrap leading-none flex items-center">
        Emerge
      </span>
    </div>
  );
};