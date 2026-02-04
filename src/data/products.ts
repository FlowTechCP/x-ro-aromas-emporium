import productAromatizador from '@/assets/product-aromatizador.jpeg';
import productDifusor from '@/assets/product-difusor.jpeg';
import productVela from '@/assets/product-vela.jpg';
import productBodysplash from '@/assets/product-bodysplash.jpg';
import productPerfumeCabelo from '@/assets/product-perfume-cabelo.jpg';

import type { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Aromatizador Frescor da Manhã',
    category: 'Aromatizador',
    price: 59.90,
    image: productAromatizador,
    description: 'Aromatizador para ambientes e tecidos com fragrância refrescante que remete às primeiras horas do dia. Ideal para roupas de cama, cortinas e sofás.',
    notes: ['Limão Siciliano', 'Hortelã', 'Alecrim'],
    stock: 25,
  },
  {
    id: '2',
    name: 'Difusor de Ambientes Clássico',
    category: 'Difusor',
    price: 89.90,
    image: productDifusor,
    description: 'Difusor de varetas com fragrância sofisticada e duradoura. Perfeito para salas, escritórios e recepções que buscam elegância.',
    notes: ['Âmbar', 'Baunilha', 'Sândalo'],
    stock: 18,
  },
  {
    id: '3',
    name: 'Vela Aromática Lavanda',
    category: 'Vela',
    price: 74.90,
    image: productVela,
    description: 'Vela artesanal de cera de soja com essência pura de lavanda francesa. Proporciona relaxamento e bem-estar.',
    notes: ['Lavanda Francesa', 'Camomila', 'Eucalipto'],
    stock: 32,
  },
  {
    id: '4',
    name: 'Body Splash Frutas Vermelhas',
    category: 'Body Splash',
    price: 49.90,
    image: productBodysplash,
    description: 'Spray corporal com fragrância doce e envolvente de frutas vermelhas. Refrescante e com fixação moderada.',
    notes: ['Morango', 'Framboesa', 'Cereja'],
    stock: 45,
  },
  {
    id: '5',
    name: 'Perfume para Cabelo Floral',
    category: 'Perfume Cabelo',
    price: 64.90,
    image: productPerfumeCabelo,
    description: 'Névoa perfumada para cabelos que hidrata e perfuma com notas florais delicadas. Deixa os fios sedosos e perfumados.',
    notes: ['Rosa', 'Jasmim', 'Peônia'],
    stock: 28,
  },
  {
    id: '6',
    name: 'Aromatizador Noites de Verão',
    category: 'Aromatizador',
    price: 59.90,
    image: productAromatizador,
    description: 'Fragrância tropical e refrescante inspirada nas noites quentes de verão brasileiro.',
    notes: ['Coco', 'Baunilha', 'Flor de Laranjeira'],
    stock: 20,
  },
  {
    id: '7',
    name: 'Difusor Bosque Encantado',
    category: 'Difusor',
    price: 94.90,
    image: productDifusor,
    description: 'Notas amadeiradas e terrosas que transportam para um passeio em florestas tropicais.',
    notes: ['Cedro', 'Vetiver', 'Musgo'],
    stock: 15,
  },
  {
    id: '8',
    name: 'Vela Aromática Baunilha Bourbon',
    category: 'Vela',
    price: 79.90,
    image: productVela,
    description: 'Vela premium com aroma aconchegante de baunilha bourbon. Perfeita para momentos de relaxamento.',
    notes: ['Baunilha Bourbon', 'Caramelo', 'Canela'],
    stock: 22,
  },
];

export const categories = [
  { id: 'aromatizador', name: 'Aromatizador', description: 'Para ambientes e tecidos' },
  { id: 'difusor', name: 'Difusor', description: 'Elegância duradoura' },
  { id: 'vela', name: 'Vela', description: 'Momentos especiais' },
  { id: 'body-splash', name: 'Body Splash', description: 'Frescor para o corpo' },
  { id: 'perfume-cabelo', name: 'Perfume Cabelo', description: 'Cabelos perfumados' },
];
