import React, { useState } from "react";
import "./contactus.css";
import { Link } from 'react-router-dom';

import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import Loading from "../../../utilities/Loading/Loading";

import { addFeedback } from "../../../services/guestUserServices/guestFeedbackService";


export default function Contact() {

    const [feed, setFeed] = useState({
        feedback: "",

    });

    // open success/error pop up modals and set display message
    const [popup, setPopUp] = useState("");
    const [message, setMessage] = useState("");

    // close pop up modal
    const closePopUp = () => {
        setPopUp("");
    };

    // open confirmation pop up modal
    const confirm = (e) => {
        e.preventDefault();
        setMessage("Send Feedback");
        setPopUp("confirm");
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log("reached!")
        addFeedback(feed)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setMessage(response.data);
                    if (response.data === 1) {     //check this
                        setPopUp("success");
                    } else {
                        setPopUp("failed");
                    }
                }
            })

            .catch((err) => {
                if (err && err.response) {
                    console.log(err);
                    setMessage(err.message);
                    setPopUp("failed");
                }
            });


    };


    const handleChange = (e) => {
        e.persist();
        console.log(e.target.name + "-" + e.target.value);
        setFeed((feed) => ({
            ...feed,
            [e.target.name]: e.target.value,
        }));
    };



    return (
        <div className="container-fluid" id="contact-cont">

            <div className="container-fluid bg-primary text-white text-center" id="inner-cont">
                <h1 id="footer-H1">What you have in your mind?</h1>
                <p id="footer-p1">Leave your thoughts about Sasnaka Sansada that your feedback will encourage us to uplift and improve our services.
                    Your comments and suggestions will enable us serve the world better.</p>

                <div className="input-group mb-3 justify-content-center col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" id="input-feedback-cont">

                    <form onSubmit={confirm} >

                        <div class="input-group mb-3">

                            {/* <input type="text"
                                className="form-control input-feedback"
                                id="feedback"
                                name="feedback"
                                placeholder="Enter Your Feedback"
                                value={feed.feedback}
                                aria-label="Enter Your Feedback"
                                aria-describedby="basic-addon2"
                                onChange={handleChange}
                            />


                            <div class="input-group-append">
                                <button class="btn btn-info"
                                    type="button"
                                    id="submit"
                                    name="submit">
                                    SEND</button>
                            </div>
                        </div> 

                        */}



                            <input type="text"
                                className="form-control input-feedback"
                                id="feedback"
                                name="feedback"
                                placeholder="Enter Your Feedback"
                                value={feed.feedback}
                                aria-label="Enter Your Feedback"
                                aria-describedby="basic-addon2"
                                onChange={handleChange}
                            />

                            <div class="input-group-append">
                                <button className="btn btn-success btn-sm feedback-btn"
                                    id="submit"
                                    type="submit"
                                    name="submit">
                                    SEND</button>
                            </div>

                        </div>


                    </form>
                </div>

            </div>

            <div className="container mt-5" id="cont-2">
                <div className="row">
                    <div className="col-sm-3" id="link-cont">
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

                    <div className="col-sm-3" id="link-cont">
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

                    <div className="col-sm-3" id="link-cont">
                        <h3 className="footer-h">Contacts</h3>

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

                    <div className="col-sm-3" id="link-cont">
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
                    <hr className="f-hr"></hr>
                    <h4 className='footer-end'>2020 All Rights Reserved © Sasnaka Sansada</h4>
                </div>

            </div>


            {popup === "success" && (
                <SuccessPopUp message={message} closePopUp={closePopUp} />
            )}

            {popup === "failed" && (
                <FailedPopUp message={message} closePopUp={closePopUp} />
            )}

            {popup === "confirm" && (
                <ConfirmPopUp
                    message={message}
                    closePopUp={closePopUp}
                    handleSubmit={handleSubmit}
                />
            )}



        </div>




    )
}
