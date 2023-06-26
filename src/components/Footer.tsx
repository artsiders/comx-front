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
            123 rue de la Ville<br />
            75001 Paris<br />
            France<br />
            +33 1 23 45 67 89<br />
            contact@example.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 My Company. Tous droits réservés.</p>
      </div>
    </div>
  );
}