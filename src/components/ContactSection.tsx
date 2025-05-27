
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
    <section id="contact" className="py-32 px-6 bg-gradient-to-br from-ai-50 via-white to-peach-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-ai-100 to-peach-200 text-ai-800 px-6 py-2 text-sm font-semibold border-0 shadow-lg">
            Let's Connect
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-ai-600 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight">
            Let's build something brilliant with AI
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with custom AI prompts? Let's start the conversation.
          </p>
        </div>

        <div ref={ref} className={`${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-0 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ai-500/5 via-transparent to-peach-500/5"></div>
            <CardHeader className="text-center pb-8 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-ai-400 to-peach-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-2xl">💬</span>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">
                DM Me 'Prompt Ready' or Fill the Form Below
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-14 text-lg border-2 border-ai-200 focus:ring-ai-500 focus:border-ai-500 rounded-xl shadow-lg"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-ai-500 to-ai-600 hover:from-ai-600 hover:to-ai-700 text-white px-10 h-14 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl rounded-xl border-0"
                  >
                    Get Started
                  </Button>
                </div>
              </form>

              <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-gray-200 dark:border-slate-700">
                <Button 
                  variant="outline"
                  className="flex-1 border-2 border-ai-300 text-ai-600 hover:bg-ai-50 h-14 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://linkedin.com/in/faizycreative', '_blank')}
                >
                  LinkedIn
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 border-2 border-neon-300 text-neon-600 hover:bg-neon-50 h-14 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                >
                  WhatsApp
                </Button>
              </div>

              <div className="text-center pt-8">
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  Prefer email? Reach out directly:
                </p>
                <a 
                  href="mailto:hello@pathanfaizy.xyz"
                  className="text-ai-600 hover:text-ai-700 font-semibold text-xl transition-colors bg-gradient-to-r from-ai-50 to-peach-50 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  hello@pathanfaizy.xyz
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <div className="flex items-center justify-center space-x-8 text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-ai-400 to-ai-600 rounded-full"></div>
              <span className="font-medium">Trusted by 500+ creators</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-peach-400 to-peach-600 rounded-full"></div>
              <span className="font-medium">24h response guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
