import React from "react";
import LogoImg from "./assets/logo-GdqARQRt.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
          <div className="container-fluid">
            {/* ------The Logo------ */}
            <div className="navbar-brand d-flex align-items-center px-3 gap-2">
              <img
                src={LogoImg}
                alt="عدسة"
                style={{ width: "70px", height: "70px", objectFit: "contain" }}
              />
              <div className="LogoTitle">
                <h5 className="text-white">عدسة</h5>
                <small>عالم التصوير الفوتوغرافي</small>
              </div>
            </div>
            {/* ------Responsive Navbar------ */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse  justify-content-center"
              id="navbarTogglerDemo02"
            >
              {/* ------List------ */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto px-5 py-2">
                <li className="nav-item ">
                  <Link to="/Home" className="nav-link">
                    الرئيسية
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Blog" className="nav-link">
                    المدونة
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="nav-link">
                    من نحن
                  </Link>
                </li>
              </ul>
              {/* ------Search part------ */}

              <form className="d-flex px-3" role="search">
                <button className="btn search-btn" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>

                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="بحث"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
