import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { X, SlidersHorizontal } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Loja = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const selectedCategory = searchParams.get('categoria');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = !selectedCategory || 
        product.category.toLowerCase().replace(' ', '-') === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesPrice;
    });
  }, [selectedCategory, priceRange]);

  const handleCategoryClick = (categoryId: string | null) => {
    if (categoryId) {
      setSearchParams({ categoria: categoryId });
    } else {
      setSearchParams({});
    }
  };

  const FiltersContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-display text-lg mb-4">Categorias</h3>
        <div className="space-y-2">
          <Button
            variant={!selectedCategory ? 'gold' : 'ghost'}
            size="sm"
            className="w-full justify-start"
            onClick={() => handleCategoryClick(null)}
          >
            Todas
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'gold' : 'ghost'}
              size="sm"
              className="w-full justify-start"
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-display text-lg mb-4">Faixa de Preço</h3>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={150}
            step={10}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>R$ {priceRange[0]}</span>
            <span>R$ {priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="section-padding">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl mb-4">Nossa Coleção</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nossa linha completa de fragrâncias artesanais
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <FiltersContent />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} produtos encontrados
              </p>
              <Sheet open={isMobileFiltersOpen} onOpenChange={setIsMobileFiltersOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filtros
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle className="font-display">Filtros</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FiltersContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Active Filters */}
            {selectedCategory && (
              <div className="mb-6 flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Filtros ativos:</span>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleCategoryClick(null)}
                  className="gap-1"
                >
                  {categories.find(c => c.id === selectedCategory)?.name}
                  <X className="h-3 w-3" />
                </Button>
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div 
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground font-display text-lg">
                  Nenhum produto encontrado
                </p>
                <Button 
                  variant="gold" 
                  className="mt-4"
                  onClick={() => {
                    handleCategoryClick(null);
                    setPriceRange([0, 150]);
                  }}
                >
                  Limpar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loja;
