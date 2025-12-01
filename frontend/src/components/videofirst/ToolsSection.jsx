import React from 'react';
import { Rocket, Zap, Cloud, Sparkles } from 'lucide-react';

const tools = [
  {
    name: 'Emergent',
    icon: Sparkles,
    description: 'An "agentic" vibe-coding platform that uses multiple AI agents to build full-stack, production-ready applications from plain English prompts. Great for ambitious projects where you want the AI to handle frontend, backend, and even testing.',
    badge: 'Full-Stack',
    color: 'primary'
  },
  {
    name: 'Bolt',
    icon: Zap,
    description: 'A rapid prototyping AI app builder. You just describe your idea in natural language and Bolt generates the full-stack code and deploys it. Perfect for quickly spinning up MVPs or hackathon apps.',
    badge: 'Rapid MVP',
    color: 'accent'
  },
  {
    name: 'Replit Ghostwriter',
    icon: Cloud,
    description: "Replit's cloud IDE now has an AI agent that can turn descriptions into code and help debug or refine it. It's collaborative and supports many languages, making it ideal if you're a PM who's a bit code-savvy and wants to work in a familiar coding environment.",
    badge: 'Cloud IDE',
    color: 'secondary'
  },
  {
    name: 'Lovable',
    icon: Rocket,
    description: 'An AI "software engineer" for web apps that builds full-stack products from a simple prompt. You just tell Lovable what you need (features, design style, etc.), and within minutes you get a working web product – no dev team or design tools required.',
    badge: 'Web Apps',
    color: 'primary'
  }
];

export const ToolsSection = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Tools to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Try</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Aspiring PMs don't need to be expert coders to vibe code – several tools make it drag-and-drop simple
          to build via prompts. Here are a few popular ones to explore (each with a unique twist):
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-${tool.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <tool.icon className={`w-6 h-6 text-${tool.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{tool.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full bg-${tool.color}/20 text-${tool.color} border border-${tool.color}/30`}>
                        {tool.badge}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-foreground/80 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;