import React, {
    useEffect,
    useState
} from 'react';

import NewTable from '../../../utilities/Table/NewTable';
//import CoordinateEventForm from './Coordinate';
//import "./Project.css"
import { useMemo } from 'react';

import AddEventProgress from "./AddEventProgress";

// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
// services
import {
  getPreviousEvents,
} from "../../../services/eventServices/eventService";



export default function PcPreviousEvents() {

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
       console.log(res.data);
     };

    const [selected, setSelected] = useState(false);

    const [previousEventData, setPreviousEventData] = useState([]);
    const [eventProgressData, setEventProgressData] = useState({});

//  const [upcomingProjectsData, setUpComingProjectsData] = useState([
//    {
//      project_id: "E001",
//      project_name: "Ganitha Saviya",
//      description: "Event to upscale the mathematical knowledge of school children.",
//      coordinator: "Ravindu",
//      startdate: "2022 09 14",
//      // no_of_members: "13",
//      // location: "Nikawaratiya",
//
////      action: (
////        <button
////          type="button"
////          id="submit"
////          name="submit"
////          className="btn btn-primary p-1"
////          style={{backgroundColor:"#96BE25",border:"none"}}
////          // #96BE25,#BE4D25
////          // onClick={handleSubmit}
////        >
////          Coordinate
////        </button>
////      ),
//    },
//    {
//      project_id: "E002",
//      project_name: "Go Green",
//      description: "Event which was done inorder to save trees in Sri Lankan forests",
//      coordinator: "Tharindu",
//      startdate: "2022 09 14",
//      // no_of_members: "8",
//      // location: "Horana",
//
////      action: (
////        <button
////          type="button"
////          id="submit"
////          name="submit"
////          className="btn btn-primary p-1"
////          style={{backgroundColor:"#96BE25",border:"none"}}
////          // #96BE25,#BE4D25
////          // onClick={handleSubmit}
////        >
////          Coordinate
////        </button>
////      ),
//    },
//  ]);
//
//  const [UpcomingProjectsHeadings, setUpComingProjectsTableHead] = useState([
//    { accessor: "project_id", Header: "Project ID" },
//    { accessor: "project_name", Header: "Project Name" },
//    { accessor: "description", Header: "Description" },
//    { accessor: "coordinator", Header: "Coordinator" },
//    { accessor: "startdate", Header: "Start Date" },
//    // { id: "no_of_members", label: "Coordinate Events" },
//    // { id: "location", label: "Location" },
////    { accessor: "action", Header: "Action" },
//
//  ]);
//
//useEffect(() => {
//    checkValidate();
//}, []);
//
//const checkValidate = async () => {
//    const y = localStorage.getItem("USER_KEY");
//    if (!y) {
//        window.location.href = "/";
//    }
//};


return (
    <>
        <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
            

            <div className="row gutters mt-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="card h-100" id="contentcard">
                        <div className="card-body ">
                            <div className="row gutters "></div>
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
                                  { field: "startDate", title: "STARTS ON" },
                                  { field: "endDate", title: "ENDS ON" },
                                  { field: "noOfVolunteers", title: "NO OF MEMBERS" },
                                  { field: "place", title: "LOCATION" },
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
                                          Details
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
);







  // return (
  //   <>
  //   <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
  //     <div className="row gutters mt-10">
  //       <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
  //         <div className="card h-100" id="contentcard">
  //           <div className="card-body">
  //             <div className="row gutters">Previous Events</div>
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
