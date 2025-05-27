
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
    <section id="case-studies" className="py-32 px-6 bg-gradient-to-br from-white via-ai-50/20 to-peach-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-peach-100 to-peach-200 text-peach-800 px-6 py-2 text-sm font-semibold border-0 shadow-lg">
            Success Stories
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-peach-600 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover how my custom prompts have transformed businesses and creators
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-10 mb-20">
          <Card className={`group hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl shadow-xl overflow-hidden ${
            isInView ? 'animate-slide-up' : 'opacity-0'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-ai-500/5 via-transparent to-peach-500/5"></div>
            <CardHeader className="relative z-10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-ai-400 to-ai-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-xl">🎯</span>
                </div>
                <Badge className="bg-gradient-to-r from-ai-100 to-ai-200 text-ai-800 border-0 shadow-md px-3 py-1">
                  Social Media Success
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                Viral Hooks for Fitness Coach
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Created high-converting social media prompts for a fitness coach, resulting in explosive growth across all platforms and unprecedented engagement.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-ai-50 to-ai-100 dark:from-ai-900/20 dark:to-ai-800/20 rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold bg-gradient-to-r from-ai-600 to-ai-700 bg-clip-text text-transparent">4</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Reels hit 100K+</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-peach-50 to-peach-100 dark:from-peach-900/20 dark:to-peach-800/20 rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold bg-gradient-to-r from-peach-600 to-peach-700 bg-clip-text text-transparent">
                      {Math.floor(counters.views / 1000)}K+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Peak views</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={`group hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl shadow-xl overflow-hidden ${
            isInView ? 'animate-slide-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-neon-500/5 via-transparent to-ai-500/5"></div>
            <CardHeader className="relative z-10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-neon-400 to-neon-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-xl">🚀</span>
                </div>
                <Badge className="bg-gradient-to-r from-neon-100 to-neon-200 text-neon-800 border-0 shadow-md px-3 py-1">
                  Enterprise Solution
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                SaaS Automation Revolution
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Developed AI-powered customer support prompts that revolutionized response times and customer satisfaction for a growing SaaS platform.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-neon-50 to-neon-100 dark:from-neon-900/20 dark:to-neon-800/20 rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold bg-gradient-to-r from-neon-600 to-neon-700 bg-clip-text text-transparent">{Math.floor(counters.hours)}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Hours saved/week</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-ai-50 to-ai-100 dark:from-ai-900/20 dark:to-ai-800/20 rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold bg-gradient-to-r from-ai-600 to-ai-700 bg-clip-text text-transparent">
                      ${Math.floor(counters.revenue)}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">More revenue</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced testimonial */}
        <div className="text-center">
          <Card className="max-w-5xl mx-auto bg-gradient-to-r from-white/90 via-ai-50/30 to-peach-50/30 dark:from-slate-800/90 dark:via-ai-900/20 dark:to-peach-900/20 border-0 shadow-2xl backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ai-500/5 via-transparent to-peach-500/5"></div>
            <CardContent className="p-12 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-ai-400 to-peach-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <span className="text-2xl">💬</span>
              </div>
              <blockquote className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 italic mb-8 leading-relaxed font-light">
                "Faizy's prompts didn't just improve our content—they transformed our entire content strategy. The results speak for themselves. Our engagement skyrocketed by 400%!"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-ai-400 to-ai-600 rounded-xl"></div>
                <div>
                  <cite className="text-ai-600 font-semibold text-lg">Sarah Chen</cite>
                  <p className="text-gray-500 text-sm">Content Creator & Influencer</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
