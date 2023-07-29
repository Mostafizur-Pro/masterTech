import RootLayout from "@/components/Layouts/RootLayout";
import HomePageBanner from "@/components/UI/Banner";
import FeatureProducts from "@/components/UI/FeaturedProducts";
import TopCategories from "@/components/UI/TopCategories";

function HomePage({ products }) {
  // console.log("products", products?.data);
  return (
    <div>
      <HomePageBanner />
      <TopCategories />
      <FeatureProducts products={products.data} />
    </div>
  );
}

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  // const response = await fetch("http://localhost:5000/featureProducts");
  // const featureProducts = await response.json();
  return {
    props: {
      products: data,
      // featureProducts: featureProducts,
    },
    revalidate: 30000,
  };
};
