import React from 'react';
import "./homepage.css";
import { Link } from 'react-router-dom';
import OurLatestEvents from "../OurLatestEvents/OurLatestEvents";

export default function HomePage() {
  return (
    <>
    <div className='home-cont'>

      <div className="n-wrapper" id="Navbar">
        {/* left */}
        <div className="n-left">
          <div className="n-name">Sasnaka Logo</div>

        </div>
        {/* right */}
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true}>
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="works" spy={true} smooth={true}>
                  Support Us
                </Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} smooth={true}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="testimonial" spy={true} smooth={true}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/login" spy={true} smooth={true}>
            <button className="button n-button" id="button-1">Login</button>
          </Link>
          <Link to="/signup" spy={true} smooth={true}>
            <button className="button n-button" id="button-2">Sing Up</button>
          </Link>
        </div>
      </div>




      <div className="Home" id="Home">

        {/* left side */}
        <div className="h-left">
          <div className="h-image">

          </div>
        </div>

        {/* right side */}
        <div className="h-right">
          <div className="h-name">
            <h1>Who We Are?</h1>

            <h4>
              We are a charitable social service organization, initiated with the intention of building a just and equitable society with high level of human morality.
              We deliver our projects with the core of enabling human beings with optimum intellectual, social and spiritual balance.
              You are welcome to join our hands of rebuilding a nation with belief and intellect.
            </h4>
          </div>
          <div className='btn-group'>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button h-button">Join With Us</button>
          </Link>

          <Link to="contact" smooth={true} spy={true}>
            <button className="button h-button">Support Us</button>
          </Link>
          </div>

          <div className="h-icons">



          </div>
        </div>
      </div>




    </div>

<div className='OurLatestEvents'>
<OurLatestEvents />
</div>

</>
  )
}
