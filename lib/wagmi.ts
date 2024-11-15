import { createConfig, http } from '@wagmi/core'
import { createClient } from 'viem'
import { Chain } from "viem/chains";
import { createConfig as privyCreateConfig } from '@privy-io/wagmi';

import appConfig from "@/config";

type AuthProvider = "privy" | "dynamic" | "web3auth";

export const createWagmiConfig = (authProvider: AuthProvider) => {
  if (authProvider === "privy") {
    return privyCreateConfig({
      chains: appConfig.supportedChains as [Chain, ...Chain[]],
      client({ chain }) {
        return createClient({ chain, transport: http() })
      },
    })
  }

  throw new Error("not implemented");
}

