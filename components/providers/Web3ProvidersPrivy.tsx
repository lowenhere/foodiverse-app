"use client";
import { PropsWithChildren } from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { sepolia } from "viem/chains";
import { http, createConfig } from "wagmi";
import { WagmiProvider } from "@privy-io/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mantle } from "viem/chains";

export function Web3ProvidersPrivy({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();

  const wagmiConfig = createConfig({
    chains: [mantle],
    transports: {
      [mantle.id]: http(),
    },
  });

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
