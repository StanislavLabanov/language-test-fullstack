"use client";
import { TestTake } from "@/types/testtake";
import { Dispatch, SetStateAction } from "react";
import { QuestionSwiper } from "../questionSwiper";

interface QuestionSwitcherProps {
  data: TestTake;
  selectedAnswers: Record<string, string>;
  setSelectedAnswers: Dispatch<SetStateAction<Record<string, string>>>;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  setFinished: (val: boolean) => void;
}

export const QuestionSwitcher = (props: QuestionSwitcherProps) => (
  <QuestionSwiper {...props} />
);
