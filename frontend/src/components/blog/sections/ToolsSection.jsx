import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const tools = [
  {
    name: 'Emergent',
    description:
      'An "agentic" vibe-coding platform that uses multiple AI agents to build full-stack, production-ready applications from plain English prompts. Great for ambitious projects where you want the AI to handle frontend, backend, and even testing.',
    badge: 'Full-Stack',
    color: 'primary'
  },
  {
    name: 'Bolt',
    description:
      'A rapid prototyping AI app builder. You just describe your idea in natural language and Bolt generates the full-stack code and deploys it. Perfect for quickly spinning up MVPs or hackathon apps.',
    badge: 'Rapid MVP',
    color: 'secondary'
  },
  {
    name: 'Replit Ghostwriter',
    description:
      "Replit's cloud IDE now has an AI agent that can turn descriptions into code and help debug or refine it. It's collaborative and supports many languages, making it ideal if you're a PM who's a bit code-savvy and wants to work in a familiar coding environment.",
    badge: 'Cloud IDE',
    color: 'accent'
  },
  {
    name: 'Lovable',
    description:
      'An AI "software engineer" for web apps that builds full-stack products from a simple prompt. You just tell Lovable what you need (features, design style, etc.), and within minutes you get a working web product – no dev team or design tools required.',
    badge: 'Web Apps',
    color: 'primary'
  }
];

export const ToolsSection = () => {
  return (
    <section id="tools" className="mb-16">
      <h2 className="font-spectral font-bold text-3xl sm:text-4xl text-foreground mb-6">Tools to Try</h2>

      <p className="text-lg text-foreground leading-relaxed mb-8">
        Aspiring PMs don't need to be expert coders to vibe code – several tools make it drag-and-drop simple
        to build via prompts. Here are a few popular ones to explore (each with a unique twist):
      </p>

      {/* Feature Image */}
      <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1707528041466-83a325f01a3c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzY0MzQ5NTY3fDA&ixlib=rb-4.1.0&q=85"
          alt="Developer workspace with modern tools"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="space-y-6">
        {tools.map((tool, index) => (
          <Card
            key={index}
            className="border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="font-spectral font-semibold text-2xl text-foreground">{tool.name}</h3>
                <Badge variant="outline" className="border-primary/30 text-primary">
                  {tool.badge}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">{tool.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;