"use client";

import { useState, useEffect } from "react";
import { FoodiverseSDK } from "@/lib/sign";
import { getPrivateKeyAccount } from "@/lib/sign/privateKey";
import type {
  Restaurant,
  MenuType,
  MenuItemType,
  OrderType,
  OrderItemType,
  PaymentType,
} from "@/lib/sign/types";

export const Dashboard = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(
    null,
  );
  const [menuData, setMenuData] = useState<{
    menus: MenuType[];
    menuItems: Record<string, MenuItemType[]>;
  } | null>(null);
  const [orderData, setOrderData] = useState<{
    orders: OrderType[];
    orderItems: Record<string, OrderItemType[]>;
    payments: Record<string, PaymentType[]>;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadRestaurants();
  }, []);

  useEffect(() => {
    if (selectedRestaurant) {
      loadRestaurantData(selectedRestaurant);
    }
  }, [selectedRestaurant]);

  const loadRestaurants = async () => {
    try {
      setLoading(true);
      console.log("Getting private key account...");
      const account = getPrivateKeyAccount();
      console.log("Account address:", account.address);

      console.log("Initializing SDK...");
      const sdk = new FoodiverseSDK(account);

      console.log("Fetching restaurants...");
      const allRestaurants = await sdk.getAllRestaurants();
      console.log("Restaurants fetched:", allRestaurants);

      setRestaurants(allRestaurants);
    } catch (error: any) {
      console.error("Error loading restaurants:", error);
      setError(`Failed to load restaurants: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const loadRestaurantData = async (restaurantId: string) => {
    try {
      setLoading(true);
      console.log("Loading data for restaurant:", restaurantId);

      const sdk = new FoodiverseSDK(getPrivateKeyAccount());

      // Load menus and menu items
      console.log("Fetching restaurant menus...");
      const { menus, menuItems } = await sdk.getRestaurantMenus("1");
      console.log("Menus:", menus);
      console.log("Menu items:", menuItems);
      setMenuData({ menus, menuItems });

      // Load orders and payments
      console.log("Fetching restaurant orders...");
      const orderData = await sdk.getRestaurantOrders(restaurantId);
      console.log("Order data:", orderData);
      setOrderData(orderData);
    } catch (error: any) {
      console.error("Error loading restaurant data:", error);
      setError(`Failed to load restaurant data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: number | undefined | null) => {
    if (!timestamp) return "N/A";
    // Convert BigInt to number if needed
    const timestampNum =
      typeof timestamp === "bigint" ? Number(timestamp) : timestamp;
    return new Date(timestampNum * 1000).toLocaleString();
  };

  const formatPrice = (price: number | bigint) => {
    // Convert to BigInt for consistent handling
    const priceInWei = typeof price === "number" ? BigInt(price) : price;
    // Convert to string for decimal handling
    const ethValue = Number(priceInWei) / 1e18;
    return `${ethValue.toFixed(4)} ETH`;
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Restaurant Dashboard</h2>

      {/* Debug Information */}
      <div className="mb-4 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Debug Info:</h3>
        <p>Total Restaurants: {restaurants.length}</p>
        <p>Selected Restaurant: {selectedRestaurant || "None"}</p>
        <p>Has Menu Data: {menuData ? "Yes" : "No"}</p>
        <p>Has Order Data: {orderData ? "Yes" : "No"}</p>
        {error && <p className="text-red-500">Error: {error}</p>}
      </div>

      {/* Restaurant Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Select Restaurant
        </label>
        <select
          className="w-full p-2 border rounded"
          value={selectedRestaurant || ""}
          onChange={(e) => setSelectedRestaurant(e.target.value)}
        >
          <option value="">Select a restaurant</option>
          {restaurants.map((restaurant) => (
            <option key={restaurant.id} value={restaurant.id}>
              {restaurant.name} ({restaurant.id})
            </option>
          ))}
        </select>
      </div>

      {selectedRestaurant && menuData && (
        <>
          {/* Menus Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Menus</h3>
            {menuData.menus.map((menu) => (
              <div key={menu.id} className="border rounded-lg p-4">
                <h4 className="text-lg font-medium mb-2">
                  {menu.menuType} Menu
                </h4>
                <p className="text-sm text-gray-600">
                  Valid: {formatDate(menu.startDate)} -{" "}
                  {formatDate(menu.endDate)}
                </p>

                {/* Menu Items */}
                <div className="mt-4">
                  <h5 className="font-medium mb-2">Menu Items</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {menuData.menuItems[menu.id]?.map((item) => (
                      <div
                        key={item.id}
                        className="border rounded p-3 bg-white"
                      >
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          Price: {formatPrice(item.price)}
                        </p>
                        <p className="text-sm text-gray-600">
                          Status:{" "}
                          <span
                            className={
                              item.isAvailable
                                ? "text-green-500"
                                : "text-red-500"
                            }
                          >
                            {item.isAvailable ? "Available" : "Unavailable"}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Orders Section */}
          {orderData && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Orders</h3>
              {orderData.orders.map((order) => (
                <div key={order.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium">
                        Order #{order.id.slice(0, 8)}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Status:{" "}
                        <span
                          className={`font-medium ${
                            order.status === "completed"
                              ? "text-green-500"
                              : order.status === "cancelled"
                                ? "text-red-500"
                                : "text-yellow-500"
                          }`}
                        >
                          {order.status}
                        </span>
                      </p>
                      <p className="text-sm text-gray-600">
                        Created: {formatDate(order.createdAt)}
                      </p>
                    </div>

                    {/* Payment Status */}
                    <div className="text-right">
                      {orderData.payments[order.id]?.map((payment) => (
                        <div key={payment.id} className="text-sm">
                          <p>Amount: {formatPrice(payment.amount)}</p>
                          <p
                            className={`font-medium ${
                              payment.paymentStatus === "paid"
                                ? "text-green-500"
                                : payment.paymentStatus === "failed"
                                  ? "text-red-500"
                                  : "text-yellow-500"
                            }`}
                          >
                            Payment: {payment.paymentStatus}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="mt-4">
                    <h5 className="font-medium mb-2">Order Items</h5>
                    <div className="space-y-2">
                      {orderData.orderItems[order.id]?.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center border-b py-2"
                        >
                          <span>{item.menuItemId}</span>
                          <span>Qty: {item.quantity}</span>
                          {item.notes && (
                            <span className="text-sm text-gray-600">
                              Note: {item.notes}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
