import React, { useEffect,useState } from 'react';
// import Table from "../../../utilities/Table/Table";
import Card from "react-bootstrap/Card";
import MapFormPopUp from './MapFormPopUp';
import "./UpcomingEvents.css"
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
import {getUpcomingEvents} from "../../../services/eventServices/eventService";

export default function UpcomingEvents() {
  
    
      
      

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
      const res = await getUpcomingEvents();
      setUpComingEventData(res.data);
    };
    const [selected, setSelected] = useState(false);
  
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
                              View
                            </button>
                          );
                        },
                        onClick: (event, rowData) => {
                          // setSelectedJoinRequestsData(rowData);
                          // setSelected(true);
                        },
                         tooltip: "View Location",
                      },
                    ]}
                  />
                                
                                <MapFormPopUp />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
