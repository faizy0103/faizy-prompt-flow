
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-gray-200/10 shadow-lg shadow-ai-500/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-ai-500 via-ai-600 to-peach-500 rounded-xl flex items-center justify-center shadow-lg shadow-ai-500/25">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Pathan Faizy
              </span>
              <Badge variant="secondary" className="bg-ai-50 text-ai-700 border-ai-200 text-xs px-2 py-0">
                Prompt Architect
              </Badge>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-ai-600 dark:text-gray-300 dark:hover:text-ai-400 transition-all duration-300 font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ai-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="text-gray-600 hover:text-ai-600 dark:text-gray-300 dark:hover:text-ai-400 transition-all duration-300 font-medium relative group"
            >
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ai-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-ai-600 dark:text-gray-300 dark:hover:text-ai-400 transition-all duration-300 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ai-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('showcase')}
              className="text-gray-600 hover:text-ai-600 dark:text-gray-300 dark:hover:text-ai-400 transition-all duration-300 font-medium relative group"
            >
              Showcase
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ai-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-ai-500 to-ai-600 hover:from-ai-600 hover:to-ai-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-ai-500/25 hover:shadow-ai-500/40 font-semibold"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
