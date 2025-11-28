import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heart, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export const BlogFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Call to Action */}
          <div className="text-center mb-12">
            <h3 className="font-spectral font-bold text-2xl sm:text-3xl text-foreground mb-4">
              Ready to start vibecoding?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Pick one of the tools mentioned above and start building your first AI-powered prototype today.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
              Get Started
            </Button>
          </div>

          <Separator className="my-8" />

          {/* Share Section */}
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground mb-4">Share this article</p>
            <div className="flex items-center justify-center gap-3">
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Footer Info */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">V</span>
              </div>
              <span className="font-spectral font-bold text-xl text-foreground">VibeCoding</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering product managers to build with AI
            </p>
            <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-destructive fill-destructive" />
              <span>by the PM community</span>
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center mt-8">
            <Button variant="ghost" onClick={scrollToTop} className="text-primary hover:text-primary-hover">
              Back to Top ↑
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 VibeCoding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;