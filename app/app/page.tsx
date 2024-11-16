"use client";

import { SendZeroEth } from "@/components/SendZeroEth";
import { DynamicButton } from "@/components/dynamic/DynamicButton";
import { PrivyButton } from "@/components/privy/PrivyButton";
import { useSmartWallet } from "@/components/contexts/SmartWalletContext";
import { FoodiverseSDK } from "@/lib/sign";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import type { MenuType, MenuItemType } from "@/lib/sign/types";

export default function AppHome() {
  const { smartAccountClient, isLoading, error } = useSmartWallet();
  const [sdk, setSdk] = useState<FoodiverseSDK | null>(null);
  const [orderLoading, setOrderLoading] = useState(false);
  const [orderError, setOrderError] = useState<string | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);

  useEffect(() => {
    if (smartAccountClient) {
      // Initialize SDK with smart account
      const foodiverseSDK = new FoodiverseSDK(smartAccountClient);
      setSdk(foodiverseSDK);

      // Load menu items
      const loadMenuItems = async () => {
        try {
          const { menus, menuItems } =
            await foodiverseSDK.getRestaurantMenus("1");
          if (menus.length > 0) {
            const firstMenuItems = menuItems[menus[0].id] || [];
            setMenuItems(firstMenuItems);
            console.log("Loaded menu items:", firstMenuItems);
          }
        } catch (err) {
          console.error("Failed to load menu items:", err);
        }
      };

      loadMenuItems();
    }
  }, [smartAccountClient]);

  const handleCreateOrder = async () => {
    if (!sdk || menuItems.length === 0) return;

    setOrderLoading(true);
    setOrderError(null);

    try {
      // Use the first two menu items from the loaded items
      const orderItems = [
        { menuItemId: menuItems[0].id, quantity: 1 },
        { menuItemId: menuItems[1].id, quantity: 2, notes: "Extra spicy" },
      ];

      console.log("Creating order with items:", orderItems);
      const order = await sdk.createOrderWithItems("1", orderItems);
      console.log("Order created:", order);
    } catch (err: any) {
      console.error("Failed to create order:", err);
      setOrderError(err.message);
    } finally {
      setOrderLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto" />
          <p className="mt-2 text-sm text-gray-600">Initializing wallet...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Failed to initialize wallet: {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <DynamicButton />
      <SendZeroEth />
      {smartAccountClient && (
        <div className="p-4 rounded-lg bg-gray-100">
          <p className="font-medium">Smart Account Info:</p>
          <p className="font-mono text-sm">
            Address: {smartAccountClient.account?.address}
          </p>
          {sdk && (
            <>
              <p className="text-green-500">SDK Initialized ✓</p>
              {menuItems.length > 0 ? (
                <>
                  <p className="text-sm text-gray-600 mt-2">
                    Available Menu Items: {menuItems.length}
                  </p>
                  <div className="mt-2 space-y-1">
                    {menuItems.slice(0, 3).map((item) => (
                      <p key={item.id} className="text-sm">
                        • {item.name} (ID: {item.id})
                      </p>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-sm text-yellow-500 mt-2">
                  Loading menu items...
                </p>
              )}
              <button
                onClick={handleCreateOrder}
                disabled={orderLoading || menuItems.length === 0}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
              >
                {orderLoading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Creating Order...</span>
                  </div>
                ) : (
                  "Create Test Order"
                )}
              </button>
              {orderError && (
                <p className="mt-2 text-sm text-red-500">{orderError}</p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
