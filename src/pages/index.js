import RootLayout from "@/components/Layouts/RootLayout";
import HomePageBanner from "@/components/UI/Banner";

function HomePage() {
  return (
    <div>
      <HomePageBanner />
    </div>
  );
}

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
