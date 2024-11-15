import { PrivyProviderProps } from "@privy-io/react-auth";
import config from "@/config";

export const getPrivyProps = (): Omit<PrivyProviderProps, "children"> => {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

  if (!appId) {
    throw new Error("process.env.NEXT_PUBLIC_PRIVY_APP_ID not set");
  }

  return {
    appId,
    config: {
      defaultChain: config.defaultChain,
      supportedChains: config.supportedChains,
    },
  };
};
