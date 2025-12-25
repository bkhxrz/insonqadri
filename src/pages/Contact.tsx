import { Instagram, Youtube, Send, Phone, MapPin, Video, Scissors, Mic } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Video, label: t('contact.service1') },
    { icon: Scissors, label: t('contact.service3') },
    { icon: Mic, label: t('contact.service4') },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/insonqadri',
      username: '@insonqadri2026',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://youtube.com/@insonqadri',
      username: '@insonqadri',
    },
    {
      icon: Send,
      label: 'Telegram',
      href: 'https://t.me/insonqadri',
      username: '@insonqadri',
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+998901234567',
      username: '+998 90 123 45 67',
    },
  ];

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Page Header */}
      <section
        className="relative py-32 md:py-40 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/85 vignette" />
        <div className="absolute inset-0 film-grain pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider mb-4 animate-fade-in">
            {t('contact.title').toUpperCase()}
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-px bg-foreground/50 mx-auto mt-6 animate-fade-in" style={{ animationDelay: '0.3s' }} />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl tracking-wider text-center mb-12">
            {t('contact.services').toUpperCase()}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 border border-border/50 text-center hover:border-foreground/30 transition-colors duration-300"
              >
                <service.icon size={40} className="mx-auto mb-4 text-foreground/70" />
                <h3 className="font-display text-xl tracking-wider">
                  {service.label.toUpperCase()}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Links Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl tracking-wider text-center mb-12">
            {t('contact.followUs').toUpperCase()}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 border border-border/50 hover:border-foreground/50 hover:bg-card transition-all duration-300"
              >
                <div className="w-12 h-12 border border-border group-hover:border-foreground group-hover:bg-foreground group-hover:text-background flex items-center justify-center transition-all duration-300">
                  <link.icon size={24} />
                </div>
                <div>
                  <p className="font-display text-lg tracking-wider">{link.label.toUpperCase()}</p>
                  <p className="text-muted-foreground text-sm">{link.username}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mt-12 text-muted-foreground">
            <MapPin size={18} />
            <span>{t('contact.location')}</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
