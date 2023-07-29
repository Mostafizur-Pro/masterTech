import Image from "next/image";
import Link from "next/link";
import React from "react";

function FeatureProducts({ products }) {
  console.log("pro", products);
  return (
    <div className="my-20 mx-20 ">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold  font-semibold">Featured Products</h1>
        <p className="text-lg mt-2">Check & Get Your Desired Product!</p>
      </div>
      {/* Processor */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-48  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            Processor
          </h1>
          <div className="border-b-4  border-success border-double"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "Processor" && (
                <>
                  <Link href={`/product/${product?.name}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <img className="w-48" src={product?.imageUrl} alt="" />
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* Motherboard */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-48  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            Motherboard
          </h1>
          <div className="border-b-4  border-success border-double"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "Motherboard" && (
                <>
                  <Link href={`/product/${product?.name}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <img className="w-48" src={product?.imageUrl} alt="" />
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* RAM */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-48  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            RAM
          </h1>
          <div className="border-b-4  border-success border-double"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "RAM" && (
                <>
                  <Link href={`/product/${product?.name}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <img className="w-48" src={product?.imageUrl} alt="" />
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* Power Supply */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-48  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            Power Supply
          </h1>
          <div className="border-b-4  border-success border-double"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "Power Supply Unit" && (
                <>
                  <Link href={`/product/${product?.name}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <img className="w-48" src={product?.imageUrl} alt="" />
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* Storage Device */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-60  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            Storage Device
          </h1>
          <div className="border-b-4  border-success border-double"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "Storage Device" && (
                <>
                  <Link href={`/product/${product?.name}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <img className="w-48" src={product?.imageUrl} alt="" />
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* Monitor */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-48  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            Monitor
          </h1>
          <div className="border-b-4  border-success border-double"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "Monitor" && (
                <>
                  <Link href={`/product/${product?.name}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <img className="w-48" src={product?.imageUrl} alt="" />
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* GPU */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-48  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            GPU
          </h1>
          <div className="border-b-4  border-success border-double"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "GPU" && (
                <>
                  <Link href={`/product/${product?.name}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <img className="w-48" src={product?.imageUrl} alt="" />
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* Mouse */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-48  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            Mouse
          </h1>
          <div className="border-b-4  border-success border-double"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "Mouse" && (
                <>
                  <Link href={`/product/${product?.name}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <img className="w-48" src={product?.imageUrl} alt="" />
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      {/* Keyboard */}
      <div>
        <div>
          <h1 className="text-2xl bg-success w-48  text-white pl-6  p-2 rounded-tr-2xl font-semibold ">
            Keyboard
          </h1>
          <div className="border-b-4  border-success border-double"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <>
              {product?.categoryName === "Keyboard" && (
                <>
                  <Link href={`/product/${product?.name}`} key={product?._id}>
                    <div className="">
                      <div className=" p-5 rounded-2xl ">
                        <img className="w-48" src={product?.imageUrl} alt="" />
                        <h3 className="text-lg font-semibold">
                          {product?.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;
