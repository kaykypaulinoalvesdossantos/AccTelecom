import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#3e4095] text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image src="/logo-white.png" alt="ACC Telecom Logo" width={150} height={40} className="h-10 w-auto mb-4" />
            <p className="mb-4">
              Revenda autorizada Algar Telecom, oferecendo soluções em telecomunicações para empresas e pessoas.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=100086627561554" className="hover:text-[#ccfa1c] transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/acctelecomsp/" className="hover:text-[#ccfa1c] transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/company/acc-telecom-solutions/" className="hover:text-[#ccfa1c] transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#ccfa1c] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-[#ccfa1c] transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/solucoes" className="hover:text-[#ccfa1c] transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link href="/trabalhe-conosco" className="hover:text-[#ccfa1c] transition-colors">
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-[#ccfa1c] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>(11) 2362-9665</span>
              </div>
              <div className="flex items-start">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>contato@acctelecom.com.br</span>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>R. Alfredo Pujol, 545 - SantanaSão Paulo - SP, 02017-010</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} ACC Telecom. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}