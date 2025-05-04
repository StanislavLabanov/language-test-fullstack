import { ListeningDto, TranslateAndGrammarDto } from "@/types/testtake";
import { LanguageTestDto } from "./type";

export const getLongTest = (): LanguageTestDto => {
  const grammarQuestions: TranslateAndGrammarDto[] = [
    // A1
    {
      level: "A1",
      question:
        'Choose the correct verb form: "She ___ (to go) to school every day."',
      options: ["go", "goes", "going", "gone"],
      correctAnswer: "goes",
    },
    {
      level: "A1",
      question:
        'Choose the correct article: "___ apple a day keeps the doctor away."',
      options: ["A", "An", "The", "No article"],
      correctAnswer: "An",
    },
    // A2
    {
      level: "A2",
      question:
        'Choose the correct sentence: "They ___ (not visit) Paris yet."',
      options: [
        "didn't visit",
        "haven't visited",
        "weren't visiting",
        "don't visit",
      ],
      correctAnswer: "haven't visited",
    },
    {
      level: "A2",
      question:
        'Choose the correct modal verb: "You ___ finish your homework before playing."',
      options: ["must", "can", "may", "shall"],
      correctAnswer: "must",
    },
    // B1
    {
      level: "B1",
      question:
        'Choose the correct passive form: "The bridge ___ (build) in 1998."',
      options: ["was built", "is built", "has built", "was building"],
      correctAnswer: "was built",
    },
    {
      level: "B1",
      question:
        'Choose the correct conditional sentence: "If she ___ (study) harder, she would pass the exam."',
      options: ["studies", "studied", "will study", "had studied"],
      correctAnswer: "studied",
    },
    // B2
    {
      level: "B2",
      question:
        'Choose the correct inversion: "Rarely ___ (he/see) such a beautiful view."',
      options: ["he has seen", "has he seen", "he saw", "does he see"],
      correctAnswer: "has he seen",
    },
    {
      level: "B2",
      question:
        'Choose the correct phrasal verb: "He finally ___ his fear of heights."',
      options: ["got over", "got through", "got on", "got out"],
      correctAnswer: "got over",
    },
    // C1
    {
      level: "C1",
      question:
        'Choose the correct expression: "Little ___ (we/know) about the consequences of our actions."',
      options: ["did we know", "we knew", "we had known", "had we known"],
      correctAnswer: "did we know",
    },
    {
      level: "C1",
      question:
        'Choose the correct advanced conditional: "Had you ___ (tell) me, I would have helped."',
      options: ["told", "tell", "telling", "tells"],
      correctAnswer: "told",
    },
  ];

  const listeningQuestions: ListeningDto[] = [
    {
      level: "A1",
      questionText:
        "Hi, my name is Emma. I work in a hospital as a nurse. I love my job, and I also enjoy traveling to new places.",
      audioFile: "TTS_2328172.mp3",
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
    {
      level: "A1",
      questionText:
        "My favorite color is blue. I also like green, but I don't like red.",
      audioFile: "TTS_2328161.mp3",
      questions: [
        {
          question: "What is the speaker's favorite color?",
          options: ["Blue", "Green", "Red", "Yellow"],
          correctAnswer: "Blue",
        },
        {
          question: "Which color does the speaker not like?",
          options: ["Blue", "Green", "Red", "Yellow"],
          correctAnswer: "Red",
        },
      ],
    },
    {
      level: "A2",
      questionText:
        "Last summer, I went to Italy with my family. We visited Venice, Rome, and Florence. The weather was great, and the food was amazing.",
      audioFile: "TTS_2328145.mp3",
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
    {
      level: "A2",
      questionText:
        "I usually wake up at 7 AM. I have breakfast, then I go to work. I finish work at 5 PM and go home.",
      audioFile: "TTS_2328126.mp3",
      questions: [
        {
          question: "What time does the speaker wake up?",
          options: ["6 AM", "7 AM", "8 AM", "9 AM"],
          correctAnswer: "7 AM",
        },
        {
          question: "What does the speaker do after work?",
          options: ["Goes shopping", "Goes home", "Watches TV", "Eats dinner"],
          correctAnswer: "Goes home",
        },
      ],
    },
    {
      level: "B1",
      questionText:
        "Last night, I went out with some friends to celebrate my birthday. We had dinner at a nice restaurant, and then we went to a bar. I was so happy because I hadn’t seen some of my friends for a long time.",
      audioFile: "TTS_2328097.mp3",
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
    {
      level: "B1",
      questionText:
        "I recently moved to a new city for work. At first, it was difficult to adjust, but now I really enjoy exploring different places and meeting new people.",
      audioFile: "TTS_2328057.mp3",
      questions: [
        {
          question: "Why did the speaker move to a new city?",
          options: ["For work", "For studies", "For family", "For fun"],
          correctAnswer: "For work",
        },
        {
          question: "How does the speaker feel about the new city now?",
          options: ["Lonely", "Excited", "Bored", "Confused"],
          correctAnswer: "Excited",
        },
      ],
    },
    {
      level: "B2",
      questionText:
        "The technological advancements of the last decade have significantly changed the way we communicate. Instant messaging, video calls, and social media platforms allow people to stay in touch, regardless of their location.",
      audioFile: "TTS_2327849.mp3",
      questions: [
        {
          question: "What has changed communication in recent years?",
          options: [
            "Letters",
            "Technology",
            "Face-to-face conversations",
            "Radio",
          ],
          correctAnswer: "Technology",
        },
        {
          question: "Which communication method is NOT mentioned?",
          options: [
            "Instant messaging",
            "Social media",
            "Video calls",
            "Emails",
          ],
          correctAnswer: "Emails",
        },
      ],
    },
    {
      level: "B2",
      questionText:
        "Over the past decade, the way we consume news has drastically changed. Traditional newspapers have seen a decline in readership, while online platforms and social media have become the dominant sources of information. However, this shift has raised concerns about misinformation and the reliability of online sources.",
      audioFile: "TTS_2327719.mp3",
      questions: [
        {
          question: "What is the main topic of the passage?",
          options: [
            "The decline of traditional journalism",
            "The rise of digital media and misinformation",
            "The importance of newspapers",
            "The history of journalism",
          ],
          correctAnswer: "The rise of digital media and misinformation",
        },
        {
          question:
            "Why are people concerned about the rise of online news sources?",
          options: [
            "Because they are more expensive than newspapers",
            "Because they make reading more difficult",
            "Because of the spread of misinformation",
            "Because they provide less entertainment",
          ],
          correctAnswer: "Because of the spread of misinformation",
        },
      ],
    },
    {
      level: "C1",
      questionText:
        "Although the company's revenue had increased significantly, the board of directors decided to reinvest the majority of the profits into research and development. This decision was made to ensure long-term growth and sustainability in a competitive market.",
      audioFile: "TTS_2327673.mp3",
      questions: [
        {
          question:
            "Why did the board of directors decide to reinvest profits?",
          options: [
            "To distribute dividends",
            "To ensure long-term growth",
            "To reduce taxes",
            "To increase salaries",
          ],
          correctAnswer: "To ensure long-term growth",
        },
        {
          question: "What aspect of the market influenced their decision?",
          options: [
            "High competition",
            "Low customer demand",
            "Financial crisis",
            "Government regulations",
          ],
          correctAnswer: "High competition",
        },
      ],
    },
    {
      level: "C1",
      questionText:
        "Despite initial skepticism, the new environmental policies have proven to be highly effective. Air and water pollution levels have decreased significantly, and public awareness about sustainability has improved.",
      audioFile: "TTS_2327608.mp3",
      questions: [
        {
          question: "What was the initial reaction to the new policies?",
          options: ["Support", "Skepticism", "Excitement", "Indifference"],
          correctAnswer: "Skepticism",
        },
        {
          question: "What was one result of the policies?",
          options: [
            "Increased pollution",
            "Public opposition",
            "Improved sustainability awareness",
            "Higher industry profits",
          ],
          correctAnswer: "Improved sustainability awareness",
        },
      ],
    },
  ];

  const translationQuestions: TranslateAndGrammarDto[] = [
    {
      level: "A1",
      question: 'Translate into English: "Я люблю читать книги."',
      options: [
        "I like reading books.",
        "I love reading books.",
        "I am reading books.",
        "I read books.",
      ],
      correctAnswer: "I love reading books.",
    },
    {
      level: "A1",
      question: 'Translate into Russian: "He has a big dog."',
      options: [
        "У него большая собака.",
        "Он имеет большую собаку.",
        "У него есть собака.",
        "Он большой пёс.",
      ],
      correctAnswer: "У него большая собака.",
    },
    {
      level: "A2",
      question:
        'Translate into Russian: "She has lived in London for five years."',
      options: [
        "Она живёт в Лондоне пять лет.",
        "Она живёт в Лондоне с пяти лет.",
        "Она живёт в Лондоне пятью годами.",
        "Она пять лет была в Лондоне.",
      ],
      correctAnswer: "Она живёт в Лондоне пять лет.",
    },
    {
      level: "A2",
      question: 'Translate into English: "Они всегда ездят в отпуск летом."',
      options: [
        "They always go on vacation in summer.",
        "They always travel in vacation.",
        "They are always in summer vacation.",
        "They go on summer vacation always.",
      ],
      correctAnswer: "They always go on vacation in summer.",
    },
    {
      level: "B1",
      question:
        'Translate into English: "Она была удивлена, когда увидела результат."',
      options: [
        "She was surprised when she saw the result.",
        "She surprised when she see the result.",
        "She is surprising by the result.",
        "She was surprising to see the result.",
      ],
      correctAnswer: "She was surprised when she saw the result.",
    },
    {
      level: "B1",
      question:
        'Translate into Russian: "He was supposed to arrive an hour ago, but he is still not here."',
      options: [
        "Он должен был приехать час назад, но его всё ещё нет.",
        "Он приехал час назад, но его не было.",
        "Ему надо было прийти час назад, но его нет.",
        "Он должен был быть здесь через час, но его ещё нет.",
      ],
      correctAnswer: "Он должен был приехать час назад, но его всё ещё нет.",
    },
    {
      level: "B2",
      question:
        'Translate into Russian: "He had already finished the project before the deadline."',
      options: [
        "Он уже завершил проект до крайнего срока.",
        "Он закончил проект после крайнего срока.",
        "Он заканчивал проект до крайнего срока.",
        "Он завершил проект после крайнего срока.",
      ],
      correctAnswer: "Он уже завершил проект до крайнего срока.",
    },
    {
      level: "B2",
      question:
        'Translate into English: "Если бы у него было больше времени, он бы закончил работу."',
      options: [
        "If he had more time, he would have finished the work.",
        "If he has more time, he finishes the work.",
        "If he had more time, he finishes the work.",
        "If he has more time, he will have finished the work.",
      ],
      correctAnswer: "If he had more time, he would have finished the work.",
    },
    {
      level: "C1",
      question:
        'Translate into Russian: "The implementation of these regulations is crucial for maintaining ecological balance and ensuring future sustainability."',
      options: [
        "Внедрение этих правил важно для сохранения экологического баланса и обеспечения устойчивости в будущем.",
        "Следование этим рекомендациям необходимо для предотвращения загрязнения воздуха и воды.",
        "Данные законы позволяют контролировать климатические изменения и стабилизировать экологию.",
        "Соблюдение этих мер необходимо для сокращения вредных выбросов и защиты окружающей среды.",
      ],
      correctAnswer:
        "Внедрение этих правил важно для сохранения экологического баланса и обеспечения устойчивости в будущем.",
    },
    {
      level: "C1",
      question:
        'Translate into Russian: "Despite encountering unforeseen obstacles and significant resource constraints, the team demonstrated remarkable resilience and successfully delivered the project well ahead of the initially projected timeline."',
      options: [
        "Несмотря на непредвиденные препятствия и значительные ограничения ресурсов, команда проявила невероятную стойкость и успешно завершила проект задолго до запланированного срока.",
        "Хотя команда столкнулась с множеством сложностей и нехваткой ресурсов, они завершили проект вовремя.",
        "Проект был выполнен досрочно, несмотря на трудности и нехватку времени.",
        "Команда успешно справилась с проектом, несмотря на препятствия, и завершила его вовремя.",
      ],
      correctAnswer:
        "Несмотря на непредвиденные препятствия и значительные ограничения ресурсов, команда проявила невероятную стойкость и успешно завершила проект задолго до запланированного срока.",
    },
  ];

  return {
    grammarQuestions,
    listeningQuestions,
    translationQuestions,
    totalParts: 30,
    questions: 40,
  };
};
