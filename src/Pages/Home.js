import Hero from "../Components/Hero/HomeHero";
import HomeMain from "../Components/Main/Homemain";
import ProductNav from "../Components/ProductNav";
import Banner from "../Components/Banner";
const Home = () => {
  return (
    <main>
      <Hero />
      <ProductNav />
      <HomeMain />
      <Banner />
    </main>
  );
};

export default Home;
