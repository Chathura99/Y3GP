import React from 'react';
import "./about.css";
import { Link } from 'react-router-dom';


export default function About() {
    return (
        <div>

            <div className=" container-fluid" id="about-cont">

                <div className="row gutters" id="about">

                    {/* left side - image*/}
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id="about-left">

                        <img src="https://img.freepik.com/free-vector/people-volunteering-donating-money_53876-66112.jpg" class="img-fluid" id="about-img" alt="about image"></img>
                    </div>

                    {/* right side */}
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id="about-right">

                        <h1 id="about-right-H1">
                            Be a part of our team
                        </h1>

                        <h4 id="about-right-H2">
                            In the journey of creating an intellectually developed and socially balanced individual,
                            we invite you who are willing to make this society a better place, to join our team.
                        </h4>

                        <div class="text-center">
                            <div className='btn-group'>
                                <Link to="/signup" smooth={true} spy={true}>
                                    <button className="button a-button">Become a Volunteer</button>
                                </Link>

                                <Link to="/applyforscholarship" smooth={true} spy={true}>
                                    <button className="button a-button">Apply for Scholarship</button>
                                </Link>

                            </div>
                        </div>


                    </div>
                </div>
            </div>




        </div>

    )
}

