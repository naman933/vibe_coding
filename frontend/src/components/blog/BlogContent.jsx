import React from 'react';
import IntroductionSection from './sections/IntroductionSection';
import WhatIsSection from './sections/WhatIsSection';
import WhyPMsSection from './sections/WhyPMsSection';
import ToolsSection from './sections/ToolsSection';
import BestPracticesSection from './sections/BestPracticesSection';
import PrototypeSection from './sections/PrototypeSection';
import VideoSection from './sections/VideoSection';
import InterviewSection from './sections/InterviewSection';
import ReferencesSection from './sections/ReferencesSection';

export const BlogContent = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="max-w-4xl mx-auto">
        {/* Introduction */}
        <IntroductionSection />

        {/* What is Vibecoding */}
        <WhatIsSection />

        {/* Why should PMs care */}
        <WhyPMsSection />

        {/* Tools to Try */}
        <ToolsSection />

        {/* Best Practices */}
        <BestPracticesSection />

        {/* Prototype Steps */}
        <PrototypeSection />

        {/* Video Tutorial */}
        <VideoSection />

        {/* Why It Helps in Interviews */}
        <InterviewSection />

        {/* Additional References */}
        <ReferencesSection />
      </article>
    </main>
  );
};

export default BlogContent;