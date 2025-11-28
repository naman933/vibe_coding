import React from 'react';
import { Card } from '@/components/ui/card';

export const IntroductionSection = () => {
  return (
    <section id="introduction" className="mb-16 animate-fade-in">
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-foreground leading-relaxed">
          Not many years ago, even building a small prototype required sufficient programming knowledge and
          manually writing every line of code. However, with the advent of autocomplete tools such as Github
          Copilot and later AI assistants, this task has become easier.
        </p>
        <p className="text-lg text-foreground leading-relaxed mt-6">
          Now, AI has made it possible to build entire prototypes and working models using nothing but simple
          language. This approach is called <strong className="text-primary font-semibold">vibecoding</strong>.
        </p>
      </div>
    </section>
  );
};

export default IntroductionSection;