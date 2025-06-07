import { siteConfig } from "@/config/site";
import { Twitter } from "lucide-react";
import Link from "next/link";
import { FaDiscord, FaTiktok, FaMedal } from "react-icons/fa";

import WalletOnboarding from "@/components/WalletOnboarding";

const topHolders = [
  { rank: 1, address: "0xATL...5D1", username: "@kingATL", amount: "1.2M $ATL", emoji: "👑" },
  { rank: 2, address: "0xATL...5D2", username: "@starATL", amount: "890K $ATL", emoji: "🌟" },
  { rank: 3, address: "0xATL...5D3", username: "@diamondATL", amount: "750K $ATL", emoji: "💎" },
  { rank: 4, address: "0xATL...5D4", username: "@fireATL", amount: "500K $ATL", emoji: "🔥" },
  { rank: 5, address: "0xATL...5D5", username: "@coinATL", amount: "420K $ATL", emoji: "🪙" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-16 bg-gradient-to-b from-[#A6192E] to-black text-white">
      {/* Main content */}
      <div className="flex flex-col items-center w-full max-w-md space-y-8">
        {/* Hero section */}
        <section className="text-center space-y-5">
          <h1 className="text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-white drop-shadow">
            IN $ATL <br className="md:hidden" /> WE TRUST
          </h1>
          <p className="text-base md:text-lg opacity-90">
            W🅰️LLO is Atlanta’s #1 loyalty rewards wallet 💰
          </p>
          <p className="text-sm opacity-75 italic">
            “Let’s see on-chain who’s running $ATL” 🎤🏙️
          </p>
        </section>

        {/* Wallet onboarding */}
        <div className="w-full">
          <WalletOnboarding />
        </div>

        {/* $ATL Leaderboard */}
        <div className="w-full bg-black/20 rounded-xl p-4 backdrop-blur-sm">
          <h2 className="flex items-center text-lg font-semibold mb-3">
            <FaMedal className="mr-2 text-[#FFD700]" /> $ATL Leaderboard
          </h2>
          <div className="space-y-2">
            {topHolders.map((holder) => (
              <div key={holder.rank} className="flex justify-between items-center p-2 hover:bg-black/30 rounded-lg">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{holder.emoji}</span>
                    <span className="font-medium">{holder.address}</span>
                  </div>
                  <span className="text-xs opacity-70">{holder.username}</span>
                </div>
                <span className="font-bold text-[#FFD700]">{holder.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer with social links */}
      <footer className="w-full flex flex-col items-center space-y-6 mt-12">
        {/* Social links */}
        <div className="flex space-x-6">
          <Link href="https://www.tiktok.com/@atl5d" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="w-8 h-8 text-white hover:text-[#FFD700] transition-colors duration-200" />
          </Link>
          <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
            <Twitter className="w-8 h-8 text-white hover:text-[#FFD700] transition-colors duration-200" />
          </Link>
          <Link href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer">
            <FaDiscord className="w-8 h-8 text-white hover:text-[#FFD700] transition-colors duration-200" />
          </Link>
        </div>

        {/* R.I.P. Shawty Lo badge */}
        <div className="text-xs bg-black/30 px-3 py-1 rounded-full">
          <span>🕊️ R.I.P. Shawty Lo</span>
        </div>

        {/* CTA */}
        <div className="text-center text-sm opacity-80 max-w-md">
          <p>🎯 Follow @ATL5D socials @ATLVERSE YT &amp; collect 1000 $ATL!</p>
          <p className="mt-1">
            Tag @ATL5D with proof of shopping in Atlanta to earn daily rewards 🏷️ that can
            be redeemed for Atlanta ATL5D (D-commerce) marketing.
          </p>
        </div>

        {/* Original purpose */}
        <code className="text-xs text-center opacity-60 max-w-lg">
          {siteConfig.description}
        </code>
      </footer>
    </main>
  );
}
