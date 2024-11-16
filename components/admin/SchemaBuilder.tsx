"use client";

import { useWalletClient } from "wagmi";
import { useState } from "react";
import {
  createUserSchema,
  createMerchantSchema,
  createRestaurantSchema,
  createMenuSchema,
  createMenuItemSchema,
  createOrderSchema,
  createOrderItemSchema,
  createPaymentSchema,
} from "@/lib/sign/schemaBuilder";

export const SchemaBuilder = () => {
  const { data: walletClient } = useWalletClient();
  const [loading, setLoading] = useState<string | null>(null);
  const [results, setResults] = useState<Record<string, string>>({});

  const handleCreateSchema = async (
    schemaName: string,
    createFunction: (walletClient: any) => Promise<any>,
  ) => {
    if (!walletClient) {
      alert("Please connect your wallet first");
      return;
    }

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

  const schemas = [
    { name: "User", function: createUserSchema },
    { name: "Merchant", function: createMerchantSchema },
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
