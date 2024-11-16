import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

interface StoreCartButtonProps {
  totalItems: number; // Total number of items in the cart
  totalPrice: number; // Total price of items in the cart
  onClick: () => void; // Click handler for the button
}

const StoreCartButton: React.FC<StoreCartButtonProps> = ({
  totalItems,
  totalPrice,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition flex items-center"
    >
      <ShoppingCartIcon className="h-6 w-6 mr-2" />
      {totalItems} Items (${totalPrice.toFixed(2)})
    </button>
  );
};

export default StoreCartButton;
