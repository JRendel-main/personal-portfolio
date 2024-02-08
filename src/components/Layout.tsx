import React, { ReactNode } from "react";
import { Cabin as Inter } from "next/font/google";
import NavBar from "./NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"],display: "swap", weight: ["400"]});
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${inter.className}
    `}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NavBar />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Layout;
