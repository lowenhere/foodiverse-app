// User
export type User = {
    id: string; // UUID
    createdAt: Date; // Timestamp when the user was added
    updatedAt: Date; // Timestamp when the user was last updated
};

// Order
export type Order = {
    id: string; // UUID
    status: "pending" | "completed" | "cancelled"; // Enum for order status
    createdAt: Date; // Timestamp when the order was created
    updatedAt: Date; // Timestamp when the order was last updated
    restaurantId: string; // Foreign key to Restaurant
};

// OrderItem
export type OrderItem = {
    id: string; // UUID
    orderId: string; // Foreign key to Order
    menuItemId: string; // Foreign key to MenuItem
    quantity: number; // Number of items ordered
    notes?: string; // Special instructions for the kitchen
};

// Menu
export type Menu = {
    id: string; // UUID
    menuType: "regular" | "special" | "seasonal"; // Enum for menu type
    startDate?: Date; // Optional start date for menu validity
    endDate?: Date; // Optional end date for menu validity
    createdAt: Date; // Timestamp when the menu was created
    updatedAt: Date; // Timestamp when the menu was last updated
    restaurantId: string; // Foreign key to Restaurant
};

// MenuItem
export type MenuItem = {
    id: string; // UUID
    name: string; // Name of the menu item
    price: number; // Price of the menu item
    isAvailable: boolean; // Whether the menu item is currently available
    createdAt: Date; // Timestamp when the menu item was added
    updatedAt: Date; // Timestamp when the menu item was last updated
    menuId: string; // Foreign key to Menu
};

// Merchant
export type Merchant = {
    id: string; // UUID
    address: string; // Wallet address for payments
    ensName?: string; // Optional ENS domain name
    createdAt: Date; // Timestamp when the merchant was added
    updatedAt: Date; // Timestamp when the merchant was last updated
};

// Restaurant
export type Restaurant = {
    id: string; // UUID
    ensName?: string; // Optional ENS domain name
    paymentAddress: string; // Wallet address for payments
    createdAt: Date; // Timestamp when the restaurant was added
    updatedAt: Date; // Timestamp when the restaurant information was last updated
    merchantId: string; // Foreign key to Merchant
};

// Payment
export type Payment = {
    id: string; // UUID
    orderId: string; // Foreign key to Order
    transactionHash: string; // Blockchain transaction hash
    amount: number; // Payment amount
    currency: string; // Cryptocurrency used (e.g., USDC, ETH)
    paymentStatus: "pending" | "paid" | "failed"; // Enum for payment status
    paymentTime: Date; // Timestamp when the payment was made
};