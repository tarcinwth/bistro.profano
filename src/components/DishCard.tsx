import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { Dish } from '../types';

interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white dark:bg-marrom-escuro rounded-lg overflow-hidden shadow-lg
                 transition-colors duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-300
                   group-hover:scale-110"
        />
        {dish.isSpicy && (
          <div className="absolute top-2 right-2 bg-laranja-queimado rounded-full p-2"
               title="Prato Picante">
            <Flame className="w-5 h-5 text-white" />
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-xl text-marrom-escuro dark:text-bege-claro">
            {dish.name}
          </h3>
          <span className="font-display text-lg text-dende">
            R$ {dish.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {dish.description}
        </p>
        <div className="mt-4">
          <span className="inline-block bg-dende/10 dark:bg-dende/20 text-marrom-escuro
                         dark:text-bege-claro px-3 py-1 rounded-full text-sm">
            {dish.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default DishCard