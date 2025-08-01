import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Museu do Dinheiro</h3>
            <p className="text-blue-100 mb-4">
              Um espaço único dedicado à história monetária e financeira de Portugal, 
              promovendo a educação financeira e o conhecimento económico.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-blue-100">
              <li><Link to="/visitar" className="hover:text-yellow-400 transition-colors">Visitar</Link></li>
              <li><Link to="/exposicoes" className="hover:text-yellow-400 transition-colors">Exposições</Link></li>
              <li><Link to="/colecao" className="hover:text-yellow-400 transition-colors">Coleção</Link></li>
              <li><Link to="/educacao" className="hover:text-yellow-400 transition-colors">Educação</Link></li>
              <li><Link to="/eventos" className="hover:text-yellow-400 transition-colors">Eventos</Link></li>
              <li><Link to="/contactos" className="hover:text-yellow-400 transition-colors">Contactos</Link></li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Visitas Guiadas</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Grupos Escolares</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Atividades Familiares</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Workshops</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Biblioteca</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Loja</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>Largo do Museu do Dinheiro<br />1100-242 Lisboa</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>+351 213 214 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>info@museudodinheiro.pt</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-100 text-sm">
              © 2024 Museu do Dinheiro - Banco de Portugal. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-100 hover:text-yellow-400 text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-blue-100 hover:text-yellow-400 text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-blue-100 hover:text-yellow-400 text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;