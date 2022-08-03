import React, { useEffect,useState } from 'react';
// import Table from "../../../utilities/Table/Table";
import Card from "react-bootstrap/Card";
import NewTable from '../../../utilities/Table/NewTable';
import { useMemo } from 'react';
import MapFormPopUp from './MapFormPopUp';
import "./UpcomingEvents.css";


export default function UpcomingEvents() {
  
    
      const [upcomingEventsData, setUpComingEventsData] = useState([
        {
                event_id: "E001",
                category: "Ganitha Saviya",
                event_coordinator: "Ravindu",
                startdate: "2022 09 12",
                enddate: "2022 09 14",
                no_of_members: "13",
                location: 
                <button
          type="button"
          id="submit"
          name="submit"
          data-toggle="modal"
          data-target="#MapForm"
          className="btn p-1"
          style={{backgroundColor:"#2596BE",border:"none",marginTop: 10,marginBottom: 10}}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          View in Map
        </button>,
                
        },
        {
                event_id: "E002",
                category: "Re-green Earth",
                event_coordinator: "Sadaru",
                startdate: "2022 09 02",
                enddate: "2022 09 04",
                no_of_members: "8",
                location: 
                <button
          type="button"
          id="submit"
          name="submit"
          data-toggle="modal"
          data-target="#MapForm"
          className="btn p-1"
          style={{backgroundColor:"#2596BE",border:"none",marginTop: 10,marginBottom: 10}}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          View in Map
        </button>,
                
        }
      ]);

  const data = useMemo(
    () => upcomingEventsData  )

      const UpcomingEventsHeadings=useMemo(
        () => [
         
          { accessor: "event_id", Header: "EVENT ID" },
          { accessor: "category", Header: "CATEGORY" },
          { accessor: "event_coordinator", Header: "EVENT COORDINATOR" },
          { accessor: "startdate", Header: "STARTS ON" },
          { accessor: "enddate", Header: "ENDS ON" },
          { accessor: "no_of_members", Header: "NO. OF MEMBERS" },
          { accessor: "location", Header: "LOCATION" },
          
         
        ],
        []
      )
      

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
      <a href="#" class="next round">&#8250;</a>
      <a href="#" class="previous round">&#8249;</a>

      
                            <h5><br></br>All Upcoming Events</h5><br></br>
                               
                                <NewTable columns={UpcomingEventsHeadings} data={upcomingEventsData} />
                                <MapFormPopUp />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
