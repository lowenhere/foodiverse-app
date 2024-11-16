"use client";
import React, { useEffect } from "react";
import { useSearchParams } from 'next/navigation'

import { useSettings } from "@/components/providers/SettingsProvider";
import PrivyLogin from "@/app/app/login/privy";

export default function LoginPage() {
  const searchParams = useSearchParams();  
  const { settings } = useSettings();

  const referrerParam = searchParams.get("referrer");
  const referrer = referrerParam !== null ? decodeURIComponent(referrerParam) : "/";

  const { authProvider } = settings;

  if (authProvider === "privy"){
    return <PrivyLogin referrer={referrer}/>
  }

  return <p>Not Implemented</p>
}
