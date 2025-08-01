import React from 'react';
import { Building2, Users, Award, BookOpen, Clock, Target, Heart, Globe } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: "1846",
      title: "Fundação do Banco de Portugal",
      description: "Criação da instituição que viria a ser o banco central português"
    },
    {
      year: "2010",
      title: "Projeto do Museu",
      description: "Início do projeto de criação do Museu do Dinheiro"
    },
    {
      year: "2016",
      title: "Abertura ao Público",
      description: "Inauguração oficial do Museu do Dinheiro em dezembro"
    },
    {
      year: "2020",
      title: "Expansão Digital",
      description: "Lançamento de plataformas digitais e visitas virtuais"
    },
    {
      year: "2024",
      title: "Renovação",
      description: "Modernização dos espaços e novas exposições interativas"
    }
  ];

  const team = [
    {
      name: "Dr. António Silva",
      role: "Diretor do Museu",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      bio: "Historiador especializado em história económica portuguesa"
    },
    {
      name: "Prof. Maria Santos",
      role: "Curadora Chefe",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      bio: "Especialista em numismática e património cultural"
    },
    {
      name: "Carlos Mendes",
      role: "Coordenador Educativo",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      bio: "Educador com experiência em programas museológicos"
    },
    {
      name: "Ana Costa",
      role: "Responsável de Comunicação",
      image: "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      bio: "Especialista em comunicação cultural e marketing digital"
    }
  ];

  const values = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Educação",
      description: "Promovemos a literacia financeira e o conhecimento sobre história monetária"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Inclusão",
      description: "Garantimos acesso gratuito e programas adaptados a todos os públicos"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Inovação",
      description: "Utilizamos tecnologia de ponta para criar experiências envolventes"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sustentabilidade",
      description: "Comprometemo-nos com práticas ambientalmente responsáveis"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              O Museu
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Conheça a nossa história, missão e a equipa que torna possível 
              esta viagem fascinante pelo mundo do dinheiro
            </p>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                A Nossa Missão
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  O Museu do Dinheiro tem como missão promover o conhecimento sobre 
                  a história monetária e financeira de Portugal, contribuindo para 
                  a educação financeira da sociedade portuguesa.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Através de exposições inovadoras, programas educativos e atividades 
                  culturais, procuramos tornar acessível a todos os cidadãos o 
                  conhecimento sobre economia, finanças e o papel do dinheiro na sociedade.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Localizado no coração histórico de Lisboa, ocupamos o antigo edifício 
                  da Igreja de São Julião, criando uma ponte única entre o passado 
                  e o presente da nossa história económica.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Interior do Museu do Dinheiro"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-2xl p-6 shadow-lg text-white">
                <div className="text-2xl font-bold mb-1">200k+</div>
                <div className="text-blue-100">Visitantes por ano</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Os Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Princípios que orientam o nosso trabalho e definem a nossa identidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              A Nossa História
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Marcos importantes na criação e desenvolvimento do Museu do Dinheiro
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipa */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              A Nossa Equipa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais dedicados que tornam possível a missão do museu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              O Museu em Números
            </h2>
            <p className="text-xl opacity-90">
              Alguns dados que mostram o nosso impacto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">7,268</div>
              <div className="text-blue-200">Peças na Coleção</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">200k+</div>
              <div className="text-blue-200">Visitantes Anuais</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Escolas Parceiras</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25</div>
              <div className="text-blue-200">Programas Educativos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Quer Saber Mais?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Entre em contacto connosco para mais informações sobre o museu, 
            parcerias ou oportunidades de colaboração
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors">
              Contactar-nos
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-colors">
              Visitar Museu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;