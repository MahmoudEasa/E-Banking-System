import "./navbar.css";

import { Link } from "react-router-dom";

const NavBar = ({ type }) => {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand logo">
            <i className="fa-solid fa-building-columns"></i>
            <span>OBS</span>
          </div>

          {type !== "login" && type !== "register" && (
            <>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/home" className="nav-link" aria-current="page">
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
