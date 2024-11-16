"use client";

import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { useAccount } from "wagmi";

export function DynamicConnect() {
  const { address, isConnected, chain } = useAccount();

  return (
    <div className="flex flex-col gap-4">
      <DynamicWidget />

      {isConnected && (
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
          <p className="text-sm">Connected: {isConnected ? "✅" : "❌"}</p>
          <p className="text-sm font-mono">Address: {address}</p>
          <p className="text-sm">
            Network: {chain?.name} (Chain ID: {chain?.id})
          </p>
        </div>
      )}
    </div>
  );
}
