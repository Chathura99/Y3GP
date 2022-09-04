import React, { useState, useEffect } from "react";
import NewTable from "../../../utilities/Table/NewTable";
import TopFormPopUp from "../../../utilities/PopUps/TopFormPopUp";
import MidFormPopUp from "../../../utilities/PopUps/MidFormPopUp";
import Initializeproject from "./InitializeProject";
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
// service
import { getProposedProject } from "../../../services/ProjectServices/ProjectService";

export default function ProposedProject() {
  useEffect(() => {
    checkValidate();
    getProposedProjectData();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const getProposedProjectData = async () => {
    const res = await getProposedProject();
    console.log(res.data);
    setProposedProjectData(res.data);
  };
  const [proposedProjectData, setProposedProjectData] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});

  const [selected, setSelected] = useState(false);

  return (
    <>
      <div className="container-fluid calculated-bodywidth">
        <div className="row gutters mt-10">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters "></div>
                <div
                  className="row gutters "
                  style={{ justifyContent: "center" }}
                >
                  <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="Proposed Projects"
                    columns={[
                      { field: "name", title: "PROJECT NAME" },
                      { field: "firstName", title: "PROPOSED PERSON" },
                      { field: "phoneNumber", title: "PHONE" },
                      { field: "proposedDate", title: "PROPOSED DATE" },
                    ]}
                    data={proposedProjectData}
                    actions={[
                      {
                        icon: () => {
                          return (
                            <button
                              type="button"
                              class="btn"
                              style={{
                                backgroundColor: "#BE4D25",
                                border: "none",
                                marginRight: 0,
                              }}
                            >
                              Check
                            </button>
                          );
                        },
                        onClick: (event, rowData) => {
                          // setSelectedJoinRequestsData(rowData);
                          // setSelected(true);
                          window.location.href = "/adminforum";
                          console.log("selected!");
                        },
                        // tooltip: "Register User",
                      },
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
                              Initialize
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

        <div className="row gutters mt-3">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
                {selected && (
                  <Initializeproject
                    data={selectedProject}
                    setSelected={setSelected}
                  />
                )}

                <br></br>
                {/* sample button for pop ups, get from here...
                <TopFormPopUp />
                <MidFormPopUp />
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Middle
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Upper
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
