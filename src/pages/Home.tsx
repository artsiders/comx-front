import Footer from "../components/Footer";
import HeroTop from "../components/HeroTop";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <div>
      <TopBar />
      <HeroTop />
      <section className="section">
        <h1>Articles de la boutique</h1>
        <div className="cards">
          <div className="card">
            <span className="card-price">10 000 F</span>
            <span className="card-tittle">Code du bg</span>
          </div>
          <div className="card">
            <span className="card-price">10 000 F</span>
            <span className="card-tittle">Code du bg</span>
          </div>
          <div className="card">
            <span className="card-price">10 000 F</span>
            <span className="card-tittle">Code du bg</span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
