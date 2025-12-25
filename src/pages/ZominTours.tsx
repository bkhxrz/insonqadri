import { Link } from 'react-router-dom';
import { Mountain, Calendar, ArrowLeft, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ZominTours: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section
        className="relative py-32 md:py-48 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 vignette" />
        <div className="absolute inset-0 film-grain pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <Mountain size={64} className="mx-auto mb-6 text-foreground/80 animate-fade-in" />
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('zomin.title').toUpperCase()}
          </h1>
          <p className="font-display text-xl md:text-2xl tracking-widest text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {t('zomin.subtitle').toUpperCase()}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft size={18} />
              {t('nav.about')}
            </Link>

            {/* Description */}
            <div className="text-center mb-16">
              <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                {t('zomin.description')}
              </p>
              
              <div className="flex flex-col items-center justify-center py-12 border border-border/50 rounded-sm bg-card">
                <Clock size={48} className="text-muted-foreground mb-4" />
                <p className="font-display text-2xl tracking-wider text-muted-foreground">
                  {t('zomin.comingSoon').toUpperCase()}
                </p>
              </div>
            </div>

            {/* Image Gallery Placeholder */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-video rounded-sm overflow-hidden border border-border/50">
                <img
                  src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&h=400&fit=crop"
                  alt="Mountain view"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video rounded-sm overflow-hidden border border-border/50">
                <img
                  src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&h=400&fit=crop"
                  alt="Mountain landscape"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28 bg-card">
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

export default ZominTours;
