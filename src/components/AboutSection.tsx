
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useInView';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const { ref, isInView } = useInView();
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Faizy. Your Prompt Engineer for scale.";

  useEffect(() => {
    if (isInView && typedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [isInView, typedText, fullText]);

  return (
    <section id="about" className="py-24 px-6 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-neon-100 text-neon-800">About</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            The Mind Behind the Prompts
          </h2>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              {typedText}
              <span className="animate-pulse">|</span>
            </h3>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
              <p>
                I've spent the last 3 years obsessing over the perfect prompt. What started as curiosity 
                became a mission: helping creators and businesses unlock AI's true potential.
              </p>
              <p>
                From viral social media hooks to enterprise automation, I've crafted over 10,000 prompts 
                that have generated millions in value for my clients.
              </p>
              <p>
                When I'm not engineering prompts, you'll find me experimenting with the latest AI models, 
                contributing to open-source projects, or sharing insights with the community.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-8">
              {['GPT-4', 'Claude', 'Gemini', 'Custom Models', 'RAG Systems', 'Fine-tuning'].map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="border-ai-300 text-ai-700 hover:bg-ai-50 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className={`relative ${isInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Floating AI shapes */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-ai-200 rounded-full animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-peach-200 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-12 w-8 h-8 bg-neon-200 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              
              {/* Main content area */}
              <div className="bg-gradient-to-br from-white to-ai-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-slate-600/50">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-4 border-ai-300 shadow-lg">
                    <img 
                      src="/lovable-uploads/9515c58b-9fd2-45d1-a8b5-adabc1c47e3c.png" 
                      alt="Pathan Faizy" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Pathan Faizy</h4>
                  <p className="text-ai-600 font-semibold mb-4">Senior Prompt Engineer</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">10K+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Prompts Created</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">3+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
