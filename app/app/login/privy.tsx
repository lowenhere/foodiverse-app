"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";

import SpinnerPage from "@/components/SpinnerPage";

type PrivyLoginPageProps = {
  referrer: string;
};

export default function PrivyLoginPage({ referrer }: PrivyLoginPageProps) {
  const { ready, authenticated, login } = usePrivy();
  const router = useRouter();

  useEffect(() => {
    if (!ready) {
      return;
    }

    if (authenticated) {
      router.push(referrer);
      return;
    }

    login();
  }, [ready, authenticated]);

  if (!ready) {
    return <SpinnerPage message="setting up privy login ..." />;
  }

  return <></>;
}
