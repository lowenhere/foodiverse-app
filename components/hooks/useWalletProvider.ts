import { useEffect, useState } from "react";
import { usePrivy, useWallets } from "@privy-io/react-auth";

export type WalletProvider =
  | "privy"
  | "dynamic"
  | "metamask"
  | "injected"
  | null;

export function useWalletProvider() {
  const [provider, setProvider] = useState<WalletProvider>(null);
  const { wallets } = useWallets();
  const { ready } = usePrivy();

  useEffect(() => {
    const detectProvider = async () => {
      try {
        // Wait for Privy to be ready
        if (!ready) return;

        // Check for Privy embedded wallet
        const privyWallet = wallets.find(
          (wallet) => wallet.walletClientType === "privy",
        );
        if (privyWallet) {
          setProvider("privy");
          return;
        }

        // Check for Dynamic
        if ((window as any).dynamic) {
          setProvider("dynamic");
          return;
        }

        // Check for MetaMask
        if ((window as any).ethereum?.isMetaMask) {
          setProvider("metamask");
          return;
        }

        // Check for other injected wallets
        if ((window as any).ethereum) {
          setProvider("injected");
          return;
        }

        setProvider(null);
      } catch (error) {
        console.error("Error detecting provider:", error);
        setProvider(null);
      }
    };

    detectProvider();
  }, [wallets, ready]);

  return provider;
}
