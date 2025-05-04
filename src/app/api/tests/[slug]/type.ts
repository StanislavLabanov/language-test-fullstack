import { ListeningDto, TranslateAndGrammarDto } from "@/types/testtake";

export interface LanguageTestDto {
  grammarQuestions: TranslateAndGrammarDto[];
  listeningQuestions: ListeningDto[];
  translationQuestions: TranslateAndGrammarDto[];
  totalParts: number;
  questions: number;
}
