import React, { useState,useEffect } from "react";
import DonutChart from "../../../utilities/Charts/DonutChart";
import PieChart from "../../../utilities/Charts/PieChart";
import "./homepage.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
// import Card from "react-bootstrap/Card";
import NewTable from '../../../utilities/Table/NewTable';
import { useMemo } from 'react';


export default function HomePage() {
  const [upcomingEventsData, setUpComingEventsData] = useState([
    {
            event_id: "E001",
            category: "Ganitha Saviya",
            event_coordinator: "Ravindu",
            startdate: "2022 09 12",
            enddate: "2022 09 14",
            no_of_members: "13",
            location: "Nikawaratiya",
            
            
    },
    {
            event_id: "E002",
            category: "Re-green Earth",
            event_coordinator: "Sadaru",
            startdate: "2022 09 02",
            enddate: "2022 09 04",
            no_of_members: "8",
            location: "Horana",
            
            
    }
  ]);

const data = useMemo(
() => upcomingEventsData  )

  const UpcomingEventsHeadings=useMemo(
    () => [
     
      { accessor: "event_id", Header: "EVENT ID" },
      { accessor: "category", Header: "CATEGORY" },
      { accessor: "event_coordinator", Header: "EVENT COORDINATOR" },
      { accessor: "startdate", Header: "STARTS ON" },
      { accessor: "enddate", Header: "ENDS ON" },
      { accessor: "no_of_members", Header: "NO. OF MEMBERS" },
      { accessor: "location", Header: "LOCATION" },
     
    ],
    []
  )
  const [donutChartData, setDonutChartData] = useState([
    ["Project", "Count"],
    ["Ganitha Saviya", 11],
    ["Re-Green Earth", 2],
    
  ]);

  const [pieChartData, setPieChartData] = useState([
    ["Task", "votes"],
    ["Ganitha Saviya", 60],
    ["Re-green Earth", 40],
  ]);

  useEffect(() => {
    checkValidate();
}, []);

const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
        window.location.href = "/";
    }
};
  

  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 ">
            <div className="card h-8" id="contentcard">
              <div className="card-body" id="mid">
                <div className="row gutters">Total Upcoming Events</div>
                <div className="row gutters ">
                  <div className="featuredContainer">
                    <span className="featured">3</span>
                    <span className="rate">
                      0 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="rate">
                      +1 <ArrowUpward className="featuredIcon" />
                    </span>
                  </div>
                </div>
                <div className="row gutters">
                  <small>Compared to last month</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  ">
            <div className="card h-8" id="contentcard">
              <div className="card-body" id="mid">
                <div className="row gutters">Events Completed</div>
                <div className="row gutters ">
                  <div className="featuredContainer">
                    <span className="featured">2</span>
                    <span className="rate">
                      -1 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="rate">
                      0 <ArrowUpward className="featuredIcon" />
                    </span>
                  </div>
                </div>
                <div className="row gutters">
                  <small>Compared to last month</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 ">
            <div className="card h-10" id="contentcard">
              <div className="card-body" id="mid">
                <div className="row gutters">New Polls</div>
                <div className="row gutters ">
                  <div className="featuredContainer">
                    <span className="featured">1</span>
                    <span className="rate">
                      0 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="rate">
                      +1 <ArrowUpward className="featuredIcon" />
                    </span>
                  </div>
                </div>
                <div className="row gutters">
                  <small>Compared to last month</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  ">
            <div className="card h-10" id="contentcard">
              <div className="card-body" id="mid">
                <div className="row gutters">Total Projects</div>
                <div className="row gutters ">
                  <div className="featuredContainer">
                    <span className="featured">2</span>
                    <span className="rate">
                      0 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="rate">
                      +2 <ArrowUpward className="featuredIcon" />
                    </span>
                  </div>
                </div>
                <div className="row gutters">
                  <small>Compared to last month</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters">
                  {/* <h5>Upcoming Events</h5> */}
                </div>
                <div className="row gutters ">
                  <h5>Announcements</h5>
                  <div className="card">
                  <div className="card-header" id="head">
                    <ul className="nav ">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <img
                            id="profielimg"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                          ></img>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        id="details"
                        style={{ marginTop: "8px" }}
                      >
                        <a className="nav-link" style={{color:"black"}}><b>R.R. Rathnayake</b></a>
                        <a className="nav-link">ADMIN 2021-10-21 12:12</a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body" id="body">
                    <h6 className="card-title" style={{ color: "black" }}>
                
                    </h6>
                    <p className="card-text" style={{ marginTop: "-25px" }}>
                    The second programme of the Sasnaka Sansada "Sisu Mediya" project 2021, which aims to develop the infrastructure of schools with various needs in the island, was successfully held on 24th April at Kosgama Maha Vidyalaya in the Wattegama Education Zone in the Kandy District.
                    </p>
                    <p className="card-text"style={{ marginTop: "-10px" }}>
                      <div className="pdfFiles">
                        
                        <h6 style={{textAlign: "right",fontSize: 12,color:"#2596BE"}}>View more...</h6>
                      </div>
                    </p>
                    
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="head">
                    <ul className="nav ">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <img
                            id="profielimg"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                          ></img>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        id="details"
                        style={{ marginTop: "8px" }}
                      >
                        <a className="nav-link" style={{color:"black"}}><b>R.R. Rathnayake</b></a>
                        <a className="nav-link">ADMIN 2021-10-21 12:12</a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body" id="body">
                    <h6 className="card-title" style={{ color: "black" }}>
                
                    </h6>
                    <p className="card-text" style={{ marginTop: "-25px" }}>
                    The 5th episode of Sasnaka Sansada - Re Green Earth programme, was successfully concluded on 11th of April 2021, in Kurunegala, along the Wariyapola Natiya - Malagane road by the Deduru Oya reservoir as a Kumbuk plantation and conservation project.
                    </p>
                    <p className="card-text" style={{ marginTop: "-10px" }}>
                      <div className="pdfFiles">
                       
                        <h6 style={{textAlign: "right",fontSize: 12,color:"#2596BE"}}>View more...</h6>
                      </div>
                    </p>
                    
                  </div>
                </div>
                  {/* <Table rows={tableData} /> */}
                  
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters ">
                  <h3 className="ml-3">
                    <h5>Project Summary</h5>
                  </h3>
                </div>
                <div className="row gutters ">
                  <DonutChart data={donutChartData}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
                <div className="row gutters ">
                  <h3 className="ml-3">
                    <h5>Coordinated Event Progress</h5>
                    <h6>Title : Event for september</h6>
                  </h3>
                </div>
                <div className="row gutters ">
                  <PieChart data={pieChartData}/>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
                <h5>Upcoming Events</h5><br></br>
                <NewTable columns={UpcomingEventsHeadings} data={upcomingEventsData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
