import React, { useEffect,useState } from 'react';
import Table from "../../../utilities/Table/Table";
import PieChart from './../../../utilities/Charts/PieChart';


export default function CoordinatedEvents() {
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
              EDIT
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
              EDIT
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
        { id: "action", label: "EDIT" },
    
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
                            <h5>Event Progres</h5>
                                <PieChart />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                            <h5>Coordinated Events</h5>
                                <Table rows={upcomingEventsData} headCells={UpcomingEventsHeadings} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
