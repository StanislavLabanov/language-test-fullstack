## 🌐 Language Test — Fullstack App

Интерактивное приложение для определения уровня английского языка с разными тестирования. Проект создан для пользователей, которые хотят оценить текущий уровень владения языком по основным направлениям: грамматика, лексика, чтение и аудирование.

## 🔹 1. Главная страница
Пользователь может выбрать один из нескольких тестов:
EXPRESS тест — занимает 10 минут. Быстрая оценка уровня и выявление основных ошибок.
ACCURATE тест — длится 30 минут. Глубокая, детальная оценка знаний.
Каждый тест снабжён описанием, объясняющим структуру и назначение.

<img width="1323" height="593" alt="Снимок экрана 2025-11-16 в 00 15 01" src="https://github.com/user-attachments/assets/618ff270-662f-435d-8e52-d9a87a5ac7f4" />

## 🔹 2. Страница с описания
На данной странице расположено описание теста

<img width="1323" height="593" alt="Снимок экрана 2025-11-16 в 00 12 39" src="https://github.com/user-attachments/assets/58dc5a99-e790-4b62-8651-b76b79a27261" />


## 🔹 3. Страница для прохождения
Показывает время прохождения (10 minutes например).
Содержит задания четырёх типов:
✔ Grammar
✔ Vocabulary
✔ Reading
✔ Listening
К каждому вопросу предоставлено несколько вариантов ответа.
Вверху отображается прогресс: например, 6 из 20.

<img width="1323" height="593" alt="Снимок экрана 2025-11-16 в 00 13 48" src="https://github.com/user-attachments/assets/214c68c4-eab2-4f21-8103-4044114d6f1b" />

<img width="1323" height="593" alt="Снимок экрана 2025-11-16 в 00 13 38" src="https://github.com/user-attachments/assets/ef687661-f120-4386-8544-54ffc5d8fbee" />

## 🔹 4. Страница результата
После завершения прохождения теста пользователь получает результат с примерным уровнем A1–C1.

<img width="1323" height="593" alt="Снимок экрана 2025-11-16 в 00 14 52" src="https://github.com/user-attachments/assets/a3e71138-d6b4-41cb-8125-9be27ba34c48" />

## 🔹 Frontend
- TypeScript
- TailwindCSS
- Next.js
- React
  
Описание роутов
- /tests	выбор теста
- /tests/express	старт EXPRESS теста
- /tests/express/questions/[id]	вопрос теста
- /tests/accurate	старт ACCURATE теста
- /result	страница результата

## 🔹 Backend API
Описание роутов
- GET	/api/questions/express	получить вопросы EXPRESS
- GET	/api/questions/accurate	получить вопросы ACCURATE
- POST	/api/result	сохранить результат
- GET	/api/result/:id	получить результат

## 📜 Лицензия
MIT License — проект доступен для свободного использования и модификации.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
