import { useState, useEffect } from 'react';

const UserTopBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <img src="/images/logo.webp" alt="Logo" className="logo" />
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {/* <li>Accueil</li>
          <li>Produits</li>
          <li>Contact</li> */}
        </ul>
        <button>
          Previsualiser
          <i className='fa fa-share'></i>
        </button>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="hamburger"></div>
      </div>
    </div>
  );
};

export default UserTopBar;