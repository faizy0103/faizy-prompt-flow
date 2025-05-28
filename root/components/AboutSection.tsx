
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
    <section id="about" className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-ai-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-neon-100 to-neon-200 text-neon-800 px-6 py-2 text-sm font-semibold border-0 shadow-lg">
            About Me
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-neon-600 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight">
            The Mind Behind the Prompts
          </h2>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              {typedText}
              <span className="animate-pulse text-ai-500">|</span>
            </h3>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I've spent the last 3 years obsessing over the perfect prompt. What started as curiosity 
                became a mission: helping creators and businesses unlock AI's true potential.
              </p>
              <p>
                From viral social media hooks to enterprise automation, I've crafted over <span className="font-semibold text-ai-600">50k+ prompts</span> 
                that have generated millions in value for my clients across diverse industries.
              </p>
              <p>
                When I'm not engineering prompts, you'll find me experimenting with cutting-edge AI models, 
                contributing to open-source projects, or sharing insights with the global AI community.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-10">
              {['GPT-4o', 'Claude Sonnet', 'Gemini Pro', 'Custom Models', 'RAG Systems', 'Fine-tuning'].map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="border-2 border-ai-300 text-ai-700 hover:bg-ai-50 hover:border-ai-400 transition-all duration-300 px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className={`relative ${isInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Enhanced floating elements */}
              <div className="absolute -top-12 -left-12 w-20 h-20 bg-gradient-to-br from-ai-200 to-ai-300 rounded-3xl animate-float shadow-xl"></div>
              <div className="absolute -bottom-12 -right-12 w-16 h-16 bg-gradient-to-br from-peach-200 to-peach-300 rounded-2xl animate-float shadow-lg" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-16 w-12 h-12 bg-gradient-to-br from-neon-200 to-neon-300 rounded-xl animate-float shadow-md" style={{ animationDelay: '2s' }}></div>
              
              {/* Main profile card */}
              <div className="bg-gradient-to-br from-white via-ai-50/30 to-white dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 p-10 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-slate-600/50 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-56 h-56 rounded-3xl mx-auto mb-8 overflow-hidden border-4 border-gradient-to-br from-ai-300 to-peach-300 shadow-2xl">
                    <img 
                      src="/lovable-uploads/d699435b-d9a4-473d-a46e-f8035fd43e07.png" 
                      alt="Pathan Faizy" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Pathan Faizy</h4>
                  <p className="text-ai-600 font-semibold mb-8 text-lg">Senior Prompt Engineer</p>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div className="p-4 bg-gradient-to-br from-ai-50 to-ai-100 dark:from-ai-900/20 dark:to-ai-800/20 rounded-2xl shadow-lg">
                      <div className="text-3xl font-bold bg-gradient-to-r from-ai-600 to-ai-700 bg-clip-text text-transparent">50K+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Prompts Created</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-peach-50 to-peach-100 dark:from-peach-900/20 dark:to-peach-800/20 rounded-2xl shadow-lg">
                      <div className="text-3xl font-bold bg-gradient-to-r from-peach-600 to-peach-700 bg-clip-text text-transparent">500+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Happy Clients</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-neon-50 to-neon-100 dark:from-neon-900/20 dark:to-neon-800/20 rounded-2xl shadow-lg">
                      <div className="text-3xl font-bold bg-gradient-to-r from-neon-600 to-neon-700 bg-clip-text text-transparent">3+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Years Experience</div>
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
