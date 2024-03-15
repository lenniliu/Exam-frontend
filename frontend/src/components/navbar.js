import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const handleClick = (e) => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");

  };
  return (
    <header style={{ backgroundColor: backgroundColor }}>
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
            <button
            onClick={() => {
              const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
              setBackgroundColor(randomColor);
            }}
          >
            Change Background Color
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
