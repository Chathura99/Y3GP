import React, { useState, useEffect } from "react";
import Table from "../../../utilities/Table/Table";

export default function Event() {
  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
  const [upComingEventData, setUpComingEventData] = useState([
    {
      eventId: "Adurata Eliyak",
      category: "Yashodha Subhasinghe",
      eventCoordinator: "+94 76 7845 111",
      phone: "2020-10-21",
      startsOn: "2020-10-21",
      endsOn: "2020-10-21",
      noOfMembers: "2020-10-21",
      location: "2020-10-21",
    },
  ]);
  const [previousEventData, setPreviousEventData] = useState([
    {
      eventId: "E001",
      category: "Ganitha Saviya",
      eventCoordinator: "Lasith Gunathilake",
      phone: "+94 75 4785 123",
      startsOn: "2020-10-21",
      endsOn: "2020-10-22",
      noOfMembers: 10,
      location: "Nuwara Eliya",
      status: (
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
          Cancelled
        </button>
      ),
    },
  ]);

  const [previousEventTableHead, setPreviousEventTableHead] = useState([
    { id: "eventId", label: "EVENT ID" },
    { id: "category", label: "PROJECT CATEGORY" },
    { id: "eventCoordinator", label: "EVENT COORDINATOR" },
    { id: "phone", label: "PHONE" },
    { id: "startsOn", label: "STARTS ON" },
    { id: "endsOn", label: "ENDS ON" },
    { id: "noOfMembers", label: "NO OF MEMBERS" },
    { id: "location", label: "LOCATION" },
    { id: "status", label: "STATUS" },
  ]);

  const [upComingEventTableHead, setupComingEventTableHead] = useState([
    { id: "eventId", label: "EVENT ID" },
    { id: "category", label: "PROJECT CATEGORY" },
    { id: "eventCoordinator", label: "EVENT COORDINATOR" },
    { id: "phone", label: "PHONE" },
    { id: "startsOn", label: "STARTS ON" },
    { id: "endsOn", label: "ENDS ON" },
    { id: "noOfMembers", label: "NO OF MEMBERS" },
    { id: "location", label: "LOCATION" },
  ]);
  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters "></div>
                <div className="row gutters ">
                  <Table
                    rows={upComingEventData}
                    headCells={upComingEventTableHead}
                    tableName={"UpComing Events"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters "></div>
                <div className="row gutters ">
                  <Table
                    rows={previousEventData}
                    headCells={previousEventTableHead}
                    tableName={"Previous Events"}
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
