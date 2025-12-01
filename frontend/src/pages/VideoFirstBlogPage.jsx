import React from 'react';
import VideoFirstHero from '@/components/videofirst/VideoFirstHero';
import VideoSection from '@/components/videofirst/VideoSection';
import IntroductionSection from '@/components/videofirst/IntroductionSection';
import ExpandedContextSection from '@/components/videofirst/ExpandedContextSection';
import ToolsSection from '@/components/videofirst/ToolsSection';
import UpdatedStrategySection from '@/components/videofirst/UpdatedStrategySection';
import PrototypeStepsSection from '@/components/videofirst/PrototypeStepsSection';
import InterviewBenefitsSection from '@/components/videofirst/InterviewBenefitsSection';
import SimpleFooter from '@/components/videofirst/SimpleFooter';

export const VideoFirstBlogPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <VideoFirstHero />
      
      {/* Video Container - The Star */}
      <VideoSection />
      
      {/* Introduction */}
      <IntroductionSection />
      
      {/* Context Section - What is & Why PMs Care */}
      <ExpandedContextSection />
      
      {/* Tools to Try */}
      <ToolsSection />
      
      {/* Best Practices */}
      <UpdatedStrategySection />
      
      {/* Prototype Steps */}
      <PrototypeStepsSection />
      
      {/* Why It Helps in Interviews */}
      <InterviewBenefitsSection />
      
      {/* Footer */}
      <SimpleFooter />
    </div>
  );
};

export default VideoFirstBlogPage;