"use client";
import { ReactNode } from "react";
import { useParams } from "next/navigation";

import StoreNavBar from "@/components/StoreNavBar";
import { StoreProvider } from "@/components/providers/StoreProvider";
import { CartProvider } from "@/components/providers/CartProvider";

export default function StoreLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { storeId } = useParams<{ storeId: string }>();

  return (
    <StoreProvider storeId={storeId}>
      <CartProvider storeId={storeId}>
        <StoreNavBar />
        <main className="container h-full flex flex-col items-center p-4">
          {children}
        </main>
      </CartProvider>
    </StoreProvider>
  );
}
