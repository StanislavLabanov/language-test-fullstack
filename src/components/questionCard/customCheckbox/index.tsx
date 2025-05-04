"use client";
interface CustomCheckboxProps {
  isChecked: boolean;
  clickHandler: () => void;
}

export const CustomCheckbox = ({
  isChecked,
  clickHandler,
}: CustomCheckboxProps) => {
  return (
    <div
      onClick={clickHandler}
      className={`flex items-center justify-center min-w-[20px] min-h-[20px] rounded-full border-2 cursor-pointer ${
        isChecked ? "border-purple-800" : "border-gray-400"
      }`}
    >
      <div
        className={`w-3 h-3 rounded-full ${
          isChecked ? "bg-purple-800" : "opacity-0"
        }`}
      />
    </div>
  );
};
