import React, { useState, useEffect } from "react";
import PieChart from "../../../utilities/Charts/PieChart";
import { LineChart } from "./../../../utilities/Charts/LineChart";
import Table from "../../../utilities/Table/Table";

export default function CurrentUser() {
  const [previousEventData, setPreviousEventData] = useState([
    {
      userID: "E001",
      email: "namal@gmail.com",
      name: "Namal rathnaweera",
      phone: "+94 75 4785 123",
      joinDate: "2020-10-21",
      university: "Peradeniya",
      position: "Volunteer",
      district: "Kandy",
      status: (
        <button
          type="button"
          id="submit"
          name="submit"
          className="btn mt-0"
          style={{
            backgroundColor: "#96BE25",
            border: "none",
            marginRight: 0,
          }}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          Active
        </button>
      ),
    },
  ]);

  const [previousEventTableHead, setPreviousEventTableHead] = useState([
    { id: "userID", label: "USER ID" },
    { id: "email", label: "EMAIL" },
    { id: "name", label: "NAME" },
    { id: "phone", label: "PHONE" },
    { id: "joinDate", label: "JOIN DATE" },
    { id: "university", label: "UNIVERSITY" },
    { id: "position", label: "POSITION" },
    { id: "district", label: "LOCATION" },
    { id: "status", label: "STATUS" },
  ]);
  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters">Current User</div>
                <div className="row gutters ">
                  <PieChart />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters ">
                  <h3 className="ml-3">Title</h3>
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
                <Table
                  rows={previousEventData}
                  headCells={previousEventTableHead}
                  tableName={"Current Users"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
