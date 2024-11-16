"use client";

import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useState } from "react";
import { parseEther } from "viem";
import { useSendTransaction, useAccount, useChainId } from "wagmi";
import { useSwitchChain } from "wagmi";
import { sepolia } from "wagmi/chains";
import { useWalletProvider } from "./hooks/useWalletProvider";

export function SendZeroEth() {
  const { user } = usePrivy();
  const { wallets } = useWallets();
  const { address } = useAccount();
  const { sendTransaction, isPending: isWagmiLoading } = useSendTransaction();
  const { switchChain } = useSwitchChain();
  const chainId = useChainId();
  const [isLoading, setIsLoading] = useState(false);
  const provider = useWalletProvider();

  const handleSendTransaction = async () => {
    console.log(address);
    if (!address) return;

    setIsLoading(true);
    try {
      // Log the detected provider
      console.log("Using provider:", provider);

      // Check if we're on Sepolia, if not switch to it
      if (chainId !== sepolia.id) {
        switchChain?.({ chainId: sepolia.id });
      }

      // Send transaction using the appropriate provider
      const tx = await sendTransaction({
        to: address as `0x${string}`,
        value: parseEther("0"),
      });

      console.log("Transaction sent:", tx);
    } catch (error) {
      console.error("Transaction failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm text-gray-500">
        {provider ? `Connected via: ${provider}` : "No wallet detected"}
      </div>

      <button
        onClick={handleSendTransaction}
        // disabled={isLoading || isWagmiLoading || !address}
        className="text-sm bg-violet-600 hover:bg-violet-700 py-2 px-4 rounded-md text-white
          disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading || isWagmiLoading ? "Sending..." : "Send 0 ETH to myself"}
      </button>
    </div>
  );
}
