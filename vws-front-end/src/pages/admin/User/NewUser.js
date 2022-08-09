import React, { useState, useEffect } from "react";
import Table from "../../../utilities/Table/Table";
import RegisterNewUser from "./RegisterNewUser";
export default function NewUser() {
  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
  const [joinRequestsData, setJoinRequestsData] = useState([
    {
      id: "R001",
      name: "Chathura Manohara",
      nic: "998547521v",
      phone: "+94 75 025 1451",
      date: "2022 09 12",
      status: (
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
          Rejister
        </button>
      ),
    },
  ]);

  const [joinRequestsTableHead, setJoinRequestsTableHead] = useState([
    { id: "id", label: "REQUEST ID" },
    { id: "name", label: "NAME" },
    { id: "nic", label: "NIC" },
    { id: "phone", label: "PHONE" },
    { id: "date", label: "DATE" },
    { id: "status", label: "STATUS" },
  ]);
  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters">New User</div>
                <div className="row gutters ">line 1</div>
                <div className="row gutters">line 2</div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters ">
                  <h3 className="ml-3">Title</h3>
                </div>
                <div className="row gutters ">Content</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
                <Table
                  rows={joinRequestsData}
                  headCells={joinRequestsTableHead}
                  tableName={"Join Requests"}
                />
              </div>
            </div>
          </div>
        </div>
        <RegisterNewUser />
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#registerUser"
        >
          Register
        </button>
      </div>
    </>
  );
}
