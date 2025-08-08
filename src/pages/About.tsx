import React from 'react';
import { Building2, Users, Award, BookOpen, Clock, Target, Heart, Globe } from 'lucide-react';
import { motion, Variants } from 'motion/react';

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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: 'easeOut'
    }
  })
};

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
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 overflow-hidden"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Imagem de fundo */}
        <motion.div
          className="absolute inset-0 w-full h-full z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              O Museu
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Conheça a nossa história, missão e a equipa que torna possível
              esta viagem fascinante pelo mundo do dinheiro
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Missão e Visão */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp as Variants}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                A Nossa Missão
              </h2>
              <div className="space-y-6">
                <motion.p className="text-lg text-gray-600 leading-relaxed" variants={fadeInUp as Variants}>
                  O Museu do Dinheiro tem como missão promover o conhecimento sobre
                  a história monetária e financeira de Portugal, contribuindo para
                  a educação financeira da sociedade portuguesa.
                </motion.p>
                <motion.p className="text-lg text-gray-600 leading-relaxed" variants={fadeInUp as Variants}>
                  Através de exposições inovadoras, programas educativos e atividades
                  culturais, procuramos tornar acessível a todos os cidadãos o
                  conhecimento sobre economia, finanças e o papel do dinheiro na sociedade.
                </motion.p>
                <motion.p className="text-lg text-gray-600 leading-relaxed" variants={fadeInUp as Variants}>
                  Localizado no coração histórico de Lisboa, ocupamos o antigo edifício
                  da Igreja de São Julião, criando uma ponte única entre o passado
                  e o presente da nossa história económica.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Interior do Museu do Dinheiro"
                  className="w-full h-96 object-cover"
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-blue-600 rounded-2xl p-6 shadow-lg text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold mb-1">200k+</div>
                <div className="text-blue-100">Visitantes por ano</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp as Variants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Os Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Princípios que orientam o nosso trabalho e definem a nossa identidade
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp as Variants}
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp as Variants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              A Nossa História
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Marcos importantes na criação e desenvolvimento do Museu do Dinheiro
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp as Variants}
                >
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
                    <motion.div
                      className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 * index }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipa */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp as Variants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              A Nossa Equipa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais dedicados que tornam possível a missão do museu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp as Variants}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp as Variants}
          >
            <h2 className="text-4xl font-bold mb-4">
              O Museu em Números
            </h2>
            <p className="text-xl opacity-90">
              Alguns dados que mostram o nosso impacto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { valor: "7,268", label: "Peças na Coleção" },
              { valor: "200k+", label: "Visitantes Anuais" },
              { valor: "500+", label: "Escolas Parceiras" },
              { valor: "25", label: "Programas Educativos" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                custom={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold mb-2">{stat.valor}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Quer Saber Mais?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Entre em contacto connosco para mais informações sobre o museu,
            parcerias ou oportunidades de colaboração
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Contactar-nos
            </motion.button>
            <motion.button
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Visitar Museu
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;