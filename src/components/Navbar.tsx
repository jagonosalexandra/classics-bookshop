import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link className="logo" to="/" onClick={() => scrollTo(0, 0)}>
        Classics Bookshop
      </Link>

      <ul>
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/about">
          About
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
