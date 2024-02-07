import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NavbarItems } from "@/constants/NavbarItems";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react"; // Import Menu and X icons
import { useTheme } from "next-themes";

const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Wait until mounted to render
  if (!mounted) return null;

  return (
    <nav className="flex justify-between items-center p-4 w-full top-0 right-0 left-0 z-50 fixed backdrop-blur">
      <h1 className="text-3xl font-bold">JRendel</h1>
      <div className="flex gap-4 items-center">
        {/* Hamburger Menu */}
        <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)} className="xl:hidden">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />} {/* Toggle between Menu and X icons */}
          <span className="sr-only">Toggle Menu</span>
        </Button>
        {/* Mobile Menu */}
        <div className={`flex flex-col xl:hidden ${isOpen ? 'block' : 'hidden'}`}> {/* Conditionally render based on isOpen */}
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
        {/* Desktop Menu */}
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
        {/* Theme Toggle Button */}
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
