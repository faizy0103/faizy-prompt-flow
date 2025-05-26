
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
      emoji: "🎯"
    },
    {
      title: "Email Marketing",
      description: "Subject lines with 40%+ open rates",
      sample: "Create compelling email subject lines for a SaaS product launch that creates urgency without being spammy...",
      color: "peach",
      emoji: "📧"
    },
    {
      title: "Content Creation",
      description: "Blog posts that rank and convert",
      sample: "Generate a comprehensive blog post outline about 'AI productivity tools for small businesses' that ranks for SEO...",
      color: "neon",
      emoji: "✍️"
    },
    {
      title: "Sales Copy",
      description: "Copy that converts visitors to customers",
      sample: "Write persuasive sales copy for a productivity app landing page that highlights pain points and solutions...",
      color: "ai",
      emoji: "💰"
    },
    {
      title: "Customer Support",
      description: "Responses that delight customers",
      sample: "Create empathetic customer support responses for common complaints that turn frustrated customers into advocates...",
      color: "peach",
      emoji: "🎧"
    },
    {
      title: "Ad Campaigns",
      description: "Ad copy with industry-beating CTR",
      sample: "Design Facebook ad copy for a productivity course that speaks to overwhelmed entrepreneurs and drives conversions...",
      color: "neon",
      emoji: "📱"
    }
  ];

  return (
    <section id="showcase" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ai-100 text-ai-800">Showcase</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Prompt Categories That Convert
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore the types of prompts I craft for maximum impact across different use cases
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promptCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                isInView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">{category.emoji}</span>
                  <Badge 
                    className={`
                      ${category.color === 'ai' ? 'bg-ai-100 text-ai-800' : ''}
                      ${category.color === 'peach' ? 'bg-peach-100 text-peach-800' : ''}
                      ${category.color === 'neon' ? 'bg-neon-100 text-neon-800' : ''}
                    `}
                  >
                    {category.title}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.description}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-ai-400">
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                      "{category.sample}"
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Sample prompt</span>
                    <span className="group-hover:text-ai-600 transition-colors">View more →</span>
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
