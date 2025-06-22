import { useTranslations } from 'next-intl';

export const routerName = {
  home: "/",
  "wedding-invitation": "/wedding-invitation",
  "nguyen-hoang-an": "/nguyen-hoang-an",
  "hoang-truong-kieu-anh": "/hoang-truong-kieu-anh",
  about: "/about",
  terms: "/terms",
  privacy: "/privacy",
  documents: "/documents",
  courses: "/courses",
  blogs:"blogs",
  non: "",
};

export const useNavLinks = (): NavLink[] => {
  const t = useTranslations('nav');

  return [
    { id: 'about-us', name: t('about-us'), href: routerName.about },
    { id: 'contact', name: t('contact'), href: routerName.non }
  ];
};
