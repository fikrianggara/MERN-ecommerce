import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import HeroCarousel from "../components/HeroCarousel";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
  return (
  <div>
    {/* <Announcements></Announcements> */}
    <Navbar></Navbar>
    <HeroCarousel></HeroCarousel>
    <Categories></Categories>
    <Products Page={'Home'}></Products>
    <Footer></Footer>
  </div>
  );
};

export default Home;
