import React, { Component } from "react";
import logo from "../images/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {


  render() {
    return (
      <nav className="nav" id="navbar">
      <div className="nav-content">
        <img
          src={logo}
          className="nav-logo "
          alt="Logo"
        />
        <div className="  mr-8">
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Startups
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Let's Talk
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}
}