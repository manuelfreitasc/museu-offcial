import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Clock, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Ter-Dom: 10h-18h</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Largo do Museu do Dinheiro, Lisboa</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+351 213 214 000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <h1 className="text-2xl font-bold text-blue-900">
                Museu do Dinheiro
              </h1>
            </Link>
            <p className="text-sm text-gray-600">Banco de Portugal</p>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/visitar" 
              className={`font-medium transition-colors ${
                isActive('/visitar') ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Visitar
            </Link>
            <Link 
              to="/exposicoes" 
              className={`font-medium transition-colors ${
                isActive('/exposicoes') ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Exposições
            </Link>
            <Link 
              to="/colecao" 
              className={`font-medium transition-colors ${
                isActive('/colecao') ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Coleção
            </Link>
            <Link 
              to="/educacao" 
              className={`font-medium transition-colors ${
                isActive('/educacao') ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Educação
            </Link>
            <Link 
              to="/eventos" 
              className={`font-medium transition-colors ${
                isActive('/eventos') ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Eventos
            </Link>
            <Link 
              to="/o-museu" 
              className={`font-medium transition-colors ${
                isActive('/o-museu') ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              O Museu
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/visitar" 
                className={`font-medium ${
                  isActive('/visitar') ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Visitar
              </Link>
              <Link 
                to="/exposicoes" 
                className={`font-medium ${
                  isActive('/exposicoes') ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Exposições
              </Link>
              <Link 
                to="/colecao" 
                className={`font-medium ${
                  isActive('/colecao') ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Coleção
              </Link>
              <Link 
                to="/educacao" 
                className={`font-medium ${
                  isActive('/educacao') ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Educação
              </Link>
              <Link 
                to="/eventos" 
                className={`font-medium ${
                  isActive('/eventos') ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Eventos
              </Link>
              <Link 
                to="/o-museu" 
                className={`font-medium ${
                  isActive('/o-museu') ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                O Museu
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;