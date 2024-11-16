"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type CartItem = {
  menuItemId: string;
  quantity: number;
};

type CartContextType = {
  cartItems: Record<string, CartItem>;
  removeFromCart: (itemId: string) => void;
  updateCartItem: (itemId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const getLocalStorage = () => {
  if (typeof window == "undefined") {
    return undefined;
  }

  return window.localStorage;
};

const loadCartFromLocalStorage = (key: string): Record<string, CartItem> => {
  const localStorage = getLocalStorage();
  if (!localStorage) {
    return {};
  }

  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : {};
};

const setCartToLocalStorage = (
  key: string,
  cartItems: Record<string, CartItem>,
) => {
  const localStorage = getLocalStorage();
  if (!localStorage) {
    return {};
  }

  localStorage.setItem(key, JSON.stringify(cartItems));
};

export const CartProvider: React.FC<{
  storeId: string;
  children: React.ReactNode;
}> = ({ storeId, children }) => {
  const key = `foodiverse:${storeId}:cart`;
  const [cartItems, setCartItems] = useState<Record<string, CartItem>>(
    loadCartFromLocalStorage(key),
  );

  useEffect(() => {
    setCartToLocalStorage(key, cartItems);
  }, [cartItems, key]);

  const removeFromCart = (itemId: string) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      delete newCart[itemId];
      return newCart;
    });
  };

  const updateCartItem = (itemId: string, quantity: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: { menuItemId: itemId, quantity },
    }));
  };

  const clearCart = () => {
    setCartItems({});
  };

  return (
    <CartContext.Provider
      value={{ cartItems, removeFromCart, updateCartItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
