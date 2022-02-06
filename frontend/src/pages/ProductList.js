import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Products from "../components/Products";
import Footer from "../components/Footer";

const ProductList = () => {
  return (
  <div>
      <Announcements></Announcements>
    <Navbar></Navbar>
    <Products Page={'ProductList'}></Products>
    <Footer></Footer>
  </div>
  );
};

export default ProductList;
