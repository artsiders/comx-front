export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-body">
        <div className="column">
          <img src="/images/logo.webp" alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pharetra maximus augue, in scelerisque tortor malesuada vel. Etiam
          </p>
        </div>
        <div className="column">
          <h3>Menu</h3>
          <ul>
            <li>Accueil</li>
            <li>Produits</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="column">
          <h3>Contact</h3>
          <p>
            Cameroun Bafoussam <br />
            +237 651 28 41 14<br />
            salim.artsider@gmail.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Alt Plus. Tous droits réservés.</p>
      </div>
    </div>
  );
}