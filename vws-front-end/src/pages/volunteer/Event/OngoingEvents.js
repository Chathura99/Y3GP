import React, { useEffect,useState } from 'react';
import MapFormPopUp from './MapFormPopUp';
import JoinEventForm from './JoinEventForm';
import ConfirmPopUp from '../../../utilities/PopUps/ConfirmPopUp';
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
// services
import { getOngoingEvents } from './../../../services/eventServices/eventService';
import { leaveEvent, participateToEvent } from './../../../services/volunteerServices/joinEventService';


export default function OngoingEvents() {
  
  const [joinEvent, setJoinEvent] = useState({
    eventId: "",
    volunteerId: 1,
    status: 0

});
  
const [popup, setPopUp] = useState("");
const [message, setMessage] = useState("");

const closePopUp = () => {
  setPopUp("");
};

const confirm = (e) => {
  e.preventDefault();
  setMessage("Request to Join");
  setPopUp("confirm");
};




const handleSubmit = (e) => {
  // e.preventDefault();
  console.log("reached!")
  participateToEvent(joinEvent)
      .then((response) => {
          if (response.status === 200) {
              console.log(response.data);
              setMessage("Joined Successfully");
              if (response.data === 1) {     //check this
                  setPopUp("success");
              } else if(response.data=2) {

                  setPopUp("failed");
                  setMessage("Already joined");
              }
              else{
                setPopUp("Failed");
              }
          }
      })

      .catch((err) => {
          if (err && err.response) {
              console.log(err);
              setMessage(err.message);
              setPopUp("failed");
          }
      });


};


const handleChange = (e) => {
  e.persist();
  console.log(e.target.name + "-" + e.target.value);
  setJoinEvent((joinEvent) => ({
      ...joinEvent,
      [e.target.name]: e.target.value,
  }));
};



    useEffect(() => {
        checkValidate();
        getOngoingEventDetails();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const getOngoingEventDetails = async () => {
      const res = await getOngoingEvents();
      // console.log(res.data);
      setOnGoingEventData(res.data);
    };

    // new code
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

    const [selectedJoinEventData, setSelectedJoinEventData] = useState({});
    const [onGoingEventData, setOnGoingEventData] = useState([]);
    const [eventData, setEventData] = useState({});

    const [selected, setSelected] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState({});

    return (
        <>
        
            <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
                

                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                            <h5>Ongoing Events</h5><br></br>
                            <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="Ongoing Events"
                    columns={[
                      {
                        field: "eventId",
                        title: "EVENT ID",
                        
                      },
                      {
                        field: "category",
                        title: "CATEGORY",
                      },
                      { field: "name", title: "COORDINATOR" },
                      
                      {
                        field: "startDate",
                        title: "STARTED ON",
                        minWidth: "150px",
                      },
                      {
                        field: "endDate",
                        title: "ENDS ON",
                        minWidth: "150px",
                      },
                      {
                        field: "noOfVolunteers",
                        title: "NO OF MEMBERS",
                      },
                      
                    ]}
                    data={onGoingEventData}
                    actions={[
                      {
                        
                        icon: () => {
                          return (
                            <button
                              type="button"
                              class="btn"
                              data-toggle="modal"
                              data-target="#CoordinateEventForm"
                              style={{
                                backgroundColor: "#2596BE",
                                width: "6rem",
                                border: "none",
                                marginRight: 0,
                              }}
                            >
                              View
                            </button>
                          );
                        },
                        onClick: (event, rowData) => {
                          setSelectedEvent(rowData);
                          setSelected(true);
                        },
                        tooltip: "View Location",
                      },

                      {
                        
                        icon: () => {
                          return (
                            
                            <button
                            onClick={confirm}
                            id="submit"
                              type="submit"
                              class="btn"
                              style={{
                                backgroundColor: "#96BE25",
                                width: "6rem",
                                border: "none",
                                marginRight: 0,
                              }}
                            >
                              Join
                            </button>
                          );
                        },
                        onClick: (event, rowData) => {
                          setJoinEvent({
                            eventId: rowData.eventId,
                            volunteerId: 1,
                            status: 0
                        
                        });
                          setEventData(rowData);
                          console.log(rowData)
                          setSelected(true);
                        },
                        tooltip: "Join to Event",
                      },
                      
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
                  {/* {selected && (
          // <CoordinateEventForm setSelected={setSelected} data={coordinateEventToProject}/>
        )} */}
                            
                                
                                <JoinEventForm />
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
      {popup === "confirm" && (
        <ConfirmPopUp
          message={message}
          closePopUp={closePopUp}
          handleSubmit={handleSubmit}
          data={eventData}
        />
      )}
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
