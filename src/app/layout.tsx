import type { Metadata } from "next"
import "@/styles/global.scss"
import { ReactNode } from "react"
import { BaseProvider } from "@/providers/BaseProvider"

export const metadata: Metadata = {
  title: "Trading App",
  description:
    "Unleash your trading potential with our intuitive app. Real-time data, seamless trades, and personalized insights. Elevate your experience and seize opportunities!",
  icons: [
    { rel: "icon", url: "/16x16.png", sizes: "16x16" },
    { rel: "icon", url: "/32x32.png", sizes: "32x32" },
    { rel: "apple", url: "/16x16.png", sizes: "16x16" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <BaseProvider>{children}</BaseProvider>
      </body>
    </html>
  )
}
