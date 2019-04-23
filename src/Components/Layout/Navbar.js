import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

class Navbar extends Component {
    render() {
        return (
          <div>
            <nav className="navbar navbar-default navbar-expand-lg navbar-dark bg-dark">
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
              <div
                className="text-left collapse navbar-collapse"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li class=" nav-item font-weight-bold pl-6 pt-3 pr-2 ">
                    <a class="nav-link" href="#">
                      About Us
                    </a>
                  </li>

                  <li class="nav-item pt-3 pr-6 dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
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
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link class="dropdown-item" href="#">
                        Andalusian Horse Show
                      </Link>
                      <Link class="dropdown-item" href="#">
                        Horse-back ridding School
                      </Link>
                      <div class="dropdown-divider" />
                      <Link class="dropdown-item" href="#">
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

                  <li class="nav-item pt-3 pr-2 dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
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
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link class="dropdown-item" href="#">
                       Facilities
                      </Link>
                      <Link class="dropdown-item" href="#">
                       Past events
                      </Link>
                      <div class="dropdown-divider" />
                      <Link class="dropdown-item" href="#">
                        extras
                      </Link>
                    </div>
                  </li>
                  <li class="nav-item pt-3 pr-2">
                    <a class="nav-link" href="#">
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
