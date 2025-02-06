import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-marrom-escuro dark:bg-preto-bahia text-terroso dark:text-bege-claro">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-dende" />
                <span>Av. Jequitibá, 30 - Centro, Amargosa - BA.</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-dende" />
                <span>(75) 3634-1234</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-dende" />
                <span>contato@bistroprofano.com.br</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-2xl mb-4">Horário</h3>
            <ul className="space-y-2">
              <li>Sexta: 20h às 00h</li>
              <li>Sábado: 20h às 00h</li>
              <li>Domingo: 20h às 00h</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-display text-2xl mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/bistroprofano/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-dende/10 hover:bg-dende/20 transition-colors duration-300"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-dende/10 hover:bg-dende/20 transition-colors duration-300"
                aria-label="Curta nossa página no Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dende/20 text-center">
          <p className="font-display text-lg">Axé no seu prato!</p>
          <p className="mt-2 text-sm opacity-80">
            © {new Date().getFullYear()} Bistrô Profano. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer