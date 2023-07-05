import { useState } from "react";
import { NavLink } from "react-router-dom";
// import axios from "axios"; 

export default function SideMenu() {
  // const [matches] = useState(window.matchMedia("(max-width: 600px)").matches);
  const [etat, setEtat] = useState(false);

  // const [data, setData] = useState([]);
  const toggleSideMenu = () => (etat ? setEtat(false) : setEtat(true));

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

          <li>
            <NavLink
              to={`${location.pathname}/`}
              id="home"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fa fa-home"></i>
              <span className="links_name">Accueil</span>
            </NavLink>
            <span className="tooltip">Accueil</span>
          </li>
          <li>
            <NavLink
              to={`${location.pathname}/custom`}
              id="custom"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fa fa-sliders"></i>
              <span className="links_name">Customiser</span>
            </NavLink>
            <span className="tooltip">Customiser</span>
          </li>
          <li>
            <NavLink
              to={`${location.pathname}/products`}
              id="products"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fa fa-product-hunt"></i>
              <span className="links_name">Produits</span>
            </NavLink>
            <span className="tooltip">Produits</span>
          </li>

        </ul>
      </div>
    </div>
  );
}
