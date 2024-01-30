import React from "react";
import { Button } from "./ui/button";
import { NavbarItems } from "../constants/NavbarItems";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
    const { theme, setTheme } = useTheme();
    const handleChangeTheme = (theme: string) => {
      setTheme(theme);
    };
  return (
    <div className="flex justify-between gap-5 mt-1 p-4 sticky top-0 backdrop-blur">
      <h1 className="text-4sm font-bold animate-bounce">JRendel</h1>
      <div className="flex gap-5 content-center">
        <Link href={NavbarItems.Home}>
          <Button variant={"link"}>Home</Button>
        </Link>
        <Link href={NavbarItems.About}>
          <Button variant={"link"}>About</Button>
        </Link>
        <Link href={NavbarItems.Education}>
          <Button variant={"link"}>Education</Button>
        </Link>
        <Link href={NavbarItems.Projects}>
          <Button variant={"link"}>Projects</Button>
        </Link>
      </div>
      <div className="">
        <Link href={NavbarItems.Contact}>
          <Button variant={"destructive"}>Connect</Button>
        </Link>
      </div>
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleChangeTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleChangeTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleChangeTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavBar;
