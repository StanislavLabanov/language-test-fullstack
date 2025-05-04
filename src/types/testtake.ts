export interface ListeningDto {
  level: string;
  questionText: string;
  audioFile: string;
  questions: { question: string; options: string[]; correctAnswer: string }[];
}

export interface TranslateAndGrammarDto {
  level: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface TestTake {
  grammarQuestions: TranslateAndGrammarDto[];
  listeningQuestions: ListeningDto[];
  translationQuestions: TranslateAndGrammarDto[];
  totalParts: number;
  questions: number;
}
