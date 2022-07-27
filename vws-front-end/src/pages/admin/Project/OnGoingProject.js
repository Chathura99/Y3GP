import React, { useState, useEffect } from "react";
import { LineChart } from "./../../../utilities/Charts/LineChart";
import Table from "../../../utilities/Table/Table";

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
      coordinator: "Kaduruwela",
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
      coordinator: "Matara",
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
                  <LineChart />
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
                  <Table
                    rows={onGoingProjectData}
                    headCells={onGoingProjectTableHead}
                    tableName={"OnGoing Projects"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
