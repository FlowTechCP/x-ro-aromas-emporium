import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, ArrowLeft, Leaf } from 'lucide-react';
import { ProductCard } from '@/components/product/ProductCard';

const Produto = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  if (!product) {
    return (
      <main className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl mb-4">Produto não encontrado</h1>
          <Button variant="gold" asChild>
            <Link to="/loja">Voltar à Loja</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="section-padding">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Link 
          to="/loja" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar à Loja
        </Link>

        {/* Product Detail */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <span className="text-accent font-medium tracking-widest text-sm uppercase">
              {product.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl mt-2 mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-display text-accent font-semibold mb-6">
              {formatPrice(product.price)}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Notes */}
            {product.notes && (
              <div className="mb-8">
                <h3 className="font-display text-lg mb-3 flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-fresh" />
                  Notas Olfativas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.notes.map((note) => (
                    <span 
                      key={note}
                      className="px-3 py-1 bg-secondary rounded-full text-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Stock Info */}
            <p className="text-sm text-muted-foreground mb-6">
              {product.stock > 10 
                ? 'Em estoque' 
                : product.stock > 0 
                  ? `Apenas ${product.stock} unidades disponíveis`
                  : 'Fora de estoque'
              }
            </p>

            {/* Add to Cart */}
            <Button 
              variant="gold" 
              size="xl"
              onClick={() => addToCart(product)}
              disabled={product.stock === 0}
              className="gap-2"
            >
              <ShoppingBag className="h-5 w-5" />
              Adicionar à Sacola
            </Button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="font-display text-2xl md:text-3xl mb-8 text-center">
              Produtos Relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Produto;
