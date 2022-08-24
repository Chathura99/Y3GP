import React from 'react';
import "./upcomingevents.css";
import { Link } from 'react-router-dom';


export default function UpcomingEvents() {
    return (
        <div className=" container-fluid" id="ue-body">

            <div className="row gutters">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id="left-col">
                    <h2 className='innerheading-1'>Upcoming Events</h2>

                    <div className="card" id="eventcard">
                        <div className="card" id="eventcard-body">
                            <img src="https://sasnaka.org/static/media/home-two.e87aaeb9.jpg"
                                class="img-fluid" id="center"
                                alt="..." />

                            <div className="card-body" id="event-body">
                                <h5 className="card-title" id="title-1">Ganitha Saviya</h5>
                                <p className="card-text">
                                    The Ganitha Saviya  Mathematical seminar programme, will be held on 20th of September 2022,
                                    in Wijayaba college in Nikawaratiya.
                                </p>
           
                            </div>

                        </div>
                    </div>


                    <div className="card" id="eventcard">
                        <div className="card" id="eventcard-body">
                            <img src="http://csrbox.org/company/proj_img/1539235300World-Environment-Day.jpg"
                                class="img-fluid" id="center"
                                alt="..." />

                            <div className="card-body" id="event-body">
                                <h5 className="card-title" id="title-1">Kumbuk Plantation Program</h5>
                                <p className="card-text">
                                    The 7th episode of Re Green Earth programme, will be held on 11th of September 2022,
                                    in Kurunegala, along the Wariyapola Natiya - Malagane road by the Deduru Oya reservoir.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="card" id="eventcard">
                        <div className="card" id="eventcard-body">
                            <img src="https://sasnaka.org/static/media/home-three.5ea6b759.jpg"
                                class="img-fluid" id="center"
                                alt="..." />

                            <div className="card-body" id="event-body">
                                <h5 className="card-title" id="title-1">Sisu Mediya Program</h5>
                                <p className="card-text">
                                    The 3rd episode of Sisu Mediya programme, will be held on 10th of September 2022,
                                    in Battaramulla, We hope to select students who have difficulties in economics to new scholarships.
                                </p>
                            </div>

                        </div>
                    </div>

                    <Link to="/allupcomingevents" id="seemore1" smooth={true} spy={true}>
                        See more
                    </Link>

                </div>


                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id="right-col">

                    <h2 className='innerheading-2'>Announcements</h2>

                    <div className="card" id="announcementcard">
                        <div className="card-body" id="announcement-body">
                            <h5 className="card-title" id="title-2">The new project called "Adurata Eliyak" Published</h5>
                            <p className="card-text">There is a new programme called "Adurata Eliyak" was published in 20th of August 2022</p>

                            <div className="d-flex flex-row">
                                <div className="p-2"><img src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
                                    alt="user"
                                    width="40"
                                    className="rounded-circle" />
                                </div>
                                <div className="comment-text w-100">
                                    <h6 className="font-normal" id="name-right">Yashodha Subhasinghe</h6>
                                    <span className="m-b-15 d-block">Project Coordinator
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card" id="announcementcard">
                        <div className="card-body" id="announcement-body">
                            <h5 className="card-title" id="title-2">POSTPONED! The Ganitha Saviya Program at Vilgoda Maha Vidyalaya</h5>
                            <p className="card-text">The Ganitha Saviya mathematical program at Vilgoda Maha Vidyalaya is postponed due to some unavoidable issues.
                                Further notices will be published here.</p>

                            <div className="d-flex flex-row">
                                <div className="p-2"><img src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
                                    alt="user"
                                    width="40"
                                    className="rounded-circle" />
                                </div>
                                <div className="comment-text w-100">
                                    <h6 className="font-normal" id="name-right">Yashodha Subhasinghe</h6>
                                    <span className="m-b-15 d-block">Project Coordinator
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card" id="announcementcard">
                        <div className="card-body" id="announcement-body">
                            <h5 className="card-title" id="title-2">POSTPONED! The Ganitha Saviya Program at Vilgoda Maha Vidyalaya</h5>
                            <p className="card-text">The Ganitha Saviya mathematical program at Vilgoda Maha Vidyalaya is postponed due to some unavoidable issues.
                                Further notices will be published here.</p>

                            <div className="d-flex flex-row">
                                <div className="p-2"><img src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
                                    alt="user"
                                    width="40"
                                    className="rounded-circle" />
                                </div>
                                <div className="comment-text w-100">
                                    <h6 className="font-normal" id="name-right">Yashodha Subhasinghe</h6>
                                    <span className="m-b-15 d-block">Project Coordinator
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <Link to="/allupcomingevents" id="seemore2" smooth={true} spy={true}>
                        See more
                    </Link>

                </div>

            </div>


        </div>
    )
}

