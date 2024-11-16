import { http } from "viem";
import { Chain, base, baseSepolia, mainnet, sepolia } from "viem/chains";
import { createConfig } from "wagmi";

type AppConfig = {
  defaultChain: Chain;
  supportedChains: Chain[];
};

const config: AppConfig = {
  defaultChain: sepolia,
  supportedChains: [sepolia, mainnet, base, baseSepolia],
};

export const wagmiConfig = createConfig({
  chains: [sepolia, mainnet, base, baseSepolia],
  transports: {
    [sepolia.id]: http(),
    [mainnet.id]: http(),
    [baseSepolia.id]: http(),
    [base.id]: http(),
  },
  connectors: [],
});

// export const wagmiConfig = createConfig({
//   chains: [sepolia, mainnet, baseSepolia],
//   transports: {
//     [sepolia.id]: http(),
//     [mainnet.id]: http(),
//     [baseSepolia.id]: http(),
//   },
//   connectors: [],
// });
