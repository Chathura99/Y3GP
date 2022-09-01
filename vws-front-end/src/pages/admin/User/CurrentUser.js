import React, { useState, useEffect } from "react";
import PieChart from "../../../utilities/Charts/PieChart";
import { LineChart } from "./../../../utilities/Charts/LineChart";
import NewTable from "../../../utilities/Table/NewTable";
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
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
      userID: "1",
      email: "namal@gmail.com",
      name: "Namal rathnaweera",
      phone: "+94 75 4785 123",
      joinDate: "2020-10-21",
      university: "Peradeniya",
      position: "Volunteer",
      district: "Kandy",
      status: "Active",
    },
    {
      userID: "2",
      email: "rm@gmail.com",
      name: "Ravindu Medagama",
      phone: "+94 75 4785 123",
      joinDate: "2020-10-21",
      university: "COlombo",
      position: "Volunteer",
      district: "Bandaragama",
      status: "Active",
    },
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
                  This chat shows . . .
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
                  This chat shows . . .
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
                <MaterialTable
                  components={{
                    Container: (props) => <Paper {...props} elevation={0} />,
                  }}
                  options={{ actionsColumnIndex: -1 }}
                  title="Current Users"
                  columns={[
                    { field: "userID", title: "USER ID" },
                    { field: "email", title: "EMAIL" },
                    { field: "name", title: "NAME" },
                    { field: "phone", title: "PHONE" },
                    {
                      field: "joinDate",
                      title: "JOIN DATE",
                      minWidth: "120px",
                    },
                    { field: "university", title: "UNIVERSITY" },
                    { field: "position", title: "POSITION" },
                    { field: "district", title: "LOCATION" },
                    { field: "status", title: "STATUS" },
                  ]}
                  data={currentUserTableData}
                  actions={[
                    {
                      icon: () => {
                        return (
                          <button
                            type="button"
                            className="btn mt-0"
                            style={{
                              backgroundColor: "#BE4D25",
                              border: "none",
                            }}
                          >
                           Remove
                          </button>
                        );
                      },
                      onClick: (event, rowData) => {
                        // setSelectedJoinRequestsData(rowData);
                        // setSelected(true);
                      },
                      // tooltip: "Register User",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
