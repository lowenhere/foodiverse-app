import { http } from "viem";
import {
  Chain,
  base,
  baseSepolia,
  celo,
  mainnet,
  mantleSepoliaTestnet,
  morphHolesky,
  scrollSepolia,
  sepolia,
  zircuitTestnet,
} from "viem/chains";
import { createConfig } from "wagmi";

type AppConfig = {
  defaultChain: Chain;
  supportedChains: Chain[];
};

export const config: AppConfig = {
  defaultChain: baseSepolia,
  supportedChains: [
    sepolia,
    mainnet,
    base,
    baseSepolia,
    mantleSepoliaTestnet,
    morphHolesky,
    scrollSepolia,
    zircuitTestnet,
    celo,
  ],
};

export const wagmiConfig = createConfig({
  chains: [
    sepolia,
    mainnet,
    base,
    baseSepolia,
    mantleSepoliaTestnet,
    morphHolesky,
    scrollSepolia,
    zircuitTestnet,
    celo,
  ],

  transports: {
    [sepolia.id]: http(),
    [mainnet.id]: http(),
    [baseSepolia.id]: http("https://base-sepolia-rpc.publicnode.com"),
    [base.id]: http(),
    [celo.id]: http(),
    [morphHolesky.id]: http(),
    [scrollSepolia.id]: http(),
    [zircuitTestnet.id]: http(),
    [mantleSepoliaTestnet.id]: http(),
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
