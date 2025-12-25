import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Users, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Page Header */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider mb-4 animate-fade-in">
            {t('about.title').toUpperCase()}
          </h1>
          <div className="w-24 h-px bg-foreground/50 mt-6 animate-fade-in" style={{ animationDelay: '0.2s' }} />
        </div>
      </section>

      {/* Story Section */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Users size={32} className="text-foreground/70" />
                <h2 className="font-display text-3xl md:text-4xl tracking-wider">
                  {t('about.story').toUpperCase()}
                </h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {t('about.storyText')}
              </p>
            </div>
            <div className="relative aspect-video rounded-sm overflow-hidden border border-border/50">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop"
                alt="Team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Target size={48} className="mx-auto mb-6 text-foreground/70" />
            <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-6">
              {t('about.mission').toUpperCase()}
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              {t('about.missionText')}
            </p>
          </div>
        </div>
      </section>

      {/* Zomin Tours Section */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-video rounded-sm overflow-hidden border border-border/50">
              <img
                src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&h=450&fit=crop"
                alt="Zomin Mountains"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <Mountain size={32} className="text-foreground/70" />
                <h2 className="font-display text-3xl md:text-4xl tracking-wider">
                  {t('about.zominTitle').toUpperCase()}
                </h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                {t('about.zominText')}
              </p>
              <Link
                to="/zomin-tours"
                className="btn-cinematic inline-flex items-center gap-3"
              >
                {t('about.zominCta')}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-4">
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

export default About;
