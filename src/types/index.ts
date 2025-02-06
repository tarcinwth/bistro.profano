export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isSpicy?: boolean;
}

export type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

export type Category = 'Moquecas' | 'Acarajés' | 'Doces' | 'Bebidas';