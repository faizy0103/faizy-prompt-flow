
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200/20 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-ai rounded-lg flex items-center justify-center animate-pulse-ai">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">
              Faizy Creative
            </span>
            <Badge variant="secondary" className="ml-2 bg-ai-100 text-ai-800">
              Prompt Architect
            </Badge>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-ai-600 dark:text-gray-300 dark:hover:text-ai-400 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="text-gray-600 hover:text-ai-600 dark:text-gray-300 dark:hover:text-ai-400 transition-colors"
            >
              Case Studies
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-ai-600 dark:text-gray-300 dark:hover:text-ai-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('showcase')}
              className="text-gray-600 hover:text-ai-600 dark:text-gray-300 dark:hover:text-ai-400 transition-colors"
            >
              Showcase
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-ai-500 hover:bg-ai-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
