"use client";
import { useState, useEffect } from "react";
import { UtensilsCrossed } from "lucide-react";
import Confetti from "react-dom-confetti";

import { MenuItem } from "@/app/api/store/[storeId]/route";
import { useStore } from "@/components/providers/StoreProvider";
import { useCart } from "@/components/providers/CartProvider";
import { useSmartWallet } from "@/components/contexts/SmartWalletContext";
import { FoodiverseSDK } from "@/lib/sign";
import { useWalletClient } from "wagmi";

import SpinnerPage from "@/components/SpinnerPage";
import ErrorPage from "@/components/ErrorPage";

export default function StoreCheckout() {
  const { smartAccountClient } = useSmartWallet();
  const { data: walletClient } = useWalletClient();
  const [sdk, setSdk] = useState<FoodiverseSDK | null>(null);
  const [link, setLink] = useState<string | null>(null);

  const [confettiActive, setConfettiActive] = useState(false);
  const { data: storeData } = useStore();
  const { cartItems, clearCart } = useCart();

  const [orderLoading, setOrderLoading] = useState(false);
  const [orderError, setOrderError] = useState<string | null>(null);

  useEffect(() => {
    if (smartAccountClient) {
      // Initialize SDK with smart account
      const foodiverseSDK = new FoodiverseSDK(walletClient, smartAccountClient);
      setSdk(foodiverseSDK);
    } else if (walletClient) {
      const foodiverseSDK = new FoodiverseSDK(walletClient);
      setSdk(foodiverseSDK);
    }
  }, [smartAccountClient, walletClient]);

  useEffect(() => {
    handleCreateOrder();
  }, [sdk]);

  const handleCreateOrder = async () => {
    if (!sdk || Object.keys(cartItems).length === 0) return;

    setOrderLoading(true);
    setOrderError(null);

    try {
      // Create order object matching OrderType
      const order = {
        id: crypto.randomUUID(), // Generate unique ID
        status: "pending" as const,
        createdAt: Math.floor(Date.now() / 1000),
        updatedAt: Math.floor(Date.now() / 1000),
        restaurantId: "1", // Using restaurant ID from context
        items: ["12"], // Array of menu item IDs
        total: Number(2), // Calculate total with BigInt
      };

      console.log("Creating order:", order);
      const result = await sdk.createOrder(order);
      setLink(result);
      console.log("Order created:", result);
    } catch (err: any) {
      console.error("Failed to create order:", err);
      setOrderError(err.message);
    } finally {
      setOrderLoading(false);
      clearCart();
      setConfettiActive(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center h-full p-4">
      {orderLoading && <SpinnerPage message="checking out ..." />}

      {orderError && <ErrorPage message={orderError} />}

      {!orderLoading && !orderError && (
        <>
          <UtensilsCrossed className="h-12 w-12 my-4" />
          <p className="text-lg font-bold">Congratulations!</p>
          <p>Your order has been made</p>
          <Confetti active={confettiActive} />
          <div className="mt-4">
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Order
            </a>
          </div>
        </>
      )}
    </div>
  );
}
