
import React from 'react';
import "./ourprojects.css";
import { Link } from 'react-router-dom';


export default function OurProjects() {
    return (
        <div>

            <div className=" container-fluid" id="project-cont">
                <h1 id="project-hedaing">Our Projects</h1>

                <div className="row gutters" id="project">

                    {/* left side */}
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id="project-left">
                        <h1 id="project-right-H1">MathLab</h1>

                        <img src="https://img.freepik.com/free-vector/people-volunteering-donating-money_53876-66112.jpg" class="img-fluid" id="project-img" alt="Project image"></img>

                        <div className="d-flex justify-content-between" id="icon-group">

                            <Link to="#">
                                <i class="fa fa-arrow-circle-left fa-4x" aria-hidden="true" id="icon-left"></i>
                            </Link>

                            <Link to="#">
                                <i class="fa fa-arrow-circle-right fa-4x" aria-hidden="true" id="icon-right"></i>
                            </Link>

                        </div>

                    </div>

                    {/* right side */}
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id="project-right">

                        <h4 id="project-right-H2">
                            The MathLab project which was initiated by Commercial Bank of Ceylon PLC, has been offering its contribution in
                            developing Mathematical knowledge and skill of Sri Lankan school students, mainly aiming from grade 6 to 11.
                            Sasnaka Sansada then partnered up with MathLab in 2018, offering our contribution towards the development and
                            success of the project. This is empowered by using Mathematical equipment and engaging in various activities that
                            are formed with professional guidance. In addition, the motivation
                            provided by Sasnaka Sansada scholars predominately targets to make students  approach Mathematics without fear.
                        </h4>

                        <div className='btn-group'>

                            <Link to="contact" smooth={true} spy={true}>
                                <button className="button p-button">Join With Us</button>
                            </Link>

                            <Link to="contact" smooth={true} spy={true}>
                                <button className="button p-button">Support Us</button>
                            </Link>

                        </div>




                    </div>
                </div>
            </div>




        </div>

    )
}
