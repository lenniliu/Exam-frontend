import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
      document.body.style.backgroundColor = savedColor;
      setBackgroundColor(savedColor);
    }
  }, []);

  const handleClick = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const handleColorChange = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    setBackgroundColor(randomColor);
    localStorage.setItem("backgroundColor", randomColor);
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Dashboard</h1>
        </Link>

        <nav>
          {isAuthenticated && (
            <div>
              <span>{localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).email : ""}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!isAuthenticated && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
          <button onClick={handleColorChange}>
            Change Background Color
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
