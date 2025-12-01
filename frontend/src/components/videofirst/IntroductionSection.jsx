import React from 'react';
import { Clock, Sparkles } from 'lucide-react';

export const IntroductionSection = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Vibe Coding</span>
          </h2>
        </div>
        
        {/* Introduction Content */}
        <div className="glass-card rounded-2xl p-8 space-y-6">
          <div className="flex items-start gap-3">
            <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-lg text-foreground/90 leading-relaxed">
              Not many years ago, even building a small prototype required sufficient programming knowledge and
              manually writing every line of code. However, with the advent of autocomplete tools such as Github
              Copilot and later AI assistants, this task has become easier.
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <p className="text-lg text-foreground/90 leading-relaxed">
              Now, AI has made it possible to build entire prototypes and working models using nothing but simple
              language. This approach is called <strong className="text-primary font-semibold">vibecoding</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;