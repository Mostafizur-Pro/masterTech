import RootLayout from "@/components/Layouts/RootLayout";

function PCBuilder() {
  return <div>hi</div>;
}

export default PCBuilder;

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
