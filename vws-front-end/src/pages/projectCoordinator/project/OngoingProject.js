import React, { useEffect,useState } from 'react';
import NewTable from '../../../utilities/Table/NewTable';
import CoordinateEventForm from './Coordinate';
import "./Project.css"
import { useMemo } from 'react';

export default function PcOngoingProject() {
  
  const [upcomingProjectsData, setUpComingProjectsData] = useState([
    {
      project_id: "E001",
      project_name: "Ganitha Saviya",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      coordinator: "Ravindu",
      startdate: "2022 09 14",
      // no_of_members: "13",
      // location: "Nikawaratiya",

//        coordinate: (
//                <button
//                  type="button"
//                  id="submit"
//                  name="submit"
//                  className="btn p-1"
//                  data-toggle="modal"
//                  data-target="#Coordinate"
//                  style={{backgroundColor:"#2596BE",border:"none",marginTop: 10,marginBottom: 10}}
//                  // #96BE25,#BE4D25
//                  // onClick={handleSubmit}
//                >
//                  Coordinate
//                </button>
//              ),

      action: (
        <button
          type="button"
          id="submit"
          name="submit"
          className="btn btn-primary p-1"
          data-toggle="modal"
          data-target="#CoordinateEventForm"
          style={{backgroundColor:"#96BE25",border:"none", marginTop: 10,marginBottom: 10}}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          Coordinate
        </button>
      ),
    },
    {
      project_id: "E002",
      project_name: "Widyawa Mulasita",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      coordinator: "Tharindu",
      startdate: "2022 09 14",
      // no_of_members: "8",
      // location: "Horana",


//coordinate: (
//                <button
//                  type="button"
//                  id="submit"
//                  name="submit"
//                  data-toggle="modal"
//                  data-target="#Coordinate"
//                  className="btn p-1"
//                  style={{backgroundColor:"#2596BE",border:"none",marginTop: 10,marginBottom: 10}}
//                  // #96BE25-green,#BE4D25-red
//                  // onClick={handleSubmit}
//                >
//                  Coordinate
//                </button>
//              ),

      action: (
        <button
          type="button"
          id="submit"
          name="submit"
          className="btn btn-primary p-1"
          data-toggle="modal"
          data-target="#CoordinateEventForm"
          style={{backgroundColor:"#96BE25",border:"none"}}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          Coordinate
        </button>
      ),
    },
  ]);

//  const [UpcomingProjectsHeadings, setUpComingProjectsTableHead] = useState([

    const data = useMemo(
      () => upcomingProjectsData  )

        const UpcomingProjectsHeadings=useMemo(
          () => [

    { accessor: "project_id", Header: "Project ID" },
    { accessor: "project_name", Header: "Project Name" },
    { accessor: "description", Header: "Description" },
    { accessor: "coordinator", Header: "Coordinator" },
    { accessor: "startdate", Header: "Start Date" },
    // { id: "no_of_members", label: "Coordinate Events" },
    // { id: "location", label: "Location" },
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
                            <h5>Ongoing Projects</h5>
                            <br></br><NewTable columns={UpcomingProjectsHeadings} data={upcomingProjectsData}/>
                            <CoordinateEventForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   return (
//     <>
//     <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
//       <div className="row gutters mt-10">
//         <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
//           <div className="card h-100" id="contentcard">
//             <div className="card-body">
//               <div className="row gutters">On Going Project</div>
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
// }
