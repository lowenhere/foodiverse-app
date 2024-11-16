import React, { createContext, useContext } from "react";
import { SmartAccountClient } from "permissionless";
import { useState, useEffect, useCallback } from "react";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import {
  usePublicClient,
  useChainId,
  useAccount,
  useWalletClient,
} from "wagmi";
import { http, createWalletClient, custom, createPublicClient } from "viem";
import { createSmartAccountClient } from "permissionless";
import { toSimpleSmartAccount } from "permissionless/accounts";
import { createPimlicoClient } from "permissionless/clients/pimlico";
import { SmartAccount, entryPoint07Address } from "viem/account-abstraction";
import { useSetActiveWallet } from "@privy-io/wagmi";
import { baseSepolia } from "viem/chains";

interface SmartWalletContextType {
  smartAccountClient: SmartAccountClient | null;
  wagmiWalletClient: any;
  isLoading: boolean;
  error: string | null;
}

const SmartWalletContext = createContext<SmartWalletContextType>({
  smartAccountClient: null,
  wagmiWalletClient: null,
  isLoading: false,
  error: null,
});

function useSmartWalletClient() {
  // const { authenticated, ready } = usePrivy();
  // const { wallets } = useWallets();
  const { setActiveWallet } = useSetActiveWallet();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  const [smartAccountClient, setSmartAccountClient] =
    useState<SmartAccountClient | null>(null);
  const [wagmiWalletClient, setWagmiWalletClient] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const setupClients = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // console.log("🚀 | setupClients | wallets:", wallets);

      // Find embedded wallet
      // const embeddedWallet = wallets.find(
      //   (wallet) => wallet.walletClientType === "privy",
      // );

      // if (!embeddedWallet) {
      //   throw new Error("No embedded wallet found");
      // }

      // await setActiveWallet(embeddedWallet);

      const chain = walletClient?.chain;
      if (!chain) throw new Error("Chain not found");

      const publicClient = createPublicClient({
        chain: baseSepolia,
        transport: http("https://base-sepolia-rpc.publicnode.com"),
      });

      // Create Pimlico client
      const pimlicoUrl = `https://api.pimlico.io/v2/${chain.id}/rpc?apikey=${process.env.NEXT_PUBLIC_PIMLICO_API_KEY}`;
      const pimlicoClient = createPimlicoClient({
        transport: http(pimlicoUrl),
        entryPoint: {
          address: entryPoint07Address,
          version: "0.7",
        },
      });

      if (!publicClient) {
        throw new Error("Public client not available");
      }

      if (!walletClient) {
        throw new Error("Wallet client not available");
      }

      // Create smart account
      const smartAccount = await toSimpleSmartAccount({
        owner: walletClient,
        client: publicClient,
        entryPoint: {
          address: entryPoint07Address,
          version: "0.7",
        },
      });

      // Create smart account client
      const client = createSmartAccountClient({
        account: smartAccount,
        chain: baseSepolia,
        bundlerTransport: http(pimlicoUrl),
        paymaster: pimlicoClient,
        userOperation: {
          estimateFeesPerGas: async () => {
            return (await pimlicoClient.getUserOperationGasPrice()).fast;
          },
        },
      });

      setSmartAccountClient(client);
      setIsInitialized(true);
    } catch (err) {
      console.error("Error setting up clients:", err);
      setError(err instanceof Error ? err.message : "Failed to set up clients");
    } finally {
      setIsLoading(false);
    }
  }, [setActiveWallet, walletClient, publicClient, isInitialized]);

  useEffect(() => {
    setupClients();
  }, [setupClients]);

  return {
    smartAccountClient,
    wagmiWalletClient,
    isLoading,
    error,
  };
}

export function SmartWalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useSmartWalletClient();

  // Prevent rendering until initial loading is complete
  if (value.isLoading && !value.smartAccountClient) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-sm text-gray-600">Initializing wallet...</p>
        </div>
      </div>
    );
  }

  return (
    <SmartWalletContext.Provider value={value}>
      {children}
    </SmartWalletContext.Provider>
  );
}

export function useSmartWallet() {
  const context = useContext(SmartWalletContext);
  if (!context) {
    throw new Error("useSmartWallet must be used within a SmartWalletProvider");
  }
  return context;
}
