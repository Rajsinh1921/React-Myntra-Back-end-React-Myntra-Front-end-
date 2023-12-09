import React from "react";
import { FaShoppingBag, FaRegHeart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const bag = useSelector((store) => store.bag);
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <IoPersonSharp style={{ fontSize: "20px" }} />
            Profile
          </div>

          <div className="action_container">
            <FaRegHeart style={{ fontSize: "20px" }} />
            Wishlist
          </div>

          <Link to="/bag" className="action_container">
            <FaShoppingBag style={{ fontSize: "20px" }} />
            Bag
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
