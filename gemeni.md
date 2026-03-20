# Анализ проекта CosmoCenter

## Обзор проекта
Проект **CosmoCenter** представляет собой современный веб-шаблон (Landing Page/SPA), вероятно, посвященный космической тематике (судя по названиям компонентов: Planets, Missions, CosmoCenter и т.д.).

## Технологический стек
*   **Фреймворк:** Next.js (версия 16.2.0) с использованием App Router (`app/page.tsx`, `layout.tsx`).
*   **React:** React 19 (версия 19.2.4).
*   **Стилизация:** Tailwind CSS версии 4 (`@tailwindcss/postcss: ^4.2.0`, `tailwindcss: ^4.2.0`), `tw-animate-css` для анимаций (вместо framer-motion), `clsx` и `tailwind-merge` для управления классами.
*   **UI-библиотека:** компоненты построены на базе Radix UI (`@radix-ui/*`) и кастомной библиотеки компонентов UI (скорее всего, модифицированный shadcn/ui, расположенный в `components/ui`).
*   **Формы и валидация:** `react-hook-form` в связке с `@hookform/resolvers` и `zod`.
*   **Шрифты и Иконки:** Иконки `lucide-react`.
*   **Дополнительно:** `recharts` для графиков, `embla-carousel-react` для каруселей, `date-fns` для работы с датами, `sonner` для уведомлений (toasts).
*   **Типизация:** TypeScript Strict.

## Структура директорий
*   `/app/`: Главный роутинг приложения. 
    *   `page.tsx`: Главная страница, собирающая в себе все основные секции (`HeroSection`, `HistorySection`, `TechSection`, `PlanetsSection`, `MissionsSection`, `GallerySection`, `ContactsSection`, `Footer` и `Navigation`).
    *   `layout.tsx` и `globals.css` (глобальные стили).
*   `/components/cosmo/`: Содержит бизнес-компоненты для конкретно этого лэндинга (секции, формы контактов, галерея, история, миссии и т.д.).
*   `/components/ui/`: Богатая библиотека готовых и стилизованных UI-компонентов на базе Radix (button, dialog, card, command, select, carousel, chart и т.д.).
*   `/lib/`: Обычно содержит утилиты (например, `utils.ts` с функцией `cn` для Tailwind).
*   `/hooks/`: Кастомные React хуки.
*   `/styles/` или `/public/`: Статические ассеты и возможные дополнительные стили.

## Архитектура страницы (Single Page)
Главная страница оборачивается в `<main className="relative min-h-screen overflow-hidden">` со статичными или фиксированными задними фонами:
- `div.gradient-space`
- `div.star-field`

После этого подключается навигация (`Navigation`), ряд информационных секций и подвал (`Footer`). Приложение выглядит как высококачественный одностраничный лендинг или многостраничный портал на космическую тематику с богатым UI.

## Важные замечания для разработки
1.  **Tailwind 4:** Проект использует 4-ю версию Tailwind CSS, где конфигурация часто настраивается через CSS (theme variables), а не через привычный `tailwind.config.ts`.
2.  **Server Components vs. Client Components:** Next.js App Router используется по умолчанию. Вероятно, интерактивные формы (Contacts) и карусели содержат `"use client"` директивы во внутренних файлах.
3.  **Нет локального бэкенда:** Проект является фронтенд-оболочкой, все данные на текущий момент захардкоджены внутри компонентов либо будут подтягиваться через API. Базы данных на уровне `package.json` (например, Prisma или Drizzle) на данном этапе нет.
