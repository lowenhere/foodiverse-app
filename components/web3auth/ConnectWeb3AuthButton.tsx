import { useWeb3Auth } from "@web3auth/modal-react-hooks";
import React from "react";

import Image from "next/image";

const ConnectWeb3AuthButton = () => {
  const { isConnected, connect, logout } = useWeb3Auth();

  if (isConnected) {
    return (
      <div
        className="flex flex-row w-fit rounded-lg px-6 py-3 text-white justify-center align-center cursor-pointer"
        style={{ backgroundColor: "#0364ff" }}
        onClick={() => logout({ cleanup: true })}
      >
        Disconnect from web3 auth
      </div>
    );
  }
  return (
    <div
      className="flex flex-row w-fit rounded-lg px-6 py-3 text-white justify-center align-center cursor-pointer"
      style={{ backgroundColor: "#0364ff" }}
      onClick={connect}
    >
      <Image
        src={"/web3AuthLogoWhite.svg"}
        alt="Web3Auth Logo"
        width={20}
        height={20}
      />
      Connect to Web3Auth
    </div>
  );
};
export default ConnectWeb3AuthButton;
