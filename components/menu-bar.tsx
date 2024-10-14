"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ModeToggle } from "./ui/toggle-mode";
import Image from "next/image";
import LogoWhite from "@/public/vc-logo-black.svg";
import LogoBlack from "@/public/vc-logo-white.svg";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function MenuBar() {
  const { theme } = useTheme();
  const [currentScheme, setCurrentScheme] = useState<string | null | undefined>(
    null,
  );

  useEffect(() => {
    const getCurrentColorScheme = () => {
      if (theme === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      return theme;
    };
    const updateCurrentScheme = () => {
      setCurrentScheme(getCurrentColorScheme());
    };
    updateCurrentScheme();
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => {
      updateCurrentScheme();
    };
    mediaQueryList.addEventListener("change", listener);

    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [theme]);

  return (
    <div className="fixed top-0 z-[90] flex h-10 w-full items-center justify-between border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-row items-center gap-2">
        <Image
          src={currentScheme === "dark" ? LogoBlack : LogoWhite}
          alt="Vietclimb logo bright"
          width={150}
          height={150}
        />
        <Button variant="ghost" asChild>
          <Link
            href="https://www.instagram.com/vietclimb_beta/"
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="https://www.facebook.com/VietClimb" target="_blank">
            <FaFacebook />
          </Link>
        </Button>
      </div>
      <ModeToggle />
    </div>
  );
}
