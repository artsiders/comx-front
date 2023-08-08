import { ShopUser } from "../_interface";

interface Props {
  data: ShopUser;
}

export default function Footer(props: Props) {
  const { data } = props;

  return (
    <div className="footer">
      <div className="footer-body">
        <div className="column">
          <img src="/images/logo.webp" alt="Logo" />
          <p className="description">
            {data.Shop.description}
          </p>
          <a href="/" className="link">lire plus </a>
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
            {data.Shop.adresse} <br />
            {data.User.phone}<br />
            {data.User.email}
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Alt Plus. Tous droits réservés.</p>
      </div>
    </div>
  );
}