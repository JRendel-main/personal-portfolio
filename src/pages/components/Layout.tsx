import React, { ReactNode } from 'react'
import { Poppins as Inter } from 'next/font/google'
import NavBar from './NavBar'
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'], display: "swap", weight: ["400"] })
interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className={`${inter.className} px-15`}>
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem>  
    <NavBar />{children}
    </ThemeProvider>
    </div>
  )
}

export default Layout