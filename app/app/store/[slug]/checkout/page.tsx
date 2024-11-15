"use client";
import { useWallets, getEmbeddedConnectedWallet } from "@privy-io/react-auth";

export default function StoreCheckout() {
  const {ready, wallets} = useWallets();

  const logProvider = async () => {
    const embeddedWallet = getEmbeddedConnectedWallet(wallets);
    const provider = await embeddedWallet?.getEthereumProvider();
    console.log("provider", provider);
  }

  if (!ready) {
    return (
      <>
        <span className="loading loading-spinner loading-lg"></span>
        <p className="my-4">setting up store checkout ...</p>
      </>
    );
  }

  return (
    <div>
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" 
        onClick={logProvider}
      >
        Do the thing
      </button>
    </div>
  );
  }
  