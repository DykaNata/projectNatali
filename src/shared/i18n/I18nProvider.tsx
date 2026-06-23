import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "uk" | "en";

type Dict = Record<string, string>;

const dictionaries: Record<Lang, Dict> = {
  uk: {
    "nav.home": "Головна",
    "nav.about": "Про мене",
    "nav.services": "Послуги",
    "nav.blog": "Блог",
    "nav.contact": "Контакти",
    "nav.cta": "Зв'язатися",

    "hero.name": "Наталія Дика",
    "hero.eyebrow": "Патентний повірений України № 526",
    "hero.title": "Own Your Ideas",
    "hero.titleUa": "Стань власником своїх ідей",
    "hero.sub": "Комплексний супровід у сфері інтелектуальної власності для бізнесу та митців.",
    "hero.ctaServices": "Послуги",
    "hero.ctaContact": "Зв'язатися",

    "services.eyebrow": "Послуги",
    "services.title": "",
    "services.viewAll": "Переглянути всі послуги",
    "svc.consult.title": "Консультації у сфері інтелектуальної власності",
    "svc.consult.desc": "Коли не зрозуміло з чого почати або за що хапатись — все впорядкує професійна консультація. Детально обговоримо Вашу ситуацію, підберемо найкращі інструменти захисту та побудуємо ефективну правову позицію разом.",
    "svc.tm.title": "Торговельні марки",
    "svc.tm.desc": "Реєстрація, продовження дії, передача прав, попередній пошук, моніторинг та аналіз ТМ конкурентів, опозиції, захист прав, повний супровід портфеля торговельних марок в Україні та за кордоном.",
    "svc.copy.title": "Авторське право",
    "svc.copy.desc": "Реєстрація авторських прав та договорів, претензійно-правова робота, супровід діяльності артистів, кіностудій, митців.",
    "svc.design.title": "Дизайни (Промислові зразки)",
    "svc.design.desc": "Реєстрація, продовження дії, передача прав, попередній пошук, моніторинг та аналіз ПЗ конкурентів, захист прав, повний супровід портфеля промислових зразків в Україні та за кордоном.",
    "svc.contracts.title": "Договори у сфері ІВ",
    "svc.contracts.desc": "Ліцензійні договори, договори комерційної концесії (франчайзинг), договори про створення на замовлення об'єктів інтелектуальної власності та передачі майнових прав ІВ, договори про нерозголошення конфіденційної інформації (NDA), маркетингові договори, тощо.",
    "svc.intl.title": "Міжнародна охорона ІВ",
    "svc.intl.desc": "Реєстрація торговельних марок та дизайнів (промислових зразків) за національною, регіональною та міжнародною процедурами в ЄС, США та інших країнах світу.",
    "svc.unfair.title": "Захист від недобросовісної конкуренції та супровід FMCG",
    "svc.unfair.desc": "Супровід справ про захист від недобросовісної конкуренції в АМКУ, перевірка маркування товарів на відповідність законодавству України та ЄС, супровід справ про захист прав споживачів.",

    "about.eyebrow": "Про мене",
    "about.title": "Наталі Дика",
    "about.role": "Патентний повірений України № 526 · Юрист з інтелектуальної власності",
    "about.p1": "Понад 10 років практичного досвіду в захисті інтелектуальної власності. Більше 6 років очолювала департамент із захисту інтелектуальної власності в міжнародному алкогольному холдингу, де відповідала за глобальний портфель торговельних марок, договірну роботу та стратегію захисту брендів.",
    "about.p2": "Працювала в провідних юридичних фірмах України, де супроводжувала клієнтів з FMCG, технологічного, фармацевтичного та креативного секторів. Закінчила з відзнакою юридичний факультет Київського національного університету імені Тараса Шевченка за спеціалізацією «Інтелектуальна власність» у 2016 році.",
    "about.p3": "Сьогодні веду власну юридичну практику як приватний підприємець, поєднуючи глибину корпоративного досвіду з гнучкістю та персональним підходом.",
    "about.factsTitle": "Коротко",
    "about.fact1": "Патентний повірений України № 526",
    "about.fact2": "10+ років практики у сфері ІВ",
    "about.fact3": "6+ років на чолі IP-департаменту міжнародного холдингу",
    "about.fact4": "Випускниця КНУ імені Тараса Шевченка",

    "contact.eyebrow": "Контакти",
    "contact.title": "Давайте поговоримо про вашу справу",
    "contact.sub": "Напишіть або зателефонуйте — обговоримо ваш запит та сформуємо план дій.",
    "contact.phone": "Контактний телефон",
    "contact.email": "Email",
    "contact.location": "Локація",
    "contact.city": "Київ, Україна",
    "contact.hours": "Графік",
    "contact.hoursValue": "Пн–Пт, 10:00 – 19:00",

    "blog.eyebrow": "Блог",
    "blog.title": "Думки та новини зі сфери ІВ",
    "blog.empty": "Перші матеріали з'являться найближчим часом. Слідкуйте за оновленнями, а також за моїм Instagram.",
    "blog.soon": "Скоро",
    "blog.instagram": "Слідкуйте в Instagram",
    "blog.openBlog": "Перейти до блогу",

    "home.about.eyebrow": "Про мене",
    "home.about.title": "Давайте познайомимось ближче",
    "home.about.p1": "Мене звати Наталія Дика, я патентний повірений України. Більше 10 років захищаю права інтелектуальної власності найкращих клієнтів та допомагаю комерціалізувати їх ідеї.",
    "home.about.p2": "Я магістр права КНУ імені Тараса Шевченка. Закінчила Університет з відзнакою за спеціалізацією «Інтелектуальна власність».",
    "home.about.p3": "Свій професійний шлях розпочинала в провідних юридичних компаніях України (Asters, Juscutum) та більше 6 років очолювала департамент із захисту інтелектуальної власності міжнародного алкогольного холдингу (Global Spirits).",
    "home.about.p4": "У 2026 році масштабувала свою діяльність та розпочала власну юридичну практику.",
    "home.about.p5": "Я зареєструвала сотні торговельних марок та дизайнів в Україні та закордоном, супроводжувала діяльність кіностудій та IT-компаній, маю глибокий досвід в FMCG: відповідність маркування товарів законодавству України та ЄС, захист від недобросовісної конкуренції, реклама та маркетинг, а також захист прав споживачів. Мої клієнти успішно працюють по тисячам ліцензійних, франчайзингових та інших договорів, які я для них розробила.",
    "home.about.p6": "Щиро закохана у свою справу і кожного дня знову обираю цей шлях.",
    "home.about.p7": "Пам'ятайте, що за Вашою інтелектуальною власністю — майбутнє України.",
    "home.about.knuCaption": "КНУ імені Тараса Шевченка · Alma mater",

    "footer.tagline": "Пам'ятайте, що за Вашою інтелектуальною власністю — наше майбутнє.",
    "footer.rights": "Усі права захищені.",
    "footer.privacy": "Політика конфіденційності",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.blog": "Journal",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",

    "hero.name": "Nataliia Dyka",
    "hero.eyebrow": "Patent Attorney of Ukraine No. 526",
    "hero.title": "Own Your Ideas",
    "hero.titleUa": "",
    "hero.sub": "End-to-end intellectual property counsel for businesses, brands and creators.",
    "hero.ctaServices": "Services",
    "hero.ctaContact": "Get in touch",

    "services.eyebrow": "Services",
    "services.title": "",
    "services.viewAll": "View all services",
    "svc.consult.title": "IP Consultations",
    "svc.consult.desc": "When it isn't clear where to start or what to address first, a focused consultation brings order. We discuss your situation in detail, choose the right protection tools and build an effective legal position together.",
    "svc.tm.title": "Trademarks",
    "svc.tm.desc": "Filing, renewals, assignments, clearance searches, monitoring and analysis of competitors' marks, oppositions, enforcement, and full portfolio management in Ukraine and abroad.",
    "svc.copy.title": "Copyright",
    "svc.copy.desc": "Registration of copyright and agreements, claim and pre-litigation work, ongoing support for artists, film studios and creators.",
    "svc.design.title": "Designs (Industrial Designs)",
    "svc.design.desc": "Filing, renewals, assignments, clearance searches, monitoring and analysis of competitors' designs, enforcement, and full portfolio management in Ukraine and abroad.",
    "svc.contracts.title": "IP Agreements",
    "svc.contracts.desc": "License agreements, commercial concession (franchising), work-for-hire and IP assignment agreements, non-disclosure agreements (NDA), marketing agreements and more.",
    "svc.intl.title": "International IP Protection",
    "svc.intl.desc": "Registration of trademarks and designs through national, regional and international procedures in the EU, USA and other jurisdictions.",
    "svc.unfair.title": "Unfair Competition & FMCG",
    "svc.unfair.desc": "Representation in unfair competition proceedings before the AMCU, product labelling compliance with Ukrainian and EU law, and consumer rights matters.",

    "about.eyebrow": "About",
    "about.title": "Nataliia Dyka",
    "about.role": "Patent Attorney of Ukraine No. 526 · Intellectual Property Lawyer",
    "about.p1": "More than 10 years of hands-on experience in intellectual property. For over 6 years I led the IP department of an international spirits group, overseeing the global trademark portfolio, contracts, and brand protection strategy.",
    "about.p2": "Earlier I worked with leading Ukrainian law firms, advising clients across FMCG, technology, pharmaceutical and creative sectors. I graduated with honours from the Faculty of Law of Taras Shevchenko National University of Kyiv, majoring in Intellectual Property, in 2016.",
    "about.p3": "Today I run an independent legal practice, combining the depth of in-house corporate experience with the agility of a personal advisory.",
    "about.factsTitle": "At a glance",
    "about.fact1": "Patent Attorney of Ukraine No. 526",
    "about.fact2": "10+ years of IP practice",
    "about.fact3": "6+ years leading an international IP department",
    "about.fact4": "Graduate of Taras Shevchenko National University",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your matter",
    "contact.sub": "Write or call — we will discuss your case and outline next steps.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.city": "Kyiv, Ukraine",
    "contact.hours": "Hours",
    "contact.hoursValue": "Mon–Fri, 10:00 – 19:00",

    "blog.eyebrow": "Journal",
    "blog.title": "Notes and news from the IP world",
    "blog.empty": "First articles are coming soon. Stay tuned — and follow my Instagram.",
    "blog.soon": "Soon",
    "blog.instagram": "Follow on Instagram",
    "blog.openBlog": "Open the blog",

    "home.about.eyebrow": "About me",
    "home.about.title": "Let's get to know each other",
    "home.about.p1": "My name is Nataliia Dyka, Patent Attorney of Ukraine. For more than 10 years I have been protecting the intellectual property rights of leading clients and helping them commercialise their ideas.",
    "home.about.p2": "I hold a Master of Laws from Taras Shevchenko National University of Kyiv. I graduated with honours, majoring in Intellectual Property.",
    "home.about.p3": "I started my career at leading Ukrainian law firms (Asters, Juscutum) and for over 6 years led the IP department of an international spirits group (Global Spirits).",
    "home.about.p4": "In 2026 I scaled my work and launched my own independent legal practice.",
    "home.about.p5": "I have registered hundreds of trademarks and designs in Ukraine and abroad, advised film studios and IT companies, and built deep expertise in FMCG: product labelling compliance with Ukrainian and EU law, protection against unfair competition, advertising and marketing, and consumer rights. My clients successfully operate under thousands of licensing, franchising and other agreements I have drafted for them.",
    "home.about.p6": "I am sincerely in love with what I do and choose this path again every day.",
    "home.about.p7": "Remember: your intellectual property is the future of Ukraine.",
    "home.about.knuCaption": "Taras Shevchenko National University of Kyiv · Alma mater",

    "footer.tagline": "Remember: your intellectual property is our future.",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("uk");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (saved === "uk" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  const t = (key: string) => {
    const v = dictionaries[lang][key];
    return typeof v === "string" ? v : key;
  };

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
