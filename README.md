# Astro Starter Kit - deeply-disk `"version": "1.0.0"`

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Что в коробке

**Список дополнится в ходе разработки**

- Стилизация на scss
- Управление контентом из `src/data/`
- Шрифты в `public/fonts/` - формат `.ttf`

### Содержание стартового шаблона (описаны изменения от дефолтного шаблона)

- `.github/workflows/deploy.yml` — конфигурация CI/CD для автоматического деплоя на GitHub Pages
- `.vscode/2025.code-snippets` — пользовательские сниппеты кода для ускорения разработки в VS Code
- `.vscode/settings.json` — рекомендуемые настройки редактора (форматирование, линтеры, подсказки)
- `public/favicon/` — иконки сайта для разных устройств и браузеров
- `public/fonts/` — локальные шрифты в формате `.ttf` (подключаются через `@font-face`)
- `public/images/` — статические изображения: логотипы (`.svg`), баннеры, заглушки
- `scripts/` — утилитарные скрипты для сборки и автоматизации (генерация тем, оптимизация ассетов)
- `src/data/` — централизованное хранение контента: тексты, конфиги сайта, данные компонентов
- `src/partials/` — глобальные блоки страниц: `BaseHead.astro`, `Header.astro`, `Footer.astro`
- `src/styles/` — системные стили: `variables.css` (токены), `reset.css`, `global.css`, `fonts.css`

### Структура папок

`public`

```txt
📦public
 ┣ 📂favicon
 ┃ ┣ 📜android-chrome-192x192.png
 ┃ ┣ 📜android-chrome-512x512.png
 ┃ ┣ 📜apple-touch-icon.png
 ┃ ┣ 📜browserconfig.xml
 ┃ ┣ 📜favicon-16x16.png
 ┃ ┣ 📜favicon-32x32.png
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜mstile-144x144.png
 ┃ ┣ 📜mstile-150x150.png
 ┃ ┣ 📜mstile-310x150.png
 ┃ ┣ 📜mstile-310x310.png
 ┃ ┣ 📜mstile-70x70.png
 ┃ ┣ 📜safari-pinned-tab.svg
 ┃ ┗ 📜site.webmanifest
 ┣ 📂fonts
 ┃ ┣ 📜Roboto-Bold.woff2
 ┃ ┣ 📜Roboto-Medium.woff2
 ┃ ┣ 📜Roboto-Regular.woff2
 ┃ ┗ 📜icomoon.woff2
 ┗ 📂images
 ┃ ┗ 📂logo
 ┃ ┃ ┣ 📜logo-dark.svg
 ┃ ┃ ┣ 📜logo-light.svg
 ┃ ┃ ┗ 📜logo.svg
```

`src`

