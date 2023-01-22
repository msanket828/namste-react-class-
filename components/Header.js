import { useState } from "react";

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
              <a href="#FIXME">Home</a>
            </li>
            <li>
              <a href="#FIXME">About</a>
            </li>
            <li>
              <a href="#FIXME">Contact</a>
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
