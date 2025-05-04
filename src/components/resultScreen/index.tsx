"use client";

interface ResultScreenProps {
  total: number;
  correctAnswers: Record<string, string>;
  onRestart: () => void;
}

export const ResultScreen = ({
  total,
  correctAnswers,
  onRestart,
}: ResultScreenProps) => {
  const correct = Object.values(correctAnswers).filter(Boolean).length;
  const percent = (correct / total) * 100;

  const level =
    percent >= 90 ? "C1" : percent >= 70 ? "B2" : percent >= 50 ? "B1" : "A1";

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Результат</h2>
      <p>
        Правильных ответов: {correct} из {total}
      </p>
      <p>Ваш уровень: {level}</p>
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={onRestart}
      >
        Пройти заново
      </button>
    </div>
  );
};
