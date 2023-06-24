import Breadcrumb from "../components/Breadcrumb";

const Store = () => {
  return (
    <div className="store">
      <Breadcrumb />
      <h1>Nos Articles</h1>
      <div className="sort">Trié par : Ordinateur</div>
      <h2>Tous</h2>
      <section className="cards_store">
        <div className="card"></div>
      </section>
    </div>
  );
};

export default Store;
