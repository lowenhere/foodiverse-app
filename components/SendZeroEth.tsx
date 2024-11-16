"use client";

import { useState } from "react";
import { useAccount, useChainId } from "wagmi";
import { useSwitchChain } from "wagmi";
import { baseSepolia, sepolia } from "wagmi/chains";
import { useSmartWallet } from "./contexts/SmartWalletContext";
import { Loader2 } from "lucide-react";
import { zeroAddress } from "viem";

export function SendZeroEth() {
  const { address } = useAccount();
  const { switchChain } = useSwitchChain();
  const chainId = useChainId();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    smartAccountClient,
    wagmiWalletClient,
    isLoading: isClientLoading,
    error: clientError,
  } = useSmartWallet();

  const handleSendTransaction = async () => {
    if (isClientLoading || !smartAccountClient) {
      setError("Wallet not ready");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Check chain
      if (chainId !== baseSepolia.id) {
        await switchChain?.({ chainId: baseSepolia.id });
      }
      // Send transaction
      const hash = await smartAccountClient.sendTransaction({
        to: zeroAddress,
        data: "0x",
        value: BigInt(0),
      });

      console.log("Transaction sent:", hash);
    } catch (err: any) {
      console.error("Transaction failed:", err);
      setError(err.message || "Transaction failed");
    } finally {
      setIsLoading(false);
    }
  };

  if (isClientLoading) {
    return (
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-6 w-6 animate-spin" />
        <p className="text-sm text-gray-500">Initializing smart wallet...</p>
      </div>
    );
  }

  if (clientError) {
    return (
      <div className="text-red-500 text-sm">
        Failed to initialize smart wallet: {clientError}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm text-gray-500">
        {smartAccountClient?.account
          ? `Smart Wallet Address: ${smartAccountClient.account.address}`
          : "No smart wallet detected"}
      </div>

      {error && <div className="text-red-500 text-sm">{error}</div>}

      <button
        onClick={handleSendTransaction}
        disabled={isLoading || !smartAccountClient?.account || !address}
        className="text-sm bg-violet-600 hover:bg-violet-700 py-2 px-4 rounded-md text-white
          disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Sending...</span>
          </div>
        ) : (
          "Send 0 ETH to myself"
        )}
      </button>

      <div className="text-xs text-gray-500">
        {address && <div>Recipient Address: {address}</div>}
        {smartAccountClient?.account && (
          <div>Smart Wallet Balance: {/* Add balance display here */}</div>
        )}
      </div>
    </div>
  );
}
