import React, { useState, useEffect } from "react";
import { LineChart } from "./../../../utilities/Charts/LineChart";
import Table from "../../../utilities/Table/Table";
import { red } from "@mui/material/colors";
// import EditProject from "./EditProject";
import "./Summary.css";

export default function ProjectSummary() {
  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
  const [onGoingProjectData, setOnGoingProjectData] = useState([
    {
      eventId: "E001",
      category: "Ganitha Saviya",
      coordinator: "Hazeen Ram",
      district: "Kalutara",
      startOn: "2020-10-21",
      endOn:"2020-11-21",
      action: (
        <button
          type="button"
          id="submit"
          name="submit"
          className="btn mt-0"
          style={{
            backgroundColor: "#96BE25",
            border: "none",
            marginRight: "2px",
          }}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          View
        </button>
      ),
    },
    {
      eventId: "E002",
      category: "Re-green Earth",
      coordinator: "Chamath Shanuka",
      district: "Colombo",
      startOn: "2019-12-01",
      endsOn:"2020-01-21",
      action: (
        <button
          type="button"
          id="submit"
          name="submit"
          className="btn  mt-0"
          style={{
            backgroundColor: "#96BE25",
            border: "none",
            marginRight: "2px",
          }}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          View
        </button>
      ),
    },
  ]);

  const [onGoingProjectTableHead, setOnGoingProjectTableHead] = useState([
    { id: "eventId", label: "EVENT ID" },
    { id: "category", label: "CATEGORY" },
    { id: "coordinator", label: "COORDINATOR" },
    { id: "district", label: "DISTRICT" },
    { id: "startOn", label: "START ON" },
    { id: "endOn", label: "END ON" },
    { id: "action", label: "ACTION" },
  ]);
  const [lineChartData, setLineChartData] = useState([
    [
      "Month",
      "No of Events",
      // "MathLab",
      // "Regreen Earth",
      // "Lohithuppada",
      // "Sarasavi Piyageta",
    ],
    ["Jan", 10],
    ["Feb", 15],
    ["Mar", 12],
    ["Apr", 25],
    ["May", 30],
    ["Jun", 20],
    // ["Jan", 100, 5, 15, 1, 1],
    // ["Feb", 150, 0, 15, 2, 2],
    // ["Mar", 120, 0, 5, 2, 2],
    // ["Apr", 250, 0, 15, 2, 3],
    // ["May", 300, 4, 18, 1, 1],
    // ["Jun", 200, 5, 20, 1, 1],
  ]);
  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters ">
                  <h5>Events Summary</h5>
                </div>
                <div className="row gutters ">
                  <LineChart data={lineChartData} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3" id="outertablebox">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" id="outertablebox2" >
            <div className="card h-100" id="contentcard2">
              <div className="card-body ">
                <div id="selectionrow">
                  
                    <form onSubmit={""}>
                      <div id="q1" >
                        <label for="event" id="q1label"><b>Event</b> </label>
                        <select id="eventlist" name="event" size="1" className="form-control" >
                          <option value="Completed">Completed</option>
                          <option value="Ongoing">Ongoing</option>
                          <option value="Upcoming">Upcoming</option>
                          
                        </select>
                      </div>
                      <div id="q2">
                        <label for="event" id="q2label" ><b>District</b> </label>
                        <select id="Disctrictlist" name="event" size="1" className="form-control" >
                          <option value="Colombo">Colombo</option>
                          <option value="Kalutara">Kalutara</option>
                          <option value="Gampaha">Gampaha</option>
                          
                        </select>
                      </div>
                      <div id="q3">
                        <label for="datefrom" id="q3label" ><b>Date From</b> </label>
                        <input type="date"
                        className="form-control"
                        id="fromdate"
                        placeholder="select date"
                        // value={profile.firstName}
                        name="datefrom"/>
                      </div>
                      <div id="q4">
                        <label for="datefrom" id="q4label" ><b>To</b> </label>
                        <input type="date"
                        className="form-control"
                        id="todate"
                        placeholder="select date"
                        // value={profile.firstName}
                        name="datefrom"/>
                      </div>
                      <div id="q5" >
                        <button type="button" className="btn p-1" id="generate"> Generate</button>
                      </div>

                    </form>
                  
                </div>
                <div className="row gutters " id="row" >
                  <Table
                    rows={onGoingProjectData}
                    headCells={onGoingProjectTableHead}
                    
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <EditProject /> */}
                {/* <button
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#editproject"
                  style={{
                    backgroundColor: "#96BE25",
                    border: "none",
                    marginRight: 0,
                  }}
                >
                  Edit
                </button>
                <br></br> */}
      </div>
    </>
  );
}
