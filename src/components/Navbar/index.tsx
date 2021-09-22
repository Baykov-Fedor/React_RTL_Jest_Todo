import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper pad_1">
        <a href="/" className="brand-logo">
          React + TypeScript
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Todo list</NavLink>
          </li>
          <li>
            <NavLink to="/about">About page</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
