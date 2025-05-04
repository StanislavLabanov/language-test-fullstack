import { ListeningDto, TranslateAndGrammarDto } from "@/types/testtake";
import { LanguageTestDto } from "./type";

export const getShortTest = (): LanguageTestDto => {
  const grammarQuestions: TranslateAndGrammarDto[] = [
    // A1 - Простые времена и конструкции
    {
      level: "A1",
      question: "I __________ (go) to the store every Saturday.",
      options: ["go", "went", "have gone", "will go"],
      correctAnswer: "go",
    },
    {
      level: "A1",
      question: "I have lived in London __________ 2015.",
      options: ["since", "for", "in", "by"],
      correctAnswer: "since",
    },

    // A2 - Простые времена с деталями
    {
      level: "A2",
      question: "We __________ (not/visit) the museum last week.",
      options: [
        "don’t visit",
        "didn’t visit",
        "haven’t visited",
        "weren’t visiting",
      ],
      correctAnswer: "didn’t visit",
    },
    {
      level: "A2",
      question: "By the time we arrived, she __________ (already/leave).",
      options: [
        "already left",
        "had already left",
        "already had left",
        "leaves already",
      ],
      correctAnswer: "had already left",
    },

    // B1 - Усложнённые структуры
    {
      level: "B1",
      question: "If I __________ (know) about the event, I would have gone.",
      options: ["know", "knew", "had known", "would know"],
      correctAnswer: "had known",
    },
    {
      level: "B1",
      question: "The book __________ (write) by a famous author.",
      options: ["was written", "wrote", "is written", "has written"],
      correctAnswer: "was written",
    },

    // B2 - Сложные конструкции
    {
      level: "B2",
      question: "If you __________ (ask) me earlier, I would have helped you.",
      options: ["ask", "asked", "had asked", "would ask"],
      correctAnswer: "had asked",
    },
    {
      level: "B2",
      question: "I’ve been waiting for her __________ three hours.",
      options: ["since", "for", "by", "during"],
      correctAnswer: "for",
    },
  ];

  const listeningQuestions: ListeningDto[] = [
    // A1 - Простые фразы
    {
      level: "A1",
      questionText:
        "Hi, my name is Emma. I work in a hospital as a nurse. I love my job, and I also enjoy traveling to new places.",
      audioFile: "TTS_2323950.mp3",
      questions: [
        {
          question: "What does Emma do?",
          options: [
            "She is a teacher.",
            "She is a nurse.",
            "She is a doctor.",
            "She works in an office.",
          ],
          correctAnswer: "She is a nurse.",
        },
        {
          question: "What does Emma like to do in her free time?",
          options: ["Watch movies", "Travel", "Cook", "Play sports"],
          correctAnswer: "Travel",
        },
      ],
    },
    // A2 - Базовая информация с контекстом
    {
      level: "A2",
      questionText:
        "Last summer, I went to Italy with my family. We visited Venice, Rome, and Florence. The weather was great, and the food was amazing.",
      audioFile: "TTS_2324144.mp3",
      questions: [
        {
          question: "Where did the speaker go last summer?",
          options: ["Spain", "Italy", "France", "Greece"],
          correctAnswer: "Italy",
        },
        {
          question: "What was the weather like in Italy?",
          options: ["Cold", "Hot", "Great", "Rainy"],
          correctAnswer: "Great",
        },
      ],
    },
    // B1 - Разговорный стиль и детали
    {
      level: "B1",
      questionText:
        "Last night, I went out with some friends to celebrate my birthday. We had dinner at a nice restaurant, and then we went to a bar. I was so happy because I hadn’t seen some of my friends for a long time.",
      audioFile: "TTS_2324194.mp3",
      questions: [
        {
          question: "What was the speaker celebrating?",
          options: ["A wedding", "A birthday", "A promotion", "An anniversary"],
          correctAnswer: "A birthday",
        },
        {
          question: "Why was the speaker happy?",
          options: [
            "Because of the food",
            "Because of the party",
            "Because they hadn’t seen friends for a long time",
            "Because of the weather",
          ],
          correctAnswer: "Because they hadn’t seen friends for a long time",
        },
      ],
    },
    // B2 - Глубокое понимание эмоций и контекста
    {
      level: "B2",
      questionText:
        "I was really nervous before the presentation, but once I started talking, I felt much more confident. I had prepared for weeks, so I knew my topic well. The audience seemed to appreciate my talk, and I got great feedback afterwards.",
      audioFile: "TTS_2324288.mp3",
      questions: [
        {
          question: "How did the speaker feel before the presentation?",
          options: ["Nervous", "Excited", "Confident", "Bored"],
          correctAnswer: "Nervous",
        },
        {
          question: "What did the speaker do to prepare for the presentation?",
          options: [
            "Did not prepare",
            "Practiced for weeks",
            "Asked for help",
            "Watched videos",
          ],
          correctAnswer: "Practiced for weeks",
        },
      ],
    },
  ];

  const translationQuestions: TranslateAndGrammarDto[] = [
    // A1 - Простые фразы
    {
      level: "A1",
      question: "Translate to English: Я читаю книгу.",
      options: [
        "I am reading a book.",
        "I read a book.",
        "I will read a book.",
        "I am reading the books.",
      ],
      correctAnswer: "I am reading a book.",
    },
    {
      level: "A1",
      question: "Translate to Russian: She plays tennis every Sunday.",
      options: [
        "Она играет в теннис каждое воскресенье.",
        "Она играл в теннис каждое воскресенье.",
        "Она играет в теннис по воскресеньям.",
        "Она играл в теннис каждое воскресенье.",
      ],
      correctAnswer: "Она играет в теннис каждое воскресенье.",
    },

    // A2 - Основные разговорные выражения
    {
      level: "A2",
      question: "Translate to English: Мы живём в Лондоне.",
      options: [
        "We live in London.",
        "We lived in London.",
        "We will live in London.",
        "We are living in London.",
      ],
      correctAnswer: "We live in London.",
    },
    {
      level: "A2",
      question: "Translate to Russian: I have been working here for two years.",
      options: [
        "Я работаю здесь два года.",
        "Я работал здесь два года.",
        "Я буду работать здесь два года.",
        "Я работаю здесь уже два года.",
      ],
      correctAnswer: "Я работаю здесь два года.",
    },

    // B1 - Усложнённые структуры
    {
      level: "B1",
      question: "Translate to English: Если бы я знал о встрече, я бы пришёл.",
      options: [
        "If I knew about the meeting, I would come.",
        "If I knew about the meeting, I would have come.",
        "If I had known about the meeting, I would have come.",
        "If I had known about the meeting, I would come.",
      ],
      correctAnswer: "If I had known about the meeting, I would have come.",
    },
    {
      level: "B1",
      question:
        "Translate to Russian: He has been working in this company for five years.",
      options: [
        "Он работает в этой компании уже пять лет.",
        "Он работает в этой компании пять лет.",
        "Он работал в этой компании пять лет.",
        "Он будет работать в этой компании пять лет.",
      ],
      correctAnswer: "Он работает в этой компании уже пять лет.",
    },

    // B2 - Продвинутые конструкции
    {
      level: "B2",
      question:
        "Translate to English: Если бы я был на твоём месте, я бы принял другое решение.",
      options: [
        "If I were you, I would have made a different decision.",
        "If I am you, I would have made a different decision.",
        "If I were you, I will make a different decision.",
        "If I am you, I will make a different decision.",
      ],
      correctAnswer: "If I were you, I would have made a different decision.",
    },
    {
      level: "B2",
      question:
        "Translate to Russian: They would have helped if they had known about the problem.",
      options: [
        "Они бы помогли, если бы знали о проблеме.",
        "Они бы помогли, если бы знали о проблеме.",
        "Они помогли бы, если бы знали о проблеме.",
        "Они помогли бы, если бы знали о проблеме.",
      ],
      correctAnswer: "Они бы помогли, если бы знали о проблеме.",
    },
  ];

  return {
    grammarQuestions,
    listeningQuestions,
    translationQuestions,
    totalParts: 20,
    questions: 24,
  };
};
