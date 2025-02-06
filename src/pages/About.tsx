import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Clock, MapPin, Users } from "lucide-react";
import bistroLogo from "../imgs/logo.png";
import bistroPratos from "../imgs/prato1.jpg";

const timelineEvents = [
  {
    year: 2010,
    title: "Fundação do Bistrô",
    description: "Inauguração do Bistrô Profano no coração de Amargosa.",
    icon: MapPin,
  },
  {
    year: 2015,
    title: "Prêmio Sabor da Bahia",
    description: "Reconhecimento como melhor restaurante baiano do Recôncavo.",
    icon: Award,
  },
  {
    year: 2018,
    title: "Expansão",
    description:
      "Ampliação do espaço e introdução do cardápio de doces típicos.",
    icon: Users,
  },
  {
    year: 2023,
    title: "Certificação de Excelência",
    description: "Certificação de qualidade em gastronomia tradicional baiana.",
    icon: Clock,
  },
];

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Sobre - Bistrô Profano</title>
        <meta
          name="description"
          content="Conheça a história do Bistrô Profano, um pedaço autêntico da Bahia em Amargosa. Descubra nossa jornada, nossos chefs e nossa paixão pela culinária baiana."
        />
      </Helmet>

      <main className="min-h-screen pt-24 bg-terroso dark:bg-preto-bahia">
        {/* Hero Section */}
        <section className="relative h-[40vh] overflow-hidden">
          <img
            src={bistroPratos}
            alt="Interior do Bistrô Profano"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="font-display text-4xl md:text-6xl text-white text-center">
              Nossa História
            </h1>
          </div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg dark:prose-invert mx-auto"
            >
              <h2 className="font-display text-3xl md:text-4xl text-marrom-escuro dark:text-bege-claro mb-6">
                Um Pedaço da Bahia em Amargosa
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                O Bistrô Profano nasceu do sonho de trazer os sabores autênticos
                da culinária baiana para o coração do Recôncavo. Fundado em 2010
                por Dona Maria e Chef João, nosso restaurante se tornou um ponto
                de encontro para aqueles que buscam não apenas uma refeição, mas
                uma experiência cultural completa.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Chefs Section */}
        <section className="bg-white/50 dark:bg-marrom-escuro/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl text-center text-marrom-escuro dark:text-bege-claro mb-12">
              Nossos Mestres da Cozinha
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Chef 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-marrom-escuro rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={bistroLogo}
                  alt="Chef Maria"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-2xl text-marrom-escuro dark:text-bege-claro mb-2">
                    Dona Maria
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Com mais de 30 anos de experiência na culinária baiana, Dona
                    Maria traz consigo receitas passadas por gerações em sua
                    família.
                  </p>
                </div>
              </motion.div>

              {/* Chef 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-marrom-escuro rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={bistroLogo}
                  alt="Chef João"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-2xl text-marrom-escuro dark:text-bege-claro mb-2">
                    Chef João
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Formado em gastronomia e especializado em fusão
                    contemporânea, João traz um toque moderno aos pratos
                    tradicionais.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section ref={ref} className="container mx-auto px-4 py-16">
          <h2 className="font-display text-3xl md:text-4xl text-center text-marrom-escuro dark:text-bege-claro mb-12">
            Nossa Jornada
          </h2>
          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start gap-8 pb-12 last:pb-0"
                >
                  {/* Timeline Line */}
                  {index !== timelineEvents.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-dende to-laranja-queimado" />
                  )}

                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-dende to-laranja-queimado flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="font-display text-2xl text-dende">
                        {event.year}
                      </span>
                      <h3 className="font-display text-xl text-marrom-escuro dark:text-bege-claro">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-white/50 dark:bg-marrom-escuro/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl text-center text-marrom-escuro dark:text-bege-claro mb-12">
              A Arte da Culinária Baiana
            </h2>
            <div className="max-w-4xl mx-auto aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Preparo de Moqueca Baiana"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
