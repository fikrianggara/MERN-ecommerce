import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import HeroCarousel from "../components/HeroCarousel";
const Home = () => {
  return (
  <div>
    <Announcements></Announcements>
    <Navbar></Navbar>
    
    <HeroCarousel></HeroCarousel>
  </div>
  );
};

export default Home;