```txt
📦src
 ┣ 📂assets
 ┃ ┣ 📂programming
 ┃ ┃ ┗ 📜06.jpg
 ┃ ┣ 📂temp
 ┃ ┃ ┣ 📂avatars
 ┃ ┃ ┃ ┣ 📜av-01.png
 ┃ ┃ ┃ ┣ 📜av-02.png
 ┃ ┃ ┃ ┣ 📜av-03.png
 ┃ ┃ ┃ ┣ 📜av-04.png
 ┃ ┃ ┃ ┗ 📜av-05.png
 ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┣ 📜360-01.jpg
 ┃ ┃ ┃ ┣ 📜360-02.jpg
 ┃ ┃ ┃ ┣ 📜360х168-01.jpg
 ┃ ┃ ┃ ┣ 📜360х168-02.jpg
 ┃ ┃ ┃ ┣ 📜552x360-01.jpg
 ┃ ┃ ┃ ┣ 📜552x360-02.jpg
 ┃ ┃ ┃ ┣ 📜552x360-03.jpg
 ┃ ┃ ┃ ┣ 📜552x360-04.jpg
 ┃ ┃ ┃ ┣ 📜552x360-05.jpg
 ┃ ┃ ┃ ┗ 📜rutube.jpg
 ┃ ┣ 📜blog-placeholder-1.jpg
 ┃ ┣ 📜blog-placeholder-2.jpg
 ┃ ┣ 📜blog-placeholder-3.jpg
 ┃ ┣ 📜blog-placeholder-4.jpg
 ┃ ┣ 📜blog-placeholder-5.jpg
 ┃ ┣ 📜blog-placeholder-about.jpg
 ┃ ┣ 📜test-1920.jpg
 ┃ ┣ 📜test-552-01.jpg
 ┃ ┣ 📜test-552-02.jpg
 ┃ ┣ 📜test_img-01.jpg
 ┃ ┣ 📜test_img-02.jpg
 ┃ ┣ 📜test_img-03.jpg
 ┃ ┗ 📜test_img-04.jpg
 ┣ 📂components
 ┃ ┣ 📂partials
 ┃ ┃ ┣ 📜Footer.astro
 ┃ ┃ ┣ 📜FooterTheme.astro
 ┃ ┃ ┣ 📜Head.astro
 ┃ ┃ ┣ 📜HeadTheme.astro
 ┃ ┃ ┗ 📜Header.astro
 ┃ ┣ 📂sections
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂templates
 ┃ ┃ ┣ 📂hv01
 ┃ ┃ ┃ ┗ 📜Hv01.astro
 ┃ ┃ ┣ 📂sv05
 ┃ ┃ ┃ ┣ 📜Sv05.astro
 ┃ ┃ ┃ ┗ 📜tempSv05Data.ts
 ┃ ┃ ┣ 📂sv06
 ┃ ┃ ┃ ┣ 📜Sv06.astro
 ┃ ┃ ┃ ┗ 📜tempSv06Data.ts
 ┃ ┃ ┣ 📂sv07
 ┃ ┃ ┃ ┗ 📜Svo7.astro
 ┃ ┃ ┣ 📂sv08
 ┃ ┃ ┃ ┗ 📜Sv08.astro
 ┃ ┃ ┗ 📂sv09
 ┃ ┃ ┃ ┗ 📜Sv09.astro
 ┃ ┣ 📂ui
 ┃ ┃ ┣ 📂FeatureList
 ┃ ┃ ┃ ┣ 📜FeatureList.astro
 ┃ ┃ ┃ ┗ 📜FeatureList.astro.md
 ┃ ┃ ┣ 📂card
 ┃ ┃ ┃ ┣ 📜CardVar02.astro
 ┃ ┃ ┃ ┣ 📜CardVar03.astro
 ┃ ┃ ┃ ┣ 📜Cv01.astro
 ┃ ┃ ┃ ┣ 📜Cv04.astro
 ┃ ┃ ┃ ┣ 📜Cv05.astro
 ┃ ┃ ┃ ┣ 📜Cv06.astro
 ┃ ┃ ┃ ┗ 📜Cv100.astro
 ┃ ┃ ┣ 📂tabs
 ┃ ┃ ┃ ┗ 📂tv01
 ┃ ┃ ┃ ┃ ┗ 📜Tv01.astro
 ┃ ┃ ┣ 📂theme-control
 ┃ ┃ ┃ ┗ 📜TcV01.astro
 ┃ ┃ ┣ 📂title
 ┃ ┃ ┃ ┣ 📜SectionTitleVar02.astro
 ┃ ┃ ┃ ┗ 📜TitleV01.astro
 ┃ ┃ ┣ 📜Images.astro
 ┃ ┃ ┣ 📜Link.astro
 ┃ ┃ ┣ 📜Logo.astro
 ┃ ┃ ┣ 📜MenuToggle.astro
 ┃ ┃ ┣ 📜SocialContact.astro
 ┃ ┃ ┣ 📜ThemeToggle.astro
 ┃ ┃ ┣ 📜ThemeToggleTheme.astro
 ┃ ┃ ┗ 📜ThemeVersionSwitcher.astro
 ┃ ┗ 📜README.md
 ┣ 📂content
 ┃ ┗ 📂blog
 ┃ ┃ ┣ 📜first-post.md
 ┃ ┃ ┣ 📜markdown-style-guide.md
 ┃ ┃ ┣ 📜programming-post.md
 ┃ ┃ ┣ 📜second-post.md
 ┃ ┃ ┗ 📜third-post.md
 ┣ 📂data
 ┃ ┣ 📜README.md
 ┃ ┣ 📜content.config.ts
 ┃ ┣ 📜navigation.ts
 ┃ ┗ 📜site-config.ts
 ┣ 📂layouts
 ┃ ┣ 📜BlogPost.astro
 ┃ ┣ 📜PagesLayout.astro
 ┃ ┗ 📜PagesLayoutTheme.astro
 ┣ 📂pages
 ┃ ┣ 📂blog
 ┃ ┃ ┣ 📜[...slug].astro
 ┃ ┃ ┗ 📜index.astro
 ┃ ┣ 📜catalog.astro
 ┃ ┣ 📜contacts.astro
 ┃ ┗ 📜index.astro
 ┣ 📂styles
 ┃ ┣ 📂base
 ┃ ┃ ┣ 📂mixins
 ┃ ┃ ┃ ┣ 📜_adaptive.scss
 ┃ ┃ ┃ ┣ 📜_counter.scss
 ┃ ┃ ┃ ┣ 📜_fontfase.scss
 ┃ ┃ ┃ ┣ 📜_math.scss
 ┃ ┃ ┃ ┣ 📜_rem-em.scss
 ┃ ┃ ┃ ┣ 📜_transparent-color.scss
 ┃ ┃ ┃ ┣ 📜_truncate-text.scss
 ┃ ┃ ┃ ┣ 📜_utilites.scss
 ┃ ┃ ┃ ┣ 📜adaptiveValue.scss
 ┃ ┃ ┃ ┗ 📜grid.scss
 ┃ ┃ ┣ 📜animations.scss
 ┃ ┃ ┣ 📜base.scss
 ┃ ┃ ┣ 📜button.scss
 ┃ ┃ ┣ 📜common.scss
 ┃ ┃ ┣ 📜media-new.scss
 ┃ ┃ ┣ 📜media.scss
 ┃ ┃ ┣ 📜mixins.scss
 ┃ ┃ ┣ 📜null.scss
 ┃ ┃ ┣ 📜scroll.scss
 ┃ ┃ ┗ 📜variables.scss
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜fonts.scss
 ┃ ┃ ┗ 📜icons.scss
 ┃ ┣ 📂libs
 ┃ ┃ ┣ 📜form.scss
 ┃ ┃ ┗ 📜spollers.scss
 ┃ ┣ 📂themes
 ┃ ┃ ┣ 📂v_01
 ┃ ┃ ┃ ┣ 📜M3.json
 ┃ ┃ ┃ ┣ 📜dark.scss
 ┃ ┃ ┃ ┗ 📜light.scss
 ┃ ┃ ┣ 📂v_02
 ┃ ┃ ┃ ┣ 📜dark.scss
 ┃ ┃ ┃ ┗ 📜light.scss
 ┃ ┃ ┣ 📂v_03
 ┃ ┃ ┃ ┣ 📜dark.scss
 ┃ ┃ ┃ ┗ 📜light.scss
 ┃ ┃ ┣ 📂v_04
 ┃ ┃ ┃ ┣ 📜dark.scss
 ┃ ┃ ┃ ┗ 📜light.scss
 ┃ ┃ ┗ 📂v_05
 ┃ ┃ ┃ ┣ 📜dark.scss
 ┃ ┃ ┃ ┗ 📜light.scss
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜_focus-visible.scss
 ┃ ┗ 📜global.scss
 ┣ 📂utils
 ┃ ┣ 📜dom.ts
 ┃ ┣ 📜domDocs.md
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜theme.ts
 ┃ ┣ 📜tv01.ts
 ┃ ┗ 📜validate-data.ts
 ┗ 📜env.d.ts
```

