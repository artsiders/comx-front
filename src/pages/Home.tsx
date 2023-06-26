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

      <section className="section">
        <h1>Listes des Services</h1>
        <div className="services">
          <div className="service">
            <div className="ico">
              <i className="fa fa-user"></i>
            </div>
            <h1>Infographie</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="service">
            <div className="ico">
              <i className="fa fa-user"></i>
            </div>
            <h1>Infographie</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="service">
            <div className="ico">
              <i className="fa fa-user"></i>
            </div>
            <h1>Infographie</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="service">
            <div className="ico">
              <i className="fa fa-user"></i>
            </div>
            <h1>Infographie</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h1>Formations</h1>
        <div className="formations">
          <div className="formation">
            <div className="img"></div>
            <div className="details">
              <h2>Infographie</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium similique ipsa, sapiente placeat cum eos!
              </p>
              <button>details</button>
            </div>
          </div>
          <div className="formation">
            <div className="img"></div>
            <div className="details">
              <h2>Infographie</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium similique ipsa, sapiente placeat cum eos!
              </p>
              <button>details</button>
            </div>
          </div>
          <div className="formation">
            <div className="img"></div>
            <div className="details">
              <h2>Infographie</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium similique ipsa, sapiente placeat cum eos!
              </p>
              <button>details</button>
            </div>
          </div>

          <div className="btn_content">
            <button>Voir Plus</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
