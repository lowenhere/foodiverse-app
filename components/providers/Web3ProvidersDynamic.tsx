import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { createConfig, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { sepolia, mainnet, arbitrumSepolia } from "viem/chains";

const config = createConfig({
  chains: [sepolia, mainnet, arbitrumSepolia],
  transports: {
    [sepolia.id]: http(),
    [mainnet.id]: http(),
    [arbitrumSepolia.id]: http(),
  },
  connectors: [],
});

const queryClient = new QueryClient();

const dynamicEnvironmentId =
  process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || "";

if (!dynamicEnvironmentId) {
  throw new Error("NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID is not set");
}

export function Web3ProvidersDynamic({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: dynamicEnvironmentId,
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
