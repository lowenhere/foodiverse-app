"use client";
import { PropsWithChildren } from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import {
  base,
  baseSepolia,
  celo,
  mainnet,
  mantleSepoliaTestnet,
  morphHolesky,
  scrollSepolia,
  sepolia,
  zircuitTestnet,
} from "viem/chains";
import { wagmiConfig } from "@/config";
import { WagmiProvider } from "@privy-io/wagmi";

export function Web3ProvidersPrivy({ children }: PropsWithChildren) {
  const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
  if (!privyAppId) {
    console.error("NEXT_PUBLIC_PRIVY_APP_ID is not set");
    return null;
  }

  const privyClientId = process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID;
  if (!privyAppId) {
    console.error("NEXT_PUBLIC_PRIVY_CLIENT_ID is not set");
    return null;
  }

  return (
    <PrivyProvider
      appId={privyAppId}
      clientId={privyClientId}
      config={{
        loginMethods: ["wallet", "google"],
        appearance: {
          theme: "dark",
        },
        embeddedWallets: {
          createOnLogin: "all-users",
        },
        defaultChain: baseSepolia,
        supportedChains: [
          sepolia,
          mainnet,
          base,
          baseSepolia,
          mantleSepoliaTestnet,
          morphHolesky,
          scrollSepolia,
          zircuitTestnet,
          celo,
        ],
      }}
    >
      <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>
    </PrivyProvider>
  );
}
