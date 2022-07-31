import React, { useState,useEffect } from "react";
import Table from "../../../utilities/Table/Table";
import DonutChart from "../../../utilities/Charts/DonutChart";
import PieChart from "../../../utilities/Charts/PieChart";
import "./homepage.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
// import Card from "react-bootstrap/Card";


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
      
      // action: (
      //   <button
      //     type="button"
      //     id="submit"
      //     name="submit"
      //     className="btn p-1"
      //     style={{backgroundColor:"#96BE25",border:"none"}}
      //     // #96BE25,#BE4D25
      //     // onClick={handleSubmit}
      //   >
      //     View Details
      //   </button>
      // ),
    },
    {
      event_id: "E002",
      category: "Re-green Earth",
      event_coordinator: "Sadaru",
      startdate: "2022 09 02",
      enddate: "2022 09 04",
      no_of_members: "8",
      location: "Horana",
      
      // action: (
      //   <button
      //     type="button"
      //     id="submit"
      //     name="submit"
      //     className="btn p-1"
      //     style={{backgroundColor:"#96BE25",border:"none"}}
      //     // #96BE25,#BE4D25
      //     // onClick={handleSubmit}
      //   >
      //     View Details
      //   </button>
      // ),
    },
  ]);
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
  const [UpcomingEventsHeadings, setUpComingEventsTableHead] = useState([
    { id: "event_id", label: "EVENT ID" },
    { id: "category", label: "CATEGORY" },
    { id: "event_coordinator", label: "EVENT COORDINATOR" },
    { id: "startdate", label: "STARTS ON" },
    { id: "enddate", label: "ENDS ON" },
    { id: "no_of_members", label: "NO.OF MEMBERS" },
    { id: "location", label: "LOCATION" },
    // { id: "action", label: "Action" },

  ]);

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
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic
                    </p>
                    <p className="card-text"style={{ marginTop: "-10px" }}>
                      <div className="pdfFiles">
                        <img id="file" src="data:image/png;base64,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"></img>
                        <a href="../../uploads/announcement/variable">
                          a.pdf
                        </a>
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
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic
                    </p>
                    <p className="card-text" style={{ marginTop: "-10px" }}>
                      <div className="pdfFiles">
                        <img id="file" src="data:image/png;base64,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"></img>
                        <a href="../../uploads/announcement/variable">
                          a.pdf
                        </a>
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
                <h5>Upcoming Events</h5>
                <Table rows={upcomingEventsData} headCells={UpcomingEventsHeadings} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
