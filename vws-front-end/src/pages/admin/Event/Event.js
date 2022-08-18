import React, { useState, useEffect } from "react";
import NewTable from "../../../utilities/Table/NewTable";
import AddEventProgress from "./AddEventProgress";

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
      eventId: "E015",
      category: "Adurata Eliyak",
      eventCoordinator: "Yashodha Sub",
      phone: "+94 71 5486 957",
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
      eventCoordinator: "Lasith Gun",
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
            padding: "6px",
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
    { accessor: "eventId", Header: "EVENT ID" },
    { accessor: "category", Header: "CATEGORY" },
    { accessor: "eventCoordinator", Header: "COORDINATOR" },
    { accessor: "phone", Header: "PHONE" },
    { accessor: "startsOn", Header: "STARTS ON" },
    { accessor: "endsOn", Header: "ENDS ON" },
    { accessor: "noOfMembers", Header: "NO OF MEMBERS" },
    { accessor: "location", Header: "LOCATION" },
    { accessor: "status", Header: "STATUS" },
  ]);

  const [upComingEventTableHead, setupComingEventTableHead] = useState([
    { accessor: "eventId", Header: "EVENT ID" },
    { accessor: "category", Header: "CATEGORY" },
    { accessor: "eventCoordinator", Header: "COORDINATOR" },
    { accessor: "phone", Header: "PHONE" },
    { accessor: "startsOn", Header: "STARTS ON" },
    { accessor: "endsOn", Header: "ENDS ON" },
    { accessor: "noOfMembers", Header: "NO OF MEMBERS" },
    { accessor: "location", Header: "LOCATION" },
  ]);
  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters "></div>
                <h5>Upcoming Events</h5>
                <div className="row gutters ">
                  <NewTable
                    columns={upComingEventTableHead}
                    data={upComingEventData}
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
                <h5>Previous Events</h5>
                <div className="row gutters ">
                  <NewTable
                    columns={previousEventTableHead}
                    data={previousEventData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <AddEventProgress />
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#addeventprogress"
        >
          Progress
        </button>
      </div>
    </>
  );
}
