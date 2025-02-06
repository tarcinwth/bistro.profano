import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1599458252573-56ae36120de1?auto=format&fit=crop&q=80',
    alt: 'Moqueca baiana tradicional'
  },
  {
    url: 'https://images.unsplash.com/photo-1583273391124-6c1e2db2e1cd?auto=format&fit=crop&q=80',
    alt: 'Acarajé da Bahia'
  },
  {
    url: 'https://images.unsplash.com/photo-1584551882459-368d44396ee8?auto=format&fit=crop&q=80',
    alt: 'Vista de Amargosa'
  }
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      {images.map((image, index) => (
        <motion.div
          key={image.url}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </motion.div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 dark:from-black/70 dark:to-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-6"
        >
          Bistrô Profano
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xl md:text-2xl text-bege-claro mb-12"
        >
          Sabores da Bahia, Alma de Amargosa
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/cardapio"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-dende to-laranja-queimado
                     px-6 py-3 rounded-full text-terroso font-semibold shadow-lg
                     hover:from-laranja-queimado hover:to-dende transition-all duration-300
                     dark:text-preto-bahia"
          >
            Cardápio Digital
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero