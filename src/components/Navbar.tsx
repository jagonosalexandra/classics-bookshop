import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link className="logo" to="/">
        Classics Bookshop
      </Link>

      <div>
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
