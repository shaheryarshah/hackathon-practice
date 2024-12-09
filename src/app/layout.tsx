import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Topheader from "./Components/topheader"
import Header from "./Components/header"
import Footer from './Components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({

  children,
}: {
  
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Topheader/>
      <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
