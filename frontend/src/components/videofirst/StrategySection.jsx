import React from 'react';
import { CheckCircle2, Target, RefreshCw, TestTube, Users, GitBranch } from 'lucide-react';

const practices = [
  {
    icon: Target,
    title: 'Be Clear & Specific',
    description: 'Describe features, design, and behavior in detail. Mention key functions, styles, or tech to set the right direction.',
    color: 'primary'
  },
  {
    icon: RefreshCw,
    title: 'Iterate Step-by-Step',
    description: 'Build in small chunks. Review output, then ask for tweaks gradually. This feedback loop improves the final result.',
    color: 'accent'
  },
  {
    icon: TestTube,
    title: 'Test & Verify Output',
    description: 'Always run and interact with your prototype. Check for logic errors or UX issues and ask AI to fix them.',
    color: 'secondary'
  },
  {
    icon: GitBranch,
    title: 'Manage Context & Versions',
    description: 'Keep conversations focused. Use consistent terminology and save versions so you can rollback if needed.',
    color: 'primary'
  },
  {
    icon: Users,
    title: 'Combine AI with Human Oversight',
    description: 'Let AI handle heavy lifting, but review and refine results. Think of it as a partnership for the best output.',
    color: 'accent'
  }
];

export const StrategySection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Master the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Workflow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these best practices to get the most out of your AI-assisted build process
          </p>
        </div>
        
        {/* Best Practices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.slice(0, 3).map((practice, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-${practice.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <practice.icon className={`w-6 h-6 text-${practice.color}`} />
                </div>
                
                {/* Content */}
                <h3 className="font-semibold text-lg mb-3">{practice.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{practice.description}</p>
                
                {/* Check icon */}
                <CheckCircle2 className="w-5 h-5 text-primary/50 mt-4" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Second Row - Full Width Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {practices.slice(3).map((practice, index) => (
            <div
              key={index + 3}
              className="glass-card rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex items-start gap-4">
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-${practice.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <practice.icon className={`w-6 h-6 text-${practice.color}`} />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{practice.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{practice.description}</p>
                </div>
                
                {/* Check icon */}
                <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-primary/50" />
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Card */}
        <div className="mt-12 glass-card rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3">Ready to Start Building?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Pick one of the tools from the video and start creating your first AI-powered prototype today.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-neon transition-all duration-300">
                Get Started Now
              </button>
              <button className="px-6 py-3 rounded-lg glass-card border border-primary/20 text-foreground font-semibold hover:border-primary/50 transition-all duration-300">
                View Full Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;