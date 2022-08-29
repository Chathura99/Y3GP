import React, { useState, useEffect } from "react";
import NewTable from "../../../utilities/Table/NewTable";
import TopFormPopUp from "../../../utilities/PopUps/TopFormPopUp";
import MidFormPopUp from "../../../utilities/PopUps/MidFormPopUp";
import Initializeproject from "./InitializeProject";

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
      proposedPerson: "Yashodha",
      phone: "+94 76 7845 111",
      proposedDate: "2020-10-21",
      forum: (
        <button
          type="button"
          id="submit"
          name="submit"
          className="btn mt-0"
          style={{
            backgroundColor: "#BE4D25",
            border: "none",
            marginRight: "2px",
          }}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          Check
        </button>
      ),
      
    },
  ]);

  const [proposedProjectTableHead, setProposedProjectTableHead] = useState([
    { accessor: "projectName", Header: "PROJECT NAME" },
    { accessor: "proposedPerson", Header: "PROPOSED PERSON" },
    { accessor: "phone", Header: "PHONE" },
    { accessor: "proposedDate", Header: "PROPOSED DATE" },
    { accessor: "forum", Header: "FORUM" },
  ]);
  return (
    <>
      <div className="container-fluid calculated-bodywidth">
        <div className="row gutters mt-10">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters "></div>
                <h5 style={{ paddingLeft: "30px" }}>Proposed Projects</h5>
                <div className="row gutters ">
                  <NewTable
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
                <Initializeproject />

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
