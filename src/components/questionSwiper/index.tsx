"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  ListeningDto,
  TestTake,
  TranslateAndGrammarDto,
} from "@/types/testtake";
import { QuestionsType } from "@/types/questions";
import { NavigationButtons } from "../navigationButtons";
import { QuestionCard } from "../questionCard";
import { ListeningBlock } from "../listeningBlock";

interface QuestionSwiperProps {
  data: TestTake;
  selectedAnswers: Record<string, string>;
  setSelectedAnswers: Dispatch<SetStateAction<Record<string, string>>>;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  setFinished: (val: boolean) => void;
}

export const QuestionSwiper = ({
  data,
  selectedAnswers,
  setSelectedAnswers,
  currentSlide,
  setCurrentSlide,
  setFinished,
}: QuestionSwiperProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const allQuestions = [
    ...data.grammarQuestions.map((q) => ({
      type: QuestionsType.GRAMMAR,
      data: q,
    })),
    ...data.listeningQuestions.map((q) => ({
      type: QuestionsType.LISTENING,
      data: q,
    })),
    ...data.translationQuestions.map((q) => ({
      type: QuestionsType.TRANSLATION,
      data: q,
    })),
  ];

  const handleSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    setSwiperInstance(swiper);
    swiper.slideTo(currentSlide, 0);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <>
      <Swiper
        onSwiper={(swiper) => handleSwiperInit(swiper)}
        onSlideChange={handleSlideChange}
        allowTouchMove={false}
        spaceBetween={50}
        slidesPerView={1}
      >
        {allQuestions.map((q, idx) => (
          <SwiperSlide key={idx}>
            {q.type === QuestionsType.LISTENING ? (
              <ListeningBlock
                data={q.data as ListeningDto}
                blockIndex={idx}
                selectedAnswers={selectedAnswers}
                setSelectedAnswers={setSelectedAnswers}
              />
            ) : (
              <QuestionCard
                questionData={q.data as TranslateAndGrammarDto}
                selectedAnswers={selectedAnswers}
                setSelectedAnswers={setSelectedAnswers}
                type={q.type}
                index={idx}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationButtons
        swiperInstance={swiperInstance}
        totalSlides={allQuestions.length}
        onFinish={() => setFinished(true)}
        selectedAnswers={selectedAnswers}
      />
    </>
  );
};
