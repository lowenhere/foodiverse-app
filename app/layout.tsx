import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foodiverse",
  description: "Enter the Foodiverse!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">{children}</div>
      </body>
    </html>
  );
}
