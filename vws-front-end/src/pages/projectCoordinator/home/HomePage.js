import React, { useState, useEffect, useMemo } from "react";
import NewTable from '../../../utilities/Table/NewTable';
import Table from "../../../utilities/Table/Table";
import DonutChart from "../../../utilities/Charts/DonutChart";
import PieChart from "../../../utilities/Charts/PieChart";
import "./homepage.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
//import { getJoinRequest } from "../../../services/adminServices/JoinRequestService";
import Loading from "../../../utilities/Loading/Loading";
import PcApprove from "./MakeApprove";
import PcPopupDetails from "./PopupDetails";


// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";

// service
import { getCurrentProjects } from "../../../services/projectServices/projectService";
import { getEventRequest } from "../../../services/eventServices/eventService";


//card
import { getUpcomingEvents } from "../../../services/eventServices/eventService";
import { getJoinRequest } from "../../../services/adminServices/JoinRequestService";
import { getAdminHomeSummary } from "../../../services/adminServices/ChartServices";
import { getProjectSummary } from "../../../services/adminServices/ChartServices";


export default function PcHomePage() {

  const [upComingEventsData, setUpComingEventsData] = useState([]);

  useEffect(() => {
    checkValidate();
    CurrentProjects();
    getRequest();

    getRequest();
    upcomingEvent();
    getCardSummary();
    getProjectSummaryData();

  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const CurrentProjects = async () => {
    const res = await getCurrentProjects();
    console.log(res.data);
    setCurrentProjectsData(res.data);
  };


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



  const [CurrentProjectsData, setCurrentProjectsData] = useState([]);
  const [selectedCurrentProjects, setSelectedCurrentProjects] = useState({});

  const [selected, setSelected] = useState(false);
  const [selected1, setSelected1] = useState(false);


  const [joinRequestsData, setJoinRequestsData] = useState([]);
  const [selectedJoinRequestsData, setSelectedJoinRequestsData] = useState({});




  const [donutChartData, setDonutChartData] = useState([
    ["Project", "Count"],
    ["Ganitha Saviya", 15],
    ["Re-Green Earth", 60],
    ["Pahe Hapan", 30],
    ["Hisata Sewanak", 15]

  ]);

  const [pieChartData, setPieChartData] = useState([
    ["Task", "votes"],
    ["Ganitha Saviya", 60],
    ["Re-green Earth", 40],
  ]);


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
                    <span className="featured">{adminHomeSummaryData.projectCount}</span>
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
                <div className="row gutters">
                </div>
                <div className="row gutters ">


                  <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="Project Details"
                    columns={[
                      { field: "project_id", title: "ID", hidden: true },
                      { field: "name", title: "PROJECT", minWidth: "150px" },
                      { field: "fullName", title: "COORDINATOR", minWidth: "150px" },
                      { field: "phoneNumber", title: "PHONE" },
                      //  { field: "startDate", title: "STARTS ON" },
                      //  { field: "noOfVolunteers", title: "NO OF MEMBERS" },
                      //                                            { field: "place", title: "LOCATION" },
                    ]}
                    data={CurrentProjectsData}
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


          {selected && (
            <PcPopupDetails setSelected={setSelected} data={selectedJoinRequestsData} />
          )}

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
                                title="Event Requests"
                                columns={[
//                                  { title: "REQUEST ID", field: "id" },
                                  { title: "EVENT", field: "name" ,hidden:true},
                                  { title: "DATE", field: "startDate" },
                                  { title: "PLACE", field: "place" },
                                  { title: "NO OF VOLUNTEERS", field: "noOfVolunteers" },
                                  { title: "STATUS", field: "status" ,hidden:true},
//                                  { title: "DISTRICT", field: "district" },

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
                                          Approve
                                        </button>
                                      );
                                    },
                                    onClick: (event, rowData) => {
                                      setSelectedJoinRequestsData(rowData);
                                      setSelected1(true);
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
          
          
      {selected1 && (
        <PcApprove setSelected={setSelected1} data={selectedJoinRequestsData} />
      )}

      <br></br>

    </>
  );
}




//  const [upComingEventsData, setUpComingEventsData] = useState([
//    {
//      eventId: "E001",
//      project: "Ganitha Saviya",
//      place:"Kurunegala",
//      member: 25,
//      coordinator: "Ravindu Prabasha",
//      date: "2022 09 12",
//    },
//    {
//      eventId: "E002",
//      project: "Re-green Earth",
//      place:"Kaduruwela",
//      member: 100,
//      coordinator: "Namal Upendra",
//      date: "2022 09 25",
//    },
//    {
//      eventId: "E003",
//      project: "Re-green Earth",
//      place:"Matara",
//      member: 130,
//      coordinator: "Sahan Kalhara",
//      date: "2022 09 25",
//    },
//
//  ]);

//  const [upComingEventsTableHead, setUpComingEventsTableHead] = useState([
//    { accessor: "eventId", Header: "EVENT ID" },
//    { accessor: "project", Header: "PROJECT NAME" },
//    { accessor: "place", Header: "PLACE" },
//    { accessor: "member", Header: "MEMBERS" },
//    { accessor: "coordinator", Header: "COORDINATOR" },
//    { accessor: "date", Header: "DATE" },
//  ]);

//  const [joinRequestsData, setJoinRequestsData] = useState([
//    {
//      id: "R001",
//      name: "Chathura Manohara",
//      nic: "998547521v",
//      phone: "+94 75 025 1451",
//      date: "2022 09 12",
//      status: (
//        <button
//          type="button"
//          id="submit"
//          name="submit"
//          className="btn btn-primary p-1 mt-0"
//          style={{backgroundColor:"#96BE25",border:"none"}}
//          // #96BE25,#BE4D25
//          // onClick={handleSubmit}
//        >
//          Rejected
//        </button>
//      ),
//    },
//  ]);
//
//  const [joinRequestsTableHead, setJoinRequestsTableHead] = useState([
//    { accessor: "id", Header: "REQUEST ID" },
//    { accessor: "name", Header: "NAME" },
//    { accessor: "nic", Header: "NIC" },
//    { accessor: "phone", Header: "PHONE" },
//    { accessor: "date", Header: "DATE" },
//    { accessor: "status", Header: "Status" },
//  ]);
//
//  useEffect(() => {
//    getRequest();
//  }, []);
//
//  const getRequest = async () => {
//    const res = await getJoinRequest();
//    console.log(res.data)
//    // setJoinRequestsData(res.data);
//  };