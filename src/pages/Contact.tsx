import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Contato - Bistrô Profano</title>
        <meta
          name="description"
          content="Entre em contato com o Bistrô Profano. Faça sua reserva, tire suas dúvidas ou envie sugestões. Estamos sempre prontos para atendê-lo."
        />
      </Helmet>

      <main className="min-h-screen pt-24 bg-terroso dark:bg-preto-bahia">
        {/* Hero Section */}
        <section className="relative h-[30vh] overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
            alt="Interior do Bistrô Profano"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold">
              Contato
            </h1>
          </div>
        </section>

        {/* Informações de Contato */}
        <section className="container mx-auto px-4 py-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Informações */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-laranja-bahia dark:text-laranja-claro mb-6">
                Informações de Contato
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-laranja-bahia dark:text-laranja-claro" />
                  <p className="text-lg dark:text-white">
                    Rua das Flores, 123 - Centro, Amargosa - BA
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-laranja-bahia dark:text-laranja-claro" />
                  <p className="text-lg dark:text-white">(75) 3634-0000</p>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-laranja-bahia dark:text-laranja-claro" />
                  <p className="text-lg dark:text-white">
                    contato@bistroprofano.com.br
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-laranja-bahia dark:text-laranja-claro" />
                  <div className="dark:text-white">
                    <p className="text-lg">Terça a Domingo</p>
                    <p className="text-lg">12h às 23h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg mb-2 dark:text-white"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg mb-2 dark:text-white"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg mb-2 dark:text-white"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-laranja-bahia hover:bg-laranja-claro text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Contact;
