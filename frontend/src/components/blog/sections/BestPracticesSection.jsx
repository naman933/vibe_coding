import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const practices = [
  {
    title: 'Be clear and specific in prompts',
    description:
      'Describe your desired features, design, and behavior in detail – precise instructions help the AI generate what you actually intend. Mention key functions, styles, or tech (e.g. "a 3-page finance tracker with a login, using a dark theme") to set the right direction.'
  },
  {
    title: 'Iterate step-by-step',
    description:
      "Don't try to get everything in one go. Build in small chunks and use iterative refinement: review the output, then ask for tweaks or new features gradually. This feedback loop helps the AI adjust and improves the final result."
  },
  {
    title: 'Test and verify the output',
    description:
      'Always run and interact with your generated prototype. Check for logic errors or odd UX behaviors, and ask the AI to fix any bugs or polish rough edges.'
  },
  {
    title: 'Manage context and versions',
    description:
      "Keep your conversation with the AI focused. Use consistent terminology and avoid unnecessary repetition so the model stays on track. It's wise to save versions or use version control, so you can rollback if something breaks and you won't lose earlier good work."
  },
  {
    title: 'Combine AI with human oversight',
    description:
      'Let the AI handle the heavy lifting, but review and refine the results. You might catch subtle issues or have creative ideas to add. Think of vibe coding as a partnership where the AI speeds things up, and you ensure the output truly meets your vision.'
  }
];

export const BestPracticesSection = () => {
  return (
    <section id="best-practices" className="mb-16">
      <h2 className="font-spectral font-bold text-3xl sm:text-4xl text-foreground mb-6">Best Practices</h2>

      <p className="text-lg text-foreground leading-relaxed mb-8">
        When vibe coding, keep these best practices in mind to get the most out of your AI-assisted build
        process:
      </p>

      {/* Feature Image */}
      <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NjQzMDkyMzh8MA&ixlib=rb-4.1.0&q=85"
          alt="Team collaborating with technology"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="space-y-6">
        {practices.map((practice, index) => (
          <Card key={index} className="border-border hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{practice.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{practice.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BestPracticesSection;