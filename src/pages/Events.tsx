import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, Ticket, Star } from 'lucide-react';

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Inscrições Abertas': return 'bg-green-100 text-green-800';
      case 'Últimas Vagas': return 'bg-yellow-100 text-yellow-800';
      case 'Esgotado': return 'bg-red-100 text-red-800';
      case 'Em Breve': return 'bg-blue-100 text-blue-800';
      case 'Save the Date': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type) => {
    const types = {
      'conferencia': 'Conferência',
      'workshop': 'Workshop',
      'palestra': 'Palestra',
      'exposicao': 'Exposição',
      'curso': 'Curso',
      'evento-especial': 'Evento Especial'
    };
    return types[type] || type;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Eventos
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Participe nos nossos eventos, conferências e atividades especiais 
              sobre economia, finanças e história monetária
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('todos')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                filter === 'todos' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Todos os Eventos
            </button>
            <button
              onClick={() => setFilter('conferencia')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                filter === 'conferencia' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Conferências
            </button>
            <button
              onClick={() => setFilter('workshop')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                filter === 'workshop' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Workshops
            </button>
            <button
              onClick={() => setFilter('curso')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                filter === 'curso' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Cursos
            </button>
            <button
              onClick={() => setFilter('exposicao')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                filter === 'exposicao' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Exposições
            </button>
          </div>
        </div>
      </section>

      {/* Eventos em Destaque */}
      {filter === 'todos' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Eventos em Destaque
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {events.filter(event => event.featured).map((event) => (
                <div 
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
                >
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Destaque
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
                        {event.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-purple-600 font-medium mb-2">
                      {getTypeLabel(event.type)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{event.time} • {event.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-purple-600">{event.price}</span>
                      {event.capacity && (
                        <div className="flex items-center text-gray-600 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{event.capacity} lugares</span>
                        </div>
                      )}
                    </div>
                    
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                      <Ticket className="w-4 h-4 mr-2" />
                      Inscrever-se
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lista de Eventos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {filter === 'todos' ? 'Todos os Eventos' : `${getTypeLabel(filter)}s`}
          </h2>
          
          <div className="space-y-8">
            {filteredEvents.map((event) => (
              <div 
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                            {getTypeLabel(event.type)}
                          </span>
                          {event.featured && (
                            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                              <Star className="w-3 h-3 mr-1" />
                              Destaque
                            </div>
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
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-5 h-5 mr-3" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-5 h-5 mr-3" />
                          <span>{event.time} • {event.duration}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-5 h-5 mr-3" />
                          <span>{event.location}</span>
                        </div>
                        {event.capacity && (
                          <div className="flex items-center text-gray-600">
                            <Users className="w-5 h-5 mr-3" />
                            <span>{event.capacity} lugares</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-purple-600 mb-1">{event.price}</div>
                        {event.speakers.length > 0 && (
                          <div className="text-sm text-gray-600">
                            <strong>Oradores:</strong> {event.speakers.join(', ')}
                          </div>
                        )}
                      </div>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center">
                        <Ticket className="w-4 h-4 mr-2" />
                        Inscrever-se
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Não Perca Nenhum Evento
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Subscreva a nossa newsletter e seja o primeiro a saber sobre 
            novos eventos, conferências e atividades especiais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="O seu email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-purple-300 focus:outline-none"
            />
            <button className="bg-white text-purple-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              Subscrever
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;