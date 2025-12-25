import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 border border-border rounded-sm overflow-hidden">
      <button
        onClick={() => setLanguage('uz')}
        className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-all duration-300 ${
          language === 'uz'
            ? 'bg-foreground text-background'
            : 'bg-transparent text-muted-foreground hover:text-foreground'
        }`}
      >
        UZ
      </button>
      <button
        onClick={() => setLanguage('ru')}
        className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-all duration-300 ${
          language === 'ru'
            ? 'bg-foreground text-background'
            : 'bg-transparent text-muted-foreground hover:text-foreground'
        }`}
      >
        РУ
      </button>
    </div>
  );
};

export default LanguageSwitcher;
