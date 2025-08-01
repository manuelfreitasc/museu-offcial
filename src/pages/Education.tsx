import React from 'react';
import { Users, BookOpen, Calendar, Clock, Award, Download, Play, FileText } from 'lucide-react';

const Education = () => {
  const programs = [
    {
      id: 1,
      title: "Visitas Escolares",
      target: "Ensino Básico e Secundário",
      duration: "90 minutos",
      capacity: "Até 30 alunos",
      description: "Programa educativo adaptado aos diferentes níveis de ensino, com atividades interativas sobre história monetária e educação financeira.",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      features: ["Visita guiada", "Atividades práticas", "Material didático", "Certificado de participação"]
    },
    {
      id: 2,
      title: "Workshops Familiares",
      target: "Famílias com crianças 6-12 anos",
      duration: "60 minutos",
      capacity: "Até 20 participantes",
      description: "Atividades lúdicas para toda a família descobrir o mundo do dinheiro através de jogos e experiências interativas.",
      image: "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      features: ["Jogos educativos", "Experiências práticas", "Kit para levar", "Diversão garantida"]
    },
    {
      id: 3,
      title: "Formação para Professores",
      target: "Professores do Ensino Básico",
      duration: "3 horas",
      capacity: "Até 25 professores",
      description: "Sessões de formação para professores sobre como integrar a educação financeira no currículo escolar.",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      features: ["Recursos pedagógicos", "Metodologias ativas", "Certificado de formação", "Material de apoio"]
    },
    {
      id: 4,
      title: "Literacia Financeira",
      target: "Jovens e Adultos",
      duration: "2 horas",
      capacity: "Até 40 participantes",
      description: "Workshops sobre gestão financeira pessoal, poupança, investimento e planeamento financeiro.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      features: ["Casos práticos", "Ferramentas digitais", "Plano personalizado", "Seguimento pós-workshop"]
    }
  ];

  const resources = [
    {
      title: "Guia do Professor",
      type: "PDF",
      size: "2.3 MB",
      description: "Manual completo para preparar visitas escolares",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Atividades Interativas",
      type: "ZIP",
      size: "15.7 MB",
      description: "Jogos e exercícios para usar em sala de aula",
      icon: <Play className="w-6 h-6" />
    },
    {
      title: "História da Moeda",
      type: "PDF",
      size: "4.1 MB",
      description: "Cronologia ilustrada da evolução monetária",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Kit Educativo Digital",
      type: "Online",
      size: "Acesso Web",
      description: "Plataforma interativa com recursos multimédia",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Educação
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Promovemos a literacia financeira através de programas educativos 
              inovadores para todas as idades
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15,000+</div>
              <div className="text-gray-600">Estudantes por Ano</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Escolas Parceiras</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">25</div>
              <div className="text-gray-600">Programas Diferentes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programas Educativos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Programas Educativos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma variedade de programas adaptados a diferentes públicos e necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div 
                key={program.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <div className="text-green-600 font-medium mb-4">
                    {program.target}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{program.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{program.capacity}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Inclui:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                      Inscrever
                    </button>
                    <button className="px-4 py-3 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      Saber Mais
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos Educativos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recursos Educativos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Materiais gratuitos para professores, estudantes e famílias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="text-blue-600 mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-gray-200 px-2 py-1 rounded mr-2">{resource.type}</span>
                  <span>{resource.size}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {resource.description}
                </p>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Descarregar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservas */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para uma Experiência Educativa Única?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Reserve já o seu programa educativo e proporcione aos seus alunos 
            uma aprendizagem inesquecível sobre o mundo do dinheiro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-900 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Fazer Reserva
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-green-900 font-bold py-4 px-8 rounded-lg transition-colors">
              Contactar Equipa
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;