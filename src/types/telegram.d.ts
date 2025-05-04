// types/global.d.ts
export {};

declare global {
  interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
  }

  interface TelegramThemeParams {
    bg_color: string;
    text_color: string;
    hint_color: string;
    link_color: string;
    button_color: string;
    button_text_color: string;
  }

  interface TelegramWebApp {
    initData: string;
    initDataUnsafe: {
      user?: TelegramUser;
    };
    version: string;
    platform: string;
    colorScheme: string;
    isExpanded: boolean;
    isClosingConfirmationEnabled: boolean;
    themeParams: TelegramThemeParams;
    close(): void;
    expand(): void;
    sendData(data: string): void;
    enableClosingConfirmation(): void;
    disableClosingConfirmation(): void;
    onEvent(eventType: string, callback: () => void): void;
    offEvent(eventType: string, callback: () => void): void;
    showAlert(message: string, callback?: () => void): void;
    showConfirm(message: string, callback: (ok: boolean) => void): void;
    showPopup(
      params: {
        title: string;
        message: string;
        buttons: {
          id: string;
          type: "default" | "ok" | "close" | "cancel" | "destructive";
          text: string;
        }[];
      },
      callback: (buttonId: string) => void
    ): void;
  }

  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}
