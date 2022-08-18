import React, { useState, useEffect } from "react";
import { LineChart } from "./../../../utilities/Charts/LineChart";
import Table from "../../../utilities/Table/Table";
import { red } from "@mui/material/colors";
// import EditProject from "./EditProject";
import "./Summary.css";

export default function EventSummary() {
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
      projectId: "P001",
      projectName: "Ganitha Saviya",
      coordinator: "Hazeen Ram",
      phone: "+94 76 7845 111",
      startedOn: "2020-10-21",
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
          Edit
        </button>
      ),
    },
    {
      projectId: "P002",
      projectName: "Re-green Earth",
      coordinator: "Chamath Shanuka",
      phone: "+94 70 2542 336",
      startedOn: "2019-12-01",
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
          Edit
        </button>
      ),
    },
  ]);

  const [onGoingProjectTableHead, setOnGoingProjectTableHead] = useState([
    { id: "projectId", label: "PROJECT ID" },
    { id: "projectName", label: "PROJECT NAME" },
    { id: "coordinator", label: "COORDINATOR" },
    { id: "phone", label: "PHONE" },
    { id: "startedOn", label: "STARTED ON" },
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
                      <div id="q1">
                        <label for="event" id="q1label">Event </label>
                        <select id="eventlist" name="event" size="1" className="form-control" >
                          <option value="Completed">Completed</option>
                          <option value="Ongoing">Ongoing</option>
                          <option value="Upcoming">Upcoming</option>
                          
                        </select>
                      </div>
                      <div id="q2">
                        <label for="event" >District </label>
                        <select id="cars" name="event" size="1" multiple>
                          <option value="Colombo">Colombo</option>
                          <option value="Kalutara">Kalutara</option>
                          <option value="Gampaha">Gampaha</option>
                          
                        </select>
                      </div>
                      <div id="q3">
                        <label for="datefrom" >Date From </label>
                        <input type="date"
                        id="fromdate"
                        placeholder="select date"
                        // value={profile.firstName}
                        name="datefrom"/>
                      </div>
                      <div id="q4">
                        <label for="datefrom" >To </label>
                        <input type="date"
                        id="fromdate"
                        placeholder="select date"
                        // value={profile.firstName}
                        name="datefrom"/>
                      </div>
                      <div id="q5">
                        <button> Generate</button>
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
