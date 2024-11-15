"use client";

import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { useAccount } from "wagmi";

export function DynamicButton() {
  const { address, isConnected, chain } = useAccount();

  return (
    <div className="flex flex-col gap-4">
      <DynamicWidget />
      {isConnected && (
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
          <p>Connected: {isConnected ? "✅" : "❌"}</p>
          <p className="font-mono">Address: {address}</p>
          <p>Network: {chain?.name}</p>
        </div>
      )}
    </div>
  );
}
