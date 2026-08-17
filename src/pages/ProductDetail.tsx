import { useParams, Link, useNavigate } from "react-router-dom";
import { books } from "../assets/books";
import Button from "../components/Button";

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const book = books.find((book) => book._id === id);
  const relBooks = books.filter((book) => book._id !== id);

  if (!book)
    return (
      <div className="book-not-found-container">
        <p>
          <span>Book Not Found</span>
          Sorry, we couldn't find the book you're looking for. The product ID
          you have entered may be incorrect.
        </p>

        <Button
          label="Return to Home"
          variant="secondary"
          onClick={() => navigate("/")}
        />
      </div>
    );

  return (
    book && (
      <div>
        <div className="product-detail-container">
          <img src={book.image} alt={book.title} />

          <div className="book-details">
            <h2>
              {book.title}
              <span>By {book.author}</span>
            </h2>

            <p>
              ID: {book._id} | {book.pageCount} pages
            </p>
            <p className="book-description">
              <span>Book Description</span>
              {book.description}
            </p>

            <p>₱{book.price.toFixed(2)}</p>
          </div>
        </div>

        <div className="other-books-container">
          <h2>Related Poducts</h2>

          <div className="books-container">
            {relBooks.map((book) => (
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
    )
  );
}

export default ProductDetail;
