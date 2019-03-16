import React from "react";
import { Link } from "react-router-dom";
import { history } from "../_helpers";
const Header = () => {
  if (history.location.pathname !== "/login") {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/blogs" className="item">
          Blogs
        </Link>
        <Link to="/fast-notes" className="item">
          Fast Notes
        </Link>
        <Link to="/flash-cards" className="item">
          Flash cards
        </Link>
        <Link to="/projects" className="item">
          Projects
        </Link>
        <div className="right menu">
          <Link to="/login" className="item">
            Logout
          </Link>
        </div>
      </div>
    );
  }
  return <div></div>
};

export default Header;
