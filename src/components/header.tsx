"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Soluções", href: "/solucoes" },
  { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { name: "Contato", href: "/contato" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 md:px-8 flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="ACC Telecom Logo" width={150} height={40} className="h-10 w-auto" />
          </Link>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[#3e4095] hover:text-[#ccfa1c] font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button type="button" className="text-[#3e4095]" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Abrir menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="fixed inset-0 flex">
            <div className="relative w-full">
              <div className="flex items-center justify-between p-4">
                <Link href="/" className="flex items-center">
                  <Image src="/logo.png" alt="ACC Telecom Logo" width={150} height={40} className="h-10 w-auto" />
                </Link>
                <button type="button" className="text-[#3e4095]" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Fechar menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-6 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-center text-lg font-medium text-[#3e4095] hover:bg-[#ccfa1c]/20"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}