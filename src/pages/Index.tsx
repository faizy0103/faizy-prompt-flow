
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, ArrowUp } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import AboutSection from '@/components/AboutSection';
import PromptShowcase from '@/components/PromptShowcase';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import FloatingElements from '@/components/FloatingElements';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-ai-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-x-hidden">
      <FloatingElements />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection scrollY={scrollY} />
        <ServicesSection />
        <CaseStudiesSection />
        <AboutSection />
        <PromptShowcase />
        <ContactSection />
      </main>

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 bg-ai-500 hover:bg-ai-600 shadow-lg animate-slide-up"
          size="sm"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;
