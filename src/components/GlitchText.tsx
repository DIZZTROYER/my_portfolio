import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchIntensity?: number;
}

export const GlitchText = ({ text, className = '', glitchIntensity = 0.1 }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < glitchIntensity) {
        setIsGlitching(true);
        
        // Create glitch effect
        const glitchText = text
          .split('')
          .map(char => {
            if (Math.random() < 0.3) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
          })
          .join('');
        
        setDisplayText(glitchText);
        
        // Reset after short duration (much faster)
        setTimeout(() => {
          setDisplayText(text);
          setIsGlitching(false);
        }, 50 + Math.random() * 100);
      }
    }, 500 + Math.random() * 1000); // Random interval between 0.5-1.5 seconds (much faster)

    return () => clearInterval(glitchInterval);
  }, [text, glitchIntensity]);

  return (
    <span 
      className={`${className} ${isGlitching ? 'animate-pulse' : ''}`}
      style={{
        textShadow: isGlitching ? '2px 0 #ff0000, -2px 0 #00ff00' : undefined,
        filter: isGlitching ? 'blur(1px)' : undefined,
        transition: 'all 0.05s ease'
      }}
    >
      {displayText}
    </span>
  );
};
