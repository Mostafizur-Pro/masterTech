import RootLayout from "@/components/Layouts/RootLayout";
import HomePageBanner from "@/components/UI/Banner";
import FeatureProducts from "@/components/UI/FeaturedProducts";
import TopCategories from "@/components/UI/TopCategories";

function HomePage() {
  return (
    <div>
      <HomePageBanner />
      <TopCategories />
      <FeatureProducts />
    </div>
  );
}

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
