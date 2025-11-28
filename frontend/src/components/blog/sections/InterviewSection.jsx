import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
    description: 'Even quick AI-built projects can lead to more recruiter interest'
  },
  {
    icon: Target,
    title: 'Industry Standard',
    description: 'Vibecoding is becoming a basic expectation in PM interviews'
  }
];

export const InterviewSection = () => {
  return (
    <section id="interview" className="mb-16">
      <h2 className="font-spectral font-bold text-3xl sm:text-4xl text-foreground mb-6">
        Why It Helps in Interviews
      </h2>

      <p className="text-lg text-foreground leading-relaxed mb-8">
        Leveraging vibe coding to build a personal project or portfolio isn't just for fun – it can give you
        a serious leg up in interviews. Showing up with a live prototype or tool that you built demonstrates
        initiative, creativity, and adaptability. In fact, a vibe-coded PM portfolio is considered a modern
        job-search hack: even a quick 30-minute AI-built project can lead to more recruiter inbound, more
        interview callbacks, and better odds of acing those interviews.
      </p>

      {/* Feature Image */}
      <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzY0MzQ5NTY3fDA&ixlib=rb-4.1.0&q=85"
          alt="Professional at work"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-lg text-foreground leading-relaxed mt-8">
        It's tangible proof of your problem-solving skills and your ability to harness new technology –
        something that always impresses hiring managers in tech. Vibecoding is now a basic demand that
        recruiters ask in initial rounds of interviews and hence is a skill which is{' '}
        <strong className="text-primary">necessary now</strong>.
      </p>
    </section>
  );
};

export default InterviewSection;