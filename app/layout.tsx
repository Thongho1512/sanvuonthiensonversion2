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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TMCSL8G8');`
          }}
        ></script>
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TMCSL8G8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  )
}