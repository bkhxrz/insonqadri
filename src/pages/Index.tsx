import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Play, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Index: React.FC = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById('featured-works');
    contentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Sample featured works (placeholder for now)
  const featuredWorks = [
    {
      id: 1,
      title: 'Reklama loyihasi',
      titleRu: 'Рекламный проект',
      type: 'Instagram',
      thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Ijtimoiy kontent',
      titleRu: 'Социальный контент',
      type: 'YouTube',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Brend video',
      titleRu: 'Брендовое видео',
      type: 'Commercial',
      thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Video Background */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background Placeholder - using a cinematic image for now */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop')`,
            transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.3}px)`,
          }}
        />
        
        {/* Dark Overlay with Vignette */}
        <div className="absolute inset-0 bg-background/70 vignette" />
        
        {/* Film Grain Effect */}
        <div className="absolute inset-0 film-grain pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="overflow-hidden mb-6">
            <img
              src={logo}
              alt="Inson Qadri Production"
              className="h-24 md:h-32 w-auto mx-auto animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            />
          </div>
          
          <div className="overflow-hidden">
            <h1
              className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider mb-4 text-cinematic animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              INSON QADRI
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <p
              className="font-display text-xl md:text-2xl tracking-widest text-muted-foreground mb-6 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              {t('home.tagline').toUpperCase()}
            </p>
          </div>
          
          <div className="overflow-hidden">
            <p
              className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              {t('home.subtitle')}
            </p>
          </div>

          <div
            className="animate-fade-in"
            style={{ animationDelay: '1s' }}
          >
            <Link
              to="/works"
              className="btn-cinematic inline-flex items-center gap-3"
            >
              <Play size={18} />
              {t('home.cta')}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-foreground/60 hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={28} />
        </button>
      </section>

      {/* Featured Works Section */}
      <section
        id="featured-works"
        className="relative py-24 md:py-32"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/95" />

        <div className="relative z-10 container mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-2">
                {t('home.featured').toUpperCase()}
              </h2>
              <div className="w-20 h-px bg-foreground/50" />
            </div>
            <Link
              to="/works"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('home.viewAll')}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Works Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWorks.map((work, index) => (
              <Link
                key={work.id}
                to="/works"
                className="card-cinematic group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={work.thumbnail}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-foreground rounded-full flex items-center justify-center">
                      <Play size={24} className="ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {work.type}
                  </span>
                  <h3 className="font-display text-xl tracking-wide mt-1">
                    {work.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-6">
            {t('contact.subtitle').toUpperCase()}
          </h2>
          <Link to="/contact" className="btn-cinematic">
            {t('nav.contact')}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
