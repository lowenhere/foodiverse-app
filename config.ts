import { Chain, sepolia } from "viem/chains";

type AppConfig = {
  defaultChain: Chain,
  supportedChains: Chain[],
}

const config: AppConfig = {
  defaultChain: sepolia,
  supportedChains: [sepolia],
}

export default config;