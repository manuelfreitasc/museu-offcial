import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.12,
      duration: 0.7,
      ease: 'easeOut'
    }
  })
};

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={stagger}
        >
          {/* Sobre */}
          <motion.div variants={fadeInUp} custom={1}>
            <h3 className="text-xl font-bold mb-4">Museu do Dinheiro</h3>
            <p className="text-blue-100 mb-4">
              Um espaço único dedicado à história monetária e financeira de Portugal, 
              promovendo a educação financeira e o conhecimento económico.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#FFD600" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Facebook className="w-5 h-5 cursor-pointer transition-colors" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#FFD600" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Twitter className="w-5 h-5 cursor-pointer transition-colors" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#FFD600" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Instagram className="w-5 h-5 cursor-pointer transition-colors" />
              </motion.a>
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#FFD600" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Youtube className="w-5 h-5 cursor-pointer transition-colors" />
              </motion.a>
            </div>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div variants={fadeInUp} custom={2}>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-blue-100">
              <motion.li whileHover={{ x: 8, color: "#FFD600" }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to="/visitar" className="hover:text-yellow-400 transition-colors">Visitar</Link>
              </motion.li>
              <motion.li whileHover={{ x: 8, color: "#FFD600" }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to="/exposicoes" className="hover:text-yellow-400 transition-colors">Exposições</Link>
              </motion.li>
              <motion.li whileHover={{ x: 8, color: "#FFD600" }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to="/colecao" className="hover:text-yellow-400 transition-colors">Coleção</Link>
              </motion.li>
              <motion.li whileHover={{ x: 8, color: "#FFD600" }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to="/educacao" className="hover:text-yellow-400 transition-colors">Educação</Link>
              </motion.li>
              <motion.li whileHover={{ x: 8, color: "#FFD600" }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to="/eventos" className="hover:text-yellow-400 transition-colors">Eventos</Link>
              </motion.li>
              <motion.li whileHover={{ x: 8, color: "#FFD600" }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to="/contactos" className="hover:text-yellow-400 transition-colors">Contactos</Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Serviços */}
          <motion.div variants={fadeInUp} custom={3}>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-blue-100">
              <motion.li whileHover={{ x: 8, color: "#FFD600" }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#" className="hover:text-yellow-400 transition-colors">Visitas Guiadas</a>
              </motion.li>
              <motion.li whileHover={{ x: 8, color: "#FFD600" }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#" className="hover:text-yellow-400 transition-colors">Grupos Escolares</a>
              </motion.li>
              <motion.li whileHover={{ x: 8, color: "#FFD600" }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#" className="hover:text-yellow-400 transition-colors">Atividades Familiares</a>
              </motion.li>
              <motion.li whileHover={{ x: 8, color: "#FFD600" }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#" className="hover:text-yellow-400 transition-colors">Workshops</a>
              </motion.li>
              <motion.li whileHover={{ x: 8, color: "#FFD600" }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#" className="hover:text-yellow-400 transition-colors">Biblioteca</a>
              </motion.li>
              <motion.li whileHover={{ x: 8, color: "#FFD600" }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#" className="hover:text-yellow-400 transition-colors">Loja</a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div variants={fadeInUp} custom={4}>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3 text-blue-100">
              <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05, color: "#FFD600" }}>
                <MapPin className="w-5 h-5" />
                <span>Largo do Museu do Dinheiro<br />1100-242 Lisboa</span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05, color: "#FFD600" }}>
                <Phone className="w-5 h-5" />
                <span>+351 213 214 000</span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05, color: "#FFD600" }}>
                <Mail className="w-5 h-5" />
                <span>info@museudodinheiro.pt</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-blue-800 mt-12 pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-100 text-sm">
              © 2024 Museu do Dinheiro - Banco de Portugal. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a
                href="#"
                className="text-blue-100 hover:text-yellow-400 text-sm transition-colors"
                whileHover={{ scale: 1.08, color: "#FFD600" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Política de Privacidade
              </motion.a>
              <motion.a
                href="#"
                className="text-blue-100 hover:text-yellow-400 text-sm transition-colors"
                whileHover={{ scale: 1.08, color: "#FFD600" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Termos de Uso
              </motion.a>
              <motion.a
                href="#"
                className="text-blue-100 hover:text-yellow-400 text-sm transition-colors"
                whileHover={{ scale: 1.08, color: "#FFD600" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Cookies
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;