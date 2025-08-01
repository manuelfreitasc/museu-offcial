import React from 'react';
import { ArrowRight, Coins } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 opacity-10">
          <Coins className="w-32 h-32" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <Coins className="w-24 h-24" />
        </div>
        <div className="absolute top-40 right-1/4 opacity-10">
          <Coins className="w-16 h-16" />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Descubra a História
            <span className="block text-yellow-400">do Dinheiro</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Uma viagem fascinante através da evolução monetária, desde as primeiras moedas 
            até aos sistemas de pagamento modernos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>Planear Visita</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Exposições Atuais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;