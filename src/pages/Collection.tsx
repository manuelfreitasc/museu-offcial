import React, { useState } from 'react';
import { Search, Filter, Grid, List, Eye, Calendar, Award } from 'lucide-react';
import { Variants, motion } from 'framer-motion';

const Collection = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filter, setFilter] = useState('todas');
  const [searchTerm, setSearchTerm] = useState('');

  const collections = [
    {
      id: 1,
      title: "Moedas Portuguesas",
      category: "moedas",
      period: "Século XII - XXI",
      items: 2847,
      description: "Coleção completa de moedas portuguesas desde D. Sancho I até ao euro.",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      highlights: ["Moedas de D. Afonso Henriques", "Cruzados de ouro", "Últimas moedas do escudo"],
      rarity: "Alta"
    },
    {
      id: 2,
      title: "Notas do Banco de Portugal",
      category: "notas",
      period: "1847 - 2002",
      items: 1523,
      description: "Todas as emissões de notas do Banco de Portugal desde a sua fundação.",
      image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      highlights: ["Primeira nota de 1847", "Notas da República", "Série Artistas"],
      rarity: "Muito Alta"
    },
    {
      id: 3,
      title: "Moedas Coloniais",
      category: "moedas",
      period: "Século XVI - XX",
      items: 892,
      description: "Moedas cunhadas para as colónias portuguesas em África, Ásia e América.",
      image: "https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      highlights: ["Moedas do Brasil", "Rupias da Índia", "Moedas de Macau"],
      rarity: "Alta"
    },
    {
      id: 4,
      title: "Instrumentos de Medida",
      category: "instrumentos",
      period: "Século XV - XIX",
      items: 234,
      description: "Balanças, pesos e outros instrumentos utilizados no comércio e cunhagem.",
      image: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      highlights: ["Balança de ourives", "Pesos padrão", "Cunhos originais"],
      rarity: "Média"
    },
    {
      id: 5,
      title: "Medalhas Comemorativas",
      category: "medalhas",
      period: "Século XVIII - XXI",
      items: 567,
      description: "Medalhas comemorativas de eventos históricos e personalidades.",
      image: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      highlights: ["Medalha do Terramoto de 1755", "Centenários", "Descobrimentos"],
      rarity: "Média"
    },
    {
      id: 6,
      title: "Documentos Históricos",
      category: "documentos",
      period: "Século XIV - XX",
      items: 1205,
      description: "Documentos relacionados com a história monetária e bancária portuguesa.",
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      highlights: ["Cartas régias", "Contratos bancários", "Correspondência oficial"],
      rarity: "Muito Alta"
    }
  ];

  const filteredCollections = collections.filter(collection => {
    const matchesFilter = filter === 'todas' || collection.category === filter;
    const matchesSearch = collection.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         collection.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getRarityColor = (rarity: any) => {
    switch (rarity) {
      case 'Muito Alta': return 'text-red-600 bg-red-100';
      case 'Alta': return 'text-orange-600 bg-orange-100';
      case 'Média': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
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
              Coleção
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Explore o nosso vasto acervo de mais de 7.000 peças que contam 
              a história monetária e financeira de Portugal
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Estatísticas */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "7,268", label: "Peças Total", color: "text-blue-600" },
              { value: "3,739", label: "Moedas", color: "text-green-600" },
              { value: "1,523", label: "Notas", color: "text-yellow-600" },
              { value: "2,006", label: "Outros Itens", color: "text-purple-600" }
            ].map((stat, idx) => (
              <motion.div
                className="text-center"
                key={stat.label}
                custom={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 + 0.2, duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Filtros e Controles */}
      <motion.section
        className="py-12 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Pesquisa */}
            <motion.div
              className="relative flex-1 max-w-md"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Pesquisar na coleção..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </motion.div>

            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Filtros */}
              <div className="flex items-center space-x-4">
                <Filter className="text-gray-600 w-5 h-5" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="todas">Todas as Categorias</option>
                  <option value="moedas">Moedas</option>
                  <option value="notas">Notas</option>
                  <option value="medalhas">Medalhas</option>
                  <option value="instrumentos">Instrumentos</option>
                  <option value="documentos">Documentos</option>
                </select>
              </div>

              {/* Modo de Visualização */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Coleções */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12
                  }
                }
              }}
            >
              {filteredCollections.map((collection, idx) => (
                <motion.div 
                  key={collection.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  custom={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img 
                      src={collection.image} 
                      alt={collection.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      initial={{ scale: 1.05, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + idx * 0.1, duration: 0.7, ease: 'easeOut' }}
                    />
                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                    >
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRarityColor(collection.rarity)}`}>
                        {collection.rarity}
                      </span>
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 + idx * 0.1, duration: 0.5 }}
                    >
                      {collection.title}
                    </motion.h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{collection.period}</span>
                    </div>
                    <div className="flex items-center text-blue-600 mb-4">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="font-medium">{collection.items.toLocaleString()} peças</span>
                    </div>
                    <motion.p
                      className="text-gray-600 mb-4 text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                    >
                      {collection.description}
                    </motion.p>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Destaques:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {collection.highlights.map((highlight, index) => (
                          <motion.li
                            key={index}
                            className="flex items-center"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.45 + idx * 0.1 + index * 0.05, duration: 0.3 }}
                          >
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <motion.button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Explorar Coleção
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12
                  }
                }
              }}
            >
              {filteredCollections.map((collection, idx) => (
                <motion.div 
                  key={collection.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  custom={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row">
                    <motion.div
                      className="md:w-1/3"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                    >
                      <img 
                        src={collection.image} 
                        alt={collection.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </motion.div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <motion.h3
                            className="text-2xl font-bold text-gray-900 mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                          >
                            {collection.title}
                          </motion.h3>
                          <div className="flex items-center text-gray-600 mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{collection.period}</span>
                          </div>
                          <div className="flex items-center text-blue-600">
                            <Award className="w-4 h-4 mr-2" />
                            <span className="font-medium">{collection.items.toLocaleString()} peças</span>
                          </div>
                        </div>
                        <motion.span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getRarityColor(collection.rarity)}`}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.35 + idx * 0.1, duration: 0.4 }}
                        >
                          {collection.rarity}
                        </motion.span>
                      </div>
                      
                      <motion.p
                        className="text-gray-600 mb-4 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                      >
                        {collection.description}
                      </motion.p>
                      
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 mb-2">Destaques:</h4>
                        <div className="flex flex-wrap gap-2">
                          {collection.highlights.map((highlight, index) => (
                            <motion.span
                              key={index}
                              className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.45 + idx * 0.1 + index * 0.05, duration: 0.3 }}
                            >
                              {highlight}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      <motion.button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Explorar Coleção
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {filteredCollections.length === 0 && (
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
                Nenhuma coleção encontrada
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

export default Collection;