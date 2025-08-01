import React from 'react';
import { Clock, MapPin, Ticket, Info, Car, Train, Users, Calendar, Phone, Mail } from 'lucide-react';

const Visit = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Planear a sua Visita
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Toda a informação necessária para uma experiência memorável no Museu do Dinheiro
            </p>
          </div>
        </div>
      </section>

      {/* Informações Práticas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Horários */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="text-blue-900 mb-4">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Horários</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="font-medium">Terça-feira</span>
                  <span>10h - 18h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="font-medium">Quarta-feira</span>
                  <span>10h - 18h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="font-medium">Quinta-feira</span>
                  <span>10h - 18h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="font-medium">Sexta-feira</span>
                  <span>10h - 18h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="font-medium">Sábado</span>
                  <span>10h - 18h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="font-medium">Domingo</span>
                  <span>10h - 18h</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Segunda-feira</span>
                  <span className="text-red-600 font-medium">Encerrado</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Última entrada:</strong> 17h30<br />
                  <strong>Feriados:</strong> Consulte horários especiais
                </p>
              </div>
            </div>

            {/* Bilhetes */}
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="text-green-700 mb-4">
                <Ticket className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bilhetes</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                  <div className="text-2xl font-bold text-green-700 mb-2">Gratuito</div>
                  <div className="text-gray-600">Entrada livre para todos os visitantes</div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900">Reservas de Grupo</h4>
                  <p className="text-gray-600">Grupos de 10+ pessoas devem fazer reserva prévia</p>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Reservar Grupo
                  </button>
                </div>
              </div>
            </div>

            {/* Localização */}
            <div className="bg-yellow-50 rounded-2xl p-8">
              <div className="text-yellow-700 mb-4">
                <MapPin className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Localização</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Morada</h4>
                  <p className="text-gray-600">
                    Largo do Museu do Dinheiro<br />
                    1100-242 Lisboa<br />
                    Portugal
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Coordenadas GPS</h4>
                  <p className="text-gray-600 font-mono text-sm">
                    38.7071° N, 9.1364° W
                  </p>
                </div>
                <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                  Ver no Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Chegar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Como Chegar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-blue-600 mb-4">
                <Train className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Metro</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Linha Azul:</strong> Terreiro do Paço</p>
                <p><strong>Distância:</strong> 2 min a pé</p>
                <p className="text-sm">Saída: Praça do Comércio</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-green-600 mb-4">
                <Car className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Autocarro</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Linhas:</strong> 728, 735, 759</p>
                <p><strong>Paragem:</strong> Terreiro do Paço</p>
                <p className="text-sm">Várias ligações da cidade</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-purple-600 mb-4">
                <Train className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Comboio</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Estação:</strong> Santa Apolónia</p>
                <p><strong>Distância:</strong> 10 min a pé</p>
                <p className="text-sm">Ligações nacionais</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-red-600 mb-4">
                <Car className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Carro</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Parque:</strong> Terreiro do Paço</p>
                <p><strong>Lugares:</strong> Limitados</p>
                <p className="text-sm">€1,50/hora</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Serviços Disponíveis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visitas Guiadas</h3>
              <p className="text-gray-600">Visitas especializadas com guias experientes</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Info className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Audioguias</h3>
              <p className="text-gray-600">Disponíveis em português, inglês e espanhol</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Atividades</h3>
              <p className="text-gray-600">Workshops e atividades para toda a família</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Rápido */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Precisa de Mais Informações?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center space-x-4">
              <Phone className="w-6 h-6" />
              <div>
                <div className="font-bold">Telefone</div>
                <div>+351 213 214 000</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Mail className="w-6 h-6" />
              <div>
                <div className="font-bold">Email</div>
                <div>info@museudodinheiro.pt</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visit;