"use client";

import { usePrivy, useSendTransaction, useWallets } from "@privy-io/react-auth";
import { useState } from "react";
import { parseEther, createWalletClient, custom } from "viem";

export function SendZeroEth() {
  const { user } = usePrivy();
  const { wallets } = useWallets();
  const { sendTransaction } = useSendTransaction();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendTransaction = async () => {
    if (!user?.wallet?.address || !wallets[0]) return;

    setIsLoading(true);
    try {
      const tx = await sendTransaction({
        to: user.wallet.address as `0x${string}`,
        value: parseEther("0"),
      });

      console.log("Transaction hash:", tx);
    } catch (error) {
      console.error("Transaction failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleSendTransaction}
      disabled={isLoading || !user?.wallet?.address}
      className="text-sm bg-violet-600 hover:bg-violet-700 py-2 px-4 rounded-md text-white disabled:bg-gray-400"
    >
      {isLoading ? "Sending..." : "Send 0 ETH to myself"}
    </button>
  );
}
