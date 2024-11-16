"use client";
import { ReactNode } from "react";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { Web3ProvidersPrivy } from "./Web3ProvidersPrivy";
import { Web3ProvidersDynamic } from "./Web3ProvidersDynamic";
import { SmartWalletProvider } from "../contexts/SmartWalletContext";
import { Web3ProvidersWagmi } from "./Web3ProvidersWagmi";

export function Web3Providers({ children }: { children: ReactNode }) {
  return (
    <Web3ProvidersWagmi>
      <Web3ProvidersDynamic>
        <SmartWalletProvider>{children}</SmartWalletProvider>
      </Web3ProvidersDynamic>
    </Web3ProvidersWagmi>
  );
}
