import React from "react";
import "./navbar.css";
// import { Link } from 'react-router-dom';
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light" id="Navbar">
        <a class="navbar-brand" href="#">
          Sasnaka Logo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" id="nav-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent guestnavbar"
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="home-cont" spy={true} smooth={true}>
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="project-cont" spy={true} smooth={true}>
                Our Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link to="about-cont" spy={true} smooth={true}>
                Support Us
              </Link>
            </li>
            <li class="nav-item">
              <Link to="about-cont" spy={true} smooth={true}>
                About Us
              </Link>
            </li>
            <li class="nav-item">
              <Link to="contact-cont" spy={true} smooth={true}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* <Link to="/login" smooth={true} spy={true}>
            <button
              class="btn my-2 my-sm-0"
              id="header-btn"
              Link
              to="/login"
              type="submit"
            >
              Login
            </button>
          </Link> */}
          <a href="/login">
            <button
              class="btn my-2 my-sm-0"
              id="header-btn"
              Link
              to="/login"
              type="submit"
            >
              Login
            </button>
          </a>
          {/* <Link to="/signup" smooth={true} spy={true}>
            <button class="btn my-2 my-sm-0" id="header-btn-2" type="submit">
              Sign Up
            </button>
          </Link> */}
          <a href="/signup">
            <button
              class="btn my-2 my-sm-0"
              id="header-btn"
              Link
              to="/login"
              type="submit"
            >
              Sign Up
            </button>
          </a>
        </div>
      </nav>
    </>
  );
}
