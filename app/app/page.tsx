"use client";

import { SendZeroEth } from "@/components/SendZeroEth";
import { DynamicButton } from "@/components/dynamic/DynamicButton";
import ConnectWeb3AuthButton from "@/components/web3auth/ConnectWeb3AuthButton";
import { PrivyButton } from "@/components/privy/PrivyButton";

export default function AppHome() {
  // if (isConnected) {
  return (
    <div className="flex flex-col gap-4">
      <DynamicButton />
      <ConnectWeb3AuthButton />
      <PrivyButton />
      <SendZeroEth />
    </div>
  );
  // } else {
  //   return (
  //     <div className="main">
  //       {connectors.map((connector) => {
  //         // return (
  //         //   <button
  //         //     className="card"
  //         //     key={connector.id}
  //         //     onClick={() => connect({ connector })}
  //         //   >
  //         //     {connector.name}
  //         //   </button>
  //         // );
  //       })}
  //       {error && <div>{error.message}</div>}
  //     </div>
  //   );
  // }
}
// return (
//   <div className="flex min-h-screen flex-col items-center justify-center p-24">
//     <DynamicButton />
//     <SendZeroEth />
//   </div>
// );
