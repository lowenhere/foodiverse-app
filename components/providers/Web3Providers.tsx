"use client";

import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { Web3ProvidersPrivy } from "./Web3ProvidersPrivy";
// import { Web3ProvidersWagmi } from "./Web3ProvidersWagmi";
import { Web3ProvidersDynamic } from "./Web3ProvidersDynamic";
import { Web3ProvidersWeb3Auth } from "./Web3ProvidersWeb3Auth";

export function Web3Providers({ children }: { children: React.ReactNode }) {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Web3ProvidersWeb3Auth>
      <Web3ProvidersDynamic>
        <Web3ProvidersPrivy>
          <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
        </Web3ProvidersPrivy>
      </Web3ProvidersDynamic>
    </Web3ProvidersWeb3Auth>
  );
}
