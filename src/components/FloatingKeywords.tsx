import { useEffect, useState } from 'react';

const keywords = [
  'function', '<div>', 'const', 'return', 'class', 'async',
  '{}', '[]', '=>', 'let', 'var', 'if', 'else', 'for',
  'while', 'switch', 'case', 'break', 'continue', 'try',
  'catch', 'import', 'export', 'default', 'new', 'this',
  '<>', '/>', '===', '!==', '&&', '||', '...', 'await',
  'map()', 'filter()', 'reduce()', 'typeof', 'null', 'undefined'
];

interface Keyword {
  text: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
  size: number;
  animationType: 'float' | 'drift' | 'fade';
}

export const FloatingKeywords = () => {
  const [floatingKeywords, setFloatingKeywords] = useState<Keyword[]>([]);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const animations: Array<'float' | 'drift' | 'fade'> = ['float', 'drift', 'fade'];
    
    // Create regularly spaced grid
    const cols = 8;
    const rows = 6;
    const generated: Keyword[] = [];
    
    keywords.forEach((text, index) => {
      if (index < cols * rows) {
        const col = index % cols;
        const row = Math.floor(index / cols);
        
        generated.push({
          text,
          x: (col * (100 / cols)) + (Math.random() * 8 - 4), // Small random offset
          y: (row * (100 / rows)) + (Math.random() * 8 - 4), // Small random offset
          duration: 20 + Math.random() * 15, // Slower animations
          delay: Math.random() * 10,
          size: 11 + Math.random() * 4, // Smaller size range
          animationType: animations[Math.floor(Math.random() * animations.length)],
        });
      }
    });
    
    setFloatingKeywords(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {floatingKeywords.map((kw, i) => (
        <div
          key={i}
          className="absolute font-mono font-medium transition-colors duration-300"
          style={{
            left: `${kw.x}%`,
            top: `${kw.y}%`,
            fontSize: `${kw.size}px`,
            color: isDark ? 'white' : 'black',
            opacity: 0.06,
            animation: `${kw.animationType} ${kw.duration}s ease-in-out infinite`,
            animationDelay: `${kw.delay}s`,
          }}
        >
          {kw.text}
        </div>
      ))}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(15px, -10px) rotate(2deg);
          }
          50% {
            transform: translate(-10px, -20px) rotate(-2deg);
          }
          75% {
            transform: translate(-15px, -10px) rotate(1deg);
          }
        }

        @keyframes drift {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(20px, 10px) rotate(3deg);
          }
          66% {
            transform: translate(-15px, 20px) rotate(-3deg);
          }
        }

        @keyframes fade {
          0%, 100% {
            opacity: 0.04;
            transform: scale(0.98);
          }
          50% {
            opacity: 0.08;
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
};
