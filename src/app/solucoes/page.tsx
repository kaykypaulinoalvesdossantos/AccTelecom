import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Wifi, Smartphone, Globe, Sun } from "lucide-react"

export default function Solucoes() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#3e4095] text-white">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossas Soluções</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Oferecemos um portfólio completo de soluções em telecomunicações para atender às necessidades específicas da
            sua empresa.
          </p>
        </div>
      </section>

      {/* Banda Larga Section */}
      <section id="banda-larga">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-[#3e4095]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Wifi className="h-8 w-8 text-[#3e4095]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3e4095] mb-6">Banda Larga</h2>
              <p className="text-gray-600 mb-6">
              Internet fibra óptica com alta velocidade e estabilidade, ideal para residências e empresas que precisam de performance e confiabilidade.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-[#3e4095]/80 mb-4">Benefícios</h3>
              <ul className="space-y-3 mb-6 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-2 flex-shrink-0" />
                  <span>Alta velocidade de download e upload</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-2 flex-shrink-0" />
                  <span>Estabilidade e baixa latência</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-2 flex-shrink-0" />
                  <span>Suporte técnico especializado</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-2 flex-shrink-0" />
                  <span>Planos flexíveis para diferentes necessidades</span>
                </li>
              </ul>

              <Link href="https://wa.me/551123629665?text=Gostaria%20de%20saber%20mais%20sobre%20banda%20larga" className="bg-[#3e4095] text-white font-medium py-2 px-6 rounded-md hover:bg-[#3e4095]/90 transition-colors">
                Solicitar Cotação
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/img/bandaLarga.png"
                alt="Banda Larga"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chip Móvel Section */}
      <section id="chip-movel" className="bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-[#3e4095]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-[#3e4095]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3e4095] mb-6">Chip Móvel</h2>
              <p className="text-gray-600 mb-6">
              Telefonia móvel com cobertura nacional e planos sob medida para residências e empresas de todos os tamanhos.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-[#3e4095]/80 mb-4">Benefícios</h3>
              <ul className="space-y-3 mb-6 text-gray-600">
                <li className="flex items-start ">
                  <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-2 flex-shrink-0" />
                  <span>Ampla cobertura nacional</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-2 flex-shrink-0" />
                  <span>Planos corporativos com preços competitivos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-2 flex-shrink-0" />
                  <span>Gestão centralizada das linhas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-2 flex-shrink-0" />
                  <span>Atendimento dedicado 24/7</span>
                </li>
              </ul>

              <Link href="https://wa.me/551123629665?text=Gostaria%20de%20saber%20mais%20sobre%20o%20chip%20m%C3%B3vel%20" className="bg-[#3e4095] text-white font-medium py-2 px-6 rounded-md hover:bg-[#3e4095]/90 transition-colors">
                Solicitar Cotação
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/img/movel.png"
                alt="Chip Móvel Corporativo"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Link Dedicado Section */}
      <section id="link-dedicado">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-[#3e4095]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-[#3e4095]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3e4095] mb-6">Link Dedicado</h2>
              <p className="text-gray-600 mb-6">
                Internet exclusiva com alta disponibilidade, IP fixo, suporte 24/7 e velocidade simétrica para sua
                empresa.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-[#3e4095]/80 mb-4">Benefícios</h3>
              <ul className="space-y-3 mb-6 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-2 flex-shrink-0" />
                  <span>Conexão exclusiva e não compartilhada</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-2 flex-shrink-0" />
                  <span>Velocidade simétrica de upload e download</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-2 flex-shrink-0" />
                  <span>IP fixo para serviços que exigem endereço estático</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-2 flex-shrink-0" />
                  <span>Suporte técnico 24/7 e SLA garantido</span>
                </li>
              </ul>

              <Link href="https://wa.me/551123629665?text=Gostaria%20de%20saber%20mais%20sobre%20o%20link%20dedicado" className="bg-[#3e4095] text-white font-medium py-2 px-6 rounded-md hover:bg-[#3e4095]/90 transition-colors">
                Solicitar Cotação
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/img/linkDedicado.png"
                alt="Link Dedicado"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Energia Solar Section */}
      <section id="energia-solar" className="bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-[#3e4095]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Sun className="h-8 w-8 text-[#3e4095]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3e4095] mb-6">Energia Solar Compartilhada</h2>
              <p className="text-gray-600 mb-6">
                Economia na conta de energia sem instalação de equipamentos. Uma solução sustentável em parceria com a
                (re)energisa.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-[#3e4095]/80 mb-4">Benefícios</h3>
              <ul className="space-y-3 mb-6 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-2 flex-shrink-0" />
                  <span>Economia de até 20% na conta de energia</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-2 flex-shrink-0" />
                  <span>Sem necessidade de instalação de painéis solares</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-2 flex-shrink-0" />
                  <span>Solução sustentável e ecologicamente responsável</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-2 flex-shrink-0" />
                  <span>Contrato flexível e sem fidelidade</span>
                </li>
              </ul>

              <Link href="https://wa.me/551123629665?text=Gostaria%20de%20saber%20mais%20sobre%20a%20energia%20solar" className="bg-[#3e4095] text-white font-medium py-2 px-6 rounded-md hover:bg-[#3e4095]/90 transition-colors">
                Solicitar Cotação
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/img/energiaSolar.png"
                alt="Energia Solar Compartilhada"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ccfa1c]">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3e4095] mb-6">
            Encontre a solução ideal para sua empresa
          </h2>
          <p className="text-[#3e4095]/80 text-lg mb-8 max-w-3xl mx-auto">
            Entre em contato com nossa equipe e descubra como podemos ajudar sua empresa a ter a melhor experiência em
            telecomunicações.
          </p>
          <Link
            href="https://wa.me/551123629665?text=Gostaria%20de%20saber%20mais%20sobre%20os%20planos"
            className="bg-[#3e4095] text-white font-medium py-3 px-8 rounded-md hover:bg-[#3e4095]/90 transition-colors inline-block"
          >
            Fale com um Especialista
          </Link>
        </div>
      </section>
    </>
  )
}