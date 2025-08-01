import React, { useState } from 'react';
import { Search, Filter, Grid, List, Eye, Calendar, Award } from 'lucide-react';

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

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Muito Alta': return 'text-red-600 bg-red-100';
      case 'Alta': return 'text-orange-600 bg-orange-100';
      case 'Média': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Coleção
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Explore o nosso vasto acervo de mais de 7.000 peças que contam 
              a história monetária e financeira de Portugal
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">7,268</div>
              <div className="text-gray-600">Peças Total</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">3,739</div>
              <div className="text-gray-600">Moedas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">1,523</div>
              <div className="text-gray-600">Notas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">2,006</div>
              <div className="text-gray-600">Outros Itens</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros e Controles */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Pesquisa */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Pesquisar na coleção..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center space-x-6">
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
            </div>
          </div>
        </div>
      </section>

      {/* Coleções */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCollections.map((collection) => (
                <div 
                  key={collection.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={collection.image} 
                      alt={collection.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRarityColor(collection.rarity)}`}>
                        {collection.rarity}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {collection.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{collection.period}</span>
                    </div>
                    <div className="flex items-center text-blue-600 mb-4">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="font-medium">{collection.items.toLocaleString()} peças</span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {collection.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Destaques:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {collection.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                      <Eye className="w-4 h-4 mr-2" />
                      Explorar Coleção
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredCollections.map((collection) => (
                <div 
                  key={collection.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={collection.image} 
                        alt={collection.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {collection.title}
                          </h3>
                          <div className="flex items-center text-gray-600 mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{collection.period}</span>
                          </div>
                          <div className="flex items-center text-blue-600">
                            <Award className="w-4 h-4 mr-2" />
                            <span className="font-medium">{collection.items.toLocaleString()} peças</span>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRarityColor(collection.rarity)}`}>
                          {collection.rarity}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {collection.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 mb-2">Destaques:</h4>
                        <div className="flex flex-wrap gap-2">
                          {collection.highlights.map((highlight, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        Explorar Coleção
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredCollections.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Nenhuma coleção encontrada
              </h3>
              <p className="text-gray-600">
                Tente ajustar os filtros ou termo de pesquisa
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Collection;