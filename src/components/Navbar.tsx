import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const navigate = useNavigate();

  const { isAuthenticated, logout } = useAuth();

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
        <button
          id="login-btn"
          onClick={isAuthenticated ? logout : () => navigate("/login")}
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
