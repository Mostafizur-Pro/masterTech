import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Sidebar from "../shared/Sider";

function ProductLayout({ children }) {
  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      {children}
      <Footer />
    </div>
  );
}

export default ProductLayout;
