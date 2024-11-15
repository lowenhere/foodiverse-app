"use client";

import { Web3Providers } from "@/components/providers/Web3Providers";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Web3Providers>{children}</Web3Providers>;
}
