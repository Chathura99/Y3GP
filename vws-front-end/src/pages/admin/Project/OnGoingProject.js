import React, { useState, useEffect } from "react";
import { LineChart } from "./../../../utilities/Charts/LineChart";
import EditProject from "./EditProject";
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
// services
import { getOngoingProjects } from "../../../services/ProjectServices/ProjectService";

export default function OnGoingProject() {
  useEffect(() => {
    checkValidate();
    getOngoingProjectDetails();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const getOngoingProjectDetails = async () => {
    const res = await getOngoingProjects();
    // console.log(res.data);
    setOnGoingProjectData(res.data);
  };
  const [onGoingProjectData, setOnGoingProjectData] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});

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
  const [selected, setSelected] = useState(false);

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
                <div
                  className="row gutters "
                  style={{ justifyContent: "center" }}
                >
                  <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="Ongoing Projects"
                    columns={[
                      { field: "projectId", title: "PROJECT ID" },
                      {
                        field: "name",
                        title: "PROJECT NAME",
                        minWidth: "150px",
                      },
                      { field: "firstName", title: "COORDINATOR" },
                      { field: "phoneNumber", title: "PHONE" },
                      {
                        field: "startDate",
                        title: "STARTED ON",
                        minWidth: "150px",
                      },
                    ]}
                    data={onGoingProjectData}
                    actions={[
                      {
                        icon: () => {
                          return (
                            <button
                              type="button"
                              class="btn"
                              style={{
                                backgroundColor: "#96BE25",
                                border: "none",
                                marginRight: 0,
                              }}
                            >
                              Edit
                            </button>
                          );
                        },
                        onClick: (event, rowData) => {
                          setSelectedProject(rowData);
                          setSelected(true);
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

        {selected && (
          <EditProject setSelected={setSelected} data={selectedProject} />
        )}

        <br></br>
      </div>
    </>
  );
}
