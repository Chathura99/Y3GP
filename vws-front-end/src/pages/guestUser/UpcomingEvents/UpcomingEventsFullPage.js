import React, { useEffect, useState } from "react";

import "./upcomingeventsfullpage.css";
import { Link } from 'react-router-dom';

import Navbar from '../LandingPageNavbar/navbar';

import { getAnnouncement } from "../../../services/announcementServices/announcementServices";
import { getUpcomingEvents } from "../../../services/eventServices/eventService";


export default function UpcomingEventsFullPage() {

    useEffect(() => {
        readAnnouncement();
        upcomingEvent();
    }, []);

    const [announcement, setAnnouncement] = useState([]);

    const readAnnouncement = async () => {
        const res = await getAnnouncement("other");
        // console.log(res.data);
        setAnnouncement(res.data);
    };
    const [upComingEventData, setUpComingEventData] = useState([]);

    const upcomingEvent = async () => {
        const res = await getUpcomingEvents();
        setUpComingEventData(res.data);
    };

    return (

        <>

            <div className='Navbar'>
                <Navbar />
            </div>


            <div className=" container-fluid" id="uefp-body">

                <div className="row gutters">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id="left-col">
                        <h2 className='innerheading-1'>Upcoming Events</h2>

                        {upComingEventData.map((evt, index) => (
                            <div className="card" id="eventcard">
                                <div className="card" id="eventcard-body">
                                    <img
                                        src="https://sasnaka.org/static/media/home-three.5ea6b759.jpg"
                                        class="img-fluid"
                                        id="center"
                                        alt="..."
                                    />

                                    <div className="card-body" id="event-body">
                                        <h5 className="card-title" id="title-1">
                                            {evt.category}
                                        </h5>
                                        <p className="card-text">
                                            The {evt.category}, will be held on
                                            {evt.startDate}, in {evt.place}
                                            <br />
                                            {evt.description}
                                            <br />
                                            More details : {evt.phoneNumber}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>



                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id="right-col">

                        <h2 className='innerheading-2'>Announcements</h2>

                        {announcement.map((ann, index) => (
                            <div className="card" id="announcementcard">
                                <div className="card-body" id="announcement-body">
                                    <h5 className="card-title" id="title-2">
                                        {ann.title}
                                    </h5>
                                    <p className="card-text">{ann.content}</p>

                                    <div className="d-flex flex-row">
                                        <div className="p-2">
                                            <img
                                                src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
                                                alt="user"
                                                width="40"
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <div className="comment-text w-100">
                                            <h6 className="font-normal" id="name-right">
                                                {ann.firstName + " " + ann.lastName}
                                            </h6>
                                            <span className="m-b-15 d-block">
                                                {ann.role + " " + ann.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>


            </div>

        </>
    )
}

