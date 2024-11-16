"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useTelegramLogin, useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";

import SpinnerPage from "@/components/SpinnerPage";
import { useSettings } from "@/components/providers/SettingsProvider";

// for dynamic only
export default function TgLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { settings, updateSettings } = useSettings();
  const { sdkHasLoaded } = useDynamicContext();
  const { telegramSignIn, isAuthWithTelegram } = useTelegramLogin();
  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    if (!sdkHasLoaded){
      return;
    }

    if (isLoggedIn){
      router.push("/app/store/1");
      return;
    }

    (async () => {
      updateSettings({ authProvider: "dynamic" });
      await telegramSignIn({ forceCreateUser: true });
    })()
  }, [sdkHasLoaded, isLoggedIn]);

  const referrerParam = searchParams.get("referrer");
  const referrer =
    referrerParam !== null ? decodeURIComponent(referrerParam) : "/";

  const { authProvider } = settings;

  return <SpinnerPage message="Loading TG Login ..." />;
}
