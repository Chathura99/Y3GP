import React, { useState, useEffect,useMemo } from "react";
import EnhancedTable from "../../../utilities/Table/ForumTable";
import "../ForumPoll/Forum.css"
import NewTable from "../../../utilities/Table/NewTable.js";
import CoordinateEventForm from '../../volunteer/Projects/CoordinateEventForm.js';
import ProposeProjectForm from '../../volunteer/Projects/ProposeProjectForm';


export default function Forum() {
  

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
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
                Project Details
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
                Project Details
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

  return (
    <>
{/* <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard" style={{width:"37rem"}}>
              <div className="card-body" >
                
                  <h3 className="ml-3"><center>Forum</center></h3>
                  <button id='forumbtn'>Add a new forum topic</button>
                  <EnhancedTable />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 " style={{paddingLeft:"13rem"}}>
            <div className="card h-100" id="contentcard" style={{width:"37rem"}}>
              <div className="card-body">
                
                  <h3 className="ml-3"><center>Poll</center></h3>
              
                <EnhancedTable />
              </div>
            </div>
          </div>
        </div>

        
      </div> */}
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
                

                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                                <h5>Forum</h5>
                                
                                  <button id='proposenewbtn' data-toggle="modal" data-target="#ProposeProjectForm">Add New Forum Topic </button>
                                <h5> </h5>
                                
                                  <br></br><NewTable columns={ProjectsHeadings} data={ProjectsData}/>
                                {/* <ProposeProjectForm /> */}
                                {/* <CoordinateEventForm /> */}
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </>
  );
}
