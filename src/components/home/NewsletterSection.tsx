import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import brandSacola from '@/assets/brand-sacola.jpeg';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Inscrição realizada!',
      description: 'Você receberá 10% de desconto na primeira compra.',
    });
    
    setEmail('');
    setIsLoading(false);
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block text-accent font-medium tracking-widest text-sm uppercase">
              Exclusivo
            </span>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Ganhe 10% de Desconto na Primeira Compra
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-md">
              Assine nossa newsletter e receba novidades, lançamentos exclusivos e promoções especiais.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
              />
              <Button 
                type="submit" 
                variant="gold" 
                size="lg"
                disabled={isLoading}
                className="shrink-0"
              >
                {isLoading ? 'Enviando...' : 'Inscrever-se'}
              </Button>
            </form>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <img
              src={brandSacola}
              alt="Xêro Aromas - Embalagem Premium"
              className="relative z-10 w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
