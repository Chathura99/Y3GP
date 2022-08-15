import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light" id="Navbar">
                <a class="navbar-brand" href="#">Sasnaka Logo</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                    <span class="navbar-toggler-icon"  id="nav-icon"></span>

                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent guestnavbar">
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

        </>
    )
}