import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <NewsletterSection />
    </main>
  );
};

export default Index;
