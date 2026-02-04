import { Link } from 'react-router-dom';
import productAromatizador from '@/assets/product-aromatizador.jpeg';
import productDifusor from '@/assets/product-difusor.jpeg';
import productVela from '@/assets/product-vela.jpg';
import productBodysplash from '@/assets/product-bodysplash.jpg';

const categories = [
  {
    id: 'aromatizador',
    name: 'Aromatizadores',
    description: 'Para ambientes e tecidos',
    image: productAromatizador,
  },
  {
    id: 'difusor',
    name: 'Difusores',
    description: 'Elegância duradoura',
    image: productDifusor,
  },
  {
    id: 'vela',
    name: 'Velas Aromáticas',
    description: 'Momentos especiais',
    image: productVela,
  },
  {
    id: 'body-splash',
    name: 'Body Splash',
    description: 'Frescor para o corpo',
    image: productBodysplash,
  },
];

export const CategoriesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium tracking-widest text-sm uppercase">
            Explore
          </span>
          <h2 className="font-display text-3xl md:text-4xl mt-2">
            Nossas Categorias
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/loja?categoria=${category.id}`}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="font-display text-xl mb-1">{category.name}</h3>
                <p className="text-primary-foreground/70 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
