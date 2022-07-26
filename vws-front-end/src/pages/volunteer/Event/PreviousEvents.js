import React, { useEffect,useState } from 'react';
import Table from "../../../utilities/Table/Table";
// import "./PreviousEvents.css";


export default function PreviousEvents() {
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
              className="btn btn-primary p-1"
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
              className="btn btn-primary p-1"
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
                            <h5>Previous Events</h5>
                            {/* <a href="https://react.school" target="_blank">
                                  <button id='selectproject'>Project</button>
                                </a> */}
                                <Table rows={upcomingEventsData} headCells={UpcomingEventsHeadings} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
