import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { shopName } = useParams()

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`top-bar ${scrolled ? 'scrolled' : ''}`}>
      <img src="/images/logo.webp" alt="Logo" className="logo" />
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink
              to={`/my-shop/${shopName}`}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >Accueil</NavLink>
          </li>
          <li>Produits</li>
          <li>Contact</li>
        </ul>
        <a href={`/my-shop/custom/${shopName}/`} className='btn_option'>
          options
          <i className='fa fa-cog'></i>
        </a>
        <a href={`/my-shop/custom/${shopName}/`} className='button-outline btn_shopping_cart'>
          <sup>0</sup>
          <i className='fa fa-shopping-cart'></i>
        </a>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className='fa fa-bars'></i>
      </div>
    </div>
  );
};

export default TopBar;