export type SiteConfig = typeof siteConfig;

type Preference = 'all' | 'smartWalletOnly' | 'eoaOnly';

// Define the site configuration object
export const siteConfig = {
  name: 'AppName', // The name of the application
  description: 'An opinionated boilerplate to build user-friendly apps using Coinbase Wallet SDK.', // Description of the application
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ], // Main navigation links
  links: {
    twitter: 'https://twitter.com/fewmoreliqs',
    github: 'https://github.com/rokitgg/nextjs14-smartwallet-boilerplate',
    docs: ''
  }, // Social media and documentation links
  coinbase: { 
    options: 'smartWalletOnly' as Preference // Options for our Coinbase SDK integration.

    // 'smartWalletOnly': Users will only see an option to create a Smart Wallet or sign into their Smart Wallet.
    // Learn More: https://www.smartwallet.dev/sdk/makeWeb3Provider
  }
};
