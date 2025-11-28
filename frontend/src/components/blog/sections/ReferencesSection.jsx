import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, BookOpen } from 'lucide-react';

const references = [
  {
    title: 'Vibe Coding, Explained Simply',
    url: 'https://www.datacamp.com/blog/vibe-coding',
    description: 'A comprehensive introduction to vibe coding and its applications'
  },
  {
    title: 'Vibe Coding Examples: Real Projects Built with AI Tools',
    url: 'https://10web.io/blog/vibe-coding-examples/',
    description: 'Real-world examples and case studies of successful vibe coding projects'
  }
];

export const ReferencesSection = () => {
  return (
    <section id="references" className="mb-16">
      <h2 className="font-spectral font-bold text-3xl sm:text-4xl text-foreground mb-6">
        Additional References
      </h2>

      <p className="text-lg text-foreground leading-relaxed mb-8">
        Want to dive deeper into vibecoding? Check out these helpful resources:
      </p>

      <div className="space-y-4">
        {references.map((reference, index) => (
          <Card
            key={index}
            className="border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
          >
            <CardContent className="p-6">
              <a
                href={reference.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {reference.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{reference.description}</p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <span>Read more</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ReferencesSection;