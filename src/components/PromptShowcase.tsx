
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useInView';

const PromptShowcase = () => {
  const { ref, isInView } = useInView();

  const promptCategories = [
    {
      title: "Social Media Hooks",
      description: "Viral-ready hooks that stop the scroll",
      sample: "Write 5 attention-grabbing hooks for a fitness coach targeting busy professionals who want to lose weight in 30 days...",
      color: "ai",
      emoji: "🎯",
      metrics: "40% higher engagement"
    },
    {
      title: "Email Marketing",
      description: "Subject lines with 40%+ open rates",
      sample: "Create compelling email subject lines for a SaaS product launch that creates urgency without being spammy...",
      color: "peach",
      emoji: "📧",
      metrics: "3x open rates"
    },
    {
      title: "Content Creation",
      description: "Blog posts that rank and convert",
      sample: "Generate a comprehensive blog post outline about 'AI productivity tools for small businesses' that ranks for SEO...",
      color: "neon",
      emoji: "✍️",
      metrics: "Top 3 rankings"
    },
    {
      title: "Sales Copy",
      description: "Copy that converts visitors to customers",
      sample: "Write persuasive sales copy for a productivity app landing page that highlights pain points and solutions...",
      color: "ai",
      emoji: "💰",
      metrics: "25% conversion boost"
    },
    {
      title: "Customer Support",
      description: "Responses that delight customers",
      sample: "Create empathetic customer support responses for common complaints that turn frustrated customers into advocates...",
      color: "peach",
      emoji: "🎧",
      metrics: "95% satisfaction"
    },
    {
      title: "Ad Campaigns",
      description: "Ad copy with industry-beating CTR",
      sample: "Design Facebook ad copy for a productivity course that speaks to overwhelmed entrepreneurs and drives conversions...",
      color: "neon",
      emoji: "📱",
      metrics: "8.5% CTR average"
    }
  ];

  return (
    <section id="showcase" className="py-32 px-6 bg-gradient-to-br from-white via-peach-50/20 to-neon-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-ai-100 to-ai-200 text-ai-800 px-6 py-2 text-sm font-semibold border-0 shadow-lg">
            Portfolio Showcase
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-ai-600 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight">
            Prompt Categories That Convert
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore the types of prompts I craft for maximum impact across different industries and use cases
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promptCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`group hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] cursor-pointer border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl shadow-xl overflow-hidden ${
                isInView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 ${
                category.color === 'ai' ? 'bg-gradient-to-br from-ai-500/5 via-transparent to-ai-500/5' : ''
              } ${
                category.color === 'peach' ? 'bg-gradient-to-br from-peach-500/5 via-transparent to-peach-500/5' : ''
              } ${
                category.color === 'neon' ? 'bg-gradient-to-br from-neon-500/5 via-transparent to-neon-500/5' : ''
              }`}></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                    category.color === 'ai' ? 'bg-gradient-to-br from-ai-400 to-ai-600' : ''
                  } ${
                    category.color === 'peach' ? 'bg-gradient-to-br from-peach-400 to-peach-600' : ''
                  } ${
                    category.color === 'neon' ? 'bg-gradient-to-br from-neon-400 to-neon-600' : ''
                  }`}>
                    <span className="text-xl">{category.emoji}</span>
                  </div>
                  <Badge 
                    className={`border-0 shadow-md px-3 py-1 ${
                      category.color === 'ai' ? 'bg-gradient-to-r from-ai-100 to-ai-200 text-ai-800' : ''
                    } ${
                      category.color === 'peach' ? 'bg-gradient-to-r from-peach-100 to-peach-200 text-peach-800' : ''
                    } ${
                      category.color === 'neon' ? 'bg-gradient-to-r from-neon-100 to-neon-200 text-neon-800' : ''
                    }`}
                  >
                    {category.title}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.description}
                </CardTitle>
                <div className={`text-sm font-semibold px-3 py-1 rounded-lg inline-block ${
                  category.color === 'ai' ? 'bg-ai-100 text-ai-700' : ''
                } ${
                  category.color === 'peach' ? 'bg-peach-100 text-peach-700' : ''
                } ${
                  category.color === 'neon' ? 'bg-neon-100 text-neon-700' : ''
                }`}>
                  {category.metrics}
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl border-l-4 border-ai-400 shadow-inner">
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed">
                      "{category.sample}"
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Sample prompt</span>
                    <span className="group-hover:text-ai-600 transition-colors font-semibold">View more →</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromptShowcase;
