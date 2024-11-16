import React, { useState } from "react";

interface MenuItemCardProps {
  id: string; // UUID
  name: string; // Name of the menu item
  price: number; // Price of the menu item
  isAvailable: boolean; // Whether the menu item is currently available
  initialQuantity: number; // Initial quantity of the menu item
  onQuantityChange: (quantity: number) => void; // Callback for quantity change
  imageUrl?: string; // URL of the menu item image (now optional)
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  id,
  name,
  price,
  isAvailable,
  initialQuantity,
  onQuantityChange,
  imageUrl,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const decrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div
      className={`card card-compact ${isAvailable ? "bg-base-100" : "bg-gray-200"}`}
    >
      <figure className="h-36">
        <img
          src={imageUrl || "path/to/placeholder-image.jpg"} // Fallback image
          alt={name}
        />
      </figure>
      <div className="card-body">
        <p className="card-title">{name}</p>
        <p>Price: ${price.toFixed(2)}</p>
        <div className="flex items-center">
          <button className="btn" onClick={decrement}>
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button className="btn" onClick={increment}>
            +
          </button>
        </div>
        <p
          className={`text-sm ${isAvailable ? "text-green-500" : "text-red-500"}`}
        >
          {isAvailable ? "Available" : "Not Available"}
        </p>
      </div>
    </div>
  );
};

export default MenuItemCard;
