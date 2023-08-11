import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { disconnect } from "../feature/session.slice";
// import axios from "axios"; 

export default function SideMenu() {
  const [mobile] = useState(window.matchMedia("(max-width: 769px)").matches);
  const [etat, setEtat] = useState(!mobile);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { _idProduct } = useParams()

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
  const logOut = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(disconnect())

    navigate('/login')
  }
  const toggleIfMobile = () => {
    if (mobile) {
      if (etat) {
        setEtat(false)
      }
    }
  }
  return (
    <div
      className="side_menu_content"
      onClick={toggleIfMobile}
    >
      <div className={etat ? "sidebar open" : "sidebar"}>
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
              to={`/my-shop/custom/`}
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
              to={`/my-shop/custom/products`}
              id="products"
              className={({ isActive }) => ((isActive || _idProduct) ? 'active' : '')}
            >
              <i className="fa fa-product-hunt"></i>
              <span className="links_name">Produits</span>
            </NavLink>
            <span className="tooltip">Produits</span>
          </li>
          <li>
            <NavLink
              to={`/my-shop/custom/categories`}
              id="categories"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fa fa-tags"></i>
              <span className="links_name">Categories</span>
            </NavLink>
            <span className="tooltip">Categories</span>
          </li>
          <li>
            <NavLink
              to={`/my-shop/custom/commandes`}
              id="commandes"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="fa fa-shopping-cart"></i>
              <span className="links_name">Commandes</span>
            </NavLink>
            <span className="tooltip">Commandes</span>
          </li>
          <li className="log_out">
            <a
              href={`/login`}
              onClick={logOut}
            >
              <i className="fa fa-sign-out"></i>
              <span className="links_name">Déconnexion</span>
            </a>
            <span className="tooltip">Déconnexion</span>
          </li>

        </ul>
      </div>
    </div>
  );
}
