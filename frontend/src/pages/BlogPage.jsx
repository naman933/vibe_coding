import React, { useEffect, useState } from 'react';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogHero from '@/components/blog/BlogHero';
import BlogContent from '@/components/blog/BlogContent';
import BlogFooter from '@/components/blog/BlogFooter';
import ScrollProgress from '@/components/blog/ScrollProgress';

export const BlogPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress progress={scrollProgress} />
      <BlogHeader />
      <BlogHero />
      <BlogContent />
      <BlogFooter />
    </div>
  );
};

export default BlogPage;