"use client";

import {
  usePrivy,
  useWallets as usePrivyWallets,
  useWallets,
} from "@privy-io/react-auth";
import { useState } from "react";
import { parseEther } from "viem";
import { useSendTransaction, useAccount, useChainId } from "wagmi";
import { useSwitchChain } from "wagmi";
import { sepolia } from "wagmi/chains";

export function SendZeroEth() {
  const { user } = usePrivy();
  const { address } = useAccount();
  const { sendTransaction, isPending: isWagmiLoading } = useSendTransaction();
  const { switchChain } = useSwitchChain();
  const chainId = useChainId();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendTransaction = async () => {
    // if (!user?.wallet?.address || !wallets[0]) return;

    setIsLoading(true);
    try {
      // Check if we're on Sepolia, if not switch to it
      if (chainId !== sepolia.id) {
        switchChain?.({ chainId: sepolia.id });
      }

      sendTransaction({
        to: address as `0x${string}`,
        value: parseEther("0"),
      });

      // console.log("Transaction hash:", hash);
    } catch (error) {
      console.error("Transaction failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // const isDisabled = isLoading || isWagmiLoading || !user?.wallet?.address;

  return (
    <button
      onClick={handleSendTransaction}
      // disabled={isDisabled}
      className="text-sm bg-violet-600 hover:bg-violet-700 py-2 px-4 rounded-md text-white disabled:bg-gray-400"
    >
      {isLoading || isWagmiLoading ? "Sending..." : "Send 0 ETH to myself"}
    </button>
  );
}
