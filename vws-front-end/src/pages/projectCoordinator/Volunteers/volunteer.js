import React, { useEffect,useState } from 'react';
import NewTable from '../../../utilities/Table/NewTable';
//import CoordinateEventForm from './Coordinate';
//import "./Project.css"
import { useMemo } from 'react';

export default function PcVolunteers() {

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
          Accepted
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
          style={{backgroundColor:"#BE4D25",border:"none"}}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          Rejected
        </button>
      ),
    },
  ]);

  const [UpcomingEventsHeadings, setUpComingEventsTableHead] = useState([
    { accessor: "event_id", Header: "Event ID" },
    { accessor: "category", Header: "Category" },
    { accessor: "event_coordinator", Header: "Event Coordinator" },
    { accessor: "startdate", Header: "Starts On" },
    { accessor: "enddate", Header: "Ends On" },
    { accessor: "no_of_members", Header: "No. of Members" },
    { accessor: "location", Header: "Location" },
    { accessor: "action", Header: "Action" },

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
                        <h5>Volunteers</h5>
                          <br></br><NewTable columns={UpcomingEventsHeadings} data={upcomingEventsData}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);












//   return (
//     <>
//     <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
//       <div className="row gutters mt-10">
//         <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
//           <div className="card h-100" id="contentcard">
//             <div className="card-body">
//               <div className="row gutters">Volunteers</div>
//               <div className="row gutters ">line 1</div>
//               <div className="row gutters">line 2</div>
//             </div>
//           </div>
//         </div>

//         <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
//           <div className="card h-100" id="contentcard">
//             <div className="card-body">
//               <div className="row gutters ">
//                 <h3 className="ml-3">Title</h3>
//               </div>
//               <div className="row gutters ">
//                 Content
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="row gutters mt-3">
//         <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//           <div className="card h-100" id="contentcard">
//             <div className="card-body ">
//              Content
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
//   )
}
