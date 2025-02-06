import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Bistrô Profano - Sabores da Bahia, Alma de Amargosa</title>
        <meta
          name="description"
          content="Descubra os autênticos sabores da culinária baiana no Bistrô Profano, em Amargosa. Moquecas, acarajés e muito mais, preparados com amor e tradição."
        />
      </Helmet>
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home