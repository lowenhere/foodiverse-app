import { type Address } from "viem";

export type UserType = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type MerchantType = {
  id: string;
  address: string;
  ensName?: string;
  createdAt: string;
  updatedAt: string;
};

export type RestaurantType = {
  id: string;
  ensName?: string;
  paymentAddress: string;
  createdAt: string;
  updatedAt: string;
  merchantId: string;
};

export type MenuType = {
  id: string;
  menuType: "regular" | "special" | "seasonal";
  startDate?: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;
  restaurantId: string;
};

export type MenuItemType = {
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  menuId: string;
};

export type OrderType = {
  id: string;
  status: "pending" | "completed" | "cancelled";
  createdAt: string;
  updatedAt: string;
  restaurantId: string;
};

export type OrderItemType = {
  id: string;
  orderId: string;
  menuItemId: string;
  quantity: number;
  notes?: string;
};

export type PaymentType = {
  id: string;
  orderId: string;
  transactionHash: string;
  amount: number;
  currency: string;
  paymentStatus: "pending" | "paid" | "failed";
  paymentTime: string;
};
