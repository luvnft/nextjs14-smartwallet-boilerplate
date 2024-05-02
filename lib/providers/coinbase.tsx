'use client'

import { createContext, useContext, ReactNode } from "react";
import { sdk } from "@/lib/coinbase-sdk/setup";

// Define the type for the provider value
interface CoinbaseSDK {
  provider: ReturnType<typeof sdk.makeWeb3Provider>;
}

// Create Coinbase Context
export const CoinbaseContext = createContext<CoinbaseSDK | null>(null);

export const CoinbaseWalletProvider = ({ children }: { children: ReactNode }) => {
  const provider = sdk.makeWeb3Provider({ options: 'smartWalletOnly' });

  return (
    <CoinbaseContext.Provider value={{ provider }}>
      {children}
    </CoinbaseContext.Provider>
  );
}

export const useSmartWallet = () => {
  const context = useContext(CoinbaseContext);
  if (!context) {
    throw new Error("Could not define Coinbase Context. Please try again.");
  }
  return context.provider;
};
