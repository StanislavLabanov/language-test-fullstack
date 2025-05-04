import { ReactNode } from "react";
import Script from "next/script";
import { Header } from "@/components/header";
import { Metadata } from "next";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "English Test",
  description: "English Test",
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logoApp.png" />
        <Script src="https://telegram.org/js/telegram-web-app.js?57" />
      </head>
      <body>
        <main>
          <div className="bg-neutral-100 min-h-screen">
            <Header />
            <div className="w-full h-full flex justify-center items-center">
              <div className="w-[94%] h-full">{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
