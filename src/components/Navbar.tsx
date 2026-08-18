import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar({
  isAuthenticated,
  onLogout,
}: {
  isAuthenticated: boolean;
  onLogout: () => void;
}) {
  const navigate = useNavigate();

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
          onClick={isAuthenticated ? onLogout : () => navigate("/login")}
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
