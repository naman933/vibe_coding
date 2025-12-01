import React from 'react';
import { Code2, Lightbulb, Zap, Users, TrendingUp } from 'lucide-react';

export const ExpandedContextSection = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* What is Vibecoding */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            What is <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vibecoding</span>?
          </h2>
          
          <div className="glass-card rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                <strong className="text-primary">Vibecoding</strong> is a way of building software where rather than writing code, 
                you tell the AI what to build in natural language. You simply describe what you want to build, 
                how it should look and function, and AI can handle the rest.
              </p>
              
              <div className="glass-card rounded-xl p-6 border-l-4 border-primary">
                <p className="text-muted-foreground italic text-lg">
                  "You are basically giving directions rather than steering."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Why should PMs care */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Why should PMs care about <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">vibecoding</span>?
          </h2>
          
          <div className="glass-card rounded-2xl p-8 mb-8">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              For product managers, vibe coding can be a <strong className="text-primary">game-changer</strong>. It means you can quickly prototype on your
              own, building on ideas before involving engineers and even walking into meetings with a working demo
              in hand. The way PMs define requirements is evolving; those who can collaborate with AI tools to
              express ideas dynamically will have an edge over peers still relying on static docs and slides.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              Early experimentation is cheaper, faster, and supercharges team collaboration and velocity. Now, PMs'
              job function can expand as rather than explaining the solution, they can actually{' '}
              <strong className="text-accent">show it</strong>.
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-xl p-6 hover:shadow-neon transition-all duration-300 group">
              <Zap className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">Rapid Prototyping</h3>
              <p className="text-sm text-muted-foreground">Build ideas before involving engineers</p>
            </div>
            
            <div className="glass-card rounded-xl p-6 hover:shadow-neon transition-all duration-300 group">
              <Lightbulb className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">Working Demos</h3>
              <p className="text-sm text-muted-foreground">Walk into meetings with live prototypes</p>
            </div>
            
            <div className="glass-card rounded-xl p-6 hover:shadow-neon transition-all duration-300 group">
              <Users className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">Better Collaboration</h3>
              <p className="text-sm text-muted-foreground">Show solutions, not just explain them</p>
            </div>
            
            <div className="glass-card rounded-xl p-6 hover:shadow-neon transition-all duration-300 group">
              <TrendingUp className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">Competitive Edge</h3>
              <p className="text-sm text-muted-foreground">Gain advantage over static docs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpandedContextSection;