import React from 'react';
import { Building2, Users, Award, BookOpen } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const statsVariants: Variants = {
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

const imageVariants: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
};

const bounceVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      duration: 1.2,
      ease: "easeInOut"
    }
  }
};

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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              O Museu do Dinheiro
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            >
              Localizado no coração de Lisboa, o Museu do Dinheiro é um espaço único 
              dedicado à história monetária e financeira de Portugal. Inaugurado em 2016, 
              ocupa o antigo edifício da Igreja de São Julião.
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
              Através de exposições interactivas e inovadoras, o museu proporciona uma 
              experiência educativa e envolvente sobre o papel do dinheiro na sociedade, 
              desde as suas origens até aos desafios contemporâneos.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={statsVariants}
                >
                  <motion.div
                    className="text-blue-900 mb-2 flex justify-center"
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl"
              variants={imageVariants}
            >
              <img 
                src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Interior do Museu do Dinheiro"
                className="w-full h-96 object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-2xl p-6 shadow-lg"
              variants={bounceVariants}
              animate="animate"
            >
              <div className="text-blue-900 font-bold text-lg">
                Entrada Gratuita
              </div>
              <div className="text-blue-800 text-sm">
                Para todos os visitantes
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;