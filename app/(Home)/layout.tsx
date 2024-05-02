import "../globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/feature/layout/navbar/navbar";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import clsx from "clsx";

import { SmartWalletProvider } from "@/lib/providers/coinbase";
import { siteConfig } from "@/config/site"



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={clsx(inter.className, "bg-background h-full")}>
      <SmartWalletProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar appName={siteConfig.name} />
          {children}
        </ThemeProvider>
      </SmartWalletProvider>
      </body>
    </html>
  );
}
