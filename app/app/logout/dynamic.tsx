"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  useDynamicContext,
  useIsLoggedIn,
  DynamicEmbeddedWidget,
} from "@dynamic-labs/sdk-react-core";

import SpinnerPage from "@/components/SpinnerPage";

type DynamicLogoutPageProps = {
  referrer: string;
};

export default function DynamicLogoutPage({
  referrer,
}: DynamicLogoutPageProps) {
  const router = useRouter();

  const { sdkHasLoaded, handleLogOut } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    if (!sdkHasLoaded) {
      return;
    }

    if (!isLoggedIn) {
      router.push(referrer);
      return;
    }

    handleLogOut();
  }, [sdkHasLoaded, isLoggedIn]);

  if (!sdkHasLoaded) {
    return <SpinnerPage message="dynamic logout ..." />;
  }

  return <></>;
}
