import Image from "next/image";
import React from "react";

function FeatureProducts() {
  return (
    <div className="mt-20 mx-20 ">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold  font-semibold">Featured Products</h1>
        <p className="text-lg mt-2">Check & Get Your Desired Product!</p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-1 mr-10 mx-auto  ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRDbVgrT3TeoPEaUM74YKGwZr1wZWqkd17A&usqp=CAU"
            alt="monitor"
            className="w-32  "
          />
          <div className="text-center mt-5">
            <h2>Monitor</h2>
          </div>
        </div>
        <div className="col-span-1 mr-10 mx-auto  ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRDbVgrT3TeoPEaUM74YKGwZr1wZWqkd17A&usqp=CAU"
            alt="monitor"
            className="w-32  "
          />
          <div className="text-center mt-5">
            <h2>Monitor</h2>
          </div>
        </div>
        <div className="col-span-1 mr-10 mx-auto  ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRDbVgrT3TeoPEaUM74YKGwZr1wZWqkd17A&usqp=CAU"
            alt="monitor"
            className="w-32  "
          />
          <div className="text-center mt-5">
            <h2>Monitor</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;
