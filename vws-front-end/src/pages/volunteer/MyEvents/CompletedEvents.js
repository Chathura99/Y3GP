import React, { useEffect,useState } from 'react';
import DonutChart from "../../../utilities/Charts/DonutChart";
import { LineChart } from '../../../utilities/Charts/LineChart';

// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
import { getCompletedEvents } from '../../../services/eventServices/eventService';
import { getVolunteerCompletedEventSummary } from '../../../services/volunteerServices/ChartServices';

export default function CompletedEvents() {

  const donutChartData = [
    ["name", "Count"],

  ];

  useEffect(() => {
    checkValidate();
    getCompletedEventDetails();
    getComEventSummaryData();

  }, []);

  const [volunteerCompletedEventSummaryData, setVolunteerCompletedEventSummaryData] = useState({});


  const getComEventSummaryData = async () => {
    const res = await getVolunteerCompletedEventSummary();
    setDonuttChartData([...res.data]);
    console.log(...res.data);
    // Donut(res.data);
     

  };

  const [donuttChartData, setDonuttChartData] = useState({});


  const Donut =  Object.values(donuttChartData).map(
      (value) => (
        donutChartData.push(
          [
            value.name,
            value.count
          ]
        )
      )
    )
  

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const getCompletedEventDetails = async () => {
    const res = await getCompletedEvents();
    // console.log(res.data);
    setCompletedEventData(res.data);
  };

  const [selected, setSelected] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});
  const [completedEventData, setCompletedEventData] = useState([]);

  const [lineChartData, setLineChartData] = useState([
    [
      "Month",
      "Ganitha Saviya",
      "Regreen Earth",
      
    ],
    ["Sep", 3, 2],
    ["Octomber", 3, 1],
    // ["Mar", 120, 60],
    // ["Apr", 250, 20],
    // ["May", 300, 80],
    // ["Jun", 200, 150],
  ]);

 

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
                What are the events that i have complete so far
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters"><h5 className="ml-3">My Participations</h5>
                <LineChart data={lineChartData}/>
                Event progress i have completed monthly
                 </div>
                
                
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
              <h5>Completed Events</h5><br></br>
              <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="My Completed Events"
                    columns={[
                      { field: "eventId", title: "EVENT ID" },
                      { field: "category", title: "CATEGORY" },
                      { field: "name", title: "COORDINATOR" },
                      { field: "startDate", title: "STARTS ON" },
                      { field: "endDate", title: "ENDS ON" },
                      { field: "noOfVolunteers", title: "NO OF MEMBERS" },
                      { field: "place", title: "LOCATION" },
                    ]}
                    data={completedEventData}
                    // actions={[
                    //   {
                    //     icon: () => {
                    //       return (
                    //         <button
                    //           type="button"
                    //           className="btn mt-0"
                    //           style={{
                    //             backgroundColor: "#96BE25",
                    //             border: "none",
                    //           }}
                    //         >
                    //           Details
                    //         </button>
                    //       );
                    //     },
                    //     onClick: (event, rowData) => {
                    //       // setSelectedJoinRequestsData(rowData);
                    //       setSelected(true);
                    //     },
                    //      tooltip: "Event Details",
                    //   },
                    // ]}
                    />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}                             
  
                  

                  