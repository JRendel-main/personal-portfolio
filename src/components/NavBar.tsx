import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NavbarItems } from "@/constants/NavbarItems";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Wait until mounted to render
  if (!mounted) return null;

  return (
    <nav className="flex justify-between items-center p-4 w-full backdrop-blur">
      <h1 className="text-3xl font-bold">JRendel</h1>
      <div className="flex gap-4 items-center">
        <div className="hidden xl:flex gap-6">
          <Link href={NavbarItems.Home}>
            <Button variant={"link"}>Home</Button>
          </Link>
          <Link href={NavbarItems.About}>
            <Button variant={"link"}>About</Button>
          </Link>
          <Link href={NavbarItems.Skills}>
            <Button variant={"link"}>Skills</Button>
          </Link>
          <Link href={NavbarItems.Projects}>
            <Button variant={"link"}>Projects</Button>
          </Link>
        </div>
        <Button variant="outline" size="icon" onClick={toggleTheme} className="relative">
          {theme === "dark" ? (
            <Sun className="h-5 w-5 dark:text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 dark:text-yellow-400" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
