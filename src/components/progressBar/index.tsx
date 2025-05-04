"use client";
interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const percent = Math.round((current / total) * 100);
  return (
    <>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-purple-900 h-2 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-sm text-gray-600 mt-1 text-right">
        {current} из {total}
      </p>
    </>
  );
};
