import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Wifi, Smartphone, Globe, Sun } from "lucide-react"

// Declaração de tipo para a função do Google Ads
declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

export default function Home() {
  const handleQuoteClick = () => {
    // Rastrear conversão do Google Ads
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      window.gtag_report_conversion('/contato');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3e4095] to-[#3e4095]/80 text-white">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Soluções em telecomunicações para sua empresa</h1>
            <p className="text-lg mb-6">
              Revenda autorizada Algar Telecom, oferecendo serviços de qualidade e atendimento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contato" 
                onClick={handleQuoteClick}
                className="bg-[#ccfa1c] text-[#3e4095] font-bold py-2 px-6 rounded-md hover:bg-[#ccfa1c]/90 transition-colors"
              >
                Solicite uma Cotação
              </Link>
              <Link
                href="/solucoes"
                className="text-white border border-white py-2 px-6 rounded-md hover:bg-white/10 transition-colors text-center"
              >
                Conheça Nossas Soluções
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/img/escritorio.jpg"
              alt="ACC Telecom Serviços"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3e4095] mb-6 text-center">Nossos Produtos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Oferecemos soluções completas em telecomunicações para atender às necessidades da sua empresa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Banda Larga */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#3e4095]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Wifi className="h-8 w-8 text-[#3e4095]" />
              </div>
              <h3 className="text-xl font-bold text-[#3e4095] mb-2">Banda Larga</h3>
              <p className="text-gray-600 mb-4">
                Internet fibra óptica com alta velocidade e estabilidade para sua empresa.
              </p>
              <Link
                href="https://wa.me/551123629665?text=Gostaria%20de%20saber%20mais%20sobre%20os%20planos"
                className="text-[#3e4095] font-medium flex items-center hover:text-[#ccfa1c] transition-colors"
              >
                Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Chip Móvel */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#3e4095]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-[#3e4095]" />
              </div>
              <h3 className="text-xl font-bold text-[#3e4095] mb-2">Chip Móvel</h3>
              <p className="text-gray-600 mb-4">
                Telefonia móvel com cobertura nacional e planos sob medida para empresas.
              </p>
              <Link
                href="/solucoes#chip-movel"
                className="text-[#3e4095] font-medium flex items-center hover:text-[#ccfa1c] transition-colors"
              >
                Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Link Dedicado */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#3e4095]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-[#3e4095]" />
              </div>
              <h3 className="text-xl font-bold text-[#3e4095] mb-2">Link Dedicado</h3>
              <p className="text-gray-600 mb-4">Internet exclusiva com alta disponibilidade, IP fixo e suporte 24/7.</p>
              <Link
                href="/solucoes#link-dedicado"
                className="text-[#3e4095] font-medium flex items-center hover:text-[#ccfa1c] transition-colors"
              >
                Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Energia Solar */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#3e4095]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Sun className="h-8 w-8 text-[#3e4095]" />
              </div>
              <h3 className="text-xl font-bold text-[#3e4095] mb-2">Energia Solar</h3>
              <p className="text-gray-600 mb-4">Economia na conta de energia sem instalação de equipamentos.</p>
              <Link
                href="/solucoes#energia-solar"
                className="text-[#3e4095] font-medium flex items-center hover:text-[#ccfa1c] transition-colors"
              >
                Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section>
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3e4095] mb-6">Parceria de Confiança</h2>
              <p className="text-gray-600 mb-6">
                Como revenda autorizada da Algar Telecom, oferecemos soluções de telecomunicações com a qualidade e
                confiabilidade de uma das maiores operadoras do Brasil.
              </p>
              <p className="text-gray-600 mb-6">
                Nossa parceria garante a você o melhor atendimento, suporte técnico especializado e produtos de alta
                qualidade.
              </p>
              <Link href="/sobre" className="bg-[#3e4095] text-white font-medium py-2 px-6 rounded-md hover:bg-[#3e4095]/90 transition-colors">
                Conheça Nossa História
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/img/parceiroAlgar.webp"
                alt="Parceria ACC Telecom e Algar"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ccfa1c]">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3e4095] mb-6">
            Pronto para transformar sua conectividade?
          </h2>
          <p className="text-[#3e4095]/80 text-lg mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a ter a melhor experiência em
            telecomunicações.
          </p>
          <Link
            href="https://wa.me/551123629665?text=Gostaria%20de%20saber%20mais%20sobre%20os%20planos"
            className="bg-[#3e4095] text-white font-medium py-3 px-8 rounded-md hover:bg-[#3e4095]/90 transition-colors inline-block"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </>
  )
}