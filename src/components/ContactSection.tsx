
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useInView } from '@/hooks/useInView';

const ContactSection = () => {
  const { ref, isInView } = useInView();
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for your interest!",
        description: "I'll get back to you within 24 hours with a custom proposal.",
      });
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-ai-50 via-white to-peach-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-ai text-white">Let's Connect</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's build something brilliant with AI
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Ready to transform your business with custom AI prompts? Let's start the conversation.
          </p>
        </div>

        <div ref={ref} className={`${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                DM Me 'Prompt Ready' or Fill the Form Below
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 text-lg border-ai-200 focus:ring-ai-500"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-ai-500 hover:bg-ai-600 text-white px-8 h-12 text-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </Button>
                </div>
              </form>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-slate-700">
                <Button 
                  variant="outline"
                  className="flex-1 border-ai-300 text-ai-600 hover:bg-ai-50 h-12 text-lg"
                  onClick={() => window.open('https://linkedin.com/in/faizycreative', '_blank')}
                >
                  LinkedIn
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 border-neon-300 text-neon-600 hover:bg-neon-50 h-12 text-lg"
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                >
                  WhatsApp
                </Button>
              </div>

              <div className="text-center pt-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Prefer email? Reach out directly:
                </p>
                <a 
                  href="mailto:hello@faizycreative.com"
                  className="text-ai-600 hover:text-ai-700 font-semibold text-lg transition-colors"
                >
                  hello@faizycreative.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 dark:text-gray-400">
            Trusted by 500+ creators and businesses worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
