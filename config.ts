import { Chain, baseSepolia, mainnet, sepolia } from "viem/chains";

type AppConfig = {
  defaultChain: Chain;
  supportedChains: Chain[];
};

const config: AppConfig = {
  defaultChain: sepolia,
  supportedChains: [sepolia, mainnet, baseSepolia],
};

export default config;
