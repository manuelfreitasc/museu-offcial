import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'geral'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Morada",
      details: [
        "Largo do Museu do Dinheiro",
        "1100-242 Lisboa",
        "Portugal"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      details: [
        "+351 213 214 000",
        "Seg-Sex: 9h-17h"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [
        "info@museudodinheiro.pt",
        "educacao@museudodinheiro.pt",
        "imprensa@museudodinheiro.pt"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horários",
      details: [
        "Ter-Dom: 10h-18h",
        "Segunda: Encerrado",
        "Última entrada: 17h30"
      ]
    }
  ];

  const departments = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Informações Gerais",
      description: "Questões sobre horários, bilhetes e serviços",
      email: "info@museudodinheiro.pt",
      phone: "+351 213 214 000"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Serviço Educativo",
      description: "Visitas escolares, workshops e programas educativos",
      email: "educacao@museudodinheiro.pt",
      phone: "+351 213 214 001"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Eventos e Grupos",
      description: "Reservas de grupos, eventos especiais e conferências",
      email: "eventos@museudodinheiro.pt",
      phone: "+351 213 214 002"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contactos
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Estamos aqui para ajudar. Entre em contacto connosco para 
              qualquer questão ou esclarecimento
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contacto */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departamentos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Departamentos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contacte diretamente o departamento mais adequado à sua necessidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {dept.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {dept.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href={`mailto:${dept.email}`} className="hover:text-blue-600 transition-colors">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href={`tel:${dept.phone}`} className="hover:text-blue-600 transition-colors">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contacto */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Envie-nos uma Mensagem
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário abaixo e responderemos o mais brevemente possível
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="O seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="o.seu.email@exemplo.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Contacto
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="geral">Informações Gerais</option>
                  <option value="educacao">Serviço Educativo</option>
                  <option value="eventos">Eventos e Grupos</option>
                  <option value="imprensa">Imprensa</option>
                  <option value="parcerias">Parcerias</option>
                  <option value="sugestoes">Sugestões</option>
                </select>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Assunto da sua mensagem"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Escreva aqui a sua mensagem..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center mx-auto"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </button>
              <p className="text-sm text-gray-500 mt-4">
                * Campos obrigatórios. Responderemos no prazo de 48 horas.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Mapa e Localização */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como Chegar
            </h2>
            <p className="text-xl text-gray-600">
              Localizado no coração histórico de Lisboa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Transportes Públicos
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Metro</h4>
                    <p className="text-gray-600">
                      <strong>Linha Azul:</strong> Estação Terreiro do Paço<br />
                      <strong>Distância:</strong> 2 minutos a pé
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Autocarro</h4>
                    <p className="text-gray-600">
                      <strong>Linhas:</strong> 728, 735, 759, 781, 782<br />
                      <strong>Paragem:</strong> Terreiro do Paço
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Comboio</h4>
                    <p className="text-gray-600">
                      <strong>Estação:</strong> Santa Apolónia<br />
                      <strong>Distância:</strong> 10 minutos a pé
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Carro</h4>
                    <p className="text-gray-600">
                      <strong>Parque:</strong> Terreiro do Paço<br />
                      <strong>Preço:</strong> €1,50/hora
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Mapa Interativo</p>
                  <p className="text-sm">
                    Largo do Museu do Dinheiro<br />
                    1100-242 Lisboa
                  </p>
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Ver no Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Respostas rápidas às questões mais comuns
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                Qual é o preço da entrada?
              </h3>
              <p className="text-gray-600">
                A entrada no Museu do Dinheiro é completamente gratuita para todos os visitantes.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                É necessário fazer reserva?
              </h3>
              <p className="text-gray-600">
                Não é necessário reserva para visitas individuais. Apenas grupos de 10+ pessoas devem fazer reserva prévia.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                Quanto tempo demora a visita?
              </h3>
              <p className="text-gray-600">
                Uma visita completa demora entre 1h30 a 2h, mas pode adaptar o tempo conforme o seu interesse.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                O museu é acessível?
              </h3>
              <p className="text-gray-600">
                Sim, o museu está totalmente adaptado para pessoas com mobilidade reduzida, incluindo elevadores e casas de banho acessíveis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;