import { FaDiscord } from 'react-icons/fa';

export type SiteConfig = typeof siteConfig;

type Preference = 'all' | 'smartWalletOnly' | 'eoaOnly';

// Define the site configuration object
export const siteConfig = {
  name: 'Wallo', // The name of the application
  description: 'ATL5D partnered with Coinbase to solve the problem of 60K+ Atlanta un-banked households having the ability to have a bank account. Subscribe to ATL5D to receive $ATL B🍑🍑ty money airdropped to your verified ATL5D account. Verify all $ATL transactions in this Base <a href="https://base.blockscout.com/" style="font-weight:bold;">Explorer</a> by searching the wallet addresses involved in the transaction.', // Description of the application
  mainNav: [
    {
      title: 'Wallo',
      href: 'https://wallo.atl5d.com',
    },
  ], // Main navigation links
  links: {
    twitter: 'https://twitter.com/atl5d',
    discord: 'https://discord.com/servers/atl5d-1244450286337003520',
    docs: ''
  }, // Social media and documentation links
  coinbase: { 
    options: 'smartWalletOnly' as Preference // Options for our Coinbase SDK integration.

    // 'smartWalletOnly': Users will only see an option to create a Smart Wallet or sign into their Smart Wallet.
    // Learn More: https://www.smartwallet.dev/sdk/makeWeb3Provider
  }
};

