import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { dishes } from '../data/dishes';
import DishCard from '../components/DishCard';
import type { Category } from '../types';

const categories: Category[] = ['Moquecas', 'Acarajés', 'Doces', 'Bebidas'];

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredDishes = selectedCategory === 'all'
    ? dishes
    : dishes.filter(dish => dish.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Cardápio - Bistrô Profano</title>
        <meta
          name="description"
          content="Explore nosso cardápio de pratos típicos baianos. Moquecas, acarajés e doces tradicionais preparados com ingredientes frescos e muito amor."
        />
      </Helmet>

      <main className="min-h-screen py-24 px-4 bg-terroso dark:bg-preto-bahia">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl text-marrom-escuro dark:text-bege-claro mb-4">
              Nosso Cardápio
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Descubra os sabores autênticos da Bahia em cada prato,
              preparados com ingredientes frescos e muito amor.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300
                       ${selectedCategory === 'all'
                         ? 'bg-gradient-to-r from-dende to-laranja-queimado text-white'
                         : 'bg-white/80 dark:bg-marrom-escuro/80 text-gray-700 dark:text-gray-300'
                       }`}
            >
              Todos
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300
                         ${selectedCategory === category
                           ? 'bg-gradient-to-r from-dende to-laranja-queimado text-white'
                           : 'bg-white/80 dark:bg-marrom-escuro/80 text-gray-700 dark:text-gray-300'
                         }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Dishes Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredDishes.map(dish => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredDishes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300">
                Nenhum prato encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Menu