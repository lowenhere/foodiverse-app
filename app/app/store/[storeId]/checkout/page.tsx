"use client";
import { useState, useEffect } from "react";
import { UtensilsCrossed } from "lucide-react";

import Confetti from "react-dom-confetti";

export default function StoreCheckout() {
  const [active, setActive] = useState(false);

  setTimeout(() => {
    setActive(true);
  }, 1500);  

  return (
    <div className="flex flex-col items-center justify-center text-center h-full p-4">
      <UtensilsCrossed className="h-12 w-12 my-4" />
      <p className="text-lg font-bold">Congratulations!</p>
      <p>your order has been made</p>
      <Confetti active={active} />
    </div>
  );
}
