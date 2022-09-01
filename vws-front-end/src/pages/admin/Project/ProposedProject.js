import React, { useState, useEffect } from "react";
import NewTable from "../../../utilities/Table/NewTable";
import TopFormPopUp from "../../../utilities/PopUps/TopFormPopUp";
import MidFormPopUp from "../../../utilities/PopUps/MidFormPopUp";
import Initializeproject from "./InitializeProject";
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
export default function ProposedProject() {
  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
  const [proposedProjectData, setProposedProjectData] = useState([
    {
      projectName: "Adurata Eliyak",
      proposedPerson: "Yashodha Subha.",
      phone: "+94 76 7845 111",
      proposedDate: "2020-10-21",
    },
  ]);
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
                  {/* <NewTable
                    columns={proposedProjectTableHead}
                    data={proposedProjectData}
                    action={
                      <button
                        type="button"
                        class="btn"
                        data-toggle="modal"
                        data-target="#initializeproject"
                        style={{
                          backgroundColor: "#96BE25",
                          border: "none",
                          marginRight: 0,
                        }}
                      >
                        Initialize
                      </button>
                    }
                  /> */}

                  <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="Proposed Projects"
                    columns={[
                      { field: "projectName", title: "PROJECT NAME" },
                      { field: "proposedPerson", title: "PROPOSED PERSON" },
                      { field: "phone", title: "PHONE" },
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
                          window.location.href = "/adminforum"
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
                          // setSelectedJoinRequestsData(rowData);
                          setSelected(true);
                          console.log("selected!");
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
                {selected && <Initializeproject setSelected={setSelected} />}

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
