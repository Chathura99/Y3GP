import React, { useState, useEffect } from "react";
import PieChart from "../../../utilities/Charts/PieChart";
import { LineChart } from "./../../../utilities/Charts/LineChart";
import NewTable from "../../../utilities/Table/NewTable";

export default function CurrentUser() {
  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
  const [currentUserTableData, setCurrentUserTableData] = useState([
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
      action: (
        <button
          type="button"
          id="submit"
          name="submit"
          className="btn mt-0"
          style={{
            backgroundColor: "#BE4D25",
            border: "none",
            marginRight: 0,
          }}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          Remove
        </button>
      ),
      
    },
    {
      userID: "E001",
      email: "rm@gmail.com",
      name: "Ravindu Medagama",
      phone: "+94 75 4785 123",
      joinDate: "2020-10-21",
      university: "COlombo",
      position: "Volunteer",
      district: "Bandaragama",
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
      action: (
        <button
          type="button"
          id="submit"
          name="submit"
          className="btn mt-0"
          style={{
            backgroundColor: "#BE4D25",
            border: "none",
            marginRight: 0,
          }}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          Remove
        </button>
      ),
    },
    {
      userID: "E001",
      email: "mw@gmail.com",
      name: "Malik Wijesuriya",
      phone: "+94 75 4785 123",
      joinDate: "2020-10-21",
      university: "COlombo",
      position: "Project Coordinator",
      district: "Panadura",
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
      action: (
        <button
          type="button"
          id="submit"
          name="submit"
          className="btn mt-0"
          style={{
            backgroundColor: "#BE4D25",
            border: "none",
            marginRight: 0,
          }}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          Remove
        </button>
      ),
    },
  ]);

  const [currentUserTableHead, setCurrentUserTableHead] = useState([
    { accessor: "userID", Header: "USER ID" },
    { accessor: "email", Header: "EMAIL" },
    { accessor: "name", Header: "NAME" },
    { accessor: "phone", Header: "PHONE" },
    { accessor: "joinDate", Header: "JOIN DATE" },
    { accessor: "university", Header: "UNIVERSITY" },
    { accessor: "position", Header: "POSITION" },
    { accessor: "district", Header: "LOCATION" },
    { accessor: "status", Header: "STATUS" },
    { accessor: "action", Header: "ACTION" },

  ]);

  const [pieChartData, setPieChartData] = useState([
    ["User", "Count"],
    ["Volunteer", 750],
    ["Project Coordinator", 21],
    ["Admin", 2],
  ]);

  const [lineChartData, setLineChartData] = useState([
    ["Month", "ADMIN", "Volunteer", "Project Coordinator"],
    ["Jan", 1, 400, 15],
    ["Feb", 1, 420, 15],
    ["Mar", 2, 420, 15],
    ["Apr", 2, 480, 15],
    ["May", 2, 500, 18],
    ["Jun", 2, 520, 20],
  ]);
  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters">
                  <h5>Current User</h5>
                </div>
                <div className="row gutters ">
                  <PieChart data={pieChartData} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters ">
                  <h5 className="ml-3">User Growth</h5>
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
                <h5>Current Users</h5>

                <NewTable
                  columns={currentUserTableHead}
                  data={currentUserTableData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
