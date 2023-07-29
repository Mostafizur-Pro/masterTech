import ProductLayout from "@/components/Layouts/ProductLayout";
import ProductHomePage from "@/components/UI/Product";
import ProductBanner from "@/components/UI/ProductBanner";
import Link from "next/link";

function DynamicProductPage() {
  return (
    <div>
      <div>
        <div class="flex">
          <div class="w-1/5 bg-white h-screen p-4">
            <hr className="my-10" />
            <h1 className="text-2xl font-bold">Categories</h1>

            <div className="ml-5">
              {" "}
              <li className="hover:text-success my-3">
                <Link href="/product/processor">CPU/Processor</Link>
              </li>
              <li className="hover:text-success my-3">
                <Link href="/product/motherboard">Motherboard</Link>
              </li>
              <li className="hover:text-success my-3">
                <Link href="/product/ram">RAM</Link>
              </li>
              <li className="hover:text-success my-3">
                <Link href="/product/power-supply">Power Supply Unit</Link>
              </li>
              <li className="hover:text-success my-3">
                <Link href="/product/storage">Storage Device</Link>
              </li>
              <li className="hover:text-success my-3">
                <Link href="/product/monitor">Monitor</Link>
              </li>
              <li className="hover:text-success my-3">
                <Link href="/product/others">Others</Link>
              </li>
            </div>
            <div>
              <hr className="my-10" />
              <h1 className="text-2xl font-bold">Latest Posts</h1>
            </div>
          </div>
          <div class="w-4/5 bg-gray-100 p-4">
            {/* ----------------Main Page-------------- */}
            <ProductBanner />
            <ProductHomePage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicProductPage;

DynamicProductPage.getLayout = function getLayout(page) {
  return <ProductLayout>{page}</ProductLayout>;
};
