import React from 'react';
import { Calendar, ArrowRight, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
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

const imageVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } }
};

const buttonVariants = {
  hover: { x: 6, transition: { type: "spring", stiffness: 300 } }
};

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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Exposições
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mergulhe nas nossas exposições cuidadosamente curadas que contam 
            a fascinante história do dinheiro e da economia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitions.map((exhibition, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <motion.div className="relative overflow-hidden group">
                <motion.img 
                  src={exhibition.image} 
                  alt={exhibition.title}
                  className="w-full h-64 object-cover transition-transform duration-300"
                  whileHover="hover"
                  variants={imageVariants}
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
                <motion.div 
                  className="absolute top-4 right-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4, type: "spring" }}
                >
                  <div className="bg-white bg-opacity-90 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-5 h-5 text-blue-900" />
                  </div>
                </motion.div>
              </motion.div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {exhibition.title}
                </motion.h3>
                <motion.h4 
                  className="text-blue-600 font-medium mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 * index }}
                >
                  {exhibition.subtitle}
                </motion.h4>
                <motion.p 
                  className="text-gray-600 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  {exhibition.description}
                </motion.p>
                <motion.button
                  className="flex items-center text-blue-900 font-medium hover:text-blue-700 transition-colors"
                  whileHover="hover"
                  variants={buttonVariants}
                >
                  <span>Saber mais</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;