### Содержание основных файлов

- `package.json`

```json
{
    "name": "deeply-disk",
    "type": "module",
    "version": "1.0.0",
    "scripts": {
        "dev": "astro dev",
        "build": "astro build",
        "preview": "astro preview",
        "astro": "astro"
    },
    "dependencies": {
        "astro": "^6.3.3"
    },
    "devDependencies": {
        "sass-embedded": "^1.93.2"
    }
}
```

- `astro.config.mjs`

```mjs
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://web22des.github.io",
    base: "deeply-disk",
});
```

- `tsconfig.json`

```json
{
    "extends": "astro/tsconfigs/strict",
    "include": [".astro/types.d.ts", "src/**/*"],
    "exclude": ["dist"],
    "compilerOptions": {
        "paths": {
            "@assets/*": ["./src/assets/*"],
            "@components/*": ["./src/components/*"],
            "@sections/*": ["./src/components/sections/*"],
            "@templates/*": ["./src/components/templates/*"],
            "@ui/*": ["./src/components/ui/*"],
            "@content/*": ["./src/content/*"],
            "@layouts/*": ["./src/layouts/*"],
            "@pages/*": ["./src/pages/*"],
            "@data/*": ["./src/data/*"],
            "@hooks/*": ["./src/hooks/*"],
            "@utils/*": ["./src/utils/*"]
        }
    }
}
```

