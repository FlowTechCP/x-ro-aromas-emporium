import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Xêro Aromas - Fragrâncias Premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <span className="inline-block text-accent font-medium tracking-widest text-sm mb-4 uppercase">
            Xêro Aromas
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            A Essência da Natureza em Sua Casa
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Fragrâncias artesanais que transformam ambientes e elevam momentos especiais.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="gold" size="xl" asChild>
              <Link to="/loja" className="gap-2">
                Conheça a Coleção
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="goldOutline" size="xl" asChild>
              <Link to="/sobre">
                Nossa História
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
