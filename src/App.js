import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Equipments from "./components/Equipments";
import History from "./components/History";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout>
      <Hero />
      <Gallery />
      <Equipments />
      <History />
      <Footer />
    </Layout>
  );
}

export default App;
