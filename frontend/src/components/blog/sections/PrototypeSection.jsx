import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const steps = [
  {
    number: '01',
    title: 'Starting the project',
    description:
      'We opened our AI tool (Lovable) and began by describing the product idea in natural language. The interface invites you to "ask" for what you want, so we typed in a prompt: a modern 3-page site for PM interview prep, with a chosen color scheme and some interactive features. For creating the prompt we used ChatGPT to provide help in writing prompts with specific instructions.'
  },
  {
    number: '02',
    title: 'AI builds the initial prototype',
    description:
      'The AI "thought" for a few moments and then generated the skeleton of our web app. It created multiple pages (in this case, sections like a PM launchpad, an AI+PM guide, and a fun zone) and applied our requested style (notice the maroon and warm yellow accents it chose from our prompt). In the screenshot, you can see the preview of one page being assembled, complete with placeholder graphics and layout. All of this appeared within seconds, purely from our prompt and no manual coding or design software needed!'
  },
  {
    number: '03',
    title: 'Reviewing and refining content',
    description:
      'We then explored the AI\'s output. One page, the "PM Launchpad", was populated with PM frameworks and study materials (our prompt hinted we wanted key interview frameworks in there). We reviewed this page to ensure it had the essential info and it generated sections for popular PM methods (like key product frameworks, maybe the CIRCLES method, etc.) presented in an appealing format. Since everything looked good for the launchpad section, we decided to push the AI further and add more depth to another section of the site.'
  },
  {
    number: '04',
    title: 'Adding a new section via prompt',
    description:
      'To make our prototype more comprehensive, we asked the AI to add a "Best Practices" segment to the AI x PM Zone page (focused on AI tips for product managers). The left side of the screenshot shows our follow-up prompt and the AI\'s confirmation ("Done! Redesigned the AI x PM Zone…"). The result on the right side is a freshly generated "Best Practices for PM Prompting" section with four nicely formatted tips (like "Be Specific with Context", "Iterate and Refine", etc., each with a brief explanation). The AI seamlessly updated the page in real-time. In just a few minutes, our prototype was fleshed out with multiple pages, interactive elements, and a consistent UI – all built by vibing with the AI.'
  }
];

export const PrototypeSection = () => {
  return (
    <section id="prototype" className="mb-16">
      <h2 className="font-spectral font-bold text-3xl sm:text-4xl text-foreground mb-6">
        Our Prototype: Steps with Screenshots
      </h2>

      <p className="text-lg text-foreground leading-relaxed mb-8">
        In order to show vibecoding in action, we have developed a quick prototype for PM interviews using
        Lovable. We simply gave prompts to the AI and built a multi-page product. We took the help of ChatGPT
        to refine prompts and make them much more specific in order to build a better platform:
      </p>

      {/* Feature Image - Development workspace */}
      <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1763568258445-70fecf4e78af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBlbnZpcm9ubWVudHxlbnwwfHx8fDE3NjQzNDk1NzN8MA&ixlib=rb-4.1.0&q=85"
          alt="Coding environment with AI assistance"
          className="w-full h-80 object-cover"
        />
      </div>

      <div className="space-y-8">
        {steps.map((step, index) => (
          <Card
            key={index}
            className="border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {/* Step Number */}
                <div className="md:w-32 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8">
                  <span className="font-spectral font-bold text-4xl text-primary">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8">
                  <h3 className="font-spectral font-semibold text-xl text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PrototypeSection;