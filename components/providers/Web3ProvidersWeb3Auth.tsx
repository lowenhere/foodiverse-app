import {
  Web3AuthInnerContext,
  Web3AuthProvider,
} from "@web3auth/modal-react-hooks";
import { WalletServicesProvider } from "@web3auth/wallet-services-plugin-react-hooks";
import { web3AuthContextConfig } from "@/lib/web3auth";
console.log("🚀 | web3AuthContextConfig:", web3AuthContextConfig);

const dynamicEnvironmentId =
  process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || "";

if (!dynamicEnvironmentId) {
  throw new Error("NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID is not set");
}

export function Web3ProvidersWeb3Auth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Web3AuthProvider config={web3AuthContextConfig}>
      <WalletServicesProvider context={Web3AuthInnerContext}>
        {children}
      </WalletServicesProvider>
    </Web3AuthProvider>
  );
}
