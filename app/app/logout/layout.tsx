"use client";
import { ReactNode } from "react";

export default function LoginLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="container flex flex-col items-center justify-center text-center h-screen p-4">
      {children}
    </main>
  );
}
