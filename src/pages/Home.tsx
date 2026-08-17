import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { books } from "../assets/books";

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

        <div className="books-container">
          {books.map((book) => (
            <Link
              key={book._id}
              to={`/product/${book._id}`}
              className="book-card"
            >
              <img className="book-image" src={book.image} alt={book.title} />
              <div>
                <p className="book-title">{book.title}</p>
                <span className="book-author">By {book.author}</span>

                <p className="book-price">PHP {book.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
