import React, { useEffect, useState } from "react";
import "./morelatestevents.css";
import { Link } from 'react-router-dom';

import Navbar from '../LandingPageNavbar/navbar';

import { getPreviousEvents } from "../../../services/eventServices/eventService";


export default function MoreLatestEvents() {

    useEffect(() => {
        previousEvent();
    }, []);
    const [previousEventData, setPreviousEventData] = useState([]);

    const previousEvent = async () => {
        const res = await getPreviousEvents();
        setPreviousEventData(res.data);
    };

    return (

        <div className=" container-fluid" id="morelatestevents-cont">

            <div className='Navbar'>
                <Navbar />
            </div>

            <h1 className="eventH1">Our Events</h1>
            <h4 className="eventH4">Over the past two decades Sasanaka Sansada has contributed in many ways to
                make an impact on the world we live. Throughout the past years,
                months and the days our members have being dedicated to contribute their best to the society.</h4>


            <div className="row gutters" id="inner-cont-event">
                {previousEventData.map((evt, index) => (
                    <div
                        className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
                        id="latestevents"
                    >
                        <div class="card h-100" id="event-card-2">
                            <img
                                src="https://img.freepik.com/free-vector/people-volunteering-donating-money_53876-66112.jpg"
                                class="img-fluid"
                                id="card-img-2"
                                alt="Project image"
                            ></img>

                            <div class="card-body" id="event-card-body-2">
                                <h5 class="card-title" id="event-card-title">
                                    The {evt.category} at {evt.place}
                                </h5>
                                <p class="card-text" id="event-card-text">
                                    The programme in
                                    {evt.startDate} to {evt.endDate} was successfully held
                                    <br />
                                    {evt.description}
                                    with {evt.noOfVolunteers} participations
                                </p>
                            </div>
                            <div class="card-footer" id="event-card-footer">
                                <small class="text-muted" id="last-updated=text">
                                    Coordinated by :{evt.name}{" "}

                                    <Link to="/Event1" id="seemorebtn" smooth={true} spy={true}>See More</Link>

                                </small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>

    )
}


