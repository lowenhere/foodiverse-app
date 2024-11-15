import type { Metadata } from "next";
import "./globals.css";
import { Web3ProvidersDynamic } from '@/components/providers/Web3ProvidersDynamic';
import { Web3ProvidersPrivy } from '@/components/providers/Web3ProvidersPrivy';

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
        <Web3ProvidersDynamic>
          <Web3ProvidersPrivy>
            <div className="min-h-screen w-full flex flex-col">{children}</div>
          </Web3ProvidersPrivy>
        </Web3ProvidersDynamic>
      </body>
    </html>
  );
}
