"use client";
import { useRouter } from "next/navigation";

import { MenuItem } from "@/app/api/store/[storeId]/route";
import { useStore } from "@/components/providers/StoreProvider";
import { useCart, CartItem } from "@/components/providers/CartProvider";

import SpinnerPage from "@/components/SpinnerPage";
import ErrorPage from "@/components/ErrorPage";
import StoreMenuCard from "@/components/StoreMenuCard";
import StoreCartButton from "@/components/StoreCartButton";

export default function StorePage() {
  const router = useRouter();

  const { isPending, error, data: storeData } = useStore();
  const { cartItems, removeFromCart, updateCartItem } = useCart();

  if (isPending) {
    return <SpinnerPage message="Loading Store ..." />;
  }

  if (error) {
    return <ErrorPage message={error.message} />;
  }

  if (!storeData) {
    return <ErrorPage message="!storeData" />;
  }

  const menuItems = storeData.items.reduce(
    (acc, item) => {
      acc[item.id] = item;
      return acc;
    },
    {} as Record<string, MenuItem>,
  );

  const { totalItems, totalPrice } = getCartSummary(menuItems, cartItems);

  const cards = Object.values(menuItems).map(({ id, name, price, imgSrc }) => {
    const initialQuantity = cartItems[id]?.quantity ?? 0;
    return (
      <StoreMenuCard
        key={id}
        id={id}
        name={name}
        price={price}
        isAvailable={true}
        initialQuantity={initialQuantity}
        onQuantityChange={(quantity) => {
          if (quantity === 0) {
            removeFromCart(id);
          } else {
            updateCartItem(id, quantity);
          }
        }}
        imageUrl={imgSrc}
      />
    );
  });

  return (
    <div>
      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {cards}
      </div>
      {totalItems == 0 || (
        <StoreCartButton
          totalItems={totalItems}
          totalPrice={totalPrice}
          onClick={() => router.push(`/app/store/${storeData.id}/cart`)}
        />
      )}
    </div>
  );
}
const getCartSummary = (
  menuItems: Record<string, MenuItem>,
  cartItems: Record<string, CartItem>,
) => {
  let totalItems = 0;
  let totalPrice = 0;

  for (const itemId in cartItems) {
    const cartItem = cartItems[itemId];
    const menuItem = menuItems[cartItem.menuItemId];

    if (menuItem) {
      totalItems += cartItem.quantity;
      totalPrice += cartItem.quantity * menuItem.price; // Assuming price is in storeItems
    }
  }

  return { totalItems, totalPrice };
};

