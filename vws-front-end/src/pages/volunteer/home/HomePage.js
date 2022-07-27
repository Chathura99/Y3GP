import React, { useState } from "react";
import Table from "../../../utilities/Table/Table";
import DonutChart from "../../../utilities/Charts/DonutChart";
import PieChart from "../../../utilities/Charts/PieChart";
import "./homepage.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

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
          Accepted
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
          style={{backgroundColor:"#BE4D25",border:"none"}}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          Rejected
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
                <Table rows={upcomingEventsData} headCells={UpcomingEventsHeadings} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
