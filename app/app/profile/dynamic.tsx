"use client";
import React, { useEffect } from "react";

import {
  useDynamicContext,
  useIsLoggedIn,
  DynamicEmbeddedWidget,
} from "@dynamic-labs/sdk-react-core";

import SpinnerPage from "@/components/SpinnerPage";

export default function DynamicProfile() {
  const { sdkHasLoaded } = useDynamicContext();

  if (!sdkHasLoaded) {
    return <SpinnerPage message="loading dynamic profile ..." />;
  }

  return (
    <div className="container max-w-3xl mt-4">
      <DynamicEmbeddedWidget />
    </div>
  );
}
