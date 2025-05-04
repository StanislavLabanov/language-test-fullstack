"use client";
import { QuestionsType } from "@/types/questions";
import { TranslateAndGrammarDto } from "@/types/testtake";
import { Dispatch, SetStateAction } from "react";
import { CustomCheckbox } from "./customCheckbox";

interface QuestionCardProps {
  questionData: TranslateAndGrammarDto;
  index: number;
  selectedAnswers: Record<string, string>;
  setSelectedAnswers: Dispatch<SetStateAction<Record<string, string>>>;
  type: QuestionsType;
}

export const QuestionCard = ({
  questionData,
  index,
  selectedAnswers,
  setSelectedAnswers,
  type,
}: QuestionCardProps) => {
  const key = `${type}-${index}`;

  return (
    <div className="flex flex-col gap-4">
      <div className="text-base font-semibold">{questionData.question}</div>
      {questionData.options.map((opt, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <CustomCheckbox
            isChecked={selectedAnswers[key] === opt}
            clickHandler={() =>
              setSelectedAnswers((prev) => ({ ...prev, [key]: opt }))
            }
          />
          <div className="flex-1 text-sm">{opt}</div>
        </div>
      ))}
    </div>
  );
};
