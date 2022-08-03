import React from 'react';
import "./homepage.css";
import { Link } from 'react-router-dom';

import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import OurLatestEvents from "../OurLatestEvents/OurLatestEvents";
import AboutUs from "../AboutUs/About";
import OurProjects from "../OurProjects/OurProjects";

export default function HomePage() {
  return (
    <>
      <div className='home-cont'>

        <nav class="navbar navbar-expand-lg navbar-light" id="Navbar">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Our Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Support Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
            </ul>

            <Link to="/login" smooth={true} spy={true}>
              <button class="btn my-2 my-sm-0" id="header-btn" Link to="/login" type="submit">Login</button>
            </Link>
            <Link to="/signup" smooth={true} spy={true}>
              <button class="btn my-2 my-sm-0" id="header-btn-2" type="submit">Sign Up</button>
            </Link>

          </div>
        </nav>

        <div className=" container-fluid" id="Home">

          <div className="row gutters">

            {/* left side */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id="h-left">

              <img src="https://img.freepik.com/free-vector/people-volunteering-donating-money_53876-66112.jpg" class="img-fluid" id="home-img" alt="Home image"></img>
            </div>

            {/* right side */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id="h-right">

              <h1 id="right-H1">Who We Are?</h1>

              <h4 id="right-H2">
                We are a charitable social service organization, initiated with the intention of building a just and equitable society with high level of human morality.
                We deliver our projects with the core of enabling human beings with optimum intellectual, social and spiritual balance.
                You are welcome to join our hands of rebuilding a nation with belief and intellect.
              </h4>

              <div className='btn-group'>
                <Link to="/signup" smooth={true} spy={true}>
                  <button className="button h-button">Join With Us</button>
                </Link>

                <Link to="#" smooth={true} spy={true}>
                  <button className="button h-button">Support Us</button>
                </Link>
              </div>

              <div className="h-icons">

              </div>

            </div>
          </div>
        </div>


      </div>

      <div className='UpcomingEvents'>
        <UpcomingEvents />
      </div>

      <div className='OurProjects'>
        <OurProjects />
      </div>

      <div className='AboutUs'>
        <AboutUs />
      </div>

      <div className='OurLatestEvents'>
        <OurLatestEvents />
      </div>

      <br />
      <br />
      <br />
      <br />
    </>
  )
}
