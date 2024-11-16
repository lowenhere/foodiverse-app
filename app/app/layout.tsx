"use client";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

import { Web3Providers } from "@/components/providers/Web3Providers";
import { SettingsProvider } from "@/components/providers/SettingsProvider";

const TelegramProvider = dynamic(
  () => import("@/components/providers/TelegramProvider"),
  { ssr: false },
);

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <TelegramProvider>
      <SettingsProvider>
        <Web3Providers>{children}</Web3Providers>
      </SettingsProvider>
    </TelegramProvider>
  );
}
