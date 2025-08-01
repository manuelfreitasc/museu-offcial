import React from 'react';
import { Clock, MapPin, Ticket, Info, Car, Train } from 'lucide-react';

const VisitInfo = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Informações Práticas
          </h2>
          <p className="text-xl text-gray-600">
            Tudo o que precisa saber para planear a sua visita
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Horários */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-blue-900 mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Horários</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between">
                <span>Terça a Domingo</span>
                <span className="font-medium">10h - 18h</span>
              </div>
              <div className="flex justify-between">
                <span>Segunda-feira</span>
                <span className="font-medium text-red-600">Encerrado</span>
              </div>
              <div className="text-sm text-gray-500 mt-4">
                Última entrada: 17h30
              </div>
            </div>
          </div>

          {/* Localização */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-blue-900 mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Localização</h3>
            <div className="text-gray-600 space-y-2">
              <p>Largo do Museu do Dinheiro</p>
              <p>1100-242 Lisboa</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-3">
                Ver no mapa →
              </button>
            </div>
          </div>

          {/* Bilhetes */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-blue-900 mb-4">
              <Ticket className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Bilhetes</h3>
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="font-bold text-green-800">Entrada Gratuita</div>
                <div className="text-sm text-green-600">Para todos os visitantes</div>
              </div>
              <p className="text-sm text-gray-600">
                Recomendamos reserva prévia para grupos
              </p>
            </div>
          </div>

          {/* Transportes */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-blue-900 mb-4">
              <Train className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Como Chegar</h3>
            <div className="space-y-3 text-gray-600">
              <div>
                <span className="font-medium">Metro:</span> Terreiro do Paço (Linha Azul)
              </div>
              <div>
                <span className="font-medium">Autocarro:</span> 728, 735, 759, 781, 782
              </div>
              <div>
                <span className="font-medium">Comboio:</span> Estação do Oriente
              </div>
            </div>
          </div>

          {/* Estacionamento */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-blue-900 mb-4">
              <Car className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Estacionamento</h3>
            <div className="text-gray-600 space-y-2">
              <p>Parque do Terreiro do Paço</p>
              <p>Parque da Praça do Comércio</p>
              <div className="text-sm text-gray-500 mt-3">
                Lugares limitados na zona
              </div>
            </div>
          </div>

          {/* Informações Gerais */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-blue-900 mb-4">
              <Info className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Informações</h3>
            <div className="space-y-3 text-gray-600">
              <div>✓ Acessível a pessoas com mobilidade reduzida</div>
              <div>✓ Audioguias disponíveis</div>
              <div>✓ Loja do museu</div>
              <div>✓ Wi-Fi gratuito</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitInfo;