import { useEffect, useState } from 'react';

const keywords = [
  'React', 'TypeScript', 'JavaScript', 'Python', 'CSS', 'HTML',
  'Node.js', 'API', 'Git', 'SQL', 'Docker', 'AWS',
  'Redux', 'Vue', 'Angular', 'Next.js', 'Tailwind', 'GraphQL'
];

interface Keyword {
  text: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
  size: number;
}

export const FloatingKeywords = () => {
  const [floatingKeywords, setFloatingKeywords] = useState<Keyword[]>([]);

  useEffect(() => {
    const generated = keywords.map((text, i) => ({
      text,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 20 + Math.random() * 20,
      delay: Math.random() * 5,
      size: 12 + Math.random() * 8,
    }));
    setFloatingKeywords(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10">
      {floatingKeywords.map((kw, i) => (
        <div
          key={i}
          className="absolute text-primary glow-text font-mono font-semibold animate-float"
          style={{
            left: `${kw.x}%`,
            top: `${kw.y}%`,
            fontSize: `${kw.size}px`,
            animation: `float ${kw.duration}s ease-in-out infinite`,
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
            transform: translate(20px, -20px) rotate(5deg);
          }
          50% {
            transform: translate(-10px, -40px) rotate(-5deg);
          }
          75% {
            transform: translate(-30px, -20px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
};
