"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/551123629665?text=Gostaria%20de%20saber%20mais%20sobre%20os%20planos",
      "_blank",
    )
  }

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
