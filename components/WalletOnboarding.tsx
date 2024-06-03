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
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"



export default function WalletOnboarding() {
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
            const address = await wallet(); // Call the connectWallet function, this returns user's addresses [an array of]
            console.log("Smart wallet generated successfully:", address); // Print out generated wallet
        } catch (error) {
            console.error("Error generating smart wallet:", error); // Error reporting
        } finally {
            // Optional: Add any finalization logic here
        }
    };

    return (
        <Drawer>
            <DrawerTrigger>
                <motion.button whileTap={{ scale: 0.9 }} className="inline-flex items-center justify-center whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-3xl w-40 py-3 px-6 bg-white hover:bg-white/80 text-black font-semibold text-sm">
                        Create 🅰️ Wallo
                </motion.button>
            </DrawerTrigger>
            <DrawerContent className="flex justify-start items-center h-[600px]">
                <DrawerHeader className="mt-auto text-center">
                    <DrawerTitle className="text-3xl text-center">Don{"'"}t have a wallo?</DrawerTitle>
                    <DrawerDescription className="text-md md:text-lg text-center">Create one in seconds to get started.</DrawerDescription>
                </DrawerHeader>
            <DrawerFooter className="flex flex-row w-full justify-between">
                <DrawerClose className="w-full">
                <motion.button whileTap={{ scale: 0.9 }} className="inline-flex w-full items-center justify-center whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-3xl py-3 px-6 bg-red-500 hover:bg-red-500/80 text-white font-semibold text-sm">
                    Cancel
                </motion.button>
                </DrawerClose>
                <motion.button whileTap={{ scale: 0.9 }} onClick={useWallet} disabled={isConnecting} className="inline-flex items-center justify-center whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-3xl w-full py-3 px-6 bg-blue-500 hover:bg-blue-500/80 text-white font-semibold text-sm"
                    aria-label={connected ? "Connected" : "Create Wallo"}
                >
                    {isConnecting ? <Loader2 className="animate-spin w-5 h-5 text-white/80" /> : connected ? `Connected` : "Create Wallo"}
                </motion.button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
