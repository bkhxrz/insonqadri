import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Send, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/insonqadri', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@insonqadri', label: 'YouTube' },
    { icon: Send, href: 'https://t.me/insonqadri', label: 'Telegram' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Inson Qadri" className="h-8 w-auto" />
              <span className="font-display text-lg tracking-wider">INSON QADRI</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-lg tracking-wider mb-2">
              {t('nav.home').toUpperCase()}
            </h4>
            <Link to="/works" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {t('nav.works')}
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-lg tracking-wider mb-2">
              {t('contact.followUs').toUpperCase()}
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="section-divider mt-8 mb-6" />
        <div className="text-center text-muted-foreground text-sm">
          © {currentYear} Inson Qadri Production. {t('footer.rights')}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
