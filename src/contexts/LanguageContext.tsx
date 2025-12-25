import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'uz' | 'ru';

interface Translations {
  [key: string]: {
    uz: string;
    ru: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { uz: 'Asosiy', ru: 'Главная' },
  'nav.works': { uz: 'Ishlarimiz', ru: 'Наши работы' },
  'nav.about': { uz: 'Biz haqimizda', ru: 'О нас' },
  'nav.contact': { uz: "Bog'lanish", ru: 'Контакты' },

  // Home page
  'home.tagline': { uz: 'Video prodakshn studiyasi', ru: 'Студия видеопроизводства' },
  'home.subtitle': { uz: "Biz sizning fikringizni insonlar qalbiga yetkazamiz", ru: 'Мы доносим ваши идеи до сердец людей' },
  'home.cta': { uz: "Ishlarimizni ko'ring", ru: 'Смотреть работы' },
  'home.featured': { uz: 'Tanlangan ishlar', ru: 'Избранные работы' },
  'home.viewAll': { uz: "Barchasini ko'rish", ru: 'Смотреть все' },

  // Works page
  'works.title': { uz: 'Bizning ishlarimiz', ru: 'Наши работы' },
  'works.subtitle': { uz: "Kreativ kontentlar to'plami", ru: 'Коллекция креативного контента' },
  'works.instagram': { uz: 'Instagram videolar', ru: 'Видео для Instagram' },
  'works.instagram.desc': { uz: 'Eng yaxshi qisqa metrajli videolarimiz', ru: 'Лучшие короткие видео' },
  'works.podcast': { uz: 'Podkast videolar', ru: 'Подкаст видео' },
  'works.podcast.desc': { uz: 'YouTube podkast seriyalarimiz', ru: 'Серии подкастов на YouTube' },
  'works.educational': { uz: "Ma'rifiy videolar", ru: 'Образовательные видео' },
  'works.educational.desc': { uz: 'Ilmiy yondashuvdagi kontentlar', ru: 'Научный подход к контенту' },
  'works.clients': { uz: 'Mijozlar ishlari', ru: 'Работы для клиентов' },
  'works.clients.desc': { uz: "Bizning professional xizmatlarimiz", ru: 'Наши профессиональные услуги' },
  'works.comingSoon': { uz: 'Tez kunda...', ru: 'Скоро...' },

  // About page
  'about.title': { uz: 'Biz', ru: 'О нас' },
  'about.story': { uz: 'Bizning hikoyamiz', ru: 'Наша история' },
  'about.storyText': { uz: "Inson Qadri Production — bu ijodkor jamoaning birlashgan kuchi. Biz videografiya, montaj va kreativ kontent yaratish sohasida professional xizmatlar ko'rsatamiz. Bizning maqsadimiz — har bir loyihada sifat va mazmunni birinchi o'ringa qo'yish.", ru: 'Inson Qadri Production — это объединённая сила творческой команды. Мы предоставляем профессиональные услуги в области видеографии, монтажа и создания креативного контента. Наша цель — ставить качество и содержание на первое место в каждом проекте.' },
  'about.mission': { uz: 'Bizning missiyamiz', ru: 'Наша миссия' },
  'about.missionText': { uz: "Insonlarning qalbiga ta'sir qiladigan kontentlar yaratish va ijodiy fikrlarni hayotga tatbiq etish.", ru: 'Создавать контент, который затрагивает сердца людей, и воплощать творческие идеи в жизнь.' },
  'about.zominTitle': { uz: 'Zomin sayohatlari', ru: 'Туры в Зомин' },
  'about.zominText': { uz: "Har yili yangi yil bayrami munosabati bilan Zomin tog'lariga sayohat uyushtiramiz. Tabiat bag'rida dam olish, tog' havosi va ajoyib manzaralar sizni kutmoqda.", ru: 'Каждый год на новогодние праздники мы организуем туры в горы Зомина. Вас ждёт отдых на природе, горный воздух и потрясающие виды.' },
  'about.zominCta': { uz: "Batafsil ma'lumot", ru: 'Подробнее' },

  // Zomin Tours page
  'zomin.title': { uz: 'Zomin sayohati', ru: 'Тур в Зомин' },
  'zomin.subtitle': { uz: "Yangi yil tog' sayohati", ru: 'Новогодний горный тур' },
  'zomin.description': { uz: "Zomin tog'lariga qiziqarli va hayajonli sayohat. Tafsilotlar tez orada e'lon qilinadi.", ru: 'Увлекательное путешествие в горы Зомина. Подробности будут объявлены в ближайшее время.' },
  'zomin.comingSoon': { uz: "Batafsil ma'lumot tez kunda...", ru: 'Подробная информация скоро...' },

  // Contact page
  'contact.title': { uz: "Biz bilan bog'laning", ru: 'Свяжитесь с нами' },
  'contact.subtitle': { uz: 'Loyihangiz haqida gaplashaylik', ru: 'Давайте обсудим ваш проект' },
  'contact.services': { uz: 'Bizning xizmatlar', ru: 'Наши услуги' },
  'contact.service1': { uz: 'Reklama videolar', ru: 'Рекламные видео' },
  'contact.service2': { uz: 'Kontent yaratish', ru: 'Создание контента' },
  'contact.service3': { uz: 'Video montaj', ru: 'Видеомонтаж' },
  'contact.service4': { uz: 'Podkast ishlab chiqish', ru: 'Производство подкастов' },
  'contact.location': { uz: "Joylashuv: O'zbekiston", ru: 'Местоположение: Узбекистан' },
  'contact.followUs': { uz: 'Bizni kuzating', ru: 'Следите за нами' },

  // Footer
  'footer.rights': { uz: 'Barcha huquqlar himoyalangan', ru: 'Все права защищены' },
  'footer.tagline': { uz: 'Kreativ video prodakshn', ru: 'Креативное видеопроизводство' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uz');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
