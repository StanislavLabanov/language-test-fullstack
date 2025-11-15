"use client";
import { useEffect, useState } from "react";

const Profile = () => {
  const [tg, setTg] = useState<TelegramWebApp | null>(null);
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    const tgApp = window.Telegram?.WebApp;
    const user = tgApp?.initDataUnsafe?.user;

    if (tgApp && user) {
      setTg(tgApp);
      setUser(user);
    }
  }, []);

  return (
    <div className="w-full mt-4">
      klevlekmbmtklbnlrmknlmdrknlrdknl l;membkelb
      <h1 className="text-base font-medium mb-2">
        {user?.first_name} {user?.last_name}
      </h1>
      <div className="text-xs text-gray-600">
        Платформа пользователя: {tg?.platform}
      </div>
      <div className="text-xs text-gray-600">
        Язык приложения: {user?.language_code?.toUpperCase()}
      </div>
      {tg ? JSON.stringify(tg) : 'testttttttt'}
    </div>
  );
};

export default Profile;
