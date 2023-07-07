import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserTopBar = () => {
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
    <div className={`user_topbar ${scrolled ? 'scrolled' : ''}`}>
      <img src="/images/comx.svg" alt="Logo" className="logo" />
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {/* <li>Accueil</li>
          <li>Produits</li>
          <li>Contact</li> */}
        </ul>
        <a href={`/my-shop/${shopName}/`} target='_blank' className='btn_preview'>
          Previsualiser
          <i className='fa fa-share'></i>
        </a>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="hamburger"></div>
      </div>
    </div>
  );
};

export default UserTopBar;