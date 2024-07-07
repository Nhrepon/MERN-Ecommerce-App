import React from "react";
import { Link } from "react-router-dom";

const TopNavigationBar = () => {
  return (
    <div className="container-fluid sticky-md-top bg-success z-3">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-md shadow-sm">
            <div className="container-fluid">
              <Link className="navbar-brand  text-light" to="/">
                MERN E-commerce
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link  text-light" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link  text-light" to="/products">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link  text-light" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle  text-light"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="nav-link" to="/electronics">
                          Electronics
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/mobile">
                          Mobile & Accessories
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="nav-link" to="/clothes">
                          Clothes
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link  text-light" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link  text-light" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>

                <div className="d-flex gap-1">
                  <Link
                    to="/cart"
                    type="button"
                    className="btn ms-1 btn-outline-light position-relative rounded-pill">
                    <i className="bi bi-bag"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-black">
                      {55}
                      <span className="visually-hidden">unread message</span>
                    </span>
                  </Link>
                  <Link
                    to="/wish"
                    type="button"
                    className="btn ms-2 btn-outline-light position-relative rounded-pill">
                    <i className="bi bi-heart"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-black">
                      {75}
                      <span className="visually-hidden">unread message</span>
                    </span>
                  </Link>

                  <Link
                    type="button"
                    className="btn ms-3 btn-success btn-outline-light"
                    to="/registration">
                    <i class="bi bi-person-add"></i>
                  </Link>
                  <Link type="button" className="btn btn-success btn-outline-light" to="/login">
                    Login
                  </Link>
                </div>
              </div>
              </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;
