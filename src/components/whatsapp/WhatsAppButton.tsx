import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const WHATSAPP_NUMBER = '5511999999999'; // Número do WhatsApp da loja

export const WhatsAppButton = () => {
  const { items, total } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const generateWhatsAppMessage = () => {
    if (items.length === 0) {
      return 'Olá! Gostaria de saber mais sobre os produtos da Xêro Aromas.';
    }

    const itemsList = items
      .map((item) => `• ${item.name} (${item.quantity}x) - ${formatPrice(item.price * item.quantity)}`)
      .join('\n');

    const message = `Olá! Gostaria de finalizar meu pedido:\n\n${itemsList}\n\n*Total: ${formatPrice(total)}*\n\nPor favor, me informe sobre formas de pagamento e entrega.`;

    return message;
  };

  const handleWhatsAppClick = () => {
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BA5C] transition-all hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  );
};

interface WhatsAppCheckoutButtonProps {
  className?: string;
}

export const WhatsAppCheckoutButton = ({ className }: WhatsAppCheckoutButtonProps) => {
  const { items, total, setIsCartOpen } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleCheckout = () => {
    if (items.length === 0) return;

    const itemsList = items
      .map((item) => `• ${item.name} (${item.quantity}x) - ${formatPrice(item.price * item.quantity)}`)
      .join('\n');

    const message = `Olá! Gostaria de finalizar meu pedido:\n\n${itemsList}\n\n*Total: ${formatPrice(total)}*\n\nPor favor, me informe sobre formas de pagamento e entrega.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    setIsCartOpen(false);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button 
      variant="gold" 
      size="lg" 
      className={`w-full gap-2 ${className}`}
      onClick={handleCheckout}
      disabled={items.length === 0}
    >
      <MessageCircle className="h-5 w-5" />
      Finalizar via WhatsApp
    </Button>
  );
};
