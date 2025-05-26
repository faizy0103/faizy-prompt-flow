
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useInView } from '@/hooks/useInView';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const { ref, isInView } = useInView();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      company: "Digital Marketing Agency",
      rating: 5,
      text: "Faizy's prompts transformed my content strategy. My Instagram engagement increased by 300% in just 2 weeks!",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "SaaS Founder",
      company: "TechFlow Inc",
      rating: 5,
      text: "The automation prompts saved us 15 hours per week. Our customer support response time improved dramatically.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Owner",
      company: "Fashion Hub",
      rating: 5,
      text: "Revenue increased by 40% after implementing Faizy's product description prompts. Absolutely game-changing!",
      avatar: "ER"
    },
    {
      name: "David Wilson",
      role: "Marketing Director",
      company: "GrowthCo",
      rating: 5,
      text: "Best investment we made this year. The email marketing prompts generated $50K in additional revenue.",
      avatar: "DW"
    },
    {
      name: "Lisa Thompson",
      role: "YouTuber",
      company: "Creative Studios",
      rating: 5,
      text: "My videos started going viral after using Faizy's title and description prompts. 2M+ views in one month!",
      avatar: "LT"
    },
    {
      name: "Alex Kumar",
      role: "AI Consultant",
      company: "FutureTech",
      rating: 5,
      text: "Faizy's expertise in prompt engineering is unmatched. Our AI implementations became 10x more effective.",
      avatar: "AK"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-ai-50 to-peach-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-peach-100 text-peach-800">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by 500+ Happy Clients
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how businesses and creators are achieving incredible results with custom AI prompts
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-gray-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 ${
                isInView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-ai-500 to-peach-500 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                    <p className="text-xs text-ai-600">{testimonial.company}</p>
                  </div>
                </div>
                
                <StarRating rating={testimonial.rating} />
                
                <p className="text-gray-700 dark:text-gray-300 mt-4 italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200/50 dark:border-slate-700/50">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-900 dark:text-white font-semibold">4.9/5 Average Rating</span>
            <span className="text-gray-600 dark:text-gray-300">from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
