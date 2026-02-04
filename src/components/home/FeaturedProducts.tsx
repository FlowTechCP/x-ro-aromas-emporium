import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/product/ProductCard';
import { products } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FeaturedProducts = () => {
  const featured = products.slice(0, 4);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium tracking-widest text-sm uppercase">
            Destaques
          </span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-4">
            Mais Vendidos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra as fragrâncias favoritas dos nossos clientes
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="goldOutline" size="lg" asChild>
            <Link to="/loja" className="gap-2">
              Ver Toda a Coleção
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
