"use client";
import { useEffect, useState } from "react";
import { ResultScreen } from "../resultScreen";
import { ProgressBar } from "../progressBar";
import { QuestionSwitcher } from "../questionSwitcher";
import { TestTake } from "@/types/testtake";

const STORAGE_KEY = "test-progress";

interface TestPageContentProps {
  data: TestTake;
}

export const TestPageContent = ({ data }: TestPageContentProps) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setAnswers(parsed.answers || {});
      setCurrentSlide(parsed.currentSlide || 0);
    }
  }, []);

  useEffect(() => {
    if (currentSlide && Object.keys(answers).length) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ answers, currentSlide })
      );
    }
  }, [answers, currentSlide]);

  const handleRestart = () => {
    setAnswers({});
    setCurrentSlide(0);
    setFinished(false);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <>
      {!data ? (
        <div>Ошибка загрузки теста</div>
      ) : finished ? (
        <ResultScreen
          total={data.questions}
          correctAnswers={answers}
          onRestart={handleRestart}
        />
      ) : (
        <>
          <ProgressBar current={currentSlide + 1} total={data.totalParts} />
          <QuestionSwitcher
            data={data}
            selectedAnswers={answers}
            setSelectedAnswers={setAnswers}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            setFinished={setFinished}
          />
        </>
      )}
    </>
  );
};
