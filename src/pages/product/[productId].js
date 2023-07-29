import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

function ProductDetailPage({ products }) {
  console.log("Dynamic", products);
  return <div>Product Details Page</div>;
}

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  const paths = data?.map((category) => ({
    params: { categoryName: category.name },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async () => {
  const { categoryName } = params;
  const res = await fetch(
    `http://localhost:3000/api/products?categoryName=${categoryName}`
  );
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
