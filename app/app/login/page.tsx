"use client";
import React, { useEffect } from "react";

import { useSettings } from "@/components/providers/SettingsProvider";
import PrivyLogin from "@/app/app/login/privy";

export default function LoginPage() {
  const { settings } = useSettings();

  const { authProvider } = settings;

  if (authProvider === "privy"){
    return <PrivyLogin/>
  }

  return <p>Not Implemented</p>
}
