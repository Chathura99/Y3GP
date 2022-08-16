
import React, { useState, useEffect,useMemo } from "react";
import EnhancedTable from "../../../utilities/Table/ForumTable";
import "./Forum.css"
import NewTable from "../../../utilities/Table/NewTable.js";
import AddForumTopic from "./AddForumTopic";
import ViewForum from "./ViewForum";
import { Link } from "react-router-dom";



export default function Poll() {
  

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
      topic: "Blood Donation",
      last_update: "2022 07 12",
      replies: "05",
            
            
            
      read: (
              <button
                type="button"
                id="submit"
                name="submit"
                className="btn p-1"
                data-toggle="modal"
                // data-target="#ViewForum"
                style={{backgroundColor:"#2596BE",border:"none",marginTop: 10,marginBottom: 10}}
                // #96BE25,#BE4D25
                // onClick={handleSubmit}
              >
                <Link to="/adminviewforum" className="sign-up">
                    <b>Read</b>
                  </Link>
              </button>
            ),
            
          },
    
  ]);

const data = useMemo(
() => ProjectsData  )

  const ProjectsHeadings=useMemo(
    () => [
     
      { accessor: "topic", Header: "TOPIC" },
      { accessor: "last_update", Header: "LAST UPDATE" },
      { accessor: "replies", Header: "REPLIES" },
      { accessor: "read", Header: "ACTION" },
      
      
    ],
    []
  )
// poll data

  return (
    <>
    <div  id="maindiv">
    
            <div id="rightside">
            <div className="container-fluid calculated-bodywidth" style={{}} id="blaaa">
                

                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                                <h5>Poll</h5>
                                
                                  <button id='forumbtn' data-toggle="modal" data-target="#AddForumTopic">Add New Poll </button>
                                  <AddForumTopic/>
                                  
                                
                                  <br></br><NewTable columns={ProjectsHeadings} data={ProjectsData}/>
                                  
                                
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
          </>
  );
}
