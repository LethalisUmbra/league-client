"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaExclamation,
  FaQuestion,
  FaUserCircle,
  FaKey,
  FaCoins,
} from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import {
  GiPunch,
  GiCrystalCluster,
  GiAtom,
  GiLightBackpack,
  GiCardRandom,
} from "react-icons/gi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  return (
    <div
      className="w-full border-y border-y-amber-500 flex items-center justify-between"
      style={{ height: "80px" }}
    >
      {/* Left */}
      <div className="flex gap-5 items-center">
        {/* Play button */}
        <div className="ml-6 flex h-10">
          <Image
            src="/league_icon.png"
            alt="League Logo"
            width={40}
            height={40}
          />
          <button className="bg-slate-800 border-2 border-sky-700 text-amber-100 px-9 hover:border-sky-500 hover:text-amber-50 hover:shadow-sm hover:shadow-sky-500 transition-all">
            JUEGA
          </button>
        </div>
        {/* Notifications */}
        <div className="flex items-center text-white text-sm">
          <div
            className="rounded-full bg-gradient-to-b from-cyan-400 to-blue-700 transition-all hover:from-cyan-200 hover:to-blue-700"
            style={{ padding: "2px" }}
          >
            <button className="rounded-full bg-gradient-to-b from-cyan-400 to-blue-700 border-2 border-slate-800 p-1 transition-all hover:from-cyan-200 hover:to-blue-700">
              <FaExclamation />
            </button>
          </div>
        </div>
        {/* Links section */}
        <div className="flex items-center text-sm" style={{ height: "78px" }}>
          <NavbarLink className={"px-2"} href="/">
            INICIO
          </NavbarLink>
          <NavbarLink className={"px-2"} href="/tft">
            TFT
          </NavbarLink>
          <NavbarLink className={"px-2"} href="/clash">
            CLASH
          </NavbarLink>
        </div>
      </div>
      {/* Right */}
      <div className="flex gap-5 items-center">
        {/* Navigation */}
        <div className="flex gap-4 items-center justify-center">
          {/* Icons */}
          <div
            className="flex items-center text-xl text-amber-200"
            style={{ height: "78px" }}
          >
            <NavbarLink className={"px-4"}>
              <GiAtom />
            </NavbarLink>
            <NavbarLink className={"px-4"}>
              <FaUserCircle />
            </NavbarLink>
            <NavbarLink className={"px-4"}>
              <GiLightBackpack />
            </NavbarLink>
            <NavbarLink className={"px-4"}>
              <FaKey />
            </NavbarLink>
            <NavbarLink className={"px-4"}>
              <GiCardRandom />
            </NavbarLink>
            <NavbarLink className={"px-4"}>
              <FaCoins />
            </NavbarLink>
          </div>
          <div className="h-14 border-l border-amber-500" />
          {/* Points */}
          <div className="flex flex-col items-start justify-center gap-2 text-white">
            {/* RP */}
            <div className="flex gap-1">
              <GiPunch className="text-amber-500" />
              <span className="text-xs">9999</span>
            </div>
            <div className="flex gap-1">
              <GiCrystalCluster className="text-blue-400" />
              <span className="text-xs">999K</span>
            </div>
          </div>
        </div>
        {/* Profile */}
        <div className="flex h-20 items-center gap-2">
          {/* Icon */}
          <button className="bg-cyan-600 rounded-full relative h-14 w-14 border hover:border-2 p-0.5 border-amber-500 flex items-center justify-center">
            <Image
              className="rounded-full border hover:border-2 border-amber-500"
              alt="Profile picture"
              src={"/helmet_bro.png"}
              width={52}
              height={52}
            />
            <div className="absolute text-xs bg-gray-900 border px-1 left-1/2 -translate-x-1/2 -bottom-2 border-amber-500 rounded">
              666
            </div>
          </button>
          <div className="flex flex-col text-sm h-full justify-between py-2 pr-2">
            {/* Window buttons */}
            <div className="flex items-center gap-4 justify-end px-2 text-xs">
              <button className="hover:text-white transition-all">
                <FaQuestion />
              </button>
              <button className="hover:text-white transition-all">_</button>
              <button className="hover:text-white transition-all">
                <BsGearFill />
              </button>
              <button className="hover:text-white transition-all">X</button>
            </div>
            {/* Username */}
            <span className="text-white">LethalisUmbra</span>
            {/* Status */}
            <div className="text-green-600 text-xs">{`O "Conty te chupo..`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavbarLink({
  className = "",
  children,
  href = "#",
}: {
  className?: string;
  children: any;
  href?: string;
}) {
  const pathname = usePathname();
  const active =
    "text-amber-50 bg-gradient-to-b from-gray-900 via-gray-900 to-[rgba(254,243,199,0.2)]";
  const inactive =
    "hover:text-amber-50 bg-gradient-to-b hover:from-gray-900 hover:via-gray-900 hover:to-[rgba(254,243,199,0.2)]";

  const isActive = () => {
    return pathname != "/" ? pathname === href : pathname.includes(href);
  };
  return (
    <Link
      href={href}
      className={`${className} flex items-center justify-center text-center h-full ${
        isActive() ? active : inactive
      }`}
    >
      {children}
    </Link>
  );
}
