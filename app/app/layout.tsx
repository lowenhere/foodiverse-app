"use client";
import { ReactNode } from "react";

import { Web3Providers } from "@/components/providers/Web3Providers";

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <Web3Providers>{children}</Web3Providers>;
}
