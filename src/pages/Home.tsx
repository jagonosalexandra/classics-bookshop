import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="hero-section">
        <h1>Classics Bookshop</h1>
        <hr />
        <p>
          Welcome to Xiexie's Classics Bookshop! We specialize in timeless
          literature, from ancient epics to modern masterpieces, and offer a
          cozy corner for every book lover to discover their next favorite read.
        </p>

        <Button
          label="About Us"
          onClick={() => navigate("/about")}
          variant="primary"
        />
      </div>

      <div className="products-section">
        <h2>Our Collection</h2>
      </div>
    </div>
  );
}

export default Home;
