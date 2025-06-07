import { FaDiscord } from 'react-icons/fa';

export type SiteConfig = typeof siteConfig;

type Preference = 'all' | 'smartWalletOnly' | 'eoaOnly';

// Define the site configuration object
export const siteConfig = {
  name: 'WALLO', // The name of the application
  description: `🌟 WALLO Mission: 🅰️TL5️⃣D × Coinbase collab to bank the unbanked and empower ATL creators 🏦✨

Solving two big ATL problems:
1️⃣ 60K+ unbanked households now get financial access
2️⃣ ATL content creators finally get paid for their 🔥 reels

How it works:
🎯 1️⃣ Follow <a href="https://tiktok.com/@atl5d" target="_blank" class="underline">@ATL5D on TikTok</a>
🎯 2️⃣ Subscribe to <a href="https://youtube.com/@ATLVERSE" target="_blank" class="underline">@ATLVERSE on YouTube</a>
🎯 3️⃣ Join <a href="https://t.me/atl5d" target="_blank" class="underline">@ATL5D Telegram</a>

💰 Earn $ATL:
✅ Post screenshot of your W🅰️LLO with #w🅰️llo✅ = 1,000 $ATL airdrop
✅ Tip creators $ATL in real-time 💸 on <a href="https://irl.travel" target="_blank" class="underline">IRL.TRAVEL</a>
✅ Join <a href="https://irl.travel" target="_blank" class="underline">IRL.TRAVEL</a>:
   - Record 11-sec ATL business reviews
   - DM <a href="https://twitter.com/HAHZ" target="_blank" class="underline">@HAHZ</a> to mint as NFT
   - Get paid in $ATL + promo boosts

🔍 Built on Base - Scammers can't hide $ATL transactions 🕵️‍♂️

#BankheadToBuckhead #ATL5D #WALLO`, // Description of the application
  mainNav: [
    {
      title: 'Wallo',
      href: 'https://wallo.atl5d.com',
    },
  ], // Main navigation links
  links: {
    twitter: 'https://twitter.com/atl5d',
    discord: 'https://discord.com/servers/atl5d-1244450286337003520',
    tiktok: 'https://tiktok.com/@atl5d',
    youtube: 'https://youtube.com/@ATLVERSE',
    telegram: 'https://t.me/atl5d',
    irltravel: 'https://irl.travel/groups/atl5d/',
    hahz: 'https://irl.travel/profile/hahz/'
  }, // Social media and documentation links
  coinbase: { 
    options: 'smartWalletOnly' as Preference, // Options for our Coinbase SDK integration
  },
  ctaSteps: [
    {
      emoji: '🎯',
      text: 'Follow @ATL5D on TikTok',
      link: 'https://tiktok.com/@atl5d'
    },
    {
      emoji: '🎯',
      text: 'Subscribe to @ATLVERSE on YouTube',
      link: 'https://youtube.com/@ATLVERSE'
    },
    {
      emoji: '🎯',
      text: 'Join @ATL5D Telegram',
      link: 'https://t.me/atl5d'
    }
  ],
  earnSteps: [
    {
      emoji: '💰',
      text: 'Post W🅰️LLO screenshot with #w🅰️llo✅',
      reward: '1,000 $ATL airdrop'
    },
    {
      emoji: '💸',
      text: 'Tip creators on IRL.TRAVEL livestreams',
      link: 'https://irl.travel'
    },
    {
      emoji: '📹',
      text: 'Record 11-sec ATL biz reviews → DM @HAHZ',
      reward: 'Paid in $ATL + promo boosts',
      link: 'https://twitter.com/HAHZ'
    }
  ]
};