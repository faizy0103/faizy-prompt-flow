
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
    <section id="contact" className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-ai-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-ai-100 to-ai-200 text-ai-800 px-6 py-2 text-sm font-semibold border-0 shadow-lg">
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
          <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-gray-200/50 dark:border-slate-700/50 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-ai-500/5 via-transparent to-ai-600/5"></div>
            <CardHeader className="text-center pb-8 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-ai-500 to-ai-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <span className="text-3xl">💬</span>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                DM Me 'Prompt Ready' or Fill the Form Below
              </CardTitle>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Get a personalized AI prompt strategy tailored to your business needs
              </p>
            </CardHeader>
            <CardContent className="space-y-8 relative z-10 px-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your professional email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-16 text-lg border-2 border-gray-200 dark:border-slate-600 focus:ring-ai-500 focus:border-ai-500 rounded-2xl shadow-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-ai-500 to-ai-600 hover:from-ai-600 hover:to-ai-700 text-white px-10 h-16 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl rounded-2xl border-0"
                  >
                    Get Started →
                  </Button>
                </div>
              </form>

              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200/70 dark:border-slate-700/70">
                <Button 
                  variant="outline"
                  className="flex-1 border-2 border-ai-300 text-ai-600 hover:bg-ai-50 dark:hover:bg-ai-900/20 h-16 text-lg font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm"
                  onClick={() => window.open('https://linkedin.com/in/faizycreative', '_blank')}
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 border-2 border-neon-300 text-neon-600 hover:bg-neon-50 dark:hover:bg-neon-900/20 h-16 text-lg font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm"
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </Button>
              </div>

              <div className="text-center pt-8">
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg font-medium">
                  Prefer email? Reach out directly:
                </p>
                <a 
                  href="mailto:hello@pathanfaizy.xyz"
                  className="inline-flex items-center justify-center text-ai-600 hover:text-ai-700 dark:text-ai-400 dark:hover:text-ai-300 font-semibold text-xl transition-all duration-300 bg-gradient-to-r from-ai-50 to-ai-100 dark:from-ai-900/20 dark:to-ai-800/20 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 border border-ai-200/50 dark:border-ai-700/50"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  hello@pathanfaizy.xyz
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-ai-400 to-ai-600 rounded-full animate-pulse"></div>
              <span className="font-medium text-lg">Trusted by 500+ creators</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-neon-400 to-neon-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="font-medium text-lg">24h response guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
