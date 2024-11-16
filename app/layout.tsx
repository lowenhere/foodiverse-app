import { ReactNode } from "react";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foodiverse",
  description: "Enter the Foodiverse!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center w-screen">{children}</div>
      </body>
    </html>
  );
}
