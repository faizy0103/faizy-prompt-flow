
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';

const ServicesSection = () => {
  const { ref, isInView } = useInView();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-ai-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-ai-100 to-ai-200 text-ai-800 px-6 py-2 text-sm font-semibold border-0 shadow-lg">
            Premium Services
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-ai-600 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight">
            Elite Prompt Engineering
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your AI interactions with meticulously crafted prompts that deliver exceptional results
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-10">
          <Card className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl shadow-xl ${
            isInView ? 'animate-slide-in-left' : 'opacity-0'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-ai-500/5 via-transparent to-peach-500/5"></div>
            <CardHeader className="pb-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-ai-400 to-ai-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">⚡</span>
                </div>
                <Badge className="bg-gradient-to-r from-peach-100 to-peach-200 text-peach-800 px-4 py-1 border-0 shadow-md">
                  Most Popular
                </Badge>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                300 Custom Prompts
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                Tailored for creators, founders, brands
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-6">
                <div className="flex items-baseline space-x-3">
                  <span className="text-5xl font-bold bg-gradient-to-r from-ai-600 to-ai-700 bg-clip-text text-transparent">$150</span>
                  <span className="text-gray-500 text-lg">one-time</span>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-ai-500 to-ai-600 rounded-full mr-4 shadow-sm"></div>
                    300 high-converting prompts
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-ai-500 to-ai-600 rounded-full mr-4 shadow-sm"></div>
                    Deep brand analysis & customization
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-ai-500 to-ai-600 rounded-full mr-4 shadow-sm"></div>
                    24-hour delivery guarantee
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-ai-500 to-ai-600 rounded-full mr-4 shadow-sm"></div>
                    3 premium revisions included
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-ai-500 to-ai-600 rounded-full mr-4 shadow-sm"></div>
                    Industry-specific optimization
                  </li>
                </ul>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-ai-500 to-ai-600 hover:from-ai-600 hover:to-ai-700 text-white mt-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
                >
                  Get Started Now
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl shadow-xl ${
            isInView ? 'animate-slide-in-left' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-neon-500/5 via-transparent to-ai-500/5"></div>
            <CardHeader className="pb-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-400 to-neon-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🔥</span>
                </div>
                <Badge className="bg-gradient-to-r from-neon-100 to-neon-200 text-neon-800 px-4 py-1 border-0 shadow-md">
                  Premium Elite
                </Badge>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Daily Prompt Subscription
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                50/day + strategy + optimization
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-6">
                <div className="flex items-baseline space-x-3">
                  <span className="text-5xl font-bold bg-gradient-to-r from-neon-600 to-ai-600 bg-clip-text text-transparent">$399</span>
                  <span className="text-gray-500 text-lg">/month</span>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-neon-500 to-ai-600 rounded-full mr-4 shadow-sm"></div>
                    50 fresh prompts daily
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-neon-500 to-ai-600 rounded-full mr-4 shadow-sm"></div>
                    Deep brand analysis & customization
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-neon-500 to-ai-600 rounded-full mr-4 shadow-sm"></div>
                    Weekly strategy consultation calls
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-neon-500 to-ai-600 rounded-full mr-4 shadow-sm"></div>
                    Real-time performance optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-neon-500 to-ai-600 rounded-full mr-4 shadow-sm"></div>
                    VIP priority support
                  </li>
                </ul>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-neon-500 via-ai-500 to-neon-600 hover:from-neon-600 hover:via-ai-600 hover:to-neon-700 text-white mt-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
                >
                  Subscribe Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
