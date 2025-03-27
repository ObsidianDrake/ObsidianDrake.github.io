import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header-banner">
      <div className="overlay">
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            關於我
          </NavLink>
          <NavLink to="/events" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            參加活動
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            作品集
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
