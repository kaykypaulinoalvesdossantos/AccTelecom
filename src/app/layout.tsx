import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ACC Telecom - Revenda Autorizada Algar Telecom",
  description:
    "Soluções em telecomunicações para empresas e pessoas. Banda Larga, Chip Móvel, Link Dedicado e Energia Solar.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <WhatsAppButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
