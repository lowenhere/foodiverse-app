"use client";

import { SendZeroEth } from "@/components/SendZeroEth";
import { DynamicButton } from "@/components/dynamic/DynamicButton";

export default function AppHome() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <DynamicButton />
      <SendZeroEth />
    </div>
  );
}