- `src/consts.ts`

```ts
export const SITE_TITLE = "Astro Blog";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const SITE_MAIL = "info@mail.ru";
export const SITE_PHONE = "+79998887766";
export const SITE_SOCIAL_MAX = "https://max.ru";
export const SITE_SOCIAL_VK = "https://vk.ru";
```

- `src/components/ui/Link.astro`

```astro
---
// src/components/ui/Link.astro
const { href, ...props } = Astro.props;
const resolvedHref = import.meta.env.BASE_URL + href.replace(/^\//, '/');
---

<a href={resolvedHref} {...props}>
  <slot />
</a>
```

---

#### Ошибки

1. При переходе на новую страницу, цветовая схема сбрасывается в дефолт

#### Что надо сделать

1. Задача не поставлена

**⚠️ Важно **

`Изменить название проекта на свой в файлах`

1. src/styles/fonts/fonts.scss
2. astro.config.mjs
3. package.json

Полезные эмодзи:

💡 — для подсказок

🚨 — для критически важных моментов

✅ — для проверочных пунктов

❌ — для того, чего делать не стоит

### Правила увеличения версий:

- PATCH (+0.0.1) - исправил баг, опечатку
- MINOR (+0.1.0) - добавил новый функционал (блог)
- MAJOR (+1.0.0) - ломающие изменения

# Что исправить

- В компоненте `src/components/ui/card/CardVar02.astro` - настроить корректную работу миксина `src/styles/utils/_focus-visible.scss ` В данный момент фокус по табу вообще не работает!!!
- Дописать все медиа для заголовков в файле `src/styles/base/variables.scss` - синхронизировать с моим UI-kit
- Дописать компонент - `src/components/ui/title/SectionTitleVar02.astro` - пока весть контент в хардкоде
- исправить ошибки в `SectionVar-02.astro` (перейти на `<Images />`)
- Переписать структуру компонентов

1. `src/components/sections/SectionVar02/SectionVar02.astro`
2. `src/components/sections/SectionVar03/SectionVar03.astro`
3. `src/components/sections/SectionVar04.astro`
4. `src/components/sections/SectionFull.astro`

**что именно переписать**

Немного изменить структуру, а именно, данные компоненты использовать ТОЛЬКО как готовые шаблоны, и поэтому в новых проектах в `data` папке вести нейминг, который соответствует смыслу страницы. **Пример:**

- `src/data/sections/StaVar02.ts` переименовать в `src/data/sections/Секция_проекта.ts`

---
