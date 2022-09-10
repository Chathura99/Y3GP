import React, { useEffect,useState } from 'react';
import NewTable from '../../../utilities/Table/NewTable';
import CoordinateEventForm from './CoordinateEventForm';
import "./Projects.css"
import ProposeProjectForm from './ProposeProjectForm';
import EditProject from '../../admin/Project/EditProject';
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
// services
import { getOngoingProjects } from "../../../services/projectServices/projectService";
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

   
  


    useEffect(() => {
        checkValidate();
        getOngoingProjectDetails();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const getOngoingProjectDetails = async () => {
      const res = await getOngoingProjects();
      // console.log(res.data);
      setOnGoingProjectData(res.data);
    };

    const [onGoingProjectData, setOnGoingProjectData] = useState([]);
    const [selected, setSelected] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});
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
                                
                                  <br></br>
                                  <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="Ongoing Projects"
                    columns={[
                      // { field: "projectId", title: "PROJECT ID" },
                      {
                        field: "name",
                        title: "PROJECT NAME",
                        minWidth: "150px",
                      },
                      {
                        field: "description",
                        title: "DESCRIPTION",
                        minWidth: "200px",
                      },
                      { field: "firstName", title: "COORDINATOR" },
                      
                      {
                        field: "startDate",
                        title: "STARTED ON",
                        minWidth: "150px",
                      },
                      
                    ]}
                    data={onGoingProjectData}
                    actions={[
                      {
                        
                        icon: () => {
                          return (
                            <button
                              type="button"
                              class="btn"
                              data-toggle="modal"
                              data-target="#CoordinateEventForm"
                              style={{
                                backgroundColor: "#2596BE",
                                width: "6rem",
                                border: "none",
                                marginRight: 0,
                              }}
                            >
                              Coordinate
                            </button>
                          );
                        },
                        onClick: (event, rowData) => {
                          setSelectedProject(rowData);
                          setSelected(true);
                        },
                        tooltip: "Coordinate Event",
                      },

                      {
                        
                        icon: () => {
                          return (
                            <button
                              type="button"
                              class="btn"
                              style={{
                                backgroundColor: "#96BE25",
                                width: "6rem",
                                border: "none",
                                marginRight: 0,
                              }}
                            >
                              Details
                            </button>
                          );
                        },
                        // onClick: (event, rowData) => {
                        //   setSelectedProject(rowData);
                        //   setSelected(true);
                        // },
                        tooltip: "Project Details",
                      },
                      
                    ]}

                    

                    

                    
                  />
                  {/* {selected && (
          // <CoordinateEventForm setSelected={setSelected} data={coordinateEventToProject}/>
        )} */}
                                <ProposeProjectForm />
                               
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
