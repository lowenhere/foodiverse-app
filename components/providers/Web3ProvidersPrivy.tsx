"use client";
import { PropsWithChildren } from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { sepolia } from "viem/chains";
import { http, createConfig } from "wagmi";
import { WagmiProvider } from "@privy-io/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mantle } from "viem/chains";
import { StorySmartWalletProvider } from "@/contexts/StorySmartWalletContext";
import { odyssey } from "@story-protocol/core-sdk";

export default function Web3ProvidersPrivy({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();

  const wagmiConfig = createConfig({
    chains: [odyssey, mantle],
    transports: {
      [odyssey.id]: http(),
      [mantle.id]: http(),
    },
  });

export function Web3ProvidersPrivy({ children }: PropsWithChildren) {
  const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

  if (!privyAppId) {
    console.error("NEXT_PUBLIC_PRIVY_APP_ID is not set");
    return null;
  }

  return (
    <PrivyProvider
      appId={privyAppId}
      clientId={
        process.env.NODE_ENV === "production"
          ? undefined
          : "client-WY2o7SWZviVQ5FJdYhRbFWyUnXae2XhwPGexM2YFMeBPD"
      }
      config={{
        loginMethods: ["email", "wallet"],
        appearance: {
          theme: "dark",
        },
        embeddedWallets: {
          createOnLogin: "all-users",
        },
        defaultChain: sepolia,
        supportedChains: [sepolia],
      }}
    >
      {children}
    </PrivyProvider>
  );
}
