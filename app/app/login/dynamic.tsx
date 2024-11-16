"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  useDynamicContext,
  useIsLoggedIn,
  DynamicEmbeddedWidget,
} from "@dynamic-labs/sdk-react-core";

import SpinnerPage from "@/components/SpinnerPage";

type DynamicLoginPageProps = {
  referrer: string;
};

export default function DynamicLoginPage({ referrer }: DynamicLoginPageProps) {
  const router = useRouter();

  const { sdkHasLoaded } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();

  if (!sdkHasLoaded) {
    return <SpinnerPage message="setting up dynamic login ..." />;
  }

  if (isLoggedIn) {
    router.push(referrer);
    return <></>;
  }

  return (
    <div className="container max-w-3xl">
      <DynamicEmbeddedWidget />
    </div>
  );
}