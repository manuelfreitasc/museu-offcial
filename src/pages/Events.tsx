import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, Ticket, Star } from 'lucide-react';

// Animation helpers (using framer-motion for smoothness)
import { motion, AnimatePresence, Variants } from 'framer-motion';

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
const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const Events = () => {
  const [filter, setFilter] = useState('todos');

  const events = [
    {
      id: 1,
      title: "Conferência: O Futuro dos Pagamentos Digitais",
      type: "conferencia",
      date: "2024-02-15",
      time: "14:30",
      duration: "2h30",
      location: "Auditório Principal",
      capacity: 150,
      price: "Gratuito",
      status: "Inscrições Abertas",
      description: "Debate sobre as tendências dos pagamentos digitais com especialistas nacionais e internacionais.",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      speakers: ["Dr. João Silva", "Prof. Maria Santos", "Ana Costa (BCE)"],
      featured: true
    },
    {
      id: 2,
      title: "Workshop: Educação Financeira para Jovens",
      type: "workshop",
      date: "2024-02-20",
      time: "10:00",
      duration: "3h",
      location: "Sala de Atividades",
      capacity: 30,
      price: "€15",
      status: "Últimas Vagas",
      description: "Sessão prática sobre gestão financeira pessoal dirigida a jovens dos 16 aos 25 anos.",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      speakers: ["Carlos Mendes", "Sofia Rodrigues"],
      featured: false
    },
    {
      id: 3,
      title: "Exposição Temporária: Moedas Raras do Século XIX",
      type: "exposicao",
      date: "2024-03-01",
      time: "10:00",
      duration: "Todo o dia",
      location: "Galeria Temporária",
      capacity: null,
      price: "Gratuito",
      status: "Em Breve",
      description: "Inauguração da nova exposição com peças raras da coleção privada do Museu.",
      image: "https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      speakers: ["Curador Chefe", "Especialista Numismático"],
      featured: true
    },
    {
      id: 4,
      title: "Palestra: História do Banco de Portugal",
      type: "palestra",
      date: "2024-03-10",
      time: "16:00",
      duration: "1h30",
      location: "Sala de Conferências",
      capacity: 80,
      price: "Gratuito",
      status: "Inscrições Abertas",
      description: "Apresentação sobre os 170 anos de história do Banco de Portugal.",
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      speakers: ["Historiador Oficial"],
      featured: false
    },
    {
      id: 5,
      title: "Noite dos Museus 2024",
      type: "evento-especial",
      date: "2024-05-18",
      time: "19:00",
      duration: "5h",
      location: "Todo o Museu",
      capacity: 500,
      price: "Gratuito",
      status: "Save the Date",
      description: "Evento especial com visitas noturnas, atividades familiares e espetáculos.",
      image: "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      speakers: ["Vários Artistas", "Equipa do Museu"],
      featured: true
    },
    {
      id: 6,
      title: "Curso: Investimentos para Iniciantes",
      type: "curso",
      date: "2024-04-05",
      time: "09:30",
      duration: "6h (2 dias)",
      location: "Sala de Formação",
      capacity: 25,
      price: "€45",
      status: "Inscrições Abertas",
      description: "Curso intensivo sobre os fundamentos dos investimentos financeiros.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      speakers: ["Consultor Financeiro", "Analista de Mercados"],
      featured: false
    }
  ];

  const filteredEvents = events.filter(event => {
    if (filter === 'todos') return true;
    return event.type === filter;
  });

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Usar cor padrão azul para status
  const getStatusColor = (status: any) => {
    // cor padrão: bg-blue-200 text-blue-900
    return 'bg-blue-200 text-blue-900';
  };

  const getTypeLabel = (type: string) => {
    const types = {
      'conferencia': 'Conferência',
      'workshop': 'Workshop',
      'palestra': 'Palestra',
      'exposicao': 'Exposição',
      'curso': 'Curso',
      'evento-especial': 'Evento Especial'
    } as Record<string, string>;
    return types[type] ?? type;
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
              Eventos
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
              variants={fadeInUp}
              custom={2}
              >
              Participe nos nossos eventos, conferências e atividades especiais 
              sobre economia, finanças e história monetária
            </motion.p>
          </motion.div>
        </div>
      </motion.section>


      {/* Filtros */}
      <motion.section
        className="py-12 bg-gray-50"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {[
              { key: 'todos', label: 'Todos os Eventos' },
              { key: 'conferencia', label: 'Conferências' },
              { key: 'workshop', label: 'Workshops' },
              { key: 'curso', label: 'Cursos' },
              { key: 'exposicao', label: 'Exposições' }
            ].map((btn, idx) => (
              <motion.button
                key={btn.key}
                onClick={() => setFilter(btn.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  filter === btn.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
                variants={fadeInUp}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileTap={{ scale: 0.95 }}
              >
                {btn.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Eventos em Destaque */}
      <AnimatePresence>
      {filter === 'todos' && (
        <motion.section
          className="py-16 bg-white"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl font-bold text-center text-gray-900 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Eventos em Destaque
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
              {events.filter(event => event.featured).map((event, idx) => (
                <motion.div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
                >
                  <motion.div
                    className="absolute top-4 left-4 z-10"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                  >
                    <div className="bg-yellow-300 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Destaque
                    </div>
                  </motion.div>
                  <div className="relative overflow-hidden">
                    <motion.img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      initial={{ scale: 1.05, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.1 + idx * 0.1 }}
                    />
                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                    >
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
                        {event.status}
                      </span>
                    </motion.div>
                  </div>
                  
                  <motion.div className="p-6" initial="hidden" animate="visible" variants={fadeIn}>
                    <div className="text-blue-600 font-medium mb-2">
                      {getTypeLabel(event.type)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-700 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center text-gray-700 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{event.time} • {event.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-700 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-blue-600">{event.price}</span>
                      {event.capacity && (
                        <div className="flex items-center text-gray-700 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{event.capacity} lugares</span>
                        </div>
                      )}
                    </div>
                    
                    <motion.button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Ticket className="w-4 h-4 mr-2" />
                      Inscrever-se
                    </motion.button>
                  </motion.div>
                </motion.div>
              ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.section>
      )}
      </AnimatePresence>

      {/* Lista de Eventos */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {filter === 'todos' ? 'Todos os Eventos' : `${getTypeLabel(filter)}s`}
          </motion.h2>
          
          <motion.div
            className="space-y-8"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
            {filteredEvents.map((event, idx) => (
              <motion.div 
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ scale: 1.01, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
              >
                <div className="flex flex-col lg:flex-row">
                  <motion.div
                    className="lg:w-1/3"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 + idx * 0.08 }}
                  >
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="lg:w-2/3 p-8"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 + idx * 0.08 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {getTypeLabel(event.type)}
                          </span>
                          {event.featured && (
                            <motion.div
                              className="bg-yellow-100 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium flex items-center"
                              initial={{ scale: 0.7, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.2 + idx * 0.08, duration: 0.3 }}
                            >
                              <Star className="w-3 h-3 mr-1" />
                              Destaque
                            </motion.div>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
                        {event.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-700">
                          <Calendar className="w-5 h-5 mr-3" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Clock className="w-5 h-5 mr-3" />
                          <span>{event.time} • {event.duration}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-700">
                          <MapPin className="w-5 h-5 mr-3" />
                          <span>{event.location}</span>
                        </div>
                        {event.capacity && (
                          <div className="flex items-center text-gray-700">
                            <Users className="w-5 h-5 mr-3" />
                            <span>{event.capacity} lugares</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-blue-600 mb-1">{event.price}</div>
                        {event.speakers.length > 0 && (
                          <div className="text-sm text-gray-700">
                            <strong>Oradores:</strong> {event.speakers.join(', ')}
                          </div>
                        )}
                      </div>
                      <motion.button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Ticket className="w-4 h-4 mr-2" />
                        Inscrever-se
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter */}
      <motion.section
        className="py-20 bg-blue-900 text-white"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Não Perca Nenhum Evento
          </motion.h2>
          <motion.p
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Subscreva a nossa newsletter e seja o primeiro a saber sobre 
            novos eventos, conferências e atividades especiais
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <input
              type="email"
              placeholder="Insira o seu email"
              aria-label="Email para subscrição da newsletter"
              className="flex-1 px-4 py-3 text-white rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-400 focus:outline-none border border-blue-200 placeholder-gray-500"
              autoComplete="email"
              required
            />
            <motion.button
              className="bg-white text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscrever
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Events;