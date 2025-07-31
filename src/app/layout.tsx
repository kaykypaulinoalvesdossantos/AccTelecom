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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17199374460"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17199374460');
          `,
        }} />
        {/* Event snippet for Compra conversion page */}
        {/* In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. */}
        <script dangerouslySetInnerHTML={{
          __html: `
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17199374460/U1dzCOur0eMaEPzApolA',
                  'transaction_id': '',
                  'event_callback': callback
              });
              return false;
            }
          `,
        }} />
      </head>
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
