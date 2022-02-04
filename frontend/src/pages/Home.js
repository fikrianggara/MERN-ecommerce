import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import HeroCarousel from "../components/HeroCarousel";
const Home = () => {
  return (
  <div>
    {/* <Announcements></Announcements> */}
    <Navbar></Navbar>
    <HeroCarousel></HeroCarousel>
    {/* <div className='w-4/5 h-screen bg-cyan-800 m-auto rounded-xl flex overflow-scroll flex-col flex-wrap'>
      <div className='w-full h-full bg-green-500'>slide 1</div>
      <div className='w-full h-full bg-red-500'>slide 2</div>
    </div> */}
  </div>
  );
};

export default Home;
