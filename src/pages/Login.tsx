import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Admin {
  username: string;
  password: string;
}

interface FormErrors {
  username?: string;
  password?: string;
}

function Login({ onLoginSuccess }: { onLoginSuccess: () => void }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Admin>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onLoginSuccess();
    navigate("/dashboard");
  }

  function validateForm({ username, password }: Admin): FormErrors {
    const newErrors: FormErrors = {};

    const adminUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (!username) {
      newErrors.username = "Please fill in username";
    } else if (username !== adminUsername) {
      newErrors.username = "Incorrect username";
    }

    if (!password) {
      newErrors.password = "Please fill in password";
    } else if (password !== adminPassword) {
      newErrors.password = "Incorrect password";
    }

    return newErrors;
  }

  return (
    <div className="login-container">
      <h2>Admin Login</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <span className="text-error">{errors.username}</span>
          )}
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="text-error">{errors.password}</span>
          )}
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
