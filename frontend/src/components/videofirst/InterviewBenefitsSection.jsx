import React from 'react';
import { Award, Briefcase, TrendingUp, Target } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Demonstrates Initiative',
    description: 'Shows creativity and adaptability to hiring managers'
  },
  {
    icon: Briefcase,
    title: 'Tangible Portfolio',
    description: 'Live prototypes serve as concrete proof of your skills'
  },
  {
    icon: TrendingUp,
    title: 'More Callbacks',
    description: 'Even quick AI-built projects lead to more recruiter interest'
  },
  {
    icon: Target,
    title: 'Industry Standard',
    description: 'Vibecoding is becoming a basic expectation in PM interviews'
  }
];

export const InterviewBenefitsSection = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Why It Helps in <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Interviews</span>
        </h2>
        
        <div className="glass-card rounded-2xl p-8 sm:p-12 mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Leveraging vibe coding to build a personal project or portfolio isn't just for fun – it can give you
              a serious leg up in interviews. Showing up with a live prototype or tool that you built demonstrates
              initiative, creativity, and adaptability.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              In fact, a <strong className="text-primary">vibe-coded PM portfolio</strong> is considered a modern
              job-search hack: even a quick 30-minute AI-built project can lead to more recruiter inbound, more
              interview callbacks, and better odds of acing those interviews.
            </p>
            
            <div className="glass-card rounded-xl p-6 border-l-4 border-accent">
              <p className="text-foreground/90">
                It's tangible proof of your problem-solving skills and your ability to harness new technology –
                something that always impresses hiring managers in tech. <strong className="text-accent">Vibecoding is now a basic demand</strong> that
                recruiters ask in initial rounds of interviews and hence is a skill which is <strong className="text-accent">necessary now</strong>.
              </p>
            </div>
          </div>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:shadow-neon transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewBenefitsSection;