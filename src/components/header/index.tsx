"use client";
import { useEffect, useState } from "react";
import { LuCircleUserRound } from "react-icons/lu";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "./logo.png";

export const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
    if (tgUser) {
      setUser(tgUser);
    }
  }, []);

  return (
    <>
      <header className="w-full h-10 rounded-b-lg bg-purple-900 mb-4">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[94%] h-full">
            <div className="w-full h-full flex justify-between items-center">
              <div
                onClick={() => router.push("/")}
                className="w-[60px] h-[70%] flex justify-start items-center cursor-pointer"
              >
                <Image src={logo} alt="Logo" />
              </div>
              <div
                className="flex justify-start items-center"
                onClick={() => router.push("/profile")}
              >
                <LuCircleUserRound className="mr-2 w-[25px] h-[25px] text-purple-50 cursor-pointer" />
                <span className="text-purple-50 font-sans text-xs cursor-pointer">
                  {user?.username || user?.first_name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
