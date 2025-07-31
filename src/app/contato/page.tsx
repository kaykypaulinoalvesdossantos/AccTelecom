"use client"

import type React from "react"

import { useState, useRef } from "react"
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react"

// Declaração de tipo para a função do Google Ads
declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

export default function Contato() {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (res.ok) {
        setIsSubmitted(true);
        // Rastrear conversão do Google Ads
        if (typeof window !== 'undefined' && window.gtag_report_conversion) {
          window.gtag_report_conversion();
        }
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        alert(result.error || 'Erro ao enviar mensagem. Tente novamente mais tarde.');
      }
    } catch (err) {
      alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
    }
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#3e4095] text-white">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Estamos prontos para atender você e oferecer as melhores soluções em telecomunicações para sua empresa.
          </p>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section>
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3e4095] mb-6">Informações de Contato</h2>
              <p className="text-gray-600 mb-8">
                Entre em contato conosco através dos canais abaixo ou preencha o formulário e retornaremos o mais breve
                possível.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#3e4095] mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Telefone</h3>
                    <p className="text-gray-600">(11) 2362-9665</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#3e4095] mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">E-mail</h3>
                    <p className="text-gray-600">contato@acctelecom.com.br</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#3e4095] mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Endereço</h3>
                    <p className="text-gray-600">R. Alfredo Pujol ,545 - Santana</p>
                    <p className="text-gray-600">São Paulo - SP, 02017-010</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden h-[300px] shadow-md">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.3233467474363!2d-46.62530932507646!3d-23.50735506466359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f3d69c3637f%3A0xc311d5d6bb43c81c!2sRua%20Alfredo%20Pujol%2C%20545%20-%20Santana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002017-010!5e0!3m2!1spt-BR!2sbr!4v1714985657051!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização ACC Telecom - R. Alfredo Pujol, 545 - Santana, São Paulo"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3e4095] mb-6">Envie uma Mensagem</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Mensagem enviada com sucesso!</h3>
                  <p className="text-green-700 mb-4">
                    Agradecemos seu contato. Nossa equipe retornará o mais breve possível.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-green-600 text-white font-medium py-2 px-6 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} ref={form} className="bg-white rounded-lg shadow-md p-6 md:p-8">
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
                        className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3e4095]/50"
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
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3e4095]/50"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="Banda Larga">Banda Larga</option>
                        <option value="Chip Móvel">Chip Móvel</option>
                        <option value="Link Dedicado">Link Dedicado</option>
                        <option value="Energia Solar">Energia Solar</option>
                        <option value="Suporte">Suporte Técnico</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3e4095]/50"
                      placeholder="Como podemos ajudar você?"
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="bg-[#3e4095] text-white font-medium py-2 px-6 rounded-md hover:bg-[#3e4095]/90 transition-colors min-w-[200px]"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}