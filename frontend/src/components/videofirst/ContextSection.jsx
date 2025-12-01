import React from 'react';
import { Code2, Sparkles, Zap } from 'lucide-react';

export const ContextSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What is <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vibe Coding</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The revolutionary approach to building software with natural language
          </p>
        </div>
        
        {/* Glassmorphism Card */}
        <div className="glass-card rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Main Icon */}
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
              <Code2 className="w-8 h-8 text-primary-foreground" />
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                <strong className="text-primary">Vibe coding</strong> is a way of building software where rather than writing code, 
                you tell the AI what to build in natural language. You simply describe what you want to build, 
                how it should look and function, and AI can handle the rest.
              </p>
              
              <div className="glass-card rounded-xl p-6 border-l-4 border-primary">
                <p className="text-muted-foreground italic">
                  "You are basically giving directions rather than steering."
                </p>
              </div>
              
              {/* Evolution Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="glass-card rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">📝</div>
                  <div className="font-semibold text-sm mb-1">Before</div>
                  <div className="text-xs text-muted-foreground">Manual coding every line</div>
                </div>
                
                <div className="glass-card rounded-xl p-4 text-center border-primary/50">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="font-semibold text-sm mb-1 text-primary">Autocomplete Era</div>
                  <div className="text-xs text-muted-foreground">GitHub Copilot helps</div>
                </div>
                
                <div className="glass-card rounded-xl p-4 text-center border-accent/50 shadow-neon">
                  <div className="text-2xl mb-2">✨</div>
                  <div className="font-semibold text-sm mb-1 text-accent">Vibe Coding Now</div>
                  <div className="text-xs text-muted-foreground">Natural language builds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Why PMs Care - Quick Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="glass-card rounded-xl p-6 hover:shadow-neon transition-all duration-300">
            <Zap className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Rapid Prototyping</h3>
            <p className="text-sm text-muted-foreground">Build ideas before involving engineers</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 hover:shadow-neon transition-all duration-300">
            <Sparkles className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold text-lg mb-2">Working Demos</h3>
            <p className="text-sm text-muted-foreground">Walk into meetings with live prototypes</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 hover:shadow-neon transition-all duration-300">
            <Code2 className="w-8 h-8 text-secondary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Competitive Edge</h3>
            <p className="text-sm text-muted-foreground">Show solutions, not just explain them</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;