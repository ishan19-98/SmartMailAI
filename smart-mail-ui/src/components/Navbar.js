import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-body-dark">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            SmartMailAI
          </NavLink>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive? 'nav-link fw-bold': 'nav-link'} aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive? 'nav-link fw-bold': 'nav-link'} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive? 'nav-link fw-bold': 'nav-link'} to="/help">
                Help
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
