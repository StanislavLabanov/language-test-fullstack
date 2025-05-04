"use client";
import { ReactNode } from "react";

interface BorderWithShadowProps {
  children: ReactNode;
}

export const BorderWithShadow = ({ children }: BorderWithShadowProps) => {
  return (
    <div className="w-full rounded-lg shadow-[0px_1px_4px_1px] shadow-purple-300">
      {children}
    </div>
  );
};
