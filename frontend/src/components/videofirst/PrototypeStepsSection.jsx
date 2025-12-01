import React from 'react';
import { Play, Wand2, FileSearch, PlusCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Play,
    title: 'Starting the project',
    description: 'We opened our AI tool (Lovable) and began by describing the product idea in natural language. The interface invites you to "ask" for what you want, so we typed in a prompt: a modern 3-page site for PM interview prep, with a chosen color scheme and some interactive features. For creating the prompt we used ChatGPT to provide help in writing prompts with specific instructions.'
  },
  {
    number: '02',
    icon: Wand2,
    title: 'AI builds the initial prototype',
    description: 'The AI "thought" for a few moments and then generated the skeleton of our web app. It created multiple pages (in this case, sections like a PM launchpad, an AI+PM guide, and a fun zone) and applied our requested style (notice the maroon and warm yellow accents it chose from our prompt). All of this appeared within seconds, purely from our prompt and no manual coding or design software needed!'
  },
  {
    number: '03',
    icon: FileSearch,
    title: 'Reviewing and refining content',
    description: 'We then explored the AI\'s output. One page, the "PM Launchpad", was populated with PM frameworks and study materials (our prompt hinted we wanted key interview frameworks in there). We reviewed this page to ensure it had the essential info and it generated sections for popular PM methods (like key product frameworks, maybe the CIRCLES method, etc.) presented in an appealing format.'
  },
  {
    number: '04',
    icon: PlusCircle,
    title: 'Adding a new section via prompt',
    description: 'To make our prototype more comprehensive, we asked the AI to add a "Best Practices" segment to the AI x PM Zone page (focused on AI tips for product managers). The result on the right side is a freshly generated "Best Practices for PM Prompting" section with four nicely formatted tips. The AI seamlessly updated the page in real-time. In just a few minutes, our prototype was fleshed out with multiple pages, interactive elements, and a consistent UI – all built by vibing with the AI.'
  }
];

export const PrototypeStepsSection = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Our Prototype: <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Step-by-Step Guide</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          In order to show vibecoding in action, we have developed a quick prototype for PM interviews using
          Lovable. We simply gave prompts to the AI and built a multi-page product. We took the help of ChatGPT
          to refine prompts and make them much more specific in order to build a better platform:
        </p>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover:shadow-neon transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Step Number & Icon */}
                <div className="md:w-48 bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex flex-col items-center justify-center gap-4">
                  <span className="text-5xl font-black text-primary">{step.number}</span>
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-8">
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrototypeStepsSection;