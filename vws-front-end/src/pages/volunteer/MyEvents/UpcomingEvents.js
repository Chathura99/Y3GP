import React, { useEffect,useState } from 'react';
// import Table from "../../../utilities/Table/Table";
import Card from "react-bootstrap/Card";
import MapFormPopUp from './MapFormPopUp';
import "./UpcomingEvents.css"
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
import {getMyNewUpcomingEvents, getUpcomingEvents} from "../../../services/eventServices/eventService";
import ConfirmPopUp from '../../../utilities/PopUps/ConfirmPopUp';
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import { leaveEvent } from '../../../services/volunteerServices/joinEventService';

export default function UpcomingEvents() {
  
  const [popup, setPopUp] = useState("");
  const [message, setMessage] = useState("");
  
  const closePopUp = () => {
    setPopUp("");
  };
  
  // const confirm = (e) => {
  //   e.preventDefault();
  //   setMessage("Request to Join");
  //   setPopUp("confirm");
  // };
      
      

    useEffect(() => {
        checkValidate();
        upcomingEvent();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const upcomingEvent = async () => {
      const res = await getMyNewUpcomingEvents();
      setUpComingEventData(res.data);
    };

    const deleteSelectedJoin = () => {
      // console.log("deleted " + selectedJoinEventData.volunteer_id);
      leaveEvent(selectedJoinEventData)
        .then((response) => {
          if (response.status === 200 && response.data == 1) {
            setMessage("Leave successfully!");
            setPopUp("success");
          }else if(response.data=2 ) {

            setPopUp("failed");
            setMessage("Please join before leave.");
        }

           else {
            setPopUp("failed");
          }
        })
        
      setPopUp("");
    };
    const [selected, setSelected] = useState(false);
    const [eventData, setEventData] = useState({});
    const [selectedJoinEventData, setSelectedJoinEventData] = useState({});

    const [upComingEventData, setUpComingEventData] = useState([]);

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

      
                            <h5><br></br>All Upcoming Events</h5><br></br>
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
                      { field: "startDate", title: "STARTS ON" },
                      { field: "endDate", title: "ENDS ON" },
                      { field: "noOfVolunteers", title: "NO OF MEMBERS" },
                      { field: "place", title: "LOCATION" },
                    ]}
                    data={upComingEventData}
                    actions={[
                      // {
                      //   icon: () => {
                      //     return (
                      //       <button
                      //         type="button"
                      //         className="btn mt-0"
                      //         style={{
                      //           backgroundColor: "#96BE25",
                      //           border: "none",
                      //         }}
                      //       >
                      //         View
                      //       </button>
                      //     );
                      //   },
                      //   onClick: (event, rowData) => {
                      //     // setSelectedJoinRequestsData(rowData);
                      //     // setSelected(true);
                      //   },
                      //    tooltip: "View Location",
                      // },
                      {
                          icon: () => {
                            return (
                              <button
                                type="button"
                                className="btn mt-0"
                                style={{
                                  backgroundColor: "#BE4D25",
                                  border: "none",
                                  // marginRight: "2px",
                                }}
                              >
                                Leave
                              </button>
                            );
                          },
                          //  tooltip: "Leave from event",
                          onClick: (event, rowData) => {
                            setPopUp("confirmDelete");
                            setSelectedJoinEventData({
                              eventId: rowData.eventId,
                              volunteerId: 1,
                              status: 0
                          });
                        },
                        },
                    ]}
                  />
                                
                                <MapFormPopUp />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {popup === "success" && (
        <SuccessPopUp message={message} closePopUp={closePopUp} />
      )}
      {popup === "failed" && (
        <FailedPopUp message={message} closePopUp={closePopUp} />
      )}
      {/* {popup === "confirm" && (
        <ConfirmPopUp
          message={message}
          closePopUp={closePopUp}
          handleSubmit={handleSubmit}
          data={eventData}
        />
      )} */}
       {popup === "confirmDelete" && (
        <ConfirmPopUp
          message={"Want to leave ?"}
          closePopUp={closePopUp}
          handleSubmit={deleteSelectedJoin}
        />
      )}
        </>
    );
}
