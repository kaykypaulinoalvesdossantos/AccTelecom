"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle, Upload } from "lucide-react"

export default function TrabalheConosco() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null as File | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
        resume: null,
      })
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#3e4095] text-white">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Trabalhe Conosco</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Faça parte da nossa equipe e ajude-nos a transformar a experiência em telecomunicações dos nossos clientes.
          </p>
        </div>
      </section>

      {/* About Working Section */}
      <section>
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3e4095] mb-6">Por que trabalhar na ACC Telecom?</h2>
            <p className="text-gray-600 mb-8">
              Na ACC Telecom, valorizamos nossos colaboradores e oferecemos um ambiente de trabalho dinâmico,
              colaborativo e com oportunidades de crescimento profissional.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#3e4095]">Desenvolvimento Profissional</h3>
                  <p className="text-gray-600">Investimos no crescimento e capacitação dos nossos colaboradores.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#3e4095]">Ambiente Colaborativo</h3>
                  <p className="text-gray-600">Trabalhamos em equipe e valorizamos a contribuição de cada um.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#3e4095]">Inovação Constante</h3>
                  <p className="text-gray-600">
                    Buscamos sempre as melhores soluções e tecnologias para nossos clientes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#ccfa1c] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#3e4095]">Reconhecimento</h3>
                  <p className="text-gray-600">
                    Valorizamos e reconhecemos o trabalho e dedicação dos nossos colaboradores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3e4095] text-center mb-8">Envie seu currículo</h2>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-2">Currículo enviado com sucesso!</h3>
                <p className="text-green-700 mb-4">
                  Agradecemos seu interesse em fazer parte da nossa equipe. Analisaremos seu currículo e entraremos em
                  contato caso seu perfil se encaixe em nossas vagas.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-green-600 text-white font-medium py-2 px-6 rounded-md hover:bg-green-700 transition-colors"
                >
                  Enviar outro currículo
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3e4095]/50 text-gray-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3e4095]/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3e4095]/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-gray-700 font-medium mb-2">
                      Área de Interesse *
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3e4095]/50"
                    >
                      <option value="">Selecione uma área</option>
                      <option value="Vendas">Vendas</option>
                      <option value="Atendimento">Atendimento ao Cliente</option>
                      <option value="Técnico">Suporte Técnico</option>
                      <option value="Administrativo">Administrativo</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3e4095]/50"
                    placeholder="Conte-nos um pouco sobre você e sua experiência profissional..."
                  ></textarea>
                </div>

                <div className="mb-8">
                  <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">
                    Currículo (PDF, DOC ou DOCX) *
                  </label>
                  <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="hidden"
                    />
                    <label htmlFor="resume" className="flex flex-col items-center justify-center cursor-pointer">
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <span className="text-gray-600 mb-1">
                        {formData.resume ? formData.resume.name : "Clique para selecionar seu currículo"}
                      </span>
                      <span className="text-xs text-gray-500">Tamanho máximo: 5MB</span>
                    </label>
                  </div>
                </div>

                <div className="text-center">
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="bg-[#3e4095] text-white font-medium py-2 px-6 rounded-md hover:bg-[#3e4095]/90 transition-colors min-w-[200px]"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Currículo"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}