export type UserType = {
  id: string;
  createdAt: number;
  updatedAt: number;
};

// Restaurant (Merged with Merchant)
export type Restaurant = {
  id: string; // UUID
  name: string; // Name of the restaurant or merchant
  paymentAddress: string; // Wallet address for payments
  ensName?: string; // Optional ENS domain name
  createdAt: number; // Unix timestamp
  updatedAt: number; // Unix timestamp
};

export type MenuType = {
  id: string;
  menuType: "regular" | "special" | "seasonal";
  startDate?: number;
  endDate?: number;
  createdAt: number;
  updatedAt: number;
  restaurantId: string;
};

export type MenuItemType = {
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  createdAt: number;
  updatedAt: number;
  menuId: string;
};

export type OrderType = {
  id: string;
  status: "pending" | "completed" | "cancelled";
  createdAt: number;
  updatedAt: number;
  restaurantId: string;
  items: OrderItemType[];
  total: number;
};

export type OrderItemType = {
  id: string;
  orderId: string;
  menuItemId: string;
  menuItem?: MenuItemType;
  quantity: number;
  notes?: string;
  price: number;
};

export type PaymentType = {
  id: string;
  orderId: string;
  transactionHash: string;
  amount: number;
  currency: string;
  paymentStatus: "pending" | "paid" | "failed";
  paymentTime: number;
};
