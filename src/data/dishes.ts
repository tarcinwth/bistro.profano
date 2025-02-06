import { Dish } from '../types';

export const dishes: Dish[] = [
  {
    id: 1,
    name: 'Moqueca de Peixe',
    description: 'Peixe fresco, pimentões, tomates, coentro, leite de coco e dendê',
    price: 89.90,
    category: 'Moquecas',
    image: 'https://images.unsplash.com/photo-1599458252573-56ae36120de1?auto=format&fit=crop&q=80',
    isSpicy: false
  },
  {
    id: 2,
    name: 'Acarajé Tradicional',
    description: 'Bolinho de feijão-fradinho frito no dendê, vatapá, caruru e camarão',
    price: 15.90,
    category: 'Acarajés',
    image: 'https://images.unsplash.com/photo-1583273391124-6c1e2db2e1cd?auto=format&fit=crop&q=80',
    isSpicy: true
  },
  {
    id: 3,
    name: 'Moqueca de Camarão',
    description: 'Camarões frescos, pimentões, tomates, coentro, leite de coco e dendê',
    price: 99.90,
    category: 'Moquecas',
    image: 'https://images.unsplash.com/photo-1560717845-968823efbee1?auto=format&fit=crop&q=80',
    isSpicy: false
  },
  {
    id: 4,
    name: 'Quindim',
    description: 'Doce tradicional à base de gema de ovo, coco e açúcar',
    price: 12.90,
    category: 'Doces',
    image: 'https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    name: 'Acarajé Especial',
    description: 'Acarajé tradicional com porção extra de camarão e pimenta',
    price: 18.90,
    category: 'Acarajés',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80',
    isSpicy: true
  }
];