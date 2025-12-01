import React from 'react';
import { Play } from 'lucide-react';

export const VideoSection = () => {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Cinema-style video container with pulsing glow */}
        <div className="relative rounded-2xl overflow-hidden animate-pulse-glow">
          {/* Video Player */}
          <div className="relative aspect-video bg-muted/50">
            <video
              controls
              className="w-full h-full"
              poster="https://images.pexels.com/photos/18069696/pexels-photo-18069696.png"
            >
              <source
                src="https://customer-assets.emergentagent.com/job_vibecoding-blog/artifacts/q0zuxsb4_Prod_snap_v2-VEED%20%281%29.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Decorative border glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl opacity-20 blur-xl -z-10" />
        </div>
        
        {/* Video Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Play className="w-4 h-4 text-primary" />
            <span>12 min tutorial • Full walkthrough • No coding required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;