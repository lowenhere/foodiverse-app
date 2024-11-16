import { useEnsName } from "wagmi";
import { Address } from "viem";
import { sepolia, mainnet } from "wagmi/chains";

/**
 * Hook to perform reverse ENS lookup for an Ethereum address
 * @param address The Ethereum address to lookup
 * @returns The ENS name associated with the address, if any
 */
export const useReverseEnsLookup = (
  address: Address,
  testnet: boolean = true,
) => {
  const {
    data: ensName,
    isError,
    isLoading,
  } = useEnsName({
    address,
    chainId: testnet ? sepolia.id : mainnet.id, // ENS resolution always starts from Ethereum mainnet
  });

  return {
    ensName,
    isError,
    isLoading,
  };
};

/**
 * Utility component to display an ENS name for an address
 * @param props.address The Ethereum address to lookup
 * @param props.className Optional CSS classes
 */
function EnsName({
  address,
  className,
}: {
  address: Address;
  className?: string;
}) {
  const { ensName } = useReverseEnsLookup(address);

  return <div className={className}>{ensName || address}</div>;
}

export { EnsName };
