# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

-   ✅ Minimal styling (make it your own!)
-   ✅ 100/100 Lighthouse performance
-   ✅ SEO-friendly with canonical URLs and OpenGraph data
-   ✅ Sitemap support
-   ✅ RSS Feed support
-   ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
📦base-cource
 ┣ 📂.astro
 ┃ ┣ 📂collections
 ┃ ┣ 📜content-assets.mjs
 ┃ ┣ 📜content-modules.mjs
 ┃ ┣ 📜content.d.ts
 ┃ ┣ 📜data-store.json
 ┃ ┣ 📜settings.json
 ┃ ┗ 📜types.d.ts
 ┣ 📂.github
 ┃ ┗ 📂workflows
 ┃ ┃ ┗ 📜deploy.yml
 ┣ 📂.vscode
 ┃ ┣ 📜2025.code-snippets
 ┃ ┣ 📜extensions.json
 ┃ ┣ 📜launch.json
 ┃ ┗ 📜settings.json
 ┣ 📂public
 ┃ ┣ 📂favicon
 ┃ ┃ ┣ 📜android-chrome-192x192.png
 ┃ ┃ ┣ 📜android-chrome-512x512.png
 ┃ ┃ ┣ 📜apple-touch-icon.png
 ┃ ┃ ┣ 📜browserconfig.xml
 ┃ ┃ ┣ 📜favicon-16x16.png
 ┃ ┃ ┣ 📜favicon-32x32.png
 ┃ ┃ ┣ 📜favicon.ico
 ┃ ┃ ┣ 📜mstile-144x144.png
 ┃ ┃ ┣ 📜mstile-150x150.png
 ┃ ┃ ┣ 📜mstile-310x150.png
 ┃ ┃ ┣ 📜mstile-310x310.png
 ┃ ┃ ┣ 📜mstile-70x70.png
 ┃ ┃ ┣ 📜safari-pinned-tab.svg
 ┃ ┃ ┗ 📜site.webmanifest
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜Roboto-Bold.woff2
 ┃ ┃ ┣ 📜Roboto-Medium.woff2
 ┃ ┃ ┣ 📜Roboto-Regular.woff2
 ┃ ┃ ┗ 📜icomoon.woff2
 ┃ ┗ 📂images
 ┃ ┃ ┗ 📂logo
 ┃ ┃ ┃ ┣ 📜logo-dark.svg
 ┃ ┃ ┃ ┣ 📜logo-light.svg
 ┃ ┃ ┃ ┗ 📜logo.svg
 ┣ 📂scripts
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂partials
 ┃ ┃ ┃ ┣ 📜Footer.astro
 ┃ ┃ ┃ ┣ 📜Head.astro
 ┃ ┃ ┃ ┗ 📜Header.astro
 ┃ ┃ ┗ 📂ui
 ┃ ┃ ┃ ┣ 📜Images.astro
 ┃ ┃ ┃ ┣ 📜Link.astro
 ┃ ┃ ┃ ┣ 📜Logo.astro
 ┃ ┃ ┃ ┣ 📜MenuToggle.astro
 ┃ ┃ ┃ ┣ 📜SocialContact.astro
 ┃ ┃ ┃ ┗ 📜ThemeToggle.astro
 ┃ ┣ 📂content
 ┃ ┣ 📂layouts
 ┃ ┃ ┗ 📜PagesLayout.astro
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜catalog.astro
 ┃ ┃ ┣ 📜contacts.astro
 ┃ ┃ ┗ 📜index.astro
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂base
 ┃ ┃ ┃ ┣ 📂mixins
 ┃ ┃ ┃ ┃ ┣ 📜_adaptive.scss
 ┃ ┃ ┃ ┃ ┣ 📜_counter.scss
 ┃ ┃ ┃ ┃ ┣ 📜_fontfase.scss
 ┃ ┃ ┃ ┃ ┣ 📜_math.scss
 ┃ ┃ ┃ ┃ ┣ 📜_rem-em.scss
 ┃ ┃ ┃ ┃ ┣ 📜_transparent-color.scss
 ┃ ┃ ┃ ┃ ┣ 📜_truncate-text.scss
 ┃ ┃ ┃ ┃ ┣ 📜_utilites.scss
 ┃ ┃ ┃ ┃ ┣ 📜adaptiveValue.scss
 ┃ ┃ ┃ ┃ ┗ 📜grid.scss
 ┃ ┃ ┃ ┣ 📜base.scss
 ┃ ┃ ┃ ┣ 📜button.scss
 ┃ ┃ ┃ ┣ 📜common.scss
 ┃ ┃ ┃ ┣ 📜media-new.scss
 ┃ ┃ ┃ ┣ 📜media.scss
 ┃ ┃ ┃ ┣ 📜mixins.scss
 ┃ ┃ ┃ ┣ 📜null.scss
 ┃ ┃ ┃ ┣ 📜scroll.scss
 ┃ ┃ ┃ ┗ 📜variables.scss
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┣ 📜fonts.scss
 ┃ ┃ ┃ ┗ 📜icons.scss
 ┃ ┃ ┣ 📂libs
 ┃ ┃ ┃ ┣ 📜form.scss
 ┃ ┃ ┃ ┗ 📜spollers.scss
 ┃ ┃ ┣ 📂themes
 ┃ ┃ ┃ ┗ 📂v_01
 ┃ ┃ ┃ ┃ ┣ 📜M3.json
 ┃ ┃ ┃ ┃ ┣ 📜dark.scss
 ┃ ┃ ┃ ┃ ┗ 📜light.scss
 ┃ ┃ ┣ 📂utils
 ┃ ┃ ┃ ┗ 📜_focus-visible.scss
 ┃ ┃ ┗ 📜global.scss
 ┃ ┗ 📂templates
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜astro.config.mjs
 ┣ 📜package.json
 ┗ 📜tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

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

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

### Содержание стартового шаблона (описаны изменения от дефолтного шаблона)

1. .github/workflows/deploy.yml
2. .vscode/2025.code-snippets
3. .vscode/settings.json
4. scripts/
5. src/styles/
6. src/partials/
7. public/favicon/
8. public/fonts/
9. public/images/

#### Ошибки

1. Не обнаружено

#### Что надо сделать

1. Задача не поставлена

**⚠️ Важно **

`Изменить название проекта на свой в файлах`

1. src/styles/fonts/fonts.scss
1. astro.config.mjs
1. package.json

Полезные эмодзи:

💡 — для подсказок

🚨 — для критически важных моментов

✅ — для проверочных пунктов

❌ — для того, чего делать не стоит
# deeply-disk
