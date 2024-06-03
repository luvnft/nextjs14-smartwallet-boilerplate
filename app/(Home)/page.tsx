import { siteConfig } from "@/config/site"

import { Discord, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import SmartWallet from "@/components/SmartWallet";
import WalletOnboarding from "@/components/WalletOnboarding";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {/** Smart Wallet Demo */}
      <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-xl md:text-3xl font-bold text-center text-gray-900 dark:text-gray-100 lg:text-4xl">
              Create 🅰️ 🅰️TL5️⃣D 🏦head Coinbase Account For Your Wallo
          </h1>
          <WalletOnboarding />
      </div>

      <footer className="absolute bottom-5 mt-4 p-5 flex flex-col justify-center items-center gap-y-5">
        <code className="hidden lg:flex text-gray-900 text-center text-xs md:text-sm dark:text-gray-100">
          {siteConfig.description}
        </code>
        <div className="flex flex-row gap-3 justify-center items-center">
          {Object.entries(siteConfig.links).map(([name, url]) => (
            <Link key={name} href={url} target="_blank">
              {name === 'twitter' && <Twitter className="w-5 h-5 text-neutral-600 hover:text-neutral-400 transition-colors duration-200" />}
              {name === 'discord' && <Discord className="w-5 h-5 text-neutral-600 hover:text-neutral-400 transition-colors duration-200" />}
            </Link>
          ))}
        </div>
      </footer>
    </main>
  );
}
