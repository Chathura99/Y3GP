import React, { useEffect,useState } from 'react';
import { useMemo } from 'react';
import MapFormPopUp from './MapFormPopUp';
import JoinEventForm from './JoinEventForm';
import NewTable from '../../../utilities/Table/NewTable';



export default function OngoingEvents() {
  
  
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
      style={{backgroundColor:"#2596BE",border:"none"}}
      // #96BE25,#BE4D25
      // onClick={handleSubmit}
    >
      View in Map
    </button>,
            action: (
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        data-toggle="modal"
                        data-target="#JoinEventForm"
                        className="btn p-1"
                        style={{backgroundColor:"#96BE25",border:"none"}}
                        // #96BE25,#BE4D25
                        // onClick={handleSubmit}
                      >
                        JOIN
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
            location: 
            <button
      type="button"
      id="submit"
      name="submit"
      data-toggle="modal"
      data-target="#MapForm"
      className="btn p-1"
      style={{backgroundColor:"#2596BE",border:"none"}}
      // #96BE25,#BE4D25
      // onClick={handleSubmit}
    >
      View in Map
    </button>,
            action: (
              <button
                type="button"
                id="submit"
                name="submit"
                data-toggle="modal"
                data-target="#JoinEventForm"
                className="btn p-1"
                style={{backgroundColor:"#96BE25",border:"none"}}
                // #96BE25,#BE4D25
                // onClick={handleSubmit}
              >
                JOIN
              </button>
            ),
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
      { accessor: "action", Header: "JOIN" },
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
                            <h5>Ongoing Events</h5><br></br>
                            
                            <NewTable columns={UpcomingEventsHeadings} data={upcomingEventsData}/>
                                
                                <JoinEventForm />
                                <MapFormPopUp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
