
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
    <section id="services" className="py-24 px-6 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ai-100 text-ai-800">Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Premium Prompt Engineering
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your AI interactions with custom-crafted prompts that deliver exceptional results
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          <Card className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
            isInView ? 'animate-slide-in-left' : 'opacity-0'
          }`}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl">⚡</span>
                <Badge className="bg-peach-100 text-peach-800">Popular</Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                300 Custom Prompts
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                Tailored for creators, founders, brands
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-ai-600">$150</span>
                  <span className="text-gray-500">one-time</span>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ai-500 rounded-full mr-3"></span>
                    300 high-converting prompts
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ai-500 rounded-full mr-3"></span>
                    Custom prompts after depth analysis of your brand
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ai-500 rounded-full mr-3"></span>
                    Delivery in 24 hours
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ai-500 rounded-full mr-3"></span>
                    3 revisions included
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ai-500 rounded-full mr-3"></span>
                    Industry-specific optimization
                  </li>
                </ul>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-ai-500 hover:bg-ai-600 text-white mt-6"
                >
                  Get Started
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
            isInView ? 'animate-slide-in-left' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl">🔥</span>
                <Badge className="bg-neon-100 text-neon-800">Premium</Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                Daily Prompt Subscription
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                50/day + strategy + optimization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-ai-600">$399</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ai-500 rounded-full mr-3"></span>
                    50 fresh prompts daily
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ai-500 rounded-full mr-3"></span>
                    Custom prompts after depth analysis of your brand
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ai-500 rounded-full mr-3"></span>
                    Strategy consultation calls
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ai-500 rounded-full mr-3"></span>
                    Performance optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ai-500 rounded-full mr-3"></span>
                    Priority support
                  </li>
                </ul>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-ai text-white mt-6 hover:shadow-lg transition-all duration-300"
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
