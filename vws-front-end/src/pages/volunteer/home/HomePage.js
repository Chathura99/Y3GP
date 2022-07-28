import React, { useState } from "react";
import Table from "../../../utilities/Table/Table";
import DonutChart from "../../../utilities/Charts/DonutChart";
import PieChart from "../../../utilities/Charts/PieChart";
import "./homepage.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import Card from "react-bootstrap/Card";

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
      
      action: (
        <button
          type="button"
          id="submit"
          name="submit"
          className="btn p-1"
          style={{backgroundColor:"#96BE25",border:"none"}}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          View Details
        </button>
      ),
    },
    {
      event_id: "E002",
      category: "Re-green Earth",
      event_coordinator: "Sadaru",
      startdate: "2022 09 02",
      enddate: "2022 09 04",
      no_of_members: "8",
      location: "Horana",
      
      action: (
        <button
          type="button"
          id="submit"
          name="submit"
          className="btn p-1"
          style={{backgroundColor:"#96BE25",border:"none"}}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          View Details
        </button>
      ),
    },
  ]);

  const [UpcomingEventsHeadings, setUpComingEventsTableHead] = useState([
    { id: "event_id", label: "Event ID" },
    { id: "category", label: "Category" },
    { id: "event_coordinator", label: "Event Coordinator" },
    { id: "startdate", label: "Starts On" },
    { id: "enddate", label: "Ends On" },
    { id: "no_of_members", label: "No. of Members" },
    { id: "location", label: "Location" },
    { id: "action", label: "Action" },

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
                  {/* <Table rows={tableData} /> */}
                  <Card style={{ width: "50rem",height: "9rem", backgroundColor: "#F1F1F1",margin:10,borderRadius:10 }}>
        <Card.Body>
          <Card.Title id='day' style={{ color: "black",fontSize:12 }}>C.S. Dissanayake</Card.Title>
          <Card.Subtitle id='month' style={{color: "black",fontSize:7,marginTop:-10}}>ADMIN  25-10-2022    19:55</Card.Subtitle>
          <Card.Text id='event_name' style={{color: "black",fontSize:15,marginTop:10}}>
            MATH LAB PROGRAM
          </Card.Text>
          <Card.Text id='place' style={{color: "black",fontSize:10,marginTop:-10}}>
          Ut enim labore et dolore magna aliqua. Ut enim aUt enim labore et dolore magna aliqua. Ut enim
 ad minim veniam, quis nostrud .d minim veniam, quis nostrud. 
            </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "50rem",height: "9rem", backgroundColor: "#F1F1F1",marginTop:5, margin:10,borderRadius:10 }}>
        <Card.Body>
          <Card.Title id='day' style={{ color: "black",fontSize:12 }}>R.R. Ramanayake</Card.Title>
          <Card.Subtitle id='month' style={{color: "black",fontSize:7,marginTop:-10}}>PC  21-10-2022     09:15</Card.Subtitle>
          <Card.Text id='event_name' style={{color: "black",fontSize:15,marginTop:10}}>
            MATH LAB PROGRAM
          </Card.Text>
          <Card.Text id='place' style={{color: "black",fontSize:10,marginTop:-10}}>
          Ut enim labore et dolore magna aliqua. Ut enim aUt enim labore et dolore magna aliqua. Ut enim
 ad minim veniam, quis nostrud .d minim veniam, quis nostrud . 
            </Card.Text>
        </Card.Body>
      </Card>
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
                  <DonutChart />
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
                    <h5>Poll Results</h5>
                    <h6>Title : Event for september</h6>
                  </h3>
                </div>
                <div className="row gutters ">
                  <PieChart />
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
