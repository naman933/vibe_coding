import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2 } from 'lucide-react';

export const WhatIsSection = () => {
  return (
    <section id="what-is" className="mb-16">
      <h2 className="font-spectral font-bold text-3xl sm:text-4xl text-foreground mb-8">
        What is Vibecoding?
      </h2>

      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
              <Code2 className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <p className="text-lg text-foreground leading-relaxed">
                Vibecoding is a way of building software where rather than writing code, you tell the AI what
                to build in natural language. You simply describe what you want to build, how it should look
                and function, and AI can handle the rest.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4 italic">
                You are basically giving directions rather than steering.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default WhatIsSection;