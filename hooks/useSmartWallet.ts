import { useState, useEffect, useContext } from "react";
import { CoinbaseContext } from "@/lib/providers/coinbase";

/**
 * Custom hook to interact with the Coinbase Wallet SDK.
 * Manages wallet connection status, connection process, and chain ID.
 * @returns An object containing wallet provider, connection status, connection process status, chain ID, wallet function, and disconnect wallet function.
 * @throws Error if Coinbase Context is not correctly defined. Check your setup at: /lib/providers/coinbase
 */

export const useSmartWallet = () => {

    const context = useContext(CoinbaseContext);

    if (!context) {
        throw new Error("Could not define Coinbase Context. Please try again.");
    }

    const [connected, setConnected] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false); // New state for connection status
    const [chainId, setChainId] = useState<string | undefined>(undefined);

    /**
     * Smart Wallet helper function. Calls method "eth_requestAccounts" from Coinbase Provider.
     * @returns Promise<string[]> | addresses: string[] | undefined
    */

    const wallet: () => Promise<string[]> = async () => {
        setIsConnecting(true); // Set isConnecting to true before the connection process starts
        const addresses: string[] | undefined = await context.provider?.request({
          method: "eth_requestAccounts",
          params: [
            // ...
          ]
        });
    
        if (addresses && addresses.length > 0) {
          setConnected(true); // Update internal connected state only if addresses are received
        } else {
          // Optionally, handle the case where addresses are not received
          console.error("Wallet connection failed. Please try again.");
        }
        
        setIsConnecting(false)
        return addresses ?? []; // Return addresses or an empty array
    };
    
    /**
     * Disconnect Smart Wallet helper function.
     * @returns Promise<void>
    */

    const disconnectWallet: () => Promise<void> = async () => {
    try {
        await context.provider.disconnect();
    } finally {
        setConnected(false);
    }
    
    // End operation
    setIsConnecting(false);
    };


    /**
     * Switch chain helper function. Simply updates internal state.
     * @param newChainId: string
     * @returns Promise<string[]> | addresses: string[] | undefined
    */

    const switchChain = (newChainId: string) => {
        setChainId(newChainId); // Update internal chain state
    };


    useEffect(() => {
        const wallet = context.provider; // Extracts the wallet provider from the Coinbase context



        // Listen for chain changes
        wallet?.on('chainChanged', switchChain);

        // Cleanup event listener
        return () => {
        wallet?.off('chainChanged', switchChain);
        };
    }, [context.provider]);

    return {
        provider: context.provider,
        isConnected: connected,
        isConnecting,
        chainId: chainId,
        wallet,
        disconnectWallet
    };
};
