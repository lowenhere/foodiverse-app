"use client";
import React, { useState, useEffect } from "react";
import { usePrivy, useWallets } from "@privy-io/react-auth";

export function PrivyButton() {
  const { login, logout, ready, authenticated, user } = usePrivy();
  const { wallets } = useWallets();
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null);

  useEffect(() => {
    if (wallets.length > 0) {
      setConnectedAddress(wallets[0].address);
    } else {
      setConnectedAddress(null);
    }
  }, [wallets]);

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={authenticated ? logout : login}
        disabled={!ready}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 disabled:bg-gray-400"
      >
        {!ready
          ? "Loading..."
          : authenticated
            ? "Disconnect Wallet"
            : "Connect Wallet"}
      </button>

      {authenticated && connectedAddress && (
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
          <p>Connected: ✅</p>
          <p className="font-mono">
            Address: {truncateAddress(connectedAddress)}
          </p>
          {user?.email && <p>Email: {user.email}</p>}
        </div>
      )}
    </div>
  );
}
