"use client";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

import { MenuItem } from "@/app/api/store/[storeId]/route";
import { useStore } from "@/components/providers/StoreProvider";
import { useCart, CartItem } from "@/components/providers/CartProvider";

import SpinnerPage from "@/components/SpinnerPage";
import ErrorPage from "@/components/ErrorPage";

export default function StoreCartPage() {
  const router = useRouter();
  const { isPending, error, data: storeData } = useStore();
  const { cartItems, clearCart } = useCart();

  if (isPending) {
    return <SpinnerPage message="Loading Store Cart ..." />;
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

  let totalItems = 0;
  let totalCost = 0;

  const items = Object.values(cartItems)
    .map(({ menuItemId, quantity }) => {
      const menuItem = menuItems[menuItemId];
      if (!menuItem) {
        return null;
      }

      const { imgSrc, name, price } = menuItem;
      const cost = price * quantity;

      totalItems += quantity;
      totalCost += cost;

      return (
        <tr key={menuItemId}>
          <td>
            <div className="flex items-center justify-center">
              <div className="mask mask-squircle h-12 w-12">
                <img src={imgSrc} alt={name} />
              </div>
            </div>
          </td>
          <td>
            <div>
              <div className="font-bold">{`${quantity} x ${name}`}</div>
              <div className="text-sm opacity-50">${price.toFixed(2)}</div>
            </div>
          </td>
          <td>${cost.toFixed(2)}</td>
        </tr>
      );
    })
    .filter((i) => i !== null);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
      <div className="flex items-center w-full mb-4">
        <button className="w-6 mr-2" onClick={() => router.back()}>
          <ArrowLeftIcon/>
        </button>
        <h1 className="text-2xl font-bold">Your Order</h1>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {items}
          <tr className="font-bold">
            <td>
              <div className="flex items-center justify-center">
                Total
              </div>
            </td>
            <td>{totalItems} x Items</td>
            <td>${totalCost.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 flex justify-between w-full">
        <button 
          className="btn btn-outline btn-secondary" 
          onClick={clearCart}
        >
          Clear Cart
        </button>
        <button 
          className="btn btn-primary"
          onClick={() => {router.push(`/app/store/${storeData.id}/checkout`)}}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
