import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const UserTopBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const session = useSelector((state: RootState) => state.session)

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
        <a href={`/my-shop/${session.Shop.shopName}/`} target='_blank' className='btn_preview'>
          Previsualiser
          <i className='fa fa-share'></i>
        </a>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className='fa fa-bars'></i>
      </div>
    </div>
  );
};

export default UserTopBar;