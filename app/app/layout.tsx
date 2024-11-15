"use client";
import { PrivyProvider } from "@privy-io/react-auth";
import { getPrivyProps } from "@/lib/privy";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PrivyProvider {...getPrivyProps()}>{children}</PrivyProvider>;
}
