import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Play, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';
import content1 from '@/assets/content-1.jpg';
import content2 from '@/assets/content-2.jpg';
import content3 from '@/assets/content-3.jpg';
import content4 from '@/assets/content-4.jpg';
import content5 from '@/assets/content-5.jpg';
import content6 from '@/assets/content-6.jpg';
import content7 from '@/assets/content-7.jpg';

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

  // Featured works - using 7 local content images
  const featuredWorks = [
    { id: 1, title: 'Reklama loyihasi', titleRu: 'Рекламный проект', type: 'Instagram', thumbnail: content1 },
    { id: 2, title: 'Ijtimoiy kontent', titleRu: 'Социальный контент', type: 'YouTube', thumbnail: content2 },
    { id: 3, title: 'Brend video', titleRu: 'Брендовое видео', type: 'Commercial', thumbnail: content3 },
    { id: 4, title: 'Brend foto', titleRu: 'Брендовое фото', type: 'Photoshoot', thumbnail: content4 },
    { id: 5, title: 'Produktsiya', titleRu: 'Продакшн', type: 'Commercial', thumbnail: content5 },
    { id: 6, title: 'Tabiat videolari', titleRu: 'Природные видео', type: 'Documentary', thumbnail: content6 },
    { id: 7, title: 'Ijtimoiy kampaniya', titleRu: 'Социальная кампания', type: 'Campaign', thumbnail: content7 },
  ];

  // CSS-only marquee (no JS): duplicated items in markup and a CSS animation
  const MARQUEE_DURATION = 14; // seconds — slightly slower loop
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [multiplier, setMultiplier] = useState(1);
  const [stepWidth, setStepWidth] = useState(0);

  // Ensure the original item block is at least as wide as the viewport so the animation step equals that block width
  useEffect(() => {
    const adjust = () => {
      const m = marqueeRef.current;
      if (!m) return;
      const items = Array.from(m.querySelectorAll('.marquee-item')) as HTMLElement[];
      if (items.length === 0) return;

      const setCount = featuredWorks.length;
      if (items.length < setCount) return; // wait until at least one set is rendered

      const first = items[0];
      const lastInSet = items[setCount - 1];
      const setLeft = first.offsetLeft;
      const setRight = lastInSet.offsetLeft + lastInSet.offsetWidth;
      const setWidth = setRight - setLeft;
      const containerWidth = (m.parentElement as HTMLElement)?.clientWidth ?? m.clientWidth;

      if (setWidth === 0 || containerWidth === 0) return;

      // needed sets so that one block is wider than the container (plus one extra for seam)
      const needed = Math.max(1, Math.ceil(containerWidth / setWidth) + 1);
      if (needed !== multiplier) setMultiplier(needed);

      if (Math.abs(setWidth - stepWidth) > 1) {
        setStepWidth(setWidth);
        m.style.setProperty('--marquee-step', `${setWidth}px`);
      }
    };

    // Run on next frame after render
    const id = window.requestAnimationFrame(adjust);
    window.addEventListener('resize', adjust);
    return () => { window.cancelAnimationFrame(id); window.removeEventListener('resize', adjust); };
  }, [featuredWorks, multiplier, stepWidth]);

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

          {/* Works — CSS-only marquee */}
          <div className="relative">
            <div className="marquee overflow-hidden py-8">
              <div ref={marqueeRef} className="marquee-track flex gap-4 items-stretch" style={{ animationDuration: `${MARQUEE_DURATION}s` }}>
                {Array.from({ length: multiplier }).flatMap((_, mi) =>
                  featuredWorks.map((work) => (
                    <div key={`m-${mi}-${work.id}`} className="marquee-item min-w-[10rem] sm:min-w-[12rem]">
                      <Link
                        to="/works"
                        aria-label={work.title}
                        className="card-cinematic group overflow-hidden rounded-2xl animate-fade-in h-full flex flex-col shadow-sm"
                      >
                        <div className="relative w-full aspect-[3/4] overflow-hidden">
                          <img
                            src={work.thumbnail}
                            alt={work.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-background/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <div className="w-9 h-9 border-2 border-foreground rounded-full flex items-center justify-center bg-white/10">
                              <Play size={14} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                )}

                {/* duplicate block to create seamless loop */}
                {Array.from({ length: multiplier }).flatMap((_, mi) =>
                  featuredWorks.map((work) => (
                    <div key={`m-dup-${mi}-${work.id}`} className="marquee-item min-w-[10rem] sm:min-w-[12rem]">
                      <Link
                        to="/works"
                        aria-label={work.title}
                        className="card-cinematic group overflow-hidden rounded-2xl animate-fade-in h-full flex flex-col shadow-sm"
                      >
                        <div className="relative w-full aspect-[3/4] overflow-hidden">
                          <img
                            src={work.thumbnail}
                            alt={work.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-background/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <div className="w-9 h-9 border-2 border-foreground rounded-full flex items-center justify-center bg-white/10">
                              <Play size={14} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
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
