"use client";
import { ListeningDto } from "@/types/testtake";
import { Dispatch, SetStateAction } from "react";

interface ListeningBlockProps {
  setSelectedAnswers: Dispatch<SetStateAction<Record<string, string>>>;
  selectedAnswers: Record<string, string>;
  data: ListeningDto;
  blockIndex: number;
}

export const ListeningBlock = ({
  setSelectedAnswers,
  selectedAnswers,
  blockIndex,
  data,
}: ListeningBlockProps) => {
  return (
    <div className="flex flex-col gap-5 pb-28">
      <audio controls className="w-full mt-4">
        <source src={`/audio/${data.audioFile}`} type="audio/mpeg" />
        Ваш браузер не поддерживает воспроизведение аудио.
      </audio>
      {data.questions.map((q, idx) => {
        const key = `listeningQuestions-${blockIndex}-${idx}`;
        return (
          <div key={idx} className="flex flex-col gap-2">
            <div className="text-base font-semibold">{q.question}</div>
            {q.options.map((opt, optIdx) => (
              <button
                key={optIdx}
                className={`p-2 border rounded text-sm border-gray-400 ${
                  selectedAnswers[key] === opt ? "bg-blue-100" : ""
                }`}
                onClick={() =>
                  setSelectedAnswers((prev) => ({ ...prev, [key]: opt }))
                }
              >
                {opt}
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
};
