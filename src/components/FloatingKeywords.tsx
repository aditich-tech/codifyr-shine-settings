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
  opacity: number;
  animationType: 'float' | 'fall' | 'drift' | 'fade';
}

export const FloatingKeywords = () => {
  const [floatingKeywords, setFloatingKeywords] = useState<Keyword[]>([]);

  useEffect(() => {
    const animations: Array<'float' | 'fall' | 'drift' | 'fade'> = ['float', 'fall', 'drift', 'fade'];
    const generated = keywords.map((text) => ({
      text,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 15 + Math.random() * 25,
      delay: Math.random() * 8,
      size: 10 + Math.random() * 10,
      opacity: 0.06 + Math.random() * 0.04, // 6-10% opacity
      animationType: animations[Math.floor(Math.random() * animations.length)],
    }));
    setFloatingKeywords(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {floatingKeywords.map((kw, i) => (
        <div
          key={i}
          className="absolute text-white font-mono font-medium"
          style={{
            left: `${kw.x}%`,
            top: `${kw.y}%`,
            fontSize: `${kw.size}px`,
            opacity: kw.opacity,
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
            transform: translate(30px, -25px) rotate(5deg);
          }
          50% {
            transform: translate(-15px, -50px) rotate(-5deg);
          }
          75% {
            transform: translate(-35px, -25px) rotate(3deg);
          }
        }

        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes drift {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(50px, 30px) rotate(10deg);
          }
          66% {
            transform: translate(-40px, 60px) rotate(-10deg);
          }
        }

        @keyframes fade {
          0%, 100% {
            opacity: 0.03;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.12;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};
