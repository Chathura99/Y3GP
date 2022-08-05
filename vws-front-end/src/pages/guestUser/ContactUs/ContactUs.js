import React from 'react';
import "./contactus.css";
import { Link } from 'react-router-dom';


export default function ContactUs() {
    return (
        <div className="container-fluid" id="contact-cont">

            <div className="container-fluid bg-primary text-white text-center" id="inner-cont">
                <h1 id="footer-H1">What you have in your mind?</h1>
                <p id="footer-p1">Leave your thoughts about Sasnaka Sansada that your feedback will encourage us to uplift and improve our services.
                    Your comments and suggestions will enable us serve the world better.</p>

                <div className="input-group mb-3" id="input-feedback-cont">
                    <input type="text" className="form-control" id="input-feedback" placeholder="Recipient's username" aria-label="Enter Your Feedback" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn" id="input-feedback-btn" type="button">SEND</button>
                    </div>
                </div>

            </div>

            <div className="container mt-5" id="cont-2">
                <div className="row">
                    <div className="col-sm-3">
                        <h3 className="footer-h">Our Links</h3>

                        <li className="nav-item" id="footer-li">
                            <Link to="#" className="nav-link" id="footer-link">Home

                            </Link>
                        </li>
                        <li className="nav-item" id="footer-li">
                            <Link to="#" className="nav-link" id="footer-link">About Us

                            </Link>
                        </li>
                        <li className="nav-item" id="footer-li">
                            <Link to="#" className="nav-link" id="footer-link">Contact Us

                            </Link>
                        </li>
                        <li className="nav-item" id="footer-li">
                            <Link to="#" className="nav-link" id="footer-link">Spport Us

                            </Link>
                        </li>

                    </div>

                    <div class="col-sm-3">
                        <h3 className='footer-h'>Services</h3>

                        <li className="nav-item" id="footer-li">
                            <Link to="#" className="nav-link" id="footer-link"> STEAM

                            </Link>
                        </li>
                        <li className="nav-item" id="footer-li">
                            <Link to="#" className="nav-link" id="footer-link">Entrepreneurship

                            </Link>
                        </li>
                        <li className="nav-item" id="footer-li">
                            <Link to="#" className="nav-link" id="footer-link">Leadership & Grooming
                            </Link>
                        </li>
                        <li className="nav-item" id="footer-li">
                            <Link to="#" className="nav-link" id="footer-link">Social & Community

                            </Link>
                        </li>

                    </div>

                    <div class="col-sm-3">
                        <h3 className="footer-h">Services</h3>

                        <li className="nav-item" id="footer-li">
                            <Link to="#" className="nav-link" id="footer-link"> Sasnaka Sansada foundation
                                155/34, Pannipitiya Road,
                                Battaramulla
                                Sri Lanka

                            </Link>
                        </li>
                        <li className="nav-item" id="footer-li">
                            <Link to="#" className="nav-link" id="footer-link">+94 112 223 445

                            </Link>
                        </li>
                        <li className="nav-item" id="footer-li">
                            <Link to="#" className="nav-link" id="footer-link">info@sasnaka.org
                            </Link>
                        </li>


                    </div>

                    <div class="col-sm-3">
                        <h3 className="footer-h">Social Media</h3>

                        <li className="nav-item" id="footer-li">
                            <Link to="#" className="nav-link" id="footer-link">Facebook

                            </Link>
                        </li>
                        <li className="nav-item" id="footer-li">
                            <Link to="#" className="nav-link" id="footer-link">Instagram

                            </Link>
                        </li>
                        <li className="nav-item" id="footer-li">
                            <Link to="#" className="nav-link" id="footer-link">LinkedIn
                            </Link>
                        </li>
                        <li className="nav-item" id="footer-li">
                            <Link to="#" className="nav-link" id="footer-link">Twitter

                            </Link>
                        </li>

                    </div>

                </div>

                <div>
                    <hr></hr>
                   <h4 className='footer-end'>2020 All Rights Reserved © Sasnaka Sansada</h4>
                </div>

            </div>




        </div>




    )
}