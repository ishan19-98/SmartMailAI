import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Brand */}
        <NavLink className="navbar-brand fw-bold text-primary" to="/">
          <i className="bi bi-envelope-paper-fill me-2"></i>
          SmartMailAI
        </NavLink>

        {/* Mobile menu button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? "active fw-semibold text-primary" : ""}`
                }
                to="/"
              >
                <i className="bi bi-house-door me-1"></i>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? "active fw-semibold text-primary" : ""}`
                }
                to="/about"
              >
                <i className="bi bi-info-circle me-1"></i>
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? "active fw-semibold text-primary" : ""}`
                }
                to="/help"
              >
                <i className="bi bi-question-circle me-1"></i>
                Help
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
