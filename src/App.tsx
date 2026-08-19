import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "./context/AuthContext";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ScrollToTop />

      <AuthContext.Provider
        value={{
          isAuthenticated,
          login: () => setIsAuthenticated(true),
          logout: () => setIsAuthenticated(false),
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
