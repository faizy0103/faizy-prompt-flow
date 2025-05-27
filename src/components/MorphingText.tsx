
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MorphingText = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  const phrases = [
    "I Craft Prompts",
    "That Scale Brands", 
    "That Automate Growth",
    "That Drive Results"
  ];

  useEffect(() => {
    if (textRef.current) {
      const tl = gsap.timeline({ repeat: -1 });
      
      phrases.forEach((phrase, index) => {
        tl.to(textRef.current, {
          duration: 0.8,
          text: phrase,
          ease: "power2.inOut"
        })
        .to(textRef.current, {
          duration: 2,
          delay: 1
        });
      });
    }
  }, []);

  return (
    <h1 
      ref={textRef}
      className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-ai-400 via-peach-400 to-neon-400 min-h-[120px] flex items-center justify-center"
    >
      I Craft Prompts
    </h1>
  );
};

export default MorphingText;
