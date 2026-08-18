import { books } from "../assets/books";

function Dashboard() {
  return (
    <div className="dashboard">
      {books.map((book) => (
        <div key={book._id} className="dashboard-book">
          <img src={book.image} alt={book.title} />
          <div className="dashboard-book-details">
            <p>{book.title}</p>
            <p>{book.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
