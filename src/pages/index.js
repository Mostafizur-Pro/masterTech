import RootLayout from "@/components/Layouts/RootLayout";
import HomePageBanner from "@/components/UI/Banner";
import TopCategories from "@/components/UI/TopCategories";

function HomePage() {
  return (
    <div>
      <HomePageBanner />
      <TopCategories />
    </div>
  );
}

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
