import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { WhatsAppCheckoutButton } from '@/components/whatsapp/WhatsAppButton';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

export const CartSlideOver = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, total } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-display text-xl flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-accent" />
            Sua Sacola
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground font-display text-lg">
              Sua sacola está vazia
            </p>
            <p className="text-sm text-muted-foreground/70 mt-2">
              Explore nossa coleção de fragrâncias
            </p>
            <Button 
              variant="gold" 
              className="mt-6"
              onClick={() => setIsCartOpen(false)}
            >
              Continuar Comprando
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="flex gap-4 p-4 bg-secondary/50 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-sm font-medium truncate">
                      {item.name}
                    </h4>
                    <p className="text-accent font-semibold mt-1">
                      {formatPrice(item.price)}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-display text-lg">Total</span>
                <span className="font-display text-xl text-accent font-semibold">
                  {formatPrice(total)}
                </span>
              </div>
              <WhatsAppCheckoutButton />
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => setIsCartOpen(false)}
              >
                Continuar Comprando
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
