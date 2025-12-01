import React from 'react';
import VideoFirstHero from '@/components/videofirst/VideoFirstHero';
import VideoSection from '@/components/videofirst/VideoSection';
import ContextSection from '@/components/videofirst/ContextSection';
import StrategySection from '@/components/videofirst/StrategySection';
import SimpleFooter from '@/components/videofirst/SimpleFooter';

export const VideoFirstBlogPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <VideoFirstHero />
      
      {/* Video Container - The Star */}
      <VideoSection />
      
      {/* Context Section - What is Vibe Coding */}
      <ContextSection />
      
      {/* Strategy Section - Best Practices */}
      <StrategySection />
      
      {/* Footer */}
      <SimpleFooter />
    </div>
  );
};

export default VideoFirstBlogPage;