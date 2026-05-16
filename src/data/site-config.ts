// src/data/site-config.ts
export const SITE = {
    name: "Сайты для вашего бизнеса",
    description: "Профессиональная разработка сайтов на Astro",
    url: "https://example.com",
} as const;

export const CONTACT = {
    phone: "+7 (999) 000-00-00",
    email: "web22des@gmail.com",
} as const;

export const SOCIAL = {
    telegram: "@FollowTooMee",
    max: "https://max.ru/u/f9LHodD0cOJM60XmPB7e0PkZln3cbPM4TWnqhJsfeatZSX2Sc0dp0md7a70",
    vk: "https://vk.com/biz_on_izi",
    github: "https://github.com/username",
} as const;

export const COPYRIGHT = `© ${new Date().getFullYear()} Все права защищены`;
