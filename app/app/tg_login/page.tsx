"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTelegramLogin } from "@dynamic-labs/sdk-react-core";

import { useSettings } from "@/components/providers/SettingsProvider";

export default function TgLoginPage() {
  const searchParams = useSearchParams();
  const { settings } = useSettings();
  const { telegramSignIn, isAuthWithTelegram } = useTelegramLogin();

  useEffect(() => {
    telegramSignIn({
      forceCreateUser: true,
    });
  }, []);

  const referrerParam = searchParams.get("referrer");
  const referrer =
    referrerParam !== null ? decodeURIComponent(referrerParam) : "/";

  const { authProvider } = settings;

  if (authProvider === "dynamic") {
    return <></>;
  }

  return <p>Not Implemented</p>;
}
