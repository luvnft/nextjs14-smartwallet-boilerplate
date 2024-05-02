'use client'

import { createContext, useContext, ReactNode } from "react";
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk'
import { siteConfig } from "@/config/site";
 
// Create Coinbase SDK instance
export const sdk = typeof window !== "undefined" ? new CoinbaseWalletSDK({
  appName: siteConfig.name,
  appChainIds: [8453]
}) : null;

// Define the type for the provider value
interface CoinbaseSDK {
  provider: any // @TODO Change the type here as per the SDK documentation
}

// Create Coinbase Context
export const CoinbaseContext = createContext<CoinbaseSDK | null>(null);

export const SmartWalletProvider = ({ children }: { children: ReactNode }) => {
  const provider = sdk ? sdk.makeWeb3Provider({ options: 'smartWalletOnly' }) : null;

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
