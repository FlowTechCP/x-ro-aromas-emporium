import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart, type Product } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="group card-hover bg-card rounded-lg overflow-hidden border border-border/50">
      {/* Image Container */}
      <Link to={`/produto/${product.id}`} className="block img-zoom aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </Link>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-medium text-accent uppercase tracking-wider">
          {product.category}
        </span>
        <Link to={`/produto/${product.id}`}>
          <h3 className="font-display text-lg mt-1 hover:text-accent transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        {/* Notes */}
        {product.notes && (
          <p className="text-xs text-muted-foreground mt-2 line-clamp-1">
            {product.notes.join(' • ')}
          </p>
        )}

        {/* Price & Action */}
        <div className="flex items-center justify-between mt-4">
          <span className="font-display text-xl font-semibold text-accent">
            {formatPrice(product.price)}
          </span>
          <Button
            variant="gold"
            size="sm"
            onClick={() => addToCart(product)}
            className="gap-2"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Adicionar</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
