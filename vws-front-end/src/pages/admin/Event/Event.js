import React, { useState, useEffect } from "react";
import NewTable from "../../../utilities/Table/NewTable";
import AddEventProgress from "./AddEventProgress";
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
// services
import {
  getUpcomingEvents,
  getPreviousEvents,
} from "../../../services/eventServices/eventService";

export default function Event() {
  useEffect(() => {
    checkValidate();
    upcomingEvent();
    previousEvent();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const previousEvent = async () => {
    const res = await getPreviousEvents();
    setPreviousEventData(res.data);
  };

  const upcomingEvent = async () => {
    const res = await getUpcomingEvents();
    setUpComingEventData(res.data);
  };
  const [selected, setSelected] = useState(false);

  const [upComingEventData, setUpComingEventData] = useState([]);
  const [previousEventData, setPreviousEventData] = useState([]);

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
                      { field: "name", title: "COORDINATOR" },
                      { field: "phoneNumber", title: "PHONE" },
                      { field: "startDate", title: "STARTS ON" },
                      { field: "endDate", title: "ENDS ON" },
                      { field: "noOfVolunteers", title: "NO OF MEMBERS" },
                      { field: "place", title: "LOCATION" },
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
                      { field: "name", title: "COORDINATOR" },
                      { field: "phoneNumber", title: "PHONE" },
                      { field: "startDate", title: "STARTED ON" },
                      { field: "endDate", title: "ENDS ON" },
                      { field: "noOfVolunteers", title: "NO OF MEMBERS" },
                      { field: "place", title: "LOCATION" },
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
                              Progress
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

        {selected && <AddEventProgress setSelected={setSelected} />}
      </div>
    </>
  );
}
