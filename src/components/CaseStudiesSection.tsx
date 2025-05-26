
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useInView';
import { useState, useEffect } from 'react';

const CaseStudiesSection = () => {
  const { ref, isInView } = useInView();
  const [counters, setCounters] = useState({ views: 0, revenue: 0, hours: 0 });

  useEffect(() => {
    if (isInView) {
      const targets = { views: 1200000, revenue: 7500, hours: 12 };
      const duration = 2000;
      const interval = 50;
      const steps = duration / interval;

      const timer = setInterval(() => {
        setCounters(prev => ({
          views: Math.min(prev.views + targets.views / steps, targets.views),
          revenue: Math.min(prev.revenue + targets.revenue / steps, targets.revenue),
          hours: Math.min(prev.hours + targets.hours / steps, targets.hours)
        }));
      }, interval);

      setTimeout(() => clearInterval(timer), duration);
    }
  }, [isInView]);

  return (
    <section id="case-studies" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-peach-100 text-peach-800">Case Studies</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how my custom prompts have transformed businesses and creators
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
            isInView ? 'animate-slide-up' : 'opacity-0'
          }`}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                Viral Hooks for Coach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Created high-converting social media prompts for a fitness coach, resulting in explosive growth across all platforms.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-ai-50 dark:bg-ai-900/20 rounded-lg">
                    <div className="text-3xl font-bold text-ai-600">4</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Reels hit 100K+</div>
                  </div>
                  <div className="text-center p-4 bg-peach-50 dark:bg-peach-900/20 rounded-lg">
                    <div className="text-3xl font-bold text-peach-600">
                      {Math.floor(counters.views / 1000)}K+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Peak views</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
            isInView ? 'animate-slide-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                SaaS Automation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Developed AI-powered customer support prompts that revolutionized response times and customer satisfaction.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-neon-50 dark:bg-neon-900/20 rounded-lg">
                    <div className="text-3xl font-bold text-neon-600">{Math.floor(counters.hours)}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Hours saved/week</div>
                  </div>
                  <div className="text-center p-4 bg-ai-50 dark:bg-ai-900/20 rounded-lg">
                    <div className="text-3xl font-bold text-ai-600">
                      ${Math.floor(counters.revenue)}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">More revenue</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial carousel placeholder */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-ai-50 to-peach-50 dark:from-ai-900/20 dark:to-peach-900/20 border-none">
            <CardContent className="p-8">
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-4">
                "Faizy's prompts didn't just improve our content—they transformed our entire content strategy. The results speak for themselves."
              </blockquote>
              <cite className="text-ai-600 font-semibold">Sarah Chen, Content Creator</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
