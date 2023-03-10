import { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
/* --------------------------------- Header --------------------------------- */
const Header = () => {
  const cartCount = useSelector((store) => store.cart.items);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoggedIn = (e) => {
    console.log("clicked");
    e.preventDefault();
    setLoggedIn((prev) => !prev);
  };

  return (
    <header>
      <div className="wrapper">
        <NavLink to="/" className="logo">
          <h1>FoodVilla</h1>
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                to="instamart"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                instamart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="cart"
                className={({ isActive }) =>
                  isActive ? "cart active" : "cart inactive"
                }
              >
                {/* Cart */}
                <BiShoppingBag className="icon-sm" />
                {cartCount.length > 0 && <span>{cartCount.length}</span>}
              </NavLink>
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
