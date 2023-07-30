import ProductLayout from "@/components/Layouts/ProductLayout";
function DynamicProductPage() {
  return <div>hi</div>;
}

export default DynamicProductPage;

DynamicProductPage.getLayout = function getLayout(page) {
  return <ProductLayout>{page}</ProductLayout>;
};
