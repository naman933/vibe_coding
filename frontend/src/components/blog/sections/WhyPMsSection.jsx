import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Zap, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    description: 'Quickly prototype ideas on your own before involving engineers'
  },
  {
    icon: Lightbulb,
    title: 'Working Demos',
    description: 'Walk into meetings with a functioning demo in hand'
  },
  {
    icon: Users,
    title: 'Better Collaboration',
    description: 'Show solutions rather than just explaining them'
  },
  {
    icon: TrendingUp,
    title: 'Competitive Edge',
    description: 'Gain an advantage over peers still relying on static docs'
  }
];

export const WhyPMsSection = () => {
  return (
    <section id="why-pms" className="mb-16">
      <h2 className="font-spectral font-bold text-3xl sm:text-4xl text-foreground mb-6">
        Why should PMs care about vibecoding?
      </h2>

      <p className="text-lg text-foreground leading-relaxed mb-8">
        For product managers, vibe coding can be a game-changer. It means you can quickly prototype on your
        own, building on ideas before involving engineers and even walking into meetings with a working demo
        in hand. The way PMs define requirements is evolving; those who can collaborate with AI tools to
        express ideas dynamically will have an edge over peers still relying on static docs and slides.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-lg text-foreground leading-relaxed mt-8">
        Early experimentation is cheaper, faster, and supercharges team collaboration and velocity. Now, PMs'
        job function can expand as rather than explaining the solution, they can actually{' '}
        <strong className="text-primary">show it</strong>.
      </p>
    </section>
  );
};

export default WhyPMsSection;