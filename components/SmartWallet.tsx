'use client';

import { useSmartWallet } from "@/hooks/useSmartWallet";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function SmartWallet() {
    const { wallet, isConnected, isConnecting, chainId } = useSmartWallet();
    const [connected, setConnected] = useState<boolean>(isConnected); // Local state management (client-side)

    // Check if coinbaseWalletExtension extension is injected before-hand to avoid compatibility issues.
    useEffect(() => {
        if (typeof window !== "undefined") {
            // @ts-expect-error
            const isCoinbaseWalletInjected = !!window.coinbaseWalletExtension;
            if (isCoinbaseWalletInjected) {
                setConnected(true);
            }
        }
    }, []);
    
    const useWallet = async () => {
        try {
            const address = await wallet(); // Call the connectWallet function, returns user's addresses
            console.log("Smart wallet generated successfully:", address); // Print out generated wallet
        } catch (error) {
            console.error("Error generating smart wallet:", error); // Error reporting
        } finally {
            // Optional: Add any finalization logic here
        }
    };

    return (
        <div>
            <Button onClick={useWallet} disabled={connected} className="inline-flex rounded-3xl w-40 py-3 px-6 bg-white text-black font-semibold text-sm"
                aria-label={connected ? "Connected" : "Try Smart Wallet"}
            >
                {isConnecting ? <Loader2 className="animate-spin w-5 h-5 text-black" /> : connected ? `Connected` : "Try Smart Wallet"}
            </Button>
        </div>
    );
}
