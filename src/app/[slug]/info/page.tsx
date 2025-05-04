import { TestInfoType } from "@/types/testinfo";
import Link from "next/link";

async function getTestInfo(test: string): Promise<TestInfoType> {
  const res = await fetch(`http://localhost:3000/api/test-info/${test}`);

  if (!res.ok) throw new Error("Данные о тесте не получены");

  return res.json();
}

export default async function TestInfo({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getTestInfo(slug);

  return (
    <>
      {!data ? (
        <span className="text-red-600">Данные о тесте не получены</span>
      ) : (
        <>
          <div className="text-start text-xs">
            Время прохождения теста:{" "}
            <span className="font-semibold">{data.duration}</span>
          </div>
          <h1 className="text-center text-xl font-sans mt-3 mb-3">
            {data.name}
          </h1>
          <div className="flex justify-center items-center mb-5">
            <Link
              href={`/${slug}`}
              className="bg-purple-900 text-purple-50 py-2 rounded-md 
              w-[50%] text-sm font-normal flex justify-center items-center"
            >
              Пройти тест
            </Link>
          </div>
          <div className="text-sm font-semibold">Общее описание:</div>
          <p className="mb-2 text-xs">{data.description.general}</p>
          <div className="text-sm font-semibold mb-2">Структура теста:</div>
          {data.description.structure.map((paragraph, index) => (
            <div key={index}>
              <div className="text-xs font-semibold ml-5">
                {paragraph.title}
              </div>
              <p className="mb-2 text-xs ml-5">{paragraph.text}</p>
            </div>
          ))}
          <div className="text-sm font-semibold">Цель:</div>
          <p className="mb-2 text-xs">{data.description.aim}</p>
        </>
      )}
    </>
  );
}
