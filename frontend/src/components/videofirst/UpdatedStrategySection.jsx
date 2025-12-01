import React from 'react';
import { CheckCircle2, Target, RefreshCw, TestTube, Users, GitBranch } from 'lucide-react';

const practices = [
  {
    icon: Target,
    title: 'Be Clear & Specific',
    description: 'Describe your desired features, design, and behavior in detail – precise instructions help the AI generate what you actually intend. Mention key functions, styles, or tech (e.g. "a 3-page finance tracker with a login, using a dark theme") to set the right direction.',
    color: 'primary'
  },
  {
    icon: RefreshCw,
    title: 'Iterate Step-by-Step',
    description: "Don't try to get everything in one go. Build in small chunks and use iterative refinement: review the output, then ask for tweaks or new features gradually. This feedback loop helps the AI adjust and improves the final result.",
    color: 'accent'
  },
  {
    icon: TestTube,
    title: 'Test & Verify Output',
    description: 'Always run and interact with your generated prototype. Check for logic errors or odd UX behaviors, and ask the AI to fix any bugs or polish rough edges.',
    color: 'secondary'
  },
  {
    icon: GitBranch,
    title: 'Manage Context & Versions',
    description: "Keep your conversation with the AI focused. Use consistent terminology and avoid unnecessary repetition so the model stays on track. It's wise to save versions or use version control, so you can rollback if something breaks and you won't lose earlier good work.",
    color: 'primary'
  },
  {
    icon: Users,
    title: 'Combine AI with Human Oversight',
    description: 'Let the AI handle the heavy lifting, but review and refine the results. You might catch subtle issues or have creative ideas to add. Think of vibe coding as a partnership where the AI speeds things up, and you ensure the output truly meets your vision.',
    color: 'accent'
  }
];

export const UpdatedStrategySection = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Practices</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When vibe coding, keep these best practices in mind to get the most out of your AI-assisted build process
          </p>
        </div>
        
        {/* Best Practices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.slice(0, 3).map((practice, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-${practice.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <practice.icon className={`w-6 h-6 text-${practice.color}`} />
                </div>
                
                <h3 className="font-semibold text-lg mb-3">{practice.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{practice.description}</p>
                
                <CheckCircle2 className="w-5 h-5 text-primary/50 mt-4" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {practices.slice(3).map((practice, index) => (
            <div
              key={index + 3}
              className="glass-card rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-${practice.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <practice.icon className={`w-6 h-6 text-${practice.color}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{practice.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{practice.description}</p>
                </div>
                
                <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-primary/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpdatedStrategySection;