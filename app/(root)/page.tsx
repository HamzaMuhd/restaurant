import {
  getLatestProducts,
  getFeaturedProducts,
} from "@/lib/actions/product.actions";
import ProductCarousel from "@/components/shared/product/product-carousel";
import ViewAllProductButton from "@/components/view-all-product-button";
import IconBoxes from "@/components/icon-boxes";
import DealCountDown from "../../components/deal-countdown";
import HeroSection from "@/components/shared/hero-section";
import SpecialDishes from "@/components/shared/product/special-section";
import AboutSection from "@/components/shared/about-section";
import ChefSection from "@/components/shared/chef-section";
import TestimonialsSection from "@/components/shared/testimonials";
import Newsletter from "@/components/shared/newsletters";

const Homepage = async () => {
  const latestProduct = await getLatestProducts();
  const featuredProduct = await getFeaturedProducts();
  return (
    <>
      <HeroSection />
      <SpecialDishes
        data={latestProduct}
        title="Our Special Dishes"
        limit={4}
      />
      <ViewAllProductButton />
      <AboutSection />
      <ChefSection />
      <TestimonialsSection />
      <Newsletter />
      {featuredProduct.length > 0 && (
        <ProductCarousel data={featuredProduct}></ProductCarousel>
      )}
      <DealCountDown />
      <IconBoxes />
    </>
  );
};

export default Homepage;
