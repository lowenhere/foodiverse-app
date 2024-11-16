"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { StoreData } from "@/app/api/store/[storeId]/route";

type StoreContextType = {
  isPending: boolean;
  error: Error | null;
  data: StoreData | undefined;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

type StoreProviderProps = {
  storeId: string;
  children: ReactNode;
};

export const StoreProvider = ({ storeId, children }: StoreProviderProps) => {
  const { isPending, error, data } = useQuery<StoreData>({
    queryKey: ["store", storeId],
    queryFn: async () => {
      const res = await fetch(`/api/store/${storeId}`);
      if (res.status !== 200) {
        throw new Error(`HTTP ${res.status} ${res.statusText}`);
      }
      return await res.json();
    },
  });

  return (
    <StoreContext.Provider value={{ isPending, error, data }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
