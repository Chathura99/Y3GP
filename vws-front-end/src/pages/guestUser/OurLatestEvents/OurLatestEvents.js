import React from 'react';
import "./ourlatestevents.css";
import { Link } from 'react-router-dom';


export default function OurLatestEvents() {
    return (
        <div className=" container-fluid" id="latestevents-cont">

            <h1 className="eventH1">Our latest events</h1>
            <h4 className="eventH4">Over the past two decades Sasanaka Sansada has contributed in many ways to
                make an impact on the world we live. Throughout the past years,
                months and the days our members have being dedicated to contribute their best to the society.</h4>

            <div className="row gutters" id="inner-cont">

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" id="latestevents">
                    <div class="card h-100" id="event-card-2">

                        <img src="https://img.freepik.com/free-vector/people-volunteering-donating-money_53876-66112.jpg" class="img-fluid" id="card-img-2" alt="Project image"></img>

                        <div class="card-body" id="event-card-body-2">
                            <h5 class="card-title" id="event-card-title">Donation of School Equipment At Kosgama Maha Vidyalaya</h5>
                            <p class="card-text" id="event-card-text">The second programme of the Sasnaka Sansada "Sisu Mediya" project 2021,
                                which aims to develop the infrastructure of schools with various needs in the island,
                                was successfully held on</p>
                        </div>
                        <div class="card-footer" id="event-card-footer">
                            <small class="text-muted" id="last-updated=text">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" id="latestevents">
                    <div class="card h-100" id="event-card-2">

                        <img src="https://img.freepik.com/free-vector/people-volunteering-donating-money_53876-66112.jpg" class="img-fluid" id="card-img-2" alt="Project image"></img>

                        <div class="card-body" id="event-card-body-2">
                            <h5 class="card-title" id="event-card-title">Donation of School Equipment At Kosgama Maha Vidyalaya</h5>
                            <p class="card-text" id="event-card-text">The second programme of the Sasnaka Sansada "Sisu Mediya" project 2021,
                                which aims to develop the infrastructure of schools with various needs in the island,
                                was successfully held on</p>
                        </div>
                        <div class="card-footer" id="event-card-footer">
                            <small class="text-muted" id="last-updated=text">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" id="latestevents">
                    <div class="card h-100" id="event-card-2">

                        <img src="https://img.freepik.com/free-vector/people-volunteering-donating-money_53876-66112.jpg" class="img-fluid" id="card-img-2" alt="Project image"></img>

                        <div class="card-body" id="event-card-body-2">
                            <h5 class="card-title" id="event-card-title">Donation of School Equipment At Kosgama Maha Vidyalaya</h5>
                            <p class="card-text" id="event-card-text">The second programme of the Sasnaka Sansada "Sisu Mediya" project 2021,
                                which aims to develop the infrastructure of schools with various needs in the island,
                                was successfully held on</p>
                        </div>
                        <div class="card-footer" id="event-card-footer">
                            <small class="text-muted" id="last-updated=text">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>



                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" id="latestevents">
                    <div class="card h-100" id="event-card-2">

                        <img src="https://img.freepik.com/free-vector/people-volunteering-donating-money_53876-66112.jpg" class="img-fluid" id="card-img-2" alt="Project image"></img>

                        <div class="card-body" id="event-card-body-2">
                            <h5 class="card-title" id="event-card-title">Donation of School Equipment At Kosgama Maha Vidyalaya</h5>
                            <p class="card-text" id="event-card-text">The second programme of the Sasnaka Sansada "Sisu Mediya" project 2021,
                                which aims to develop the infrastructure of schools with various needs in the island,
                                was successfully held on</p>
                        </div>
                        <div class="card-footer" id="event-card-footer">
                            <small class="text-muted" id="last-updated=text">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>


            </div>

            <div className="d-flex justify-content-between" id="icon-group1">

                <Link to="#">
                    <i class="fa fa-arrow-circle-left fa-4x" aria-hidden="true" id="icon-left1"></i>
                </Link>

                <Link to="#">
                    <i class="fa fa-arrow-circle-right fa-4x" aria-hidden="true" id="icon-right2"></i>
                </Link>

            </div>
            
        </div>

    )
}


