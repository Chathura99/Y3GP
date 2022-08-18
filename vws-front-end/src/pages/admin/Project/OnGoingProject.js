import React, { useState, useEffect } from "react";
import { LineChart } from "./../../../utilities/Charts/LineChart";
import NewTable from "../../../utilities/Table/NewTable";
import EditProject from "./EditProject";

export default function OnGoingProject() {
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
      coordinator: "Chamath Sha",
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
    { accessor: "projectId", Header: "PROJECT ID" },
    { accessor: "projectName", Header: "PROJECT NAME" },
    { accessor: "coordinator", Header: "COORDINATOR" },
    { accessor: "phone", Header: "PHONE" },
    { accessor: "startedOn", Header: "STARTED ON" },
    { accessor: "action", Header: "ACTION" },
  ]);
  const [lineChartData, setLineChartData] = useState([
    [
      "Month",
      "Ganitha Saviya",
      "MathLab",
      "Regreen Earth",
      "Lohithuppada",
      "Sarasavi Piyageta",
    ],
    ["Jan", 100, 5, 15, 1, 1],
    ["Feb", 150, 0, 15, 2, 2],
    ["Mar", 120, 0, 5, 2, 2],
    ["Apr", 250, 0, 15, 2, 3],
    ["May", 300, 4, 18, 1, 1],
    ["Jun", 200, 5, 20, 1, 1],
  ]);
  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters ">
                  <h5>Events Growth</h5>
                </div>
                <div className="row gutters ">
                  <LineChart data={lineChartData} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
                <div className="row gutters "></div>
                <div className="row gutters ">
                  
                  <NewTable
                  columns={onGoingProjectTableHead}
                  data={onGoingProjectData}                 
                />
                </div>
              </div>
            </div>
          </div>
        </div>
        <EditProject />
                <button
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
                <br></br>
      </div>
    </>
  );
}
