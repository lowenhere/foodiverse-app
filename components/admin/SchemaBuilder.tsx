"use client";

import { useWalletClient } from "wagmi";
import { useState } from "react";
import { createPublicClient, http } from "viem";
import { baseSepolia } from "viem/chains";
import {
  createUserSchema,
  createRestaurantSchema,
  createMenuSchema,
  createMenuItemSchema,
  createOrderSchema,
  createOrderItemSchema,
  createPaymentSchema,
} from "@/lib/sign/schemaBuilder";
import { createMockDataFromJson } from "@/lib/sign/mockData";
import { FoodiverseSDK } from "@/lib/sign";
import { getPrivateKeyAccount } from "@/lib/sign/privateKey";
import storeData from "@/app/api/store/[storeId]/21.json";

export const SchemaBuilder = () => {
  const { data: walletClient } = useWalletClient();
  const [loading, setLoading] = useState<string | null>(null);
  const [progress, setProgress] = useState<string>("");
  const [results, setResults] = useState<Record<string, string>>({});

  const handleCreateSchema = async (
    schemaName: string,
    createFunction: (walletClient: any) => Promise<any>,
  ) => {
    setLoading(schemaName);
    try {
      const result = await createFunction(walletClient);
      setResults((prev) => ({
        ...prev,
        [schemaName]: `Schema created with ID: ${result.schemaId}`,
      }));
    } catch (error: any) {
      console.error(error);
      setResults((prev) => ({
        ...prev,
        [schemaName]: `Error: ${error?.message || "Unknown error occurred"}`,
      }));
    }
    setLoading(null);
  };

  const handleCreateMockData = async () => {
    setLoading("mockData");
    try {
      const account = getPrivateKeyAccount();
      const sdk = new FoodiverseSDK(account);
      const mockData = createMockDataFromJson(storeData);

      // Create restaurant
      setProgress("Creating restaurant...");
      try {
        const restaurantId = await sdk.createRestaurant(mockData.restaurant);
        console.log("Restaurant created:", mockData.restaurant);

        // Create menu
        setProgress("Creating menu...");
        const menuId = await sdk.createMenu(mockData.menu);
        console.log("Menu created:", mockData.menu);

        // Create menu items with progress
        const totalItems = mockData.menuItems.length;
        let successCount = 0;
        let failedItems: string[] = [];

        for (let i = 0; i < mockData.menuItems.length; i++) {
          const item = mockData.menuItems[i];
          setProgress(`Creating menu items... (${i + 1}/${totalItems})`);
          try {
            await sdk.createMenuItem(item);
            successCount++;
            console.log("MenuItem created:", item);
          } catch (error: any) {
            console.error(`Failed to create menu item: ${item.name}`, error);
            failedItems.push(`${item.name} (${error.message})`);
          }
          // Add a small delay to avoid rate limiting
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        setResults((prev) => ({
          ...prev,
          mockData: `Mock data created successfully!
            Restaurant ID: ${restaurantId}
            Menu ID: ${menuId}
            Items created: ${successCount}/${totalItems}
            ${failedItems.length > 0 ? `\nFailed items:\n${failedItems.join("\n")}` : ""}`,
        }));
      } catch (error: any) {
        console.error("Failed to create restaurant:", error);
        console.log("Restaurant data:", mockData.restaurant);
        setResults((prev) => ({
          ...prev,
          mockData: `Error creating restaurant: ${error.message}\nData: ${JSON.stringify(mockData.restaurant, null, 2)}`,
        }));
      }
    } catch (error: any) {
      console.error(error);
      setResults((prev) => ({
        ...prev,
        mockData: `Error: ${error?.message || "Unknown error occurred"}`,
      }));
    }
    setLoading(null);
    setProgress("");
  };

  const schemas = [
    { name: "User", function: createUserSchema },
    { name: "Restaurant", function: createRestaurantSchema },
    { name: "Menu", function: createMenuSchema },
    { name: "MenuItem", function: createMenuItemSchema },
    { name: "Order", function: createOrderSchema },
    { name: "OrderItem", function: createOrderItemSchema },
    { name: "Payment", function: createPaymentSchema },
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Schema Builder</h2>

      {/* Mock Data Creation Button */}
      <div className="border rounded-lg p-4 mb-6 bg-gray-50">
        <h3 className="text-lg font-semibold mb-4">Create Mock Data</h3>
        <button
          onClick={handleCreateMockData}
          disabled={loading === "mockData"}
          className={`w-full px-4 py-2 rounded-md ${
            loading === "mockData"
              ? "bg-gray-400"
              : "bg-green-500 hover:bg-green-600"
          } text-white transition-colors`}
        >
          {loading === "mockData"
            ? progress || "Creating..."
            : "Create Mock Data"}
        </button>
        {results.mockData && (
          <pre
            className={`mt-2 text-sm whitespace-pre-wrap ${
              results.mockData.startsWith("Error")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {results.mockData}
          </pre>
        )}
      </div>

      {/* Schema Creation Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {schemas.map((schema) => (
          <div key={schema.name} className="border rounded-lg p-4 space-y-4">
            <h3 className="text-lg font-semibold">{schema.name} Schema</h3>
            <button
              onClick={() => handleCreateSchema(schema.name, schema.function)}
              disabled={loading === schema.name}
              className={`w-full px-4 py-2 rounded-md ${
                loading === schema.name
                  ? "bg-gray-400"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white transition-colors`}
            >
              {loading === schema.name
                ? "Creating..."
                : `Create ${schema.name} Schema`}
            </button>
            {results[schema.name] && (
              <p
                className={`text-sm ${
                  results[schema.name].startsWith("Error")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {results[schema.name]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
