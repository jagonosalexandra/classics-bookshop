import { useParams, Link } from "react-router-dom";
import { books } from "../assets/books";

function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const book = books.find((book) => book._id === id);
  const relBooks = books.filter((book) => book._id !== id);

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
                onClick={() => scrollTo(0, 0)}
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
