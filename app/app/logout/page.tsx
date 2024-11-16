"use client";
import React, { useEffect } from "react";
import { useSearchParams } from 'next/navigation'

import { useSettings } from "@/components/providers/SettingsProvider";
import PrivyLogout from "@/app/app/logout/privy";

export default function LogoutPage() {
  const searchParams = useSearchParams();  
  const { settings } = useSettings();

  const referrerParam = searchParams.get("referrer");
  const referrer = referrerParam !== null ? decodeURIComponent(referrerParam) : "/";

  const { authProvider } = settings;

  if (authProvider === "privy"){
    return <PrivyLogout referrer={referrer}/>
  }

  return <p>Not Implemented</p>
}
