import React, { useState, useEffect } from "react";
import NewTable from "../../../utilities/Table/NewTable";
import AddEventProgress from "./AddEventProgress";
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
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
  const [selected, setSelected] = useState(false);

  const [upComingEventData, setUpComingEventData] = useState([
    {
      eventId: "E015",
      category: "Ganitha Saviya",
      eventCoordinator: "Yashodha Sub.",
      phone: "+94 71 5486 957",
      startsOn: "2020-10-21",
      endsOn: "2020-10-21",
      noOfMembers: "10",
      location: "Nikaweratiya",
    },
    {
      eventId: "E016",
      category: "Ganitha Saviya",
      eventCoordinator: "Sumudu Per.",
      phone: "+94 70 1116 957",
      startsOn: "2020-11-21",
      endsOn: "2020-10-21",
      noOfMembers: "25",
      location: "Hambantota",
    },
  ]);
  const [previousEventData, setPreviousEventData] = useState([
    {
      eventId: "E001",
      category: "Ganitha Saviya",
      eventCoordinator: "Lasith Gunarath..",
      phone: "0754785123",
      startsOn: "2020-10-21",
      endsOn: "2020-10-22",
      noOfMembers: 10,
      location: "Nuwara Eliya",
      status: "Cancelled",
    },
    {
      eventId: "E002",
      category: "Re-green earth",
      eventCoordinator: "Malik Wijesu..",
      phone: "0712584568",
      startsOn: "2020-10-21",
      endsOn: "2020-10-22",
      noOfMembers: 10,
      location: "Dambadeniya",
      status: "Completed",
    },
  ]);

  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
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
                    title="Upcoming Events"
                    columns={[
                      { field: "eventId", title: "EVENT ID" },
                      { field: "category", title: "CATEGORY" },
                      { field: "eventCoordinator", title: "COORDINATOR" },
                      { field: "phone", title: "PHONE" },
                      { field: "startsOn", title: "STARTS ON" },
                      { field: "endsOn", title: "ENDS ON" },
                      { field: "noOfMembers", title: "NO OF MEMBERS" },
                      { field: "location", title: "LOCATION" },
                    ]}
                    data={upComingEventData}
                    actions={[
                      {
                        icon: () => {
                          return (
                            <button
                              type="button"
                              className="btn mt-0"
                              style={{
                                backgroundColor: "#96BE25",
                                border: "none",
                              }}
                            >
                              Details
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

        <div className="row gutters mt-3">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters "></div>
                {/* <h5>Previous Events</h5> */}
                <div
                  className="row gutters "
                  style={{ justifyContent: "center" }}
                >
                  <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="Previous Events"
                    columns={[
                      { field: "eventId", title: "EVENT ID" },
                      { field: "category", title: "CATEGORY" },
                      { field: "eventCoordinator", title: "COORDINATOR" },
                      { field: "phone", title: "PHONE" },
                      { field: "startsOn", title: "STARTS ON" },
                      { field: "endsOn", title: "ENDS ON" },
                      { field: "noOfMembers", title: "NO OF MEMBERS" },
                      { field: "location", title: "LOCATION" },
                      { field: "status", title: "STATUS" },
                    ]}
                    data={previousEventData}
                    actions={[
                      {
                        icon: () => {
                          return (
                            <button
                              type="button"
                              className="btn mt-0"
                              style={{
                                backgroundColor: "#96BE25",
                                border: "none",
                              }}
                            >
                              Details
                            </button>
                          );
                        },
                        onClick: (event, rowData) => {
                          // setSelectedJoinRequestsData(rowData);
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
          <AddEventProgress 
          setSelected={setSelected}
          />
        )}
        
      </div>
    </>
  );
}
