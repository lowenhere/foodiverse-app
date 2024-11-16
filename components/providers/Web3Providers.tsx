"use client";
import { ReactNode } from "react";

import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { Web3ProvidersPrivy } from "./Web3ProvidersPrivy";
import { Web3ProvidersDynamic } from "./Web3ProvidersDynamic";

export function Web3Providers({ children }: { children: ReactNode }) {
  return (
    <Web3ProvidersDynamic>
      <Web3ProvidersPrivy>
        <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
      </Web3ProvidersPrivy>
    </Web3ProvidersDynamic>
  );
}
