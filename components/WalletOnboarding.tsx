'use client';

import { useEffect, useState } from "react";
import { useSmartWallet } from "@/hooks/useSmartWallet";
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerFooter,
    DrawerTrigger,
} from "@/components/ui/drawer"

export default function WalletOnboarding() {
    const { wallet, isConnected, isConnecting, chainId } = useSmartWallet();
    const [connected, setConnected] = useState<boolean>(isConnected);

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
            const address = await wallet();
            console.log("Smart wallet generated successfully:", address);
        } catch (error) {
            console.error("Error generating smart wallet:", error);
        }
    };

    return (
        <Drawer>
            <DrawerTrigger>
                <motion.button 
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#A6192E] text-black font-bold text-lg shadow-lg"
                >
                    {connected ? "🅰️ Wallo Ready" : "✨ CREATE W🅰️LLO"}
                </motion.button>
            </DrawerTrigger>
            <DrawerContent className="bg-[#1a1a1a] text-white h-[60vh]">
                <DrawerHeader className="text-center mt-8">
                    <DrawerTitle className="text-2xl">Don&apos;t have a W🅰️LLO?</DrawerTitle>
                    <DrawerDescription className="text-[#FFD700]">
                        Create one in seconds to get started 🚀
                    </DrawerDescription>
                </DrawerHeader>
                
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center space-y-2">
                        <div className="text-5xl">🏦</div>
                        <p className="text-sm opacity-80">Let&apos;s see what Zone has the most $ATL LUV</p>
                    </div>
                </div>
                
                <DrawerFooter className="flex flex-row gap-4">
                    <DrawerClose className="w-full">
                        <motion.button 
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-3 rounded-xl bg-black/50 text-white font-medium"
                        >
                            Cancel
                        </motion.button>
                    </DrawerClose>
                    <motion.button 
                        whileTap={{ scale: 0.95 }}
                        onClick={useWallet} 
                        disabled={isConnecting}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#A6192E] text-black font-bold"
                    >
                        {isConnecting ? (
                            <Loader2 className="animate-spin w-5 h-5 mx-auto text-black" />
                        ) : connected ? (
                            "✅ Connected"
                        ) : (
                            "Create My Wallo"
                        )}
                    </motion.button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}