import React, { useEffect,useState } from 'react';
// import Table from "../../../utilities/Table/Table";
import Card from "react-bootstrap/Card";
import NewTable from '../../../utilities/Table/NewTable';
import { useMemo } from 'react';
import PopUpMap from './popupmap';
//import "./UpcomingEvents.css"

// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
// services
import {
  getUpcomingEvents,
//  getPreviousEvents,
} from "../../../services/eventServices/eventService";


export default function PcMyEvents() {

    useEffect(() => {
        checkValidate();
        upcomingEvent();
//        previousEvent();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
          window.location.href = "/";
        }
    };

    const upcomingEvent = async () => {
        const res = await getUpcomingEvents();
        setUpComingEventData(res.data);
      };

      const [selected, setSelected] = useState(false);
      const [upComingEventData, setUpComingEventData] = useState([]);

//      const [upcomingEventsData, setUpComingEventsData] = useState([
//        {
//                event_id: "E001",
//                category: "Ganitha Saviya",
//                event_coordinator: "Ravindu",
//                startdate: "2022 09 12",
//                enddate: "2022 09 14",
//                no_of_members: "13",
//                location:
//                <button
//          type="button"
//          id="submit"
//          name="submit"
//          data-toggle="modal"
//          data-target="#MapForm"
//          className="btn p-1"
//          style={{backgroundColor:"rgb(150 190 37)",border:"none",marginTop: 10,marginBottom: 10}}
//          // #96BE25,#BE4D25
//          // onClick={handleSubmit}
//        >
//          Location
//        </button>,
//
//        },
//        {
//                event_id: "E002",
//                category: "Re-green Earth",
//                event_coordinator: "Sadaru",
//                startdate: "2022 09 02",
//                enddate: "2022 09 04",
//                no_of_members: "8",
//                location:
//                <button
//          type="button"
//          id="submit"
//          name="submit"
//          data-toggle="modal"
//          data-target="#MapForm"
//          className="btn p-1"
//          style={{backgroundColor:"rgb(150 190 37)",border:"none",marginTop: 10,marginBottom: 10}}
//          // #96BE25,#BE4D25
//          // onClick={handleSubmit}
//        >
//          Location
//        </button>,
//
//        }
//      ]);

//  const data = useMemo(
//    () => upcomingEventsData  )
//
//      const UpcomingEventsHeadings=useMemo(
//        () => [
//
//          { accessor: "event_id", Header: "EVENT ID" },
//          { accessor: "category", Header: "CATEGORY" },
//          { accessor: "event_coordinator", Header: "EVENT COORDINATOR" },
//          { accessor: "startdate", Header: "STARTS ON" },
//          { accessor: "enddate", Header: "ENDS ON" },
//          { accessor: "no_of_members", Header: "NO. OF MEMBERS" },
//          { accessor: "location", Header: "LOCATION" },
//
//
//        ],
//        []
//      )
//
//
//    useEffect(() => {
//        checkValidate();
//    }, []);
//
//    const checkValidate = async () => {
//        const y = localStorage.getItem("USER_KEY");
//        if (!y) {
//            window.location.href = "/";
//        }
//    };
    return (
        <>
            <div className="container-fluid calculated-bodywidth" style={{}} id="bla">


                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                            <h5>Upcoming Events</h5>
                            <div className="row gutters mt-10">
                            <Card style={{ width: "20rem",backgroundColor: "#2596BE",margin:20,borderRadius:10 }}>
                                <Card.Body>
                                  <Card.Title id='day' style={{ color: "white",fontSize:40 }}>14</Card.Title>
                                  <Card.Subtitle id='month' style={{color: "white",fontSize:10}}>AUGUST</Card.Subtitle>
                                  <Card.Text id='event_name' style={{color: "white",fontSize:20}}>
                                    MATH LAB PROGRAM
                                  </Card.Text>
                                  <Card.Text id='place' style={{color: "white",fontSize:10}}>
                                    @ DHARMARAJA MAHA VIDYALAYA
                                    </Card.Text>
                                </Card.Body>
                          </Card>

                          <Card style={{ width: "20rem",backgroundColor: "#2596BE" ,margin:20,borderRadius:10}}>
                            <Card.Body>
                              <Card.Title id='day' style={{ color: "white",fontSize:40 }}>20</Card.Title>
                              <Card.Subtitle id='month' style={{color: "white",fontSize:10}}>SEPTEMBER</Card.Subtitle>
                              <Card.Text id='event_name' style={{color: "white",fontSize:20}}>
                                BLOOD DONATION
                              </Card.Text>
                              <Card.Text id='place' style={{color: "white",fontSize:10}}>
                                @ MEDAWACHCHIYA
                                </Card.Text>
                            </Card.Body>
                          </Card>

                          <Card style={{ width: "20rem",backgroundColor: "#2596BE" ,margin:20,borderRadius:10}}>
                            <Card.Body>
                              <Card.Title id='day' style={{ color: "white",fontSize:40 }}>01</Card.Title>
                              <Card.Subtitle id='month' style={{color: "white",fontSize:10}}>SEPTEMBER</Card.Subtitle>
                              <Card.Text id='event_name' style={{color: "white",fontSize:20}}>
                                GANITHA SAVIYA
                              </Card.Text>
                              <Card.Text id='place' style={{color: "white",fontSize:10}}>
                                @ SUSSEX COLLEGE,NEGOMBO
                                </Card.Text>
                            </Card.Body>
                          </Card>

                      </div>
                      <a href="#" class="next round">&#8250;</a>
                      <a href="#" class="previous round">&#8249;</a>


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
            </div>
        </>
    );
}






