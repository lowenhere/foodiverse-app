"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import {
  useTelegramLogin,
  useDynamicContext,
  useIsLoggedIn,
} from "@dynamic-labs/sdk-react-core";

import { Button } from "@/components/ui/button";
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

  const [signInError, setSignInError] = useState<any>("");

  const referrerParam = searchParams.get("referrer");
  const referrer =
    referrerParam !== null ? decodeURIComponent(referrerParam) : "/app/store/1";

  useEffect(() => {
    updateSettings({ authProvider: "dynamic" });
  })

  useEffect(() => {
    if (!sdkHasLoaded) {
      return;
    }

    if (isLoggedIn) {
      setTimeout(()=>{
        router.push(referrer);
      }, 1500);
      return;
    }

    telegramSignIn({ forceCreateUser: true }).catch(setSignInError);
  }, [sdkHasLoaded, isLoggedIn]);

  return (
    <SpinnerPage message="Loading TG Login ...">
        <p>{`referrer: ${referrer}`}</p>
        <p>{`sdkHasLoaded: ${sdkHasLoaded}`}</p>
        <p>{`isLoggedIn: ${isLoggedIn}`}</p>
        <p>{`signInError: ${signInError}`}</p>
        <div className="mt-2">
          <Button
            className=""
            onClick={() => router.push(referrer)}
            variant="link"
            >
              Continue to {referrer}
          </Button>
        </div>
    </SpinnerPage>
  );
}