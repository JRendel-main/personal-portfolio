import React, { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] })
interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className={`${inter.className} px-32`}>
    <ThemeProvider
    attribute="class"
    defaultTheme="light"
    enableSystem>  <NavBar />{children}
    </ThemeProvider>
    </div>
  )
}

export default Layout