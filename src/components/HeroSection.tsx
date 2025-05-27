
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
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-ai-200/20 rounded-full blur-3xl animate-blob"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-peach-200/15 rounded-full blur-3xl animate-blob animation-delay-2000"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-neon-200/20 rounded-full blur-3xl animate-blob animation-delay-4000"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* 3D AI Brain */}
        <div className="animate-slide-up mb-8">
          <AIBrain3D />
        </div>

        {/* Morphing Text */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <MorphingText />
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            For creators, founders, and AI-driven teams
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-ai-500 hover:bg-ai-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-ai-500/25"
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

        {/* AI Status Indicator */}
        <div className="mt-16 animate-float">
          <div className="mx-auto w-24 h-24 bg-gradient-ai rounded-full flex items-center justify-center animate-pulse-ai relative">
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            <div className="absolute inset-0 rounded-full bg-ai-500/20 animate-ping"></div>
          </div>
          <p className="text-sm text-gray-500 mt-4 font-mono">AI-Powered Prompt Engineering</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
