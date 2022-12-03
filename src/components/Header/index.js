import { NavLink } from "react-router-dom";

import "./style.css";

const Header = () => {
  const handleActiveClass = (params) => {
    return params.isActive ? "active-item" : "";
  };

  return (
    <div className="header">
      <ul>
        <li>
          <NavLink to="/" className={handleActiveClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/welcome" className={handleActiveClass}>
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={handleActiveClass}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/pokemons" className={handleActiveClass}>
            Pokemons
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={handleActiveClass}>
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
