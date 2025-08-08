import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Eye, Filter, Search } from 'lucide-react';
import { Variants, motion } from 'framer-motion';

const Exhibitions = () => {
  const [filter, setFilter] = useState('todas');
  const [searchTerm, setSearchTerm] = useState('');

  const exhibitions = [
    {
      id: 1,
      title: "A Moeda Portuguesa",
      subtitle: "Das origens aos nossos dias",
      description: "Uma viagem através da história monetária portuguesa, desde as primeiras cunhagens até à adoção do euro.",
      longDescription: "Esta exposição permanente apresenta a evolução da moeda portuguesa ao longo dos séculos, mostrando como as mudanças políticas, económicas e sociais se refletiram na cunhagem de moedas. Desde os primeiros dinheiros de D. Sancho I até às últimas moedas do escudo, passando pelas moedas coloniais e comemorativas.",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "Permanente",
      type: "permanente",
      startDate: "2016-12-01",
      endDate: null,
      location: "Piso 0 - Sala Principal",
      duration: "45-60 min"
    },
    {
      id: 2,
      title: "Sistemas de Pagamento",
      subtitle: "A revolução digital",
      description: "Como a tecnologia transformou a forma como pagamos e transacionamos no século XXI.",
      longDescription: "Explore a evolução dos sistemas de pagamento desde o cheque até aos pagamentos móveis. Esta exposição interativa mostra como a digitalização revolucionou as transações financeiras e o que podemos esperar do futuro dos pagamentos.",
      image: "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "Temporária",
      type: "temporaria",
      startDate: "2024-01-15",
      endDate: "2024-06-30",
      location: "Piso 1 - Galeria Norte",
      duration: "30-40 min"
    },
    {
      id: 3,
      title: "Tesouros do Banco",
      subtitle: "Raridades numismáticas",
      description: "Uma seleção das peças mais raras e valiosas da coleção do Banco de Portugal.",
      longDescription: "Descubra algumas das moedas e notas mais raras da coleção do Banco de Portugal. Peças únicas, erros de cunhagem, provas e ensaios que raramente são expostos ao público.",
      image: "https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "Permanente",
      type: "permanente",
      startDate: "2016-12-01",
      endDate: null,
      location: "Piso 0 - Sala do Tesouro",
      duration: "20-30 min"
    },
    {
      id: 4,
      title: "Inflação e Deflação",
      subtitle: "Fenómenos económicos explicados",
      description: "Compreenda os mecanismos da inflação e deflação através de exemplos históricos.",
      longDescription: "Uma exposição educativa que explica os conceitos de inflação e deflação através de casos práticos da história económica portuguesa e mundial. Inclui simuladores interativos e jogos educativos.",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "Temporária",
      type: "temporaria",
      startDate: "2024-03-01",
      endDate: "2024-08-31",
      location: "Piso 1 - Sala Interativa",
      duration: "40-50 min"
    },
    {
      id: 5,
      title: "Moedas do Mundo",
      subtitle: "Diversidade monetária global",
      description: "Uma coleção fascinante de moedas de diferentes países e épocas históricas.",
      longDescription: "Explore a diversidade das moedas mundiais, desde antigas civilizações até às moedas contemporâneas mais exóticas. Uma viagem numismática pelos cinco continentes.",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "Permanente",
      type: "permanente",
      startDate: "2017-06-01",
      endDate: null,
      location: "Piso 1 - Galeria Internacional",
      duration: "35-45 min"
    },
    {
      id: 6,
      title: "O Futuro do Dinheiro",
      subtitle: "Criptomoedas e moedas digitais",
      description: "Explore as novas formas de dinheiro digital e o seu impacto na economia global.",
      longDescription: "Uma exposição sobre as moedas digitais, blockchain, criptomoedas e o futuro dos sistemas monetários. Inclui demonstrações práticas e debates sobre regulamentação.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "Em Breve",
      type: "temporaria",
      startDate: "2024-07-01",
      endDate: "2024-12-31",
      location: "Piso 2 - Auditório",
      duration: "50-60 min"
    }
  ];

  const filteredExhibitions = exhibitions.filter(exhibition => {
    const matchesFilter = filter === 'todas' || exhibition.type === filter;
    const matchesSearch = exhibition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exhibition.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Permanente';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

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
    <div className="">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Imagem de fundo */}
        <motion.div
          className="absolute inset-0 w-full h-full z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div className="text-center" variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Exposições
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Descubra as nossas exposições cuidadosamente curadas que contam 
              a fascinante história do dinheiro e da economia
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Filtros e Pesquisa */}
      <motion.section
        className="py-12 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Pesquisa */}
            <motion.div className="relative flex-1 max-w-md" variants={fadeInUp}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Pesquisar exposições..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </motion.div>

            {/* Filtros */}
            <motion.div className="flex items-center space-x-4" variants={fadeInUp}>
              <Filter className="text-gray-600 w-5 h-5" />
              <div className="flex space-x-2">
                <button
                  onClick={() => setFilter('todas')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === 'todas' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Todas
                </button>
                <button
                  onClick={() => setFilter('permanente')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === 'permanente' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Permanentes
                </button>
                <button
                  onClick={() => setFilter('temporaria')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === 'temporaria' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Temporárias
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Lista de Exposições */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredExhibitions.map((exhibition, idx) => (
              <motion.div 
                key={exhibition.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={exhibition.image} 
                    alt={exhibition.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 * idx }}
                  />
                  <motion.div className="absolute top-4 left-4" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + 0.1 * idx }}>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      exhibition.status === 'Permanente' 
                        ? 'bg-green-100 text-green-800' 
                        : exhibition.status === 'Em Breve'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {exhibition.status}
                    </span>
                  </motion.div>
                  <motion.div className="absolute top-4 right-4" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + 0.1 * idx }}>
                    <div className="bg-white bg-opacity-90 rounded-full p-2">
                      <Eye className="w-5 h-5 text-blue-900" />
                    </div>
                  </motion.div>
                </div>
                
                <motion.div className="p-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + 0.1 * idx }}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exhibition.title}
                  </h3>
                  <h4 className="text-blue-600 font-medium mb-4 text-lg">
                    {exhibition.subtitle}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {exhibition.longDescription}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-3" />
                      <span>
                        {formatDate(exhibition.startDate)}
                        {exhibition.endDate && ` - ${formatDate(exhibition.endDate)}`}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-3" />
                      <span>{exhibition.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-3" />
                      <span>Duração: {exhibition.duration}</span>
                    </div>
                  </div>

                  <motion.button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Saber Mais
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {filteredExhibitions.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Nenhuma exposição encontrada
              </h3>
              <p className="text-gray-600">
                Tente ajustar os filtros ou termo de pesquisa
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Exhibitions;