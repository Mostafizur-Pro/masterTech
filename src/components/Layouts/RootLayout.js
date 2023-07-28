import Navbar from "../shared/Navbar";

function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default RootLayout;
