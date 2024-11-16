"use client";

import { useTelegram } from "@/components/providers/TelegramProvider";

export default function TelegramProfile() {
  const webApp = useTelegram();

  if (!webApp) {
    return <></>;
  }

  return <p>{JSON.stringify(webApp, null, 2)}</p>;
}
