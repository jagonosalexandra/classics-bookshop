import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <p>
        <span className="not-found-text">Page Not Found</span>
        Sorry, we couldn't find the page you were looking for. It may have
        movved or the web address you entered was incorrect.
      </p>

      <Button
        label="Return to Home"
        variant="secondary"
        onClick={() => navigate("/")}
      />
    </div>
  );
}

export default NotFound;
