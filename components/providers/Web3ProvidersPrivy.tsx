"use client";
import { PropsWithChildren } from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { baseSepolia, sepolia } from "viem/chains";

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
        supportedChains: [sepolia, baseSepolia],
      }}
    >
      {children}
    </PrivyProvider>
  );
}
