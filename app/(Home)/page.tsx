import { siteConfig } from "@/config/site";
import { Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaTiktok } from 'react-icons/fa';

import SmartWallet from "@/components/SmartWallet";
import WalletOnboarding from "@/components/WalletOnboarding";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8 bg-white dark:bg-gray-900">
      <div className="relative flex place-items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {/* Smart Wallet Demo */}
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
          ATL5D $ATL Atlanta Loyalty Rewards Wallet
        </h1>
        <WalletOnboarding />
      </div>

      {/* CTA Section */}
      <div className="mt-10 flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          🎯 Follow @atl5d on TikTok & Collect 1000 $ATL!
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Join the movement and earn $ATL rewards by taggin @ATL5D with proof of shopping in Atlanta.
        </p>
        <div className="flex space-x-6">
          <Link href="https://www.tiktok.com/@atl5d" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="w-8 h-8 text-black hover:text-gray-700 transition-colors duration-200" />
          </Link>
          <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
            <Twitter className="w-8 h-8 text-blue-500 hover:text-blue-400 transition-colors duration-200" />
          </Link>
          <Link href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer">
            <FaDiscord className="w-8 h-8 text-indigo-600 hover:text-indigo-500 transition-colors duration-200" />
          </Link>
        </div>
      </div>

      <footer className="absolute bottom-5 mt-4 p-5 flex flex-col justify-center items-center gap-y-5">
        <code className="hidden lg:flex text-gray-900 text-center text-xs md:text-sm dark:text-gray-100">
          {siteConfig.description}
        </code>
      </footer>
    </main>
  );
}
