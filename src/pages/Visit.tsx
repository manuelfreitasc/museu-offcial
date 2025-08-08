import React from 'react';
import { Clock, MapPin, Ticket, Info, Car, Train, Users, Calendar, Phone, Mail } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: 'easeOut'
    }
  })
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const Visit = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Imagem de fundo */}
        <motion.div
          className="absolute inset-0 w-full h-full z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div className="text-center" variants={fadeInUp} custom={1}>
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" variants={fadeInUp} custom={1}>
              Planear a sua Visita
            </motion.h1>
            <motion.p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto" variants={fadeInUp} custom={2}>
              Toda a informação necessária para uma experiência memorável no Museu do Dinheiro
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Informações Práticas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Horários */}
            <motion.div
              className="bg-blue-50 rounded-2xl p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={1}
            >
              <motion.div className="text-blue-900 mb-4" variants={fadeIn} custom={1}>
                <Clock className="w-10 h-10" />
              </motion.div>
              <motion.h3 className="text-2xl font-bold text-gray-900 mb-6" variants={fadeInUp} custom={2}>Horários</motion.h3>
              <motion.div className="space-y-4" variants={fadeInUp} custom={3}>
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
              </motion.div>
              <motion.div className="mt-6 p-4 bg-yellow-100 rounded-lg" variants={fadeInUp} custom={4}>
                <p className="text-sm text-yellow-800">
                  <strong>Última entrada:</strong> 17h30<br />
                  <strong>Feriados:</strong> Consulte horários especiais
                </p>
              </motion.div>
            </motion.div>

            {/* Bilhetes */}
            <motion.div
              className="bg-green-50 rounded-2xl p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={2}
            >
              <motion.div className="text-green-700 mb-4" variants={fadeIn} custom={2}>
                <Ticket className="w-10 h-10" />
              </motion.div>
              <motion.h3 className="text-2xl font-bold text-gray-900 mb-6" variants={fadeInUp} custom={3}>Bilhetes</motion.h3>
              <motion.div className="space-y-4" variants={fadeInUp} custom={4}>
                <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                  <div className="text-2xl font-bold text-green-700 mb-2">Gratuito</div>
                  <div className="text-gray-600">Entrada livre para todos os visitantes</div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900">Reservas de Grupo</h4>
                  <p className="text-gray-600">Grupos de 10+ pessoas devem fazer reserva prévia</p>
                  <motion.button
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Reservar Grupo
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Localização */}
            <motion.div
              className="bg-yellow-50 rounded-2xl p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={3}
            >
              <motion.div className="text-yellow-700 mb-4" variants={fadeIn} custom={3}>
                <MapPin className="w-10 h-10" />
              </motion.div>
              <motion.h3 className="text-2xl font-bold text-gray-900 mb-6" variants={fadeInUp} custom={4}>Localização</motion.h3>
              <motion.div className="space-y-4" variants={fadeInUp} custom={5}>
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
                <motion.button
                  className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Ver no Google Maps
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Chegar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
          >
            Como Chegar
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={1}
            >
              <motion.div className="text-blue-600 mb-4" variants={fadeIn} custom={1}>
                <Train className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4">Metro</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Linha Azul:</strong> Terreiro do Paço</p>
                <p><strong>Distância:</strong> 2 min a pé</p>
                <p className="text-sm">Saída: Praça do Comércio</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={2}
            >
              <motion.div className="text-green-600 mb-4" variants={fadeIn} custom={2}>
                <Car className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4">Autocarro</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Linhas:</strong> 728, 735, 759</p>
                <p><strong>Paragem:</strong> Terreiro do Paço</p>
                <p className="text-sm">Várias ligações da cidade</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={3}
            >
              <motion.div className="text-purple-600 mb-4" variants={fadeIn} custom={3}>
                <Train className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4">Comboio</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Estação:</strong> Santa Apolónia</p>
                <p><strong>Distância:</strong> 10 min a pé</p>
                <p className="text-sm">Ligações nacionais</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={4}
            >
              <motion.div className="text-red-600 mb-4" variants={fadeIn} custom={4}>
                <Car className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4">Carro</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Parque:</strong> Terreiro do Paço</p>
                <p><strong>Lugares:</strong> Limitados</p>
                <p className="text-sm">€1,50/hora</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
          >
            Serviços Disponíveis
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={1}
            >
              <motion.div
                className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 8 }}
                whileTap={{ scale: 0.95, rotate: -8 }}
              >
                <Users className="w-8 h-8 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">Visitas Guiadas</h3>
              <p className="text-gray-600">Visitas especializadas com guias experientes</p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={2}
            >
              <motion.div
                className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 8 }}
                whileTap={{ scale: 0.95, rotate: -8 }}
              >
                <Info className="w-8 h-8 text-green-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">Audioguias</h3>
              <p className="text-gray-600">Disponíveis em português, inglês e espanhol</p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={3}
            >
              <motion.div
                className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 8 }}
                whileTap={{ scale: 0.95, rotate: -8 }}
              >
                <Calendar className="w-8 h-8 text-yellow-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">Atividades</h3>
              <p className="text-gray-600">Workshops e atividades para toda a família</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contacto Rápido */}
      <motion.section
        className="py-20 bg-blue-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 className="text-3xl font-bold mb-8" variants={fadeInUp} custom={1}>
            Precisa de Mais Informações?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="flex items-center justify-center space-x-4"
              variants={fadeInUp}
              custom={2}
            >
              <Phone className="w-6 h-6" />
              <div>
                <div className="font-bold">Telefone</div>
                <div>+351 213 214 000</div>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center space-x-4"
              variants={fadeInUp}
              custom={3}
            >
              <Mail className="w-6 h-6" />
              <div>
                <div className="font-bold">Email</div>
                <div>info@museudodinheiro.pt</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Visit;