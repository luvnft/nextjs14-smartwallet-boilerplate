export type SiteConfig = typeof siteConfig;

type Preference = 'all' | 'smartWalletOnly' | 'eoaOnly';

// Define the site configuration object
export const siteConfig = {
  name: 'WALLO', // The name of the application
  description:
    `🌟 W🅰️LLO Mission: ATL5D × Coinbase collab to bank the unbanked and empower ATL creators 🏦✨

Solving two big ATL problems:
1️⃣ 60K+ unbanked households now get financial access
2️⃣ ATL content creators finally get paid for their 🔥 reels

How it works:
🎯 1️⃣ Follow @ATL5D on TikTok: https://tiktok.com/@atl5d
🎯 2️⃣ Subscribe to @ATLVERSE on YouTube: https://youtube.com/@ATLVERSE
🎯 3️⃣ Join Telegram: https://t.me/atl5d

💰 Earn $ATL:
✅ Post screenshot of your W🅰️LLO with #w🅰️llo✅ = 1,000 $ATL airdrop
✅ Tip creators $ATL in real-time 💸 on https://irl.travel
✅ Join IRL.TRAVEL:
  - Record 11-sec ATL business reviews
  - DM @HAHZ on Twitter to mint as NFT
  - Get paid in $ATL + promo boosts

🔍 Built on Base – Scammers can't hide $ATL transactions 🕵️‍♂️
#BankheadToBuckhead #ATL5D #WALLO`,
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
  links: {
    twitter: 'https://twitter.com/fewmoreliqs',
    github: 'https://github.com/rokitgg/nextjs14-smartwallet-boilerplate',
    docs: ''
  },
  coinbase: { 
    options: 'smartWalletOnly' as Preference
  }
};
