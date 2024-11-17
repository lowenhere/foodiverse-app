"use client";
import { ReactNode } from "react";
import { Web3ProvidersDynamic } from "./Web3ProvidersDynamic";
import { SmartWalletProvider } from "../contexts/SmartWalletContext";
import { Web3ProvidersWagmi } from "./Web3ProvidersWagmi";

export function Web3Providers({ children }: { children: ReactNode }) {
  return (
    <Web3ProvidersDynamic>
      <SmartWalletProvider>{children}</SmartWalletProvider>
    </Web3ProvidersDynamic>
  );
}
