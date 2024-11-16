"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

import { WebApp as WebAppTypes } from "@twa-dev/types";
import WebApp from "@twa-dev/sdk";

const TelegramContext = createContext<WebAppTypes | null>(null);

// Create a provider component
const TelegramProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [webApp, setWebApp] = useState<WebAppTypes | null>(null);
  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    if (typeof window !== "undefined" && (window as any).Telegram) {
      setWebApp(WebApp);
    }
  }, []);

  return (
    <TelegramContext.Provider value={webApp}>
      {children}
    </TelegramContext.Provider>
  );
};

// Custom hook to use the Telegram context
export const useTelegram = (): WebAppTypes | null => {
  const context = useContext(TelegramContext);
  if (!context) {
    throw new Error("useTelegram must be used within a TelegramProvider");
  }
  return context;
};

export default TelegramProvider;
