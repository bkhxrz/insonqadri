import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ExternalLink, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface WorkItem {
  id: number;
  title: string;
  titleRu: string;
  thumbnail: string;
  link?: string;
  type: 'embed' | 'link';
}

const Works: React.FC = () => {
  const { t, language } = useLanguage();

  // Instagram videos - best content
  const instagramWorks: WorkItem[] = [
    {
      id: 1,
      title: "Kreativ reklama",
      titleRu: "Креативная реклама",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=600&fit=crop",
      link: "https://instagram.com/insonqadri",
      type: 'link',
    },
    {
      id: 2,
      title: "Ijtimoiy loyiha",
      titleRu: "Социальный проект",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=600&fit=crop",
      link: "https://instagram.com/insonqadri",
      type: 'link',
    },
    {
      id: 3,
      title: "Hikoya formati",
      titleRu: "Формат истории",
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=600&fit=crop",
      link: "https://instagram.com/insonqadri",
      type: 'link',
    },
    {
      id: 4,
      title: "Brend video",
      titleRu: "Брендовое видео",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=600&fit=crop",
      link: "https://instagram.com/insonqadri",
      type: 'link',
    },
  ];

  const renderWorkCard = (work: WorkItem) => {
    const title = language === 'uz' ? work.title : work.titleRu;
    
    return (
      <a
        key={work.id}
        href={work.link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-cinematic group overflow-hidden"
      >
        <div className="relative aspect-square overflow-hidden">
          <img
            src={work.thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-14 h-14 border-2 border-foreground rounded-full flex items-center justify-center">
              {work.type === 'embed' ? (
                <Play size={20} className="ml-1" />
              ) : (
                <ExternalLink size={20} />
              )}
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-display text-lg tracking-wide">{title}</h3>
        </div>
      </a>
    );
  };

  const renderComingSoonSection = (
    titleKey: string,
    descKey: string,
    bgImage: string
  ) => (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* BTS Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-2">
              {t(titleKey).toUpperCase()}
            </h2>
            <p className="text-muted-foreground">{t(descKey)}</p>
          </div>
          <div className="w-20 h-px bg-foreground/30 md:hidden" />
        </div>

        <div className="flex flex-col items-center justify-center py-16 border border-border/50 rounded-sm">
          <Clock size={48} className="text-muted-foreground mb-4" />
          <p className="font-display text-2xl tracking-wider text-muted-foreground">
            {t('works.comingSoon').toUpperCase()}
          </p>
        </div>
      </div>
    </section>
  );

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Page Header */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider mb-4 animate-fade-in">
            {t('works.title').toUpperCase()}
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('works.subtitle')}
          </p>
          <div className="w-24 h-px bg-foreground/50 mt-6 animate-fade-in" style={{ animationDelay: '0.3s' }} />
        </div>
      </section>

      {/* Instagram Videos Section */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1524673450801-b5aa9b621b76?w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/95" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-2">
                {t('works.instagram').toUpperCase()}
              </h2>
              <p className="text-muted-foreground">{t('works.instagram.desc')}</p>
            </div>
            <a
              href="https://instagram.com/insonqadri"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {instagramWorks.map(renderWorkCard)}
          </div>
        </div>
      </section>

      {/* Podcast Videos Section - Coming Soon */}
      {renderComingSoonSection(
        'works.podcast',
        'works.podcast.desc',
        'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&h=1080&fit=crop'
      )}

      {/* Educational Videos Section - Coming Soon */}
      {renderComingSoonSection(
        'works.educational',
        'works.educational.desc',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop'
      )}

      {/* Client Projects Section - Coming Soon */}
      {renderComingSoonSection(
        'works.clients',
        'works.clients.desc',
        'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1920&h=1080&fit=crop'
      )}

      {/* Contact CTA */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-4">
            {t('contact.subtitle').toUpperCase()}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {t('contact.services')}
          </p>
          <Link to="/contact" className="btn-cinematic">
            {t('nav.contact')}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Works;
