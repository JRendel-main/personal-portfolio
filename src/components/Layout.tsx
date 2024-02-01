import React, { ReactNode } from "react";
import { Chivo_Mono as Inter } from "next/font/google";
import NavBar from "./NavBar";
import NewNavBar from "./NewNavBar";
import { ThemeProvider } from "@/components/theme-provider";
import background from "@/assets/background.jpg";

const inter = Inter({ subsets: ["latin"], display: "swap", weight: ["400"]});
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${inter.className} px-10`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NavBar />
        {children}
      </ThemeProvider>
    </div>
  );
};

export default Layout;
