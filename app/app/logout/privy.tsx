"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";

import SpinnerPage from "@/components/SpinnerPage";

type PrivyLogoutPageProps = {
  referrer: string;
};

export default function PrivyLogoutPage({ referrer }: PrivyLogoutPageProps) {
  const { ready, authenticated, logout } = usePrivy();
  const router = useRouter();

  useEffect(() => {
    if (!ready) {
      return;
    }

    if (!authenticated) {
      router.push(referrer);
      return;
    }

    logout();
  }, [ready, authenticated]);

  if (!ready) {
    return <SpinnerPage message="privy logout ..." />;
  }

  return <></>;
}
