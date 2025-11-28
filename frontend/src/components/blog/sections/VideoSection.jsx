import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

export const VideoSection = () => {
  return (
    <section id="video" className="mb-16">
      <h2 className="font-spectral font-bold text-3xl sm:text-4xl text-foreground mb-6">
        Tutorial Video: Vibecoding in Action
      </h2>

      <p className="text-lg text-foreground leading-relaxed mb-8">
        Watch this comprehensive tutorial to see vibecoding in action and learn how to build your own
        prototypes using AI tools.
      </p>

      <Card className="border-border overflow-hidden shadow-xl">
        <CardContent className="p-0">
          <div className="relative aspect-video bg-muted">
            <video
              controls
              className="w-full h-full"
              poster="https://images.pexels.com/photos/18069696/pexels-photo-18069696.png"
            >
              <source
                src="https://customer-assets.emergentagent.com/job_8f5e3da1-7989-4512-9440-a88f0475f105/artifacts/8vx3a4j4_Prod_snap_v2_subs.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 p-6 bg-muted/50 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground italic">
          💡 <strong className="text-foreground">Tip:</strong> Watch in full-screen mode for the best
          experience. The video covers real-world examples and practical tips for getting started with
          vibecoding.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;