"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";

import SpinnerPage from "@/components/SpinnerPage";

export default function LoginPage() {
  const { ready, authenticated, login } = usePrivy();
  const router = useRouter();

  useEffect(() => {
    if (!ready) {
      return;
    }

    if (authenticated) {
      router.push("/app");
      return;
    }

    login();
  }, [ready, authenticated]);

  if (!ready) {
    return (
      <SpinnerPage>
        <p>setting up login ...</p>
      </SpinnerPage>
    );
  }

  return <></>;
}
