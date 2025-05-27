
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AIBrain3D from './AIBrain3D';
import MorphingText from './MorphingText';
import ParticleField from './ParticleField';

interface HeroSectionProps {
  scrollY: number;
}

const HeroSection = ({ scrollY }: HeroSectionProps) => {
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
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-20 overflow-hidden">
      {/* 3D Particle Background */}
      <ParticleField />
      
      {/* Premium gradient meshes */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-ai-200/15 via-peach-200/10 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-neon-200/10 via-ai-200/15 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-tr from-peach-200/15 via-neon-200/10 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* 3D AI Brain */}
        <div className="animate-slide-up mb-12">
          <AIBrain3D />
        </div>

        {/* Morphing Text */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <MorphingText />
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            For creators, founders, and AI-driven teams seeking premium prompt engineering solutions
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up mb-16" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-ai-500 via-ai-600 to-peach-500 hover:from-ai-600 hover:via-ai-700 hover:to-peach-600 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-500 hover:scale-105 shadow-xl shadow-ai-500/30 hover:shadow-ai-500/50 border border-ai-400/20"
          >
            Book a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            onClick={scrollToServices}
            variant="outline"
            size="lg"
            className="border-2 border-ai-300/50 text-ai-600 hover:bg-ai-50 dark:hover:bg-ai-950/50 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-500 hover:scale-105 backdrop-blur-sm bg-white/80 dark:bg-slate-900/80"
          >
            View Portfolio
          </Button>
        </div>

        {/* Premium AI Status Indicator - removing circular elements */}
        <div className="animate-float">
          <div className="mx-auto w-32 h-8 bg-gradient-to-r from-ai-500/20 via-peach-500/20 to-neon-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-ai-300/30 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-ai-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">AI-Powered Solutions</span>
              <div className="w-2 h-2 bg-neon-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
