import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-gradient-to-r from-dende to-laranja-queimado
                 dark:from-dende/80 dark:to-laranja-queimado/80 shadow-lg z-50"
      aria-label={`Alternar para modo ${isDark ? 'claro' : 'escuro'}`}
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-terroso" />
      ) : (
        <Moon className="w-6 h-6 text-terroso" />
      )}
    </motion.button>
  );
};

export default ThemeToggle