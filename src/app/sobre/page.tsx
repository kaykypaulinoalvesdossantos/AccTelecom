import Image from "next/image"

export default function Sobre() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#3e4095] text-white">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a ACC Telecom</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Conheça nossa história, missão, visão e valores que nos guiam no compromisso de oferecer as melhores
            soluções em telecomunicações.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section>
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/img/equipe.jpg"
                alt="Equipe ACC Telecom"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3e4095] mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-6">
                A ACC Telecom nasceu com o propósito de levar soluções de telecomunicação de qualidade para empresas e
                pessoas. Como revenda autorizada da Algar Telecom, temos o compromisso de oferecer serviços de
                excelência e atendimento personalizado.
              </p>
              <p className="text-gray-600">
                Ao longo dos anos, construímos uma reputação sólida baseada na confiança e na satisfação dos nossos
                clientes. Nossa equipe é formada por profissionais qualificados e comprometidos em encontrar a melhor
                solução para cada necessidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#3e4095] mb-4">Missão</h3>
              <p className="text-gray-600">
                Levar soluções de telecomunicação de qualidade para empresas e pessoas, contribuindo para o
                desenvolvimento e conectividade dos nossos clientes.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#3e4095] mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser referência em atendimento e inovação como revenda da Algar Telecom, expandindo nossa atuação e
                mantendo a excelência nos serviços prestados.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#3e4095] mb-4">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Compromisso com a satisfação do cliente</li>
                <li>• Ética e transparência em todas as relações</li>
                <li>• Inovação constante</li>
                <li>• Parceria e colaboração</li>
                <li>• Atendimento de excelência</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section>
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3e4095] mb-6">Nossa Parceria com a Algar Telecom</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Como revenda autorizada, temos o respaldo de uma das maiores operadoras de telecomunicações do Brasil,
              garantindo qualidade e confiabilidade em todos os nossos serviços.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/img/representanteAlgar.png"
              alt="Parceria ACC Telecom e Algar"
              width={600}
              height={300}
              className="rounded-lg shadow-lg w-auto h-auto"
            />
          </div>
        </div>
      </section>
    </>
  )
}