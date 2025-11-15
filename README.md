## 🌐 Language Test — Fullstack App

An interactive app for determining your English level with various tests. The project is designed for users who want to assess their current level of proficiency in key areas: grammar, vocabulary, reading, and listening.

## 🔹 1. Home page
The user can choose from several tests:
EXPRESS test – takes 10 minutes. It quickly assesses your level and identifies key errors.
ACCURATE test – lasts 30 minutes. It provides an in-depth, detailed assessment of your knowledge.
Each test is provided with a description explaining its structure and purpose.

<img width="1323" height="593" alt="Снимок экрана 2025-11-16 в 00 15 01" src="https://github.com/user-attachments/assets/618ff270-662f-435d-8e52-d9a87a5ac7f4" />

## 🔹 2. Description page
This page contains a description of the test.

<img width="1323" height="593" alt="Снимок экрана 2025-11-16 в 00 12 39" src="https://github.com/user-attachments/assets/58dc5a99-e790-4b62-8651-b76b79a27261" />


## 🔹 3. Page for taking the test
Shows the time taken (for example, 10 minutes).
Contains four types of tasks:
✔ Grammar
✔ Vocabulary
✔ Reading
✔ Listening
Each question has multiple answer options.
Progress is displayed at the top: for example, 6 out of 20.

<img width="1323" height="593" alt="Снимок экрана 2025-11-16 в 00 13 48" src="https://github.com/user-attachments/assets/214c68c4-eab2-4f21-8103-4044114d6f1b" />

<img width="1323" height="593" alt="Снимок экрана 2025-11-16 в 00 13 38" src="https://github.com/user-attachments/assets/ef687661-f120-4386-8544-54ffc5d8fbee" />

## 🔹 4. Results Page
After completing the test, the user receives a result with an approximate level of A1–C1.

<img width="1323" height="593" alt="Снимок экрана 2025-11-16 в 00 14 52" src="https://github.com/user-attachments/assets/a3e71138-d6b4-41cb-8125-9be27ba34c48" />

## 🔹 Frontend
- TypeScript
- TailwindCSS
- Next.js
- React
  
Route Description
- /tests - test selection
- /tests/express - start an EXPRESS test
- /tests/express/questions/[id] - test question
- /tests/accurate - start an ACCURATE test
- /result - results page

## 🔹 Backend API
Route Description
- GET /api/questions/express to get EXPRESS questions
- GET /api/questions/accurate to get ACCURATE questions
- POST /api/result to save the result
- GET /api/result/:id to get the result

## 📜 License
MIT License — the project is freely available for use and modification.

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
