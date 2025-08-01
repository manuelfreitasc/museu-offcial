import React from 'react';
import { Building2, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Building2 className="w-8 h-8" />,
      number: "2016",
      label: "Ano de Abertura"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "200k+",
      label: "Visitantes Anuais"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "5000+",
      label: "Peças em Exposição"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      number: "15",
      label: "Programas Educativos"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              O Museu do Dinheiro
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Localizado no coração de Lisboa, o Museu do Dinheiro é um espaço único 
              dedicado à história monetária e financeira de Portugal. Inaugurado em 2016, 
              ocupa o antigo edifício da Igreja de São Julião.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Através de exposições interactivas e inovadoras, o museu proporciona uma 
              experiência educativa e envolvente sobre o papel do dinheiro na sociedade, 
              desde as suas origens até aos desafios contemporâneos.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-blue-900 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Interior do Museu do Dinheiro"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-2xl p-6 shadow-lg">
              <div className="text-blue-900 font-bold text-lg">
                Entrada Gratuita
              </div>
              <div className="text-blue-800 text-sm">
                Para todos os visitantes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;