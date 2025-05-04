"use client";
import { useState } from "react";
import { Swiper as SwiperClass } from "swiper";

interface NavigationButtonsProps {
  swiperInstance: SwiperClass | null;
  totalSlides: number;
  onFinish: () => void;
  selectedAnswers: Record<string, string>;
}

export const NavigationButtons = ({
  swiperInstance,
  totalSlides,
  onFinish,
  selectedAnswers,
}: NavigationButtonsProps) => {
  const [error, setError] = useState<string>("");

  const handleNext = () => {
    if (swiperInstance?.activeIndex === totalSlides - 1) {
      if (Object.keys(selectedAnswers).length < totalSlides) {
        setError(
          "Пожалуйста, ответьте на все вопросы перед завершением теста!"
        );
        return;
      }
      onFinish();
    } else {
      swiperInstance?.slideNext();
      setError("");
    }
  };

  const handleBack = () => {
    swiperInstance?.slidePrev();
    if (error) setError("");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[5] bg-white p-3 flex flex-col gap-2 shadow-md border-t border-gray-200 pb-8">
      {error && <div className="text-red-500 text-center">{error}</div>}
      <div className="flex justify-between">
        <button
          className="text-sm py-2 px-3 bg-gray-300 rounded-md disabled:opacity-50 cursor-pointer"
          onClick={handleBack}
          disabled={swiperInstance?.isBeginning}
        >
          Назад
        </button>
        <button
          className="text-sm py-2 px-3 bg-purple-900 text-white rounded-md cursor-pointer"
          onClick={handleNext}
        >
          {swiperInstance?.activeIndex === totalSlides - 1
            ? "Завершить"
            : "Вперёд"}
        </button>
      </div>
    </div>
  );
};
