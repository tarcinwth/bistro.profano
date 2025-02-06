import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Início' },
    { path: '/cardapio', label: 'Cardápio' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/contato', label: 'Contato' }
  ];

  return (
    <header className="fixed w-full z-50 bg-terroso/90 dark:bg-preto-bahia/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-display text-2xl text-marrom-escuro dark:text-bege-claro">
            Bistrô Profano
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-marrom-escuro dark:text-bege-claro hover:text-laranja-queimado
                         dark:hover:text-dende transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-marrom-escuro dark:text-bege-claro"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-terroso dark:bg-preto-bahia"
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-2 text-marrom-escuro dark:text-bege-claro
                           hover:text-laranja-queimado dark:hover:text-dende"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header