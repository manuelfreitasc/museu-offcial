import React from 'react';
import { Calendar, ArrowRight, Eye } from 'lucide-react';

const Exhibitions = () => {
  const exhibitions = [
    {
      title: "A Moeda Portuguesa",
      subtitle: "Das origens aos nossos dias",
      description: "Explore a evolução da moeda portuguesa desde os primeiros cunhos até ao euro.",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "Permanente"
    },
    {
      title: "Sistemas de Pagamento",
      subtitle: "A revolução digital",
      description: "Como a tecnologia transformou a forma como pagamos e transacionamos.",
      image: "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "Temporária"
    },
    {
      title: "Tesouros do Banco",
      subtitle: "Raridades numismáticas",
      description: "Uma seleção das peças mais raras e valiosas da coleção do Banco de Portugal.",
      image: "https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "Permanente"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Exposições
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mergulhe nas nossas exposições cuidadosamente curadas que contam 
            a fascinante história do dinheiro e da economia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitions.map((exhibition, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={exhibition.image} 
                  alt={exhibition.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    exhibition.status === 'Permanente' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {exhibition.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white bg-opacity-90 rounded-full p-2">
                    <Eye className="w-5 h-5 text-blue-900" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {exhibition.title}
                </h3>
                <h4 className="text-blue-600 font-medium mb-3">
                  {exhibition.subtitle}
                </h4>
                <p className="text-gray-600 mb-4">
                  {exhibition.description}
                </p>
                <button className="flex items-center text-blue-900 font-medium hover:text-blue-700 transition-colors">
                  <span>Saber mais</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;