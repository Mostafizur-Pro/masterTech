import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
