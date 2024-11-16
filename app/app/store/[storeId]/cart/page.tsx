"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { MenuItem } from "@/app/api/store/[storeId]/route";
import { useStore } from "@/components/providers/StoreProvider";
import { useCart } from "@/components/providers/CartProvider";

import SpinnerPage from "@/components/SpinnerPage";
import ErrorPage from "@/components/ErrorPage";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

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
        <TableRow key={menuItemId}>
          <TableCell className="text-left w-16">
            <div className="flex items-center justify-center">
              <div className="rounded-lg h-12 w-12">
                <img
                  src={imgSrc}
                  alt={name}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </TableCell>
          <TableCell className="text-left">
            <div>
              <div className="font-bold">{`${quantity} x ${name}`}</div>
              <div className="text-sm opacity-50">${price.toFixed(2)}</div>
            </div>
          </TableCell>
          <TableCell className="text-left w-24">${cost.toFixed(2)}</TableCell>
        </TableRow>
      );
    })
    .filter((i) => i !== null);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
      <div className="flex items-center w-full mb-4">
        <Button
          className="w-6 mr-2"
          onClick={() => router.back()}
          variant="link"
        >
          <ArrowLeft />
        </Button>
        <h1 className="text-2xl font-bold">Your Order</h1>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Item</TableHead>
            <TableHead>Cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items}
          <TableRow className="font-bold">
            <TableCell className="text-left w-16">
              <div className="flex items-center justify-center">Total</div>
            </TableCell>
            <TableCell className="text-left">{totalItems} x Items</TableCell>
            <TableCell className="text-left w-24">
              ${totalCost.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="mt-4 flex justify-between w-full">
        <Button
          variant="outline"
          onClick={clearCart}
          className="btn btn-outline btn-secondary"
        >
          Clear Cart
        </Button>
        <Button
          variant="default"
          onClick={() => {
            router.push(`/app/store/${storeData.id}/checkout`);
          }}
          className="btn btn-primary"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}
