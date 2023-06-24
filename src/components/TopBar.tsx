import { useState } from "react";

const TopBar = () => {
  const [search, setSearch] = useState('');

  return (
    <header className="topbar">
      <div className="top">
        <div className="logotext">Store Name</div>
      </div>
      <div className="bottom">
        <div className="links">
          <a href="/">Acceuil</a>
          <a href="/store">Boutique</a>
          <a href="/">Services</a>
          <a href="/">Formations</a>
          <a href="/">A Propos</a>
        </div>
        <div className="cta-log">
          <input type="search" value={search} onChange={(e: any) => setSearch(e.currentTarget.value)} />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
