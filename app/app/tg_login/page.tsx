"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTelegramLogin } from "@dynamic-labs/sdk-react-core";

import SpinnerPage from "@/components/SpinnerPage";
import { useSettings } from "@/components/providers/SettingsProvider";

// for dynamic only
export default function TgLoginPage() {
  const searchParams = useSearchParams();
  const { settings, updateSettings } = useSettings();
  const { telegramSignIn, isAuthWithTelegram } = useTelegramLogin();

  useEffect(() => {
    (async () => {
      updateSettings({ authProvider: "dynamic" });
      await telegramSignIn({ forceCreateUser: true });
    })()
  }, []);

  const referrerParam = searchParams.get("referrer");
  const referrer =
    referrerParam !== null ? decodeURIComponent(referrerParam) : "/";

  const { authProvider } = settings;

  return <SpinnerPage message="Loading TG Login ..." />;
}
