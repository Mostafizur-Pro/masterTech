import RootLayout from "@/components/Layouts/RootLayout";
import HomePageBanner from "@/components/UI/Banner";
import FeatureProducts from "@/components/UI/FeaturedProducts";
import TopCategories from "@/components/UI/TopCategories";

function HomePage({ products }) {
  console.log("products", products);
  return (
    <div>
      <HomePageBanner />
      <TopCategories />
      <FeatureProducts products={products} />
    </div>
  );
}

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30000,
  };
};
