import React, { useState, useEffect, useMemo } from "react";
import Table from "../../../utilities/Table/Table";
import DonutChart from "../../../utilities/Charts/DonutChart";
import PieChart from "../../../utilities/Charts/PieChart";
import { Link } from "react-router-dom";

import "./homepage.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { getParticularJoinRequestData } from "../../../services/adminServices/JoinRequestService";
import Loading from "../../../utilities/Loading/Loading";
import NewTable from "../../../utilities/Table/NewTable";
import RegisterNewUser from "./RegisterNewUser";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
// service
import { getUpcomingEvents } from "../../../services/eventServices/eventService";
import { getJoinRequest } from "../../../services/adminServices/JoinRequestService";
import { getAdminHomeSummary } from "../../../services/adminServices/ChartServices";
import { getProjectSummary } from "../../../services/adminServices/ChartServices";


export default function HomePage() {
  const [upComingEventsData, setUpComingEventsData] = useState([]);

  const [pieChartData, setPieChartData] = useState([
    ["Task", "votes"],
    ["Lohithuthpada", 11],
    ["Re-green Earth", 2],
  ]);

 

  const [joinRequestsData, setJoinRequestsData] = useState([]);
  const [selectedJoinRequestsData, setSelectedJoinRequestsData] = useState({});

  const donutChartData= [
    ["name", "Count"],

  ];

  useEffect(() => {
    checkValidate();
    getRequest();
    upcomingEvent();
    getCardSummary();
    getProjectSummaryData();

  }, []);

  const getRequest = async () => {
    const res = await getJoinRequest();
    // console.log(res.data);
    setJoinRequestsData([...res.data]);
  };

  const upcomingEvent = async () => {
    const res = await getUpcomingEvents();
    setUpComingEventsData(res.data);
  };

  const [adminHomeSummaryData, setadminHomeSummaryData] = useState({});

  const getCardSummary = async () => {
    const res = await getAdminHomeSummary();
    setadminHomeSummaryData(res.data);
    console.log(res.data);
  };

  const [projectSummaryData, setProjectSummaryData] = useState({});

  const getProjectSummaryData = async () => {
    const res = await getProjectSummary();
    setProjectSummaryData([...res.data]);
    console.log(res.data);
    // Donut(res.data);
     
  };
  // check push
  const Donut = Object.values(projectSummaryData).map(
      (value) => (
        donutChartData.push(
          [
            value.name,
            value.count
          ]
        )
      )
    )
  

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const [selected, setSelected] = useState(false);

  const [popup, setPopUp] = useState("");
  const [message, setMessage] = useState("");
  // close pop up modal
  const closePopUp = () => {
    setPopUp("");
  };

  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 ">
            <div className="card h-8" id="contentcard">
              <div className="card-body" id="mid">
                <div className="row gutters">Volunteers</div>
                <div className="row gutters ">
                  <div className="featuredContainer">
                    <span className="featured">{adminHomeSummaryData.volunteerCount}</span>
                    <span className="rate">
                      0 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="rate">
                      +25 <ArrowUpward className="featuredIcon" />
                    </span>
                  </div>
                </div>
                <div className="row gutters">
                  <small>Compared to latest month</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  ">
            <div className="card h-8" id="contentcard">
              <div className="card-body" id="mid">
                <div className="row gutters">Events Completed</div>
                <div className="row gutters ">
                  <div className="featuredContainer">
                    <span className="featured">{adminHomeSummaryData.eventCount}</span>
                    <span className="rate">
                      0 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="rate">
                      3 <ArrowUpward className="featuredIcon" />
                    </span>
                  </div>
                </div>
                <div className="row gutters">
                  <small>Compared to latest month</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 ">
            <div className="card h-10" id="contentcard">
              <div className="card-body" id="mid">
                <div className="row gutters">New Requests</div>
                <div className="row gutters ">
                  <div className="featuredContainer">
                    <span className="featured">{adminHomeSummaryData.newRequestCount}</span>
                    <span className="rate">
                      0 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="rate">
                      +3 <ArrowUpward className="featuredIcon" />
                    </span>
                  </div>
                </div>
                <div className="row gutters">
                  <small>Compared to latest month</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  ">
            <div className="card h-10" id="contentcard">
              <div className="card-body" id="mid">
                <div className="row gutters">Total Projects</div>
                <div className="row gutters ">
                  <div className="featuredContainer">
                    <span className="featured">{adminHomeSummaryData.currentProjectCount-3}</span>
                    <span className="rate">
                      0 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="rate">
                      +1 <ArrowUpward className="featuredIcon" />
                    </span>
                  </div>
                </div>
                <div className="row gutters">
                  <small>Compared to latest month</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <MaterialTable
                  components={{
                    Container: (props) => <Paper {...props} elevation={0} />,
                  }}
                  options={{ actionsColumnIndex: -1 }}
                  title="Upcoming Events"
                  columns={[
                    { field: "eventId", title: "EVENT ID", minWidth: "120px" },
                    {
                      field: "category",
                      title: "PROJECT NAME",
                      minWidth: "150px",
                    },
                    { field: "place", title: "PLACE" },
                    { field: "noOfVolunteers", title: "MEMBERS" },
                    { field: "name", title: "COORDINATOR" },
                    { field: "startDate", title: "DATE", minWidth: "100px" },
                  ]}
                  data={upComingEventsData}
                  actions={[
                    {
                      icon: () => {
                        return (
                          <Link to="/adminevent"><button
                            type="button"
                            className="btn mt-0"
                            style={{
                              backgroundColor: "#96BE25",
                              border: "none",
                            }}
                          >
                            More...
                          </button></Link>
                          
                        );
                      },
                      
                      // tooltip: "Register User",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters ">
                  <h3 className="ml-3">
                    <h5>Project Summary</h5>
                  </h3>
                </div>
                <div className="row gutters ">
                  <DonutChart data={donutChartData} />
                  Event Occuring details for all current projects
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
                <div className="row gutters ">
                  <h3 className="ml-3">
                    <h5>Poll Results</h5>
                    <h6>Title : Event for september</h6>
                  </h3>
                </div>
                <div className="row gutters ">
                  <PieChart data={pieChartData} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
                <MaterialTable
                  components={{
                    Container: (props) => <Paper {...props} elevation={0} />,
                  }}
                  options={{ actionsColumnIndex: -1 }}
                  title="Join Requests"
                  columns={[
                    { title: "REQUEST ID", field: "id" },
                    { title: "FIRST NAME", field: "firstName" },
                    { title: "LAST NAME", field: "lastName" },
                    { title: "NIC", field: "nic" },
                    { title: "PHONE", field: "phoneNumber" },
                    { title: "DATE", field: "requestedDate" },
                    { title: "DISTRICT", field: "district" },
                  ]}
                  data={joinRequestsData}
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
                            Register
                          </button>
                        );
                      },
                      onClick: (event, rowData) => {
                        setSelectedJoinRequestsData(rowData);
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
      {selectedJoinRequestsData.id && (
        <RegisterNewUser
          data={selectedJoinRequestsData}
          setSelectedData={setSelectedJoinRequestsData}
        />
      )}
    </>
  );
}

//   {
//     id: 72,
//     firstName: "chathura",
//     lastName: "manohara",
//     email: "cms@gmail.com",
//     phoneNumber: "0715248569",
//     address: "Polgahawela",
//     universityCollege: "Colombo",
//     district: "Kurunegala",
//     date: "2021-10-11",
//     status: 0,
//     nic: "985475865v",
//     info: "Singing",
//     other: "",
//   }
