import React, { useState } from "react";
import "./contactus.css";
import { Link } from 'react-router-dom';
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import { addFeedback } from "../../../services/guestUserServices/guestFeedbackService";


export default function Contact() {

    const [feed, setFeed] = useState({
        feedback: "",

    });

    const handleChange = (e) => {
        e.persist();
        console.log(e.target.name + "-" + e.target.value);
        setFeed((feed) => ({
            ...feed,
            [e.target.name]: e.target.value,
        }));
    };


    const [popup, setPopUp] = useState("");
    const [message, setMessage] = useState("");
    
    const closePopUp = () => {
        setPopUp("");
    };

    const confirm = (e) => {
        e.preventDefault();
        setMessage("Propose new project !");
        setPopUp("confirm");
    };

    const handleSubmit = (e) => {
        // evt.preventDefault();
        console.log("reached!")
        addFeedback(feed)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setMessage(response.data);
                    setPopUp("success");
                }
            })

    };


    return (
        <div className="container-fluid" id="contact-cont">

            <div className="container-fluid bg-primary text-white text-center" id="inner-cont">
                <h1 id="footer-H1">What you have in your mind?</h1>
                <p id="footer-p1">Leave your thoughts about Sasnaka Sansada that your feedback will encourage us to uplift and improve our services.
                    Your comments and suggestions will enable us serve the world better.</p>

                <div className="input-group mb-3" id="input-feedback-cont">

                    <form onSubmit={confirm}>

                        <input type="text" className="form-control" 
                            id="feedback"
                            name="feedback"
                            placeholder="Enter Your Feedback"
                            value={feed.feedback} 
                            aria-label="Enter Your Feedback" 
                            aria-describedby="basic-addon2" 
                            onChange={handleChange}
                            />
                        <div className="input-group-append">
                            <button className="btn" 
                            id="submit"
                                type="submit" 
                                name="submit">
                                SEND</button>
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
      
        </div>




    )
}