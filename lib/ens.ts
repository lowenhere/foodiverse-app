import { toast } from "@/hooks/use-toast";
import {
    writeFoodiverseRegistrarRegister,
    writeReverseRegistrarSetName,
} from "@/lib/generated";
import { Address } from "viem";
import { Config, switchChain } from "@wagmi/core";
import { sepolia, baseSepolia } from "viem/chains";

export interface ENSRegistrationResult {
    success: boolean;
    transactionHash?: string;
    error?: string;
}

export async function registerENS(
    wagmiConfig: Config,
    name: string,
    address: Address,
): Promise<ENSRegistrationResult> {
    try {
        // Change chain to Base Sepolia
        // Using the correct chain ID for Base Sepolia
        await switchChain(wagmiConfig, { chainId: baseSepolia.id }); // Sepolia chain ID

        // Register the name
        const tx = await writeFoodiverseRegistrarRegister(wagmiConfig, {
            args: [name, address],
        });

        toast({
            title: "Registration submitted",
            description: "Please wait while your transaction is being processed...",
        });

        // Wait for transaction confirmation
        toast({
            title: "Success!",
            description: `Successfully registered ${name}.foodiverse.eth, tx: ${tx}`,
            variant: "default",
        });

        return {
            success: true,
            transactionHash: tx,
        };
    } catch (error) {
        console.error('ENS registration error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        toast({
            title: "Error",
            description: `Failed to register ENS name: ${errorMessage}`,
            variant: "destructive",
        });

        return {
            success: false,
            error: errorMessage,
        };
    }
}

export interface SetPrimaryNameResult {
    success: boolean;
    transactionHash?: string;
    error?: string;
}

export async function setPrimaryName(
    wagmiConfig: Config,
    name: string,
): Promise<SetPrimaryNameResult> {
    try {
        // Change chain to sepolia
        await switchChain(wagmiConfig, { chainId: sepolia.id });

        // Set the primary name
        const tx = await writeReverseRegistrarSetName(wagmiConfig, {
            args: [name],
        });

        toast({
            title: "Setting primary name",
            description: "Please wait while your transaction is being processed...",
        });

        toast({
            title: "Success!",
            description: `Successfully set ${name}.foodiverse.eth as your primary name`,
            variant: "default",
        });

        return {
            success: true,
            transactionHash: tx,
        };
    } catch (error) {
        console.error('Set primary name error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        toast({
            title: "Error",
            description: `Failed to set primary name: ${errorMessage}`,
            variant: "destructive",
        });

        return {
            success: false,
            error: errorMessage,
        };
    }
}
