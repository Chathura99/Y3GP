import React from 'react';
import "./homepage.css";
import { Link } from 'react-router-dom';

import Navbar from '../LandingPageNavbar/navbar';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import OurProjects from "../OurProjects/OurProjects";
import OurLatestEvents from "../OurLatestEvents/OurLatestEvents";
import VisionMission from "../VisionMission/VisionMission";
import AboutUs from "../AboutUs/About";
import ContactUs from "../ContactUs/ContactUs";


export default function HomePage() {
  return (
    <>
      <div className='home-cont'>

        <div className='Navbar'>
          <Navbar />
        </div>

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
                  <button className="btn my-2 my-sm-0" id="h-button1">Join With Us</button>
                </Link>

                <Link to="#" smooth={true} spy={true}>
                  <button className="btn my-2 my-sm-0" id="h-button2">Support Us</button>
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

      <div className='OurLatestEvents'>
        <OurLatestEvents />
      </div>

      <div className='AboutUs'>
        <AboutUs />
      </div>

      <div className='VisionMission'>
        <VisionMission />
      </div>

      <div className='ContactUs'>
        <ContactUs />
      </div>



    </>

  )

}
