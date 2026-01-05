import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { FloatingContact } from "@/components/floating-contact"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Sân Vườn Thiên Sơn | Thiết Kế & Thi Công Sân Vườn Cao Cấp",
  description:
    "Chuyên thiết kế và thi công hồ cá Koi, hòn non bộ, tiểu cảnh sân vườn cao cấp. Đội ngũ chuyên nghiệp với hơn 15 năm kinh nghiệm.",
  keywords: ["sân vườn", "hồ cá koi", "hòn non bộ", "tiểu cảnh", "thiết kế sân vườn", "thi công sân vườn"],
  generator: "v0.app",
  icons: {
    icon: "/logo-removebg-preview.png",
    apple: "/logo-removebg-preview.png",
    shortcut: "/logo-removebg-preview.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  )
}