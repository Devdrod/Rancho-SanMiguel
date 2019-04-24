import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

class Navbar extends Component {
    render() {
        return (
          <div className="container">
            <nav className="navbar fixed-top navbar-default navbar-expand-lg navbar-dark bg-dark ">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse"
                id="navbarNav"
              >
                <ul className="navbar-nav px-7">
                  <li className=" nav-item font-weight-bold pt-3 pr-2 ">
                    <a className="nav-link" href="#">
              About us
                    </a>
                  </li>

                  <li className="nav-item pt-3 pr-6 dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Farm Services
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link className="dropdown-item" href="#">
                        Andalusian Horse Show
                      </Link>
                      <Link className="dropdown-item" href="#">
                        Horse-back ridding School
                      </Link>
                      <div className="dropdown-divider" />
                      <Link className="dropdown-item" href="#">
                       extras
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item pl-5 pr-6">
                    <Link
                      className="navbar-brand d-lg-inline-block d-none brand"
                      href="#"
                    />
                  </li>

                  <li className="nav-item pt-3 pr-2 dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Rent for event
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link className="dropdown-item" href="#">
                       Facilities
                      </Link>
                      <Link className="dropdown-item" href="#">
                       Past events
                      </Link>
                      <div className="dropdown-divider" />
                      <Link className="dropdown-item" href="#">
                        extras
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item pt-3">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        );
    }
}

export default Navbar
