import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
          <li>Accueil</li>
          <li>Produits</li>
          <li>Contact</li>
        </ul>
        <a href={`/my-shop/custom/${shopName}/`} className='btn_preview'>
          options
          <i className='fa fa-cog'></i>
        </a>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className='fa fa-bars'></i>
      </div>
    </div>
  );
};

export default TopBar;