import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _dmSans = DM_Sans({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TUSC - The Ultimate Sourcing Company",
  description:
    "Bridging Indian craftsmanship with global commerce. From handwoven rugs to block prints, we connect artisans with international buyers.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
