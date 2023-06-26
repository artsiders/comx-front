import { useState } from "react";
import { NavLink } from "react-router-dom";
// import axios from "axios"; 

export default function SideMenu() {
  // const [matches] = useState(window.matchMedia("(max-width: 600px)").matches);
  const [etat, setEtat] = useState(false);

  // const [data, setData] = useState([]);
  const toggleSideMenu = () => (etat ? setEtat(false) : setEtat(true));
  const search = (e: Event) => {
    e.preventDefault();
    console.log("rechercher");
  };
  // const path = window.location.pathname;
  // let link = "/";
  // if (path === "/" || path === "/home") link = path;

  // useEffect(() => {
  //   getUsers(localStorage.getItem("userId"));
  // }, []);
  // const getUsers = (id: string | null) => {
  //   axios
  //     .get(`${import.meta.env.VITE_REACT_APP_API_URL}api/users/${id}`)
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((error) => console.warn(error));
  // };
  return (
    <div
      className="side_menu_content"
    // onClick={matches ? () => (etat ? setEtat(false) : null) : null}
    >
      <div className={etat === true ? "sidebar open" : "sidebar"}>
        <div className="bar">
          <i
            onClick={toggleSideMenu}
            className={etat ? "fa fa-times" : "fa fa-bars"}
            id="btn"
          ></i>
        </div>
        <br />
        <ul className="nav_list">
          <li className="li_search">
            <form onSubmit={() => search}>
              <i
                onClick={() =>
                  etat
                    ? document.getElementById("search")?.click()
                    : toggleSideMenu()
                }
                className="fa s fa-search"
              ></i>
              <input type="search" placeholder="rechercher" />
              <button id="search" hidden></button>
            </form>
          </li>
          <li>
            <NavLink
              to="/"
              id="home"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fa fa-home"></i>
              <span className="links_name">Accueil</span>
            </NavLink>
            <span className="tooltip">Accueil</span>
          </li>
          <li>
            <NavLink to="/analytics"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fa fa-chart-pie"></i>
              <span className="links_name">Statistiques</span>
            </NavLink>
            <span className="tooltip">Statistiques</span>
          </li>
          <li>
            <NavLink to="/recettes"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fa fa-cash-register"></i>
              <span className="links_name">recettes</span>
            </NavLink>
            <span className="tooltip">recettes</span>
          </li>
          <li>
            <NavLink to="/depenses"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fa fa-shopping-cart"></i>
              <span className="links_name">dépenses</span>
            </NavLink>
            <span className="tooltip">dépenses</span>
          </li>
          <li>
            <NavLink to="/employees"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fa fa-user-friends"></i>
              <span className="links_name">employés</span>
            </NavLink>
            <span className="tooltip">employés</span>
          </li>
          <li>
            <NavLink to="/rapport"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fa fa-align-center"></i>
              <span className="links_name">rapport</span>
            </NavLink>
            <span className="tooltip">rapport</span>
          </li>
          <li>
            <NavLink to="/helps"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fa fa-info"></i>
              <span className="links_name">centre d'aide</span>
            </NavLink>
            <span className="tooltip">centre d'aide</span>
          </li>
          <li>
            <NavLink to="/settings"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fa fa-cog"></i>
              <span className="links_name">paramètres</span>
            </NavLink>
            <span className="tooltip">paramètres</span>
          </li>
        </ul>
        <span className="version">1.0.O</span>
      </div>
    </div>
  );
}
