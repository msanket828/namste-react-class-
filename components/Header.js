import { useState } from "react";
import { NavLink } from "react-router-dom";

/* --------------------------------- Header --------------------------------- */
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoggedIn = (e) => {
    console.log("clicked");
    e.preventDefault();
    setLoggedIn((prev) => !prev);
  };

  return (
    <header>
      <div className="wrapper">
        <a href="#FIXME" className="logo">
          <h1>FoodVilla</h1>
        </a>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">about</NavLink>
            </li>
            <li>
              <NavLink to="instamart">instamart</NavLink>
            </li>
            <li>
              <a href="#FIXME">Cart</a>
            </li>
          </ul>
        </nav>
        <div className="btn-container">
          {loggedIn ? (
            <button
              type="button"
              onClick={handleLoggedIn}
              className="btn btn-v1"
            >
              Logout
            </button>
          ) : (
            <button
              type="button"
              onClick={handleLoggedIn}
              className="btn btn-v1"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
