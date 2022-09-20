import React, { useEffect,useState } from 'react';
import "./Projects.css"
import ProposeProjectForm from './ProposeProjectForm';
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
// services
import { getOngoingProjects } from "../../../services/projectServices/projectService";
import CoordinateEventForm from './CoordinateEventForm';
import AddEventProgress from './../../admin/Event/AddEventProgress';


export default function Projects() {


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
    const [projectData, setProjectData] = useState({});
    const [selected, setSelected] = useState(false);
    // const [selectedCoordinateEvent, setSelectedCoordinatedEvent] = useState({});
    return (
        <>
            <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
                

                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                                <h5>Ongoing Projects</h5>
                                
                                  <button id='proposenewbtn' data-toggle="modal" data-target="#addProposedProjects">+ Propose New Project </button>
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
                              className="btn"
                              // data-toggle="modal" data-target="#addCoordinatedEvents"
                              style={{
                                backgroundColor: "#2596BE",
                                width: "6rem",
                                border: "none",
                                marginRight: 0,
                              }}
                            
                              // id='proposenewbtn' 
                              // data-toggle="modal" 
                              // data-target="#addCoordinatedEvents"
                            
                            
                            >
                              Coordinate
                            </button>
                            // <button id='proposenewbtn' data-toggle="modal" data-target="#addProposedProjects">Coordinatt </button>

                          );
                        },
                        onClick: (event, rowData) => {
                          setProjectData(rowData);
                          // console.log(rowData)
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
               
                                <ProposeProjectForm />
                                
           
       
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* <CoordinateEventForm setSelected={setSelected} /> */}
                {selected && <CoordinateEventForm setSelected={setSelected} data={projectData}/>}
            </div>
        </>
    );
}
