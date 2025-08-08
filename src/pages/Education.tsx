import React from 'react';
import { Users, BookOpen, Calendar, Clock, Award, Download, Play, FileText } from 'lucide-react';
import { Variants, motion } from 'motion/react';

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

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: 'easeOut'
      }
    })
  };
  
  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={1}
      >
        {/* Imagem de fundo */}
        <motion.div
          className="absolute inset-0 w-full h-full z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={fadeInUp}
              custom={1}
            >
              Educação
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
              variants={fadeInUp}
              custom={2}
            >
              Promovemos a literacia financeira através de programas educativos 
              inovadores para todas as idades
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Estatísticas */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={2}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { valor: "15,000+", label: "Estudantes por Ano", cor: "text-blue-600" },
              { valor: "500+", label: "Escolas Parceiras", cor: "text-blue-600" },
              { valor: "25", label: "Programas Diferentes", cor: "text-yellow-600" },
              { valor: "98%", label: "Satisfação", cor: "text-purple-600" }
            ].map((stat, idx) => (
              <motion.div
                className="text-center"
                key={stat.label}
                variants={fadeInUp}
                custom={idx + 1}
              >
                <div className={`text-4xl font-bold ${stat.cor} mb-2`}>{stat.valor}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Programas Educativos */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={3}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            custom={1}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Programas Educativos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma variedade de programas adaptados a diferentes públicos e necessidades
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, idx) => (
              <motion.div 
                key={program.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-blue-100"
                variants={fadeInUp}
                custom={idx + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <motion.div
                    className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    <Users className="w-5 h-5 text-blue-600" />
                  </motion.div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <div className="text-blue-600 font-medium mb-4">
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
                        <motion.div
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <motion.button
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Inscrever
                    </motion.button>
                    <motion.button
                      className="px-4 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Saber Mais
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Recursos Educativos */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={4}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            custom={1}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recursos Educativos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Materiais gratuitos para professores, estudantes e famílias
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-6 hover:bg-blue-50 transition-colors cursor-pointer border border-blue-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
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
                <motion.button
                  className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descarregar
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Reservas */}
      <motion.section
        className="py-20 bg-blue-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={5}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            variants={fadeInUp}
            custom={1}
          >
            Pronto para uma Experiência Educativa Única?
          </motion.h2>
          <motion.p
            className="text-xl opacity-90 mb-8"
            variants={fadeInUp}
            custom={2}
          >
            Reserve já o seu programa educativo e proporcione aos seus alunos 
            uma aprendizagem inesquecível sobre o mundo do dinheiro
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-blue-900 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Fazer Reserva
            </motion.button>
            <motion.button
              className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Contactar Equipa
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Education;