//import React, { useEffect,useState } from 'react';
//import NewTable from '../../../utilities/Table/NewTable';
////import CoordinateEventForm from './Coordinate';
////import "./Project.css"
//import { useMemo } from 'react';
//
//export default function PcMyEvents() {
//
//  const [upcomingEventsData, setUpComingEventsData] = useState([
//    {
//      event_id: "E001",
//      category: "Ganitha Saviya",
//      event_coordinator: "Ravindu",
//      startdate: "2022 09 12",
//      enddate: "2022 09 14",
//      no_of_members: "13",
//      location: "Nikawaratiya",
//
//      action: (
//        <button
//          type="button"
//          id="submit"
//          name="submit"
//          className="btn p-1"
//          style={{backgroundColor:"#96BE25",border:"none"}}
//          // #96BE25,#BE4D25
//          // onClick={handleSubmit}
//        >
//          Accepted
//        </button>
//      ),
//    },
//    {
//      event_id: "E002",
//      category: "Re-green Earth",
//      event_coordinator: "Sadaru",
//      startdate: "2022 09 02",
//      enddate: "2022 09 04",
//      no_of_members: "8",
//      location: "Horana",
//
//      action: (
//        <button
//          type="button"
//          id="submit"
//          name="submit"
//          className="btn p-1"
//          style={{backgroundColor:"#BE4D25",border:"none"}}
//          // #96BE25,#BE4D25
//          // onClick={handleSubmit}
//        >
//          Rejected
//        </button>
//      ),
//    },
//  ]);
//
//  const [UpcomingEventsHeadings, setUpComingEventsTableHead] = useState([
//    { accessor: "event_id", Header: "Event ID" },
//    { accessor: "category", Header: "Category" },
//    { accessor: "event_coordinator", Header: "Event Coordinator" },
//    { accessor: "startdate", Header: "Starts On" },
//    { accessor: "enddate", Header: "Ends On" },
//    { accessor: "no_of_members", Header: "No. of Members" },
//    { accessor: "location", Header: "Location" },
//    { accessor: "action", Header: "Action" },
//
//  ]);
//
//useEffect(() => {
//    checkValidate();
//}, []);
//
//const checkValidate = async () => {
//    const y = localStorage.getItem("USER_KEY");
//    if (!y) {
//        window.location.href = "/";
//    }
//};
//return (
//    <>
//        <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
//
//
//            <div className="row gutters mt-3">
//                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                    <div className="card h-100" id="contentcard">
//                        <div className="card-body ">
//                        <h5>My Events</h5>
//                        <br></br><NewTable columns={UpcomingEventsHeadings} data={upcomingEventsData}/>
//
//                        </div>
//                    </div>
//                </div>
//            </div>
//        </div>
//    </>
//);
//
//
//
//
//
//  // return (
//  //   <>
//  //   <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
//  //     <div className="row gutters mt-10">
//  //       <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
//  //         <div className="card h-100" id="contentcard">
//  //           <div className="card-body">
//  //             <div className="row gutters">Upcoming Events</div>
//  //             <div className="row gutters ">line 1</div>
//  //             <div className="row gutters">line 2</div>
//  //           </div>
//  //         </div>
//  //       </div>
//
//  //       <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
//  //         <div className="card h-100" id="contentcard">
//  //           <div className="card-body">
//  //             <div className="row gutters ">
//  //               <h3 className="ml-3">Title</h3>
//  //             </div>
//  //             <div className="row gutters ">
//  //               Content
//  //             </div>
//  //           </div>
//  //         </div>
//  //       </div>
//  //     </div>
//
//  //     <div className="row gutters mt-3">
//  //       <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//  //         <div className="card h-100" id="contentcard">
//  //           <div className="card-body ">
//  //            Content
//  //           </div>
//  //         </div>
//  //       </div>
//  //     </div>
//  //   </div>
//  // </>
//  // )
//}
