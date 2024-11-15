"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";

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
      <>
        <span className="loading loading-spinner loading-lg"></span>
        <p className="my-4">setting up login ...</p>
      </>
    );
  }

  return <></>;
}
