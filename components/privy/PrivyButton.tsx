"use client";
import React, { useState, useEffect } from "react";
import { usePrivy, useWallets } from "@privy-io/react-auth";

export default function PrivyButton() {
  const { login, logout, ready, authenticated, user } = usePrivy();
  const { wallets } = useWallets();
  const [isHovering, setIsHovering] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null);

  useEffect(() => {
    if (wallets.length > 0) {
      setConnectedAddress(wallets[0].address);
    } else {
      setConnectedAddress(null);
    }
  }, [wallets]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const handleClick = () => {
    if (authenticated) {
      logout();
    } else {
      login();
    }
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div
      className={`relative w-36 inline-block overflow-hidden px-1 py-1 rounded-lg ${!authenticated ? "glow" : ""}`}
    >
      {!authenticated ? (
        <div className="absolute inset-0 rounded-md">
          <div className="conic-gradient-circle"></div>
        </div>
      ) : (
        <div className="absolute inset-0 rounded-md">
          <div className=""></div>
        </div>
      )}
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative flex w-full items-center justify-center px-6 py-3 bg-background-light rounded-md border hover:bg-primary-light transition-colors duration-200 z-10 text-white"
        disabled={!ready}
      >
        {authenticated ? (
          <>
            {/* Add icon */}
            <span className="text-md font-regular">
              {isHovering ? (
                <div>
                  <button onClick={logout}>Logout ?</button>
                </div>
              ) : (
                <div>Logout</div>
              )}
            </span>
          </>
        ) : (
          <>
            {/* Add Icon */}
            <span className="text-md  font-medium w-full">Login</span>
          </>
        )}
      </button>
    </div>
  );
}
