import React, { useEffect,useState } from 'react';
import Table from "../../../utilities/Table/Table";
import DonutChart from "../../../utilities/Charts/DonutChart";
import { LineChart } from './../../../utilities/Charts/LineChart';

export default function CompletedEvents() {
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
          data-toggle="modal"
          data-target="#exampleModalCenter"
          className="btn p-1"
          style={{backgroundColor:"#96BE25",border:"none"}}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          Event Details
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
          data-toggle="modal"
          data-target="#exampleModalCenter"
          className="btn p-1"
          style={{backgroundColor:"#96BE25",border:"none"}}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          Event Details
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

  const [lineChartData, setLineChartData] = useState([
    [
      "Month",
      "Ganitha Saviya",
      "Regreen Earth",
      
    ],
    ["Jan", 100, 40],
    ["Feb", 150, 100],
    ["Mar", 120, 60],
    ["Apr", 250, 20],
    ["May", 300, 80],
    ["Jun", 200, 150],
  ]);

  const [donutChartData, setDonutChartData] = useState([
    ["Project", "Count"],
    ["Ganitha Saviya", 11],
    ["Re-Green Earth", 2],
    
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
        <div className="row gutters mt-10">
          

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters ">
                  <h5 className="ml-3">Completed Event Summary</h5>
                </div>
                <div className="row gutters ">
                <DonutChart data={donutChartData}/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters"><h5 className="ml-3">My Participations</h5>
                <LineChart data={lineChartData}/>
                 </div>
                
                
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
              <h5>Completed Events</h5>
                                <Table rows={upcomingEventsData} headCells={UpcomingEventsHeadings} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
