import { http } from "viem";
import { createConfig } from "@wagmi/core";
import { Chain, baseSepolia, mainnet, sepolia } from "viem/chains";

type AppConfig = {
  defaultChain: Chain;
  supportedChains: Chain[];
};

export const config: AppConfig = {
  defaultChain: sepolia,
  supportedChains: [sepolia, mainnet, baseSepolia],
};

// export const wagmiConfig = createConfig({
//   chains: [sepolia, mainnet, baseSepolia],
//   transports: {
//     [sepolia.id]: http(),
//     [mainnet.id]: http(),
//     [baseSepolia.id]: http(),
//   },
//   connectors: [],
// });
