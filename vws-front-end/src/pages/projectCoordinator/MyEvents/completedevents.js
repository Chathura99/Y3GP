import React, { useEffect,useState } from 'react';
import NewTable from '../../../utilities/Table/NewTable';
import DonutChart from "../../../utilities/Charts/DonutChart";
import { LineChart } from '../../../utilities/Charts/LineChart';
import { useMemo } from 'react';
import AddEventProgress from "../Event/AddEventProgress";

// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
// services
import {
  getUpcomingEvents,
  getPreviousEvents,
} from "../../../services/eventServices/eventService";


export default function PcCompletedEvents() {

    useEffect(() => {
        checkValidate();
//        upcomingEvent();
        previousEvent();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
          window.location.href = "/";
        }
      };

    const previousEvent = async () => {
        const res = await getPreviousEvents();
        setPreviousEventData(res.data);
    };

    const [selected, setSelected] = useState(false);

      const [previousEventData, setPreviousEventData] = useState([]);
      const [eventProgressData, setEventProgressData] = useState({});

//  const [upcomingEventsData, setUpComingEventsData] = useState([
//    {
//      event_id: "E001",
//      category: "Ganitha Saviya",
//      event_coordinator: "Ravindu",
//      startdate: "2022 09 12",
//      enddate: "2022 09 14",
//      no_of_members: "13",
//      location: "Nikawaratiya",
//
//      action: (
//        <button
//          type="button"
//          id="submit"
//          name="submit"
//          className="btn btn-primary p-1"
//          style={{backgroundColor:"#96BE25",border:"none"}}
//          // #96BE25,#BE4D25
//          // onClick={handleSubmit}
//        >
//          Details
//        </button>
//      ),
//    },
//    {
//      event_id: "E002",
//      category: "Re-green Earth",
//      event_coordinator: "Sadaru",
//      startdate: "2022 09 02",
//      enddate: "2022 09 04",
//      no_of_members: "8",
//      location: "Horana",
//
//      action: (
//        <button
//          type="button"
//          id="submit"
//          name="submit"
//          className="btn btn-primary p-1"
//          style={{backgroundColor:"#96BE25",border:"none"}}
//          // #96BE25,#BE4D25
//          // onClick={handleSubmit}
//        >
//          Details
//        </button>
//      ),
//    },
//  ]);
//
//  const [UpcomingEventsHeadings, setUpComingEventsTableHead] = useState([
//          { accessor: "event_id", Header: "EVENT ID" },
//          { accessor: "category", Header: "CATEGORY" },
//          { accessor: "event_coordinator", Header: "EVENT COORDINATOR" },
//          { accessor: "startdate", Header: "STARTS ON" },
//          { accessor: "enddate", Header: "ENDS ON" },
//          { accessor: "no_of_members", Header: "NO. OF MEMBERS" },
//          { accessor: "location", Header: "LOCATION" },
//          { accessor: "action", Header: "EVENT DETAILS" },
//
//  ]);

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

//  useEffect(() => {
//    checkValidate();
//  }, []);
//
//  const checkValidate = async () => {
//    const y = localStorage.getItem("USER_KEY");
//    if (!y) {
//      window.location.href = "/";
//    }
//  };

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

              <div className="row gutters "></div>
                  {/* <h5>Previous Events</h5> */}
                  <div
                    className="row gutters "
                    style={{ justifyContent: "center" }}
                  >
                    <MaterialTable
                      components={{
                        Container: (props) => <Paper {...props} elevation={0} />,
                      }}
                      options={{ actionsColumnIndex: -1 }}
                      title="Previous Events"
                      columns={[
                        { field: "eventId", title: "EVENT ID" },
                        { field: "category", title: "CATEGORY" },
                        { field: "name", title: "COORDINATOR" },
                        { field: "phoneNumber", title: "PHONE" },
                        { field: "startDate", title: "STARTED ON" },
                        { field: "endDate", title: "ENDS ON" },
                        { field: "noOfVolunteers", title: "NO OF MEMBERS" },
                        { field: "place", title: "LOCATION" },
                        { field: "status", title: "STATUS" },
                      ]}
                      data={previousEventData}
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
                                Progress
                              </button>
                            );
                          },
                          onClick: (event, rowData) => {
                            setEventProgressData(rowData)
                            // To Do - set progress
                            setSelected(true);
                          },
                          // tooltip: "Register User",
                        },
                      ]}
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
        {selected && <AddEventProgress setSelected={setSelected} eventProgressData={eventProgressData}/>}
      </div>
    </>
  )











  // return (
  //   <>
  //   <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
  //     <div className="row gutters mt-10">
  //       <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
  //         <div className="card h-100" id="contentcard">
  //           <div className="card-body">
  //             <div className="row gutters">Completed Events</div>
  //             <div className="row gutters ">line 1</div>
  //             <div className="row gutters">line 2</div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
  //         <div className="card h-100" id="contentcard">
  //           <div className="card-body">
  //             <div className="row gutters ">
  //               <h3 className="ml-3">Title</h3>
  //             </div>
  //             <div className="row gutters ">
  //               Content
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="row gutters mt-3">
  //       <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
  //         <div className="card h-100" id="contentcard">
  //           <div className="card-body ">
  //            Content
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </>
  // )
}
