import { privateKeyToAccount } from "viem/accounts";

// Replace with your actual private key
const PRIVATE_KEY =
  process.env.NEXT_PUBLIC_PRIVATE_KEY ||
  "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";

export const getPrivateKeyAccount = () => {
  return privateKeyToAccount(PRIVATE_KEY as `0x${string}`);
};
