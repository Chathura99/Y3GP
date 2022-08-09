import React, { useState, useEffect } from "react";
import Table from "../../../utilities/Table/Table";
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
      proposedPerson: "Yashodha Subhasinghe",
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
      initialize: (
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
          Initialize
        </button>
      ),
    },
  ]);

  const [proposedProjectTableHead, setProposedProjectTableHead] = useState([
    { id: "projectName", label: "PROJECT NAME" },
    { id: "proposedPerson", label: "PROPOSED PERSON" },
    { id: "phone", label: "PHONE" },
    { id: "proposedDate", label: "PROPOSED DATE" },
    { id: "forum", label: "FORUM" },
    { id: "initialize", label: "INITIALIZE" },
  ]);
  return (
    <>
      <div className="container-fluid calculated-bodywidth">
        <div className="row gutters mt-10">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters "></div>
                <div className="row gutters ">
                  <Table
                    rows={proposedProjectData}
                    headCells={proposedProjectTableHead}
                    tableName={"Proposed Projects"}
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
                <br></br>
                sample button for pop ups, get from here...
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
