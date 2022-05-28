import "./navbar.css";

import { NavLink } from "react-router-dom";

const NavBar = ({ type }) => {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg nav-container">
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
                    <NavLink to="/user/home" className="nav-link">
                      Home
                    </NavLink>

                    <NavLink to="/user/create" className="nav-link">
                      Create Account
                    </NavLink>

                    <NavLink to="/user/withdraw" className="nav-link">
                      Withdraw
                    </NavLink>

                    <NavLink to="/user/recharging" className="nav-link">
                      Recharging
                    </NavLink>

                    <NavLink to="/user/transfer" className="nav-link">
                      Transfer
                    </NavLink>

                    <NavLink to="/user/transactions" className="nav-link">
                      Transactions
                    </NavLink>
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
