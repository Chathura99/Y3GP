import React, { useEffect,useState } from 'react';
import Table from "../../../utilities/Table/Table";
import Card from "react-bootstrap/Card";


export default function UpcomingEvents() {
  
    const [upcomingEventsData, setUpComingEventsData] = useState([
        {
          event_id: "E001",
          category: "Ganitha Saviya",
          event_coordinator: "Ravindu",
          startdate: "2022 09 12",
          enddate: "2022 09 14",
          no_of_members: "13",
          location: "Nikawaratiya",
          
          action: (
            <button
              type="button"
              id="submit"
              name="submit"
              className="btn p-1"
              style={{backgroundColor:"#96BE25",border:"none"}}
              // #96BE25,#BE4D25
              // onClick={handleSubmit}
            >
              EVENT DETAILS
            </button>
          ),
        },
        {
          event_id: "E002",
          category: "Re-green Earth",
          event_coordinator: "Sadaru",
          startdate: "2022 09 02",
          enddate: "2022 09 04",
          no_of_members: "8",
          location: "Horana",
          
          action: (
            <button
              type="button"
              id="submit"
              name="submit"
              className="btn p-1"
              style={{backgroundColor:"#96BE25",border:"none"}}
              // #96BE25,#BE4D25
              // onClick={handleSubmit}
            >
              EVENT DETAILS
            </button>
          ),
        },
      ]);
    
      const [UpcomingEventsHeadings, setUpComingEventsTableHead] = useState([
        { id: "event_id", label: "EVENT ID" },
        { id: "category", label: "CATEGORY" },
        { id: "event_coordinator", label: "EVENT COORDINATOR" },
        { id: "startdate", label: "STARTS ON" },
        { id: "enddate", label: "ENDS ON" },
        { id: "no_of_members", label: "NO. OF MEMBERS" },
        { id: "location", label: "LOCATION" },
        { id: "action", label: "EVENT DETAILS" },
    
      ]);

    useEffect(() => {
        checkValidate();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };
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
      
                            <h5>All Upcoming Events</h5>
                                <Table rows={upcomingEventsData} headCells={UpcomingEventsHeadings} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
