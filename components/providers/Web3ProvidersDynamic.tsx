import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConfig } from "@/config";

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
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
