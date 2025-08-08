import React from 'react';
import { Clock, MapPin, Ticket, Info, Car, Train } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: 'easeOut'
    }
  })
};

const iconVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.15, rotate: 8, transition: { type: "spring", stiffness: 300, damping: 15 } }
};

const cards = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Horários",
    content: (
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
    )
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Localização",
    content: (
      <div className="text-gray-600 space-y-2">
        <p>Largo do Museu do Dinheiro</p>
        <p>1100-242 Lisboa</p>
        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-3 transition-colors">
          Ver no mapa →
        </button>
      </div>
    )
  },
  {
    icon: <Ticket className="w-8 h-8" />,
    title: "Bilhetes",
    content: (
      <div className="space-y-3">
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="font-bold text-green-800">Entrada Gratuita</div>
          <div className="text-sm text-green-600">Para todos os visitantes</div>
        </div>
        <p className="text-sm text-gray-600">
          Recomendamos reserva prévia para grupos
        </p>
      </div>
    )
  },
  {
    icon: <Train className="w-8 h-8" />,
    title: "Como Chegar",
    content: (
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
    )
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Estacionamento",
    content: (
      <div className="text-gray-600 space-y-2">
        <p>Parque do Terreiro do Paço</p>
        <p>Parque da Praça do Comércio</p>
        <div className="text-sm text-gray-500 mt-3">
          Lugares limitados na zona
        </div>
      </div>
    )
  },
  {
    icon: <Info className="w-8 h-8" />,
    title: "Informações",
    content: (
      <div className="space-y-3 text-gray-600">
        <div>✓ Acessível a pessoas com mobilidade reduzida</div>
        <div>✓ Audioguias disponíveis</div>
        <div>✓ Loja do museu</div>
        <div>✓ Wi-Fi gratuito</div>
      </div>
    )
  }
];

const VisitInfo = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Informações Práticas
          </h2>
          <p className="text-xl text-gray-600">
            Tudo o que precisa saber para planear a sua visita
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-white rounded-2xl p-8 shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <motion.div
                className="text-blue-900 mb-4 inline-block"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="hover"
              >
                {card.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
              {card.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisitInfo;