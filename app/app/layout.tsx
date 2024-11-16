"use client";
import { ReactNode } from "react";

import { Web3Providers } from "@/components/providers/Web3Providers";
import { SettingsProvider } from "@/components/providers/SettingsProvider";

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SettingsProvider>
      <Web3Providers>
        {children}
      </Web3Providers>
    </SettingsProvider>
  );
}
