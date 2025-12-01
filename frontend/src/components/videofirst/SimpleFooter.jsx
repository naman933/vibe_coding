import React from 'react';
import { Twitter, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

const resources = [
  {
    title: 'Vibe Coding Explained',
    url: 'https://www.datacamp.com/blog/vibe-coding',
    description: 'Comprehensive introduction'
  },
  {
    title: 'Real Project Examples',
    url: 'https://10web.io/blog/vibe-coding-examples/',
    description: 'Case studies & demos'
  }
];

export const SimpleFooter = () => {
  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-transparent to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Resources Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6">Additional Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-6 hover:shadow-neon transition-all duration-300 group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-border/50 mb-8" />
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-lg">VibeCoding</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 VibeCoding. Empowering PMs to build with AI.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 hover:shadow-neon transition-all duration-300"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 hover:shadow-neon transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 hover:shadow-neon transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 hover:shadow-neon transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;