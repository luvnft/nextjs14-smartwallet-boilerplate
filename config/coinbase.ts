export type CoinbaseConfig = typeof coinbaseConfig;

type Preference = 'all' | 'smartWalletOnly' | 'eoaOnly';

// Define the Coinbase configuration object
export const coinbaseConfig = { options: 'smartWalletOnly' as Preference }

// Options for our Coinbase SDK integration.
// 'smartWalletOnly': Users will only see an option to create a Smart Wallet or sign into their Smart Wallet.
// Reference: https://www.smartwallet.dev/sdk/makeWeb3Provider