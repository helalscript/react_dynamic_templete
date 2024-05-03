import React from "react";
import { NavLink } from "react-router-dom";

export default function Mainmenu() {
  return (
    // <div>
    //     <ul>
    //         <li><NavLink to='/'>Home</NavLink> </li>
    //         <li><NavLink to='/contact'>Contact</NavLink></li>
    //         <li><NavLink to='/about'>About</NavLink></li>
    //     </ul>
    // </div>

    <>
      {/* Navigation Start */}
      <header className="header-bar">
        <nav className="navbar navbar-expand-lg main-nav" >
          <div className="container">
            {/*      LOGO BAR     */}
            <span className="navbar-brand">
                    <NavLink to="/"><img
                src="images/logo.png"
                alt="meetub"
                className="img-fluid logo-b "
              /></NavLink>
                  </span>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="tf-ion-android-menu" />
            </button>
            {/*  MAIN MENU  */}
            <div
              className="collapse navbar-collapse text-center"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <span className="nav-link">
                    <NavLink to="/">Home</NavLink>
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">
                    <NavLink to="/speakers">Speakers</NavLink>
                  </span>
                </li>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown1"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages.
                  </span>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown1"
                  >
                    
                    <span className="dropdown-item">
                      <NavLink to="/about"> About</NavLink>
                    </span>
                    <span className="dropdown-item">
                      <NavLink to="/tickets"> Tickets</NavLink>
                    </span>
                    <span className="dropdown-item">
                      <NavLink to="/schedule"> Schedule </NavLink>
                    </span>
                    <span className="dropdown-item">
                      <NavLink to="/loginpage"> Login</NavLink>
                    </span>
                    <span className="dropdown-item">
                      <NavLink to="/regstration"> Regstration </NavLink>
                    </span>
                    <span className="dropdown-item">
                      <NavLink to="/404_Page"> 404 Page</NavLink>
                    </span>
                    <span className="dropdown-item">
                      <NavLink to="/supports"> Supports</NavLink>
                    </span>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  
                  <span className="nav-link dropdown-toggle"
                    id="navbarDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <NavLink to="/blog">Blog.</NavLink>
                  </span>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown2"
                  >
                    <span className="dropdown-item">
                    <NavLink to="/blog">Blog</NavLink>
                  </span>
                    <span className="dropdown-item">
                    <NavLink to="/blog_single">Blog Single</NavLink>
                  </span>
                    <span className="dropdown-item">
                    <NavLink to="/Speake_single">Speake Single</NavLink>
                  </span>
                    
                  </div>
                </li>
                <li className="nav-item">
                <span className="nav-link">
                    <NavLink to="/contact">Contact</NavLink>
                  </span>
                  
                </li>
              </ul>
              <span className="btn btn-secondary btn-rounded mt-3 mt-lg-0">
                    <NavLink to="/tickets">Get Ticket</NavLink>
                  </span>
            </div>
          </div>
        </nav>
      </header>
      {/* Navigation End */}
    </>
  );
}
