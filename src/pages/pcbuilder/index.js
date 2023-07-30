import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

function PCBuilder() {
  return (
    <div>
      <Head>
        {" "}
        <title>PC Builder-MasterTECH</title>
      </Head>
      hi
    </div>
  );
}

export default PCBuilder;

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
