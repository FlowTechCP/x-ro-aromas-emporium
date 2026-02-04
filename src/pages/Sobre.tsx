import { Leaf, Heart, Award, Users } from 'lucide-react';
import brandSacola from '@/assets/brand-sacola.jpeg';
import logoFull from '@/assets/logo-full.jpg';

const values = [
  {
    icon: Leaf,
    title: 'Ingredientes Naturais',
    description: 'Utilizamos apenas essências de alta qualidade e ingredientes naturais em todas as nossas criações.',
  },
  {
    icon: Heart,
    title: 'Feito com Amor',
    description: 'Cada produto é cuidadosamente desenvolvido e produzido artesanalmente com dedicação.',
  },
  {
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Buscamos excelência em cada detalhe, desde a formulação até a embalagem final.',
  },
  {
    icon: Users,
    title: 'Compromisso com Você',
    description: 'Sua satisfação é nossa prioridade. Oferecemos atendimento personalizado e humanizado.',
  },
];

const Sobre = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium tracking-widest text-sm uppercase">
              Nossa História
            </span>
            <h1 className="font-display text-4xl md:text-5xl mt-4 mb-6">
              A Essência por Trás da Xêro Aromas
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              Uma jornada de paixão por fragrâncias que transformam ambientes e criam memórias inesquecíveis.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={logoFull}
                alt="Xêro Aromas - Nossa Marca"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-6">
              <span className="text-accent font-medium tracking-widest text-sm uppercase">
                Como Tudo Começou
              </span>
              <h2 className="font-display text-3xl md:text-4xl">
                Do Sonho à Realidade
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Xêro Aromas nasceu do desejo de criar fragrâncias que vão além do comum. 
                  Fundada com a missão de trazer a essência da natureza para dentro de cada lar brasileiro, 
                  nossa marca representa a união entre tradição artesanal e inovação.
                </p>
                <p>
                  Cada produto é resultado de meses de pesquisa e desenvolvimento, buscando a 
                  combinação perfeita de notas olfativas que despertem emoções e criem atmosferas únicas.
                </p>
                <p>
                  Acreditamos que um ambiente bem perfumado tem o poder de transformar momentos 
                  simples em experiências memoráveis. Por isso, dedicamos tempo e carinho em cada 
                  etapa do processo de criação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-medium tracking-widest text-sm uppercase">
              O Que Nos Guia
            </span>
            <h2 className="font-display text-3xl md:text-4xl mt-2">
              Nossos Valores
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card p-6 rounded-lg border border-border text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mb-4">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <span className="text-accent font-medium tracking-widest text-sm uppercase">
                Nossa Missão
              </span>
              <h2 className="font-display text-3xl md:text-4xl">
                Transformar Ambientes, Criar Memórias
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nossa missão é proporcionar experiências sensoriais únicas através de 
                  fragrâncias artesanais de alta qualidade, acessíveis a todos que buscam 
                  transformar seus espaços em verdadeiros refúgios de bem-estar.
                </p>
                <p>
                  Queremos estar presentes nos momentos mais importantes da sua vida: 
                  desde um banho relaxante após um dia de trabalho, até aquele jantar 
                  especial com pessoas queridas.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <p className="font-display text-3xl text-accent">500+</p>
                  <p className="text-sm text-muted-foreground">Clientes Felizes</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl text-accent">15+</p>
                  <p className="text-sm text-muted-foreground">Fragrâncias</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl text-accent">100%</p>
                  <p className="text-sm text-muted-foreground">Artesanal</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={brandSacola}
                alt="Xêro Aromas - Embalagem Premium"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
