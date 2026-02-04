import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import logoFull from '@/assets/logo-full.jpg';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={logoFull} 
              alt="Xêro Aromas" 
              className="h-20 w-auto rounded-lg"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Transformando ambientes e momentos com fragrâncias artesanais de alta qualidade.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/umxero.aromas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg mb-4 text-accent">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/loja" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Loja
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg mb-4 text-accent">Categorias</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/loja?categoria=aromatizador" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Aromatizadores
                </Link>
              </li>
              <li>
                <Link to="/loja?categoria=difusor" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Difusores
                </Link>
              </li>
              <li>
                <Link to="/loja?categoria=vela" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Velas Aromáticas
                </Link>
              </li>
              <li>
                <Link to="/loja?categoria=body-splash" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Body Splash
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4 text-accent">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span>São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span>contato@xeroaromas.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Xêro Aromas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
