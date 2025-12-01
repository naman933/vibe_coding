import React from 'react';

export const VideoFirstHero = () => {
  return (
    <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Live Tutorial Available</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Build Full-Stack Apps in Minutes:
          </span>
          <br />
          <span className="text-foreground">A Vibe Coding Masterclass</span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Watch the hands-on tutorial using <span className="text-primary font-semibold">Lovable</span> below,
          then read the guide to master the workflow.
        </p>
      </div>
    </section>
  );
};

export default VideoFirstHero;