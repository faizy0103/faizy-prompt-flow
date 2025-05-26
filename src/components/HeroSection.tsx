
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  scrollY: number;
}

const HeroSection = ({ scrollY }: HeroSectionProps) => {
  const [typedText, setTypedText] = useState('');
  const fullText = "I Craft Custom AI Prompts That Drive Real Results";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [typedText, fullText]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-ai-200/30 rounded-full blur-3xl animate-blob"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-peach-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-neon-200/25 rounded-full blur-3xl animate-blob animation-delay-4000"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-gray-900 dark:text-white">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            For creators, founders, and AI-driven teams
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-ai-500 hover:bg-ai-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Book a Prompt
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            onClick={scrollToServices}
            variant="outline"
            size="lg"
            className="border-ai-300 text-ai-600 hover:bg-ai-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            See Results
          </Button>
        </div>

        {/* AI brain animation placeholder */}
        <div className="mt-16 animate-float">
          <div className="mx-auto w-24 h-24 bg-gradient-ai rounded-full flex items-center justify-center animate-pulse-ai">
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
          <p className="text-sm text-gray-500 mt-4">AI-Powered Prompt Engineering</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
