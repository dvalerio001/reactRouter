import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const customClassName = ({ isActive }) => {
    return "menu__link" + (isActive ? "menu__link_active" : ""); //if isActive is true, you get menu__link and menu__link_active. If not true, you only get menu__link
  };
  return (
    <nav className="menu">
      <NavLink to="/" className={customClassName}>
        Home
      </NavLink>
      <NavLink to="/reviews" className={customClassName}>
        Emoji Reviews
      </NavLink>
      <NavLink to="/about-me" className={customClassName}>
        About Me
      </NavLink>
      <NavLink to="/about-us" className={customClassName}>
        About Us
      </NavLink>
    </nav>
  );
}

export default NavBar;
