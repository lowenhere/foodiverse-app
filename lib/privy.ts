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
      loginMethods: ["wallet", "email", "google", "twitter", "discord"],
      appearance: {
        theme: "dark",
        accentColor: "#8B5CF6", // violet-500 to match your UI
        showWalletLoginFirst: true, // Prioritize wallet login
      },
      embeddedWallets: {
        createOnLogin: "users-without-wallets", // Only create embedded wallets for users without existing wallets
        noPromptOnSignature: false,
      },
      externalWallets: {
        walletConnect: {
          enabled: true,
        },
      },
    },
  };
};
