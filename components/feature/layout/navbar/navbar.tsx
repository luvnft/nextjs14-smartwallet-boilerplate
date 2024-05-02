"use client";

import { useState } from "react";
import { ThemeToogle } from "@/src/theme/ThemeToogle";
import { z } from "zod";

import SmartWallet from "@/components/SmartWallet";

const navbarProps = z.object({
  appName: z.string(),
});

type NavbarProps = z.infer<typeof navbarProps>;

const Navbar: React.FC<NavbarProps> = ({ appName }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full flex items-center justify-between flex-wrap border-b p-6 bg-background">
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-semibold md:text-xl tracking-tight">
            {appName}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <SmartWallet />
          <ThemeToogle />
        </div>
      </div>
      <div
        className={`w-full block flex-grow lg:hidden ${isOpen ? "" : "hidden"}`}
      >
      </div>
    </nav>
  );
};

export default Navbar;