import React, { useEffect,useState } from 'react';
import NewTable from '../../../utilities/Table/NewTable';
import CoordinateEventForm from './CoordinateEventForm';
import "./Projects.css"
import ProposeProjectForm from './ProposeProjectForm';
import { useMemo } from 'react';

export default function Projects() {
    // const [ProjectsData, setProjectsData] = useState([
    //     {
    //       project_name: "Ganitha Saviya",
    //       description: "Ganitha Saviya is a ....",
    //       idea_by: "Ravindu Perera",
    //       date: "2022 09 12",
          
          
    //       action: (
    //         <button
    //           type="button"
    //           id="submit"
    //           name="submit"
    //           className="btn p-1"
    //           data-toggle="modal"
    //           data-target="#CoordinateEventForm"
    //           style={{backgroundColor:"#96BE25",border:"none"}}
    //           // #96BE25,#BE4D25
    //           // onClick={handleSubmit}
    //         >
    //           Coordinate Event
    //         </button>
    //       ),
    //     },
    //     {
    //       project_name: "Re-green Earth",
    //       description: "Re-green Earth is a ...",
    //       idea_by: "Sadaru Avishka",
    //       date: "2022 09 02",
          
          
    //       action: (
    //         <button
    //           type="button"
    //           id="submit"
    //           name="submit"
    //           data-toggle="modal"
    //           data-target="#CoordinateEventForm"
    //           className="btn p-1"
    //           style={{backgroundColor:"#96BE25",border:"none"}}
    //           // #96BE25-green,#BE4D25-red
    //           // onClick={handleSubmit}
    //         >
    //           Coordinate Event
    //         </button>
    //       ),
    //     },
    //   ]);
    
    //   const [ProjectsHeadings, setProjectsTableHead] = useState([
    //     { id: "project_name", label: "PROJECT NAME" },
    //     { id: "description", label: "DESCRIPTION" },
    //     { id: "idea_by", label: "IDEA BY" },
    //     { id: "date", label: "DATE" },
    //     { id: "action", label: "COORDINATE EVENT" },
    
    //   ]);

    const [ProjectsData, setProjectsData] = useState([
      {
        project_name: "Ganitha Saviya",
              description: "Ganitha Saviya is a ....",
              idea_by: "Ravindu Perera",
              date: "2022 09 12",
              
              
              coordinate: (
                <button
                  type="button"
                  id="submit"
                  name="submit"
                  className="btn p-1"
                  data-toggle="modal"
                  data-target="#CoordinateEventForm"
                  style={{backgroundColor:"#2596BE",border:"none",marginTop: 10,marginBottom: 10}}
                  // #96BE25,#BE4D25
                  // onClick={handleSubmit}
                >
                  Coordinate
                </button>
              ),
              action: (
                <button
                  type="button"
                  id="submit"
                  name="submit"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  className="btn p-1"
                  style={{backgroundColor:"#96BE25",border:"none",marginTop: 10,marginBottom: 10}}
                  // #96BE25,#BE4D25
                  // onClick={handleSubmit}
                >
                  Details
                </button>
              ),
            },
            {
              project_name: "Re-green Earth",
              description: "Re-green Earth is a ...",
              idea_by: "Sadaru Avishka",
              date: "2022 09 02",
              
              
              coordinate: (
                <button
                  type="button"
                  id="submit"
                  name="submit"
                  data-toggle="modal"
                  data-target="#CoordinateEventForm"
                  className="btn p-1"
                  style={{backgroundColor:"#2596BE",border:"none",marginTop: 10,marginBottom: 10}}
                  // #96BE25-green,#BE4D25-red
                  // onClick={handleSubmit}
                >
                  Coordinate
                </button>
              ),
              action: (
                <button
                  type="button"
                  id="submit"
                  name="submit"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  className="btn p-1"
                  style={{backgroundColor:"#96BE25",border:"none",marginTop: 10,marginBottom: 10}}
                  // #96BE25,#BE4D25
                  // onClick={handleSubmit}
                >
                  Details
                </button>
              ),
      }
    ]);
  
  const data = useMemo(
  () => ProjectsData  )
  
    const ProjectsHeadings=useMemo(
      () => [
       
        { accessor: "project_name", Header: "PROJECT NAME" },
        { accessor: "description", Header: "DESCRIPTION" },
        { accessor: "idea_by", Header: "IDEA BY" },
        { accessor: "date", Header: "DATE" },
        { accessor: "coordinate", Header: "COORDINATE EVENT" },
        { accessor: "action", Header: "PROJECT DETAILS" },
        
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
                                <h5>Ongoing Projects</h5>
                                
                                  <button id='proposenewbtn' data-toggle="modal" data-target="#ProposeProjectForm">+ Propose New Project </button>
                                <h5> </h5>
                                
                                  <br></br><NewTable columns={ProjectsHeadings} data={ProjectsData}/>
                                <ProposeProjectForm />
                                <CoordinateEventForm />
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
