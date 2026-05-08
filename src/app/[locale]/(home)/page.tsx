import Hero from "./components/Hero";
import { FeaturedCollection } from "./components/FeatureCollection";
import About from "./components/About";

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedCollection />
      <About />
    </main>
  );
};

export default Home;
