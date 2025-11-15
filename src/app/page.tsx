"use client";
import { BorderWithShadow } from "@/components/borderWithShadow";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Home = () => {
  const router = useRouter();

  return (
    <div className="w-full mt-4">
      <h1 className="text-center text-2xl font-sans">Тесты</h1>
      <h3 className="text-center text-xs font-sans">
        тесты на определение уровня английского языка
      </h3>
      <Link
        className="mt-5 mb-2 inline-block text-xs/3 text-purple-800 underline"
        href={"express/info"}
      >
        Описание
      </Link>
      <div
        className=" mb-4 cursor-pointer"
        onClick={() => router.push("express")}
      >
        <BorderWithShadow>
          <div className="p-2 rounded-lg">
            <span className="text-base font-sans text-purple-800 font-semibold">
              EXPRESS тест
            </span>
            <p className="text-xs/4 font-sans">
              Тест на знание английского языка длительностью 10 минут поможет
              определить ваш уровень владения языком и выявить основные ошибки.
              Он предназначен для быстрой оценки ваших знаний.
            </p>
          </div>
        </BorderWithShadow>
      </div>
      <Link
        className="mb-2 inline-block text-xs/3 text-purple-800 underline"
        href={"accurate/info"}
      >
        Описание
      </Link>
      <div className="cursor-pointer" onClick={() => router.push("accurate")}>
        <BorderWithShadow>
          <div className="p-2">
            <span className="text-base font-sans text-purple-800 font-semibold">
              ACCURATE тест
            </span>
            <p className="text-xs/4 font-sans">
              Тест, который длится 30 минут, более подробный и точный. Он
              поможет более детально определить ваш уровень владения английским
              и выявить слабые стороны, сделав процесс оценки более глубоким и
              детальным.
            </p>
          </div>
        </BorderWithShadow>
      </div>
    </div>
  );
};

export default Home;
