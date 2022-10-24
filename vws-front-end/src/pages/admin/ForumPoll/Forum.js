import React, { useState, useEffect,useMemo } from "react";
import EnhancedTable from "../../../utilities/Table/ForumTable";
import "./Forum.css"
import NewTable from "../../../utilities/Table/NewTable.js";
import AddForumTopic from "./AddForumTopic";
import { Link } from "react-router-dom";
import AddNewPoll from "./AddNewPoll";
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
import { getForumInfo } from "../../../services/forumServices/forumService";
import DiscussionTopic from "./DiscussionTopic";
import ViewForum from "./ViewForum";

export default function Forum() {
  

  useEffect(() => {
    checkValidate();
    getForumDetails();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
  const getForumDetails = async () => {
    const res = await getForumInfo();
    console.log(res.data);
    setForumData(res.data);
  };

  const [ForumData, setForumData] = useState([]);
  const [viewForumData, setViewForumData] = useState({});

  const [selected, setSelected] = useState(false);
  const [selectedForum, setSelectedForum] = useState({});
  // const [ProjectsData, setProjectsData] = useState([
  //   {
  //     topic: "Blood Donation",
  //     last_update: "2022 07 12",
  //     replies: "05",
            
            
            
  //     read: (
  //       <Link to="/adminviewforum" className="sign-up">
  //             <button
  //               type="button"
  //               id="submit"
  //               name="submit"
  //               className="btn p-1"
  //               data-toggle="modal"
  //               data-target="#CoordinateEventForm"
  //               style={{backgroundColor:"#2596BE",border:"none",marginTop: 10,marginBottom: 10}}
  //               // #96BE25,#BE4D25
  //               // onClick={handleSubmit}
  //             >
                
  //                   <b>Read</b>
                  
  //             </button>
  //             </Link>
  //           ),
            
  //         },
  //   //       {
  //   //         project_name: "Re-green Earth",
  //   //         description: "Re-green Earth is a ...",
  //   //         idea_by: "Sadaru Avishka",
  //   //         date: "2022 09 02",
            
            
  //   //         read: (
  //   //           <button
  //   //             type="button"
  //   //             id="submit"
  //   //             name="submit"
  //   //             data-toggle="modal"
  //   //             data-target="#CoordinateEventForm"
  //   //             className="btn p-1"
  //   //             style={{backgroundColor:"#2596BE",border:"none",marginTop: 10,marginBottom: 10}}
  //   //             // #96BE25-green,#BE4D25-red
  //   //             // onClick={handleSubmit}
  //   //           >
  //   //             Read
  //   //           </button>
  //   //         ),
            
  //   // }
  // ]);

// const data = useMemo(
// () => ProjectsData  )

//   const ProjectsHeadings=useMemo(
//     () => [
     
//       { accessor: "topic", Header: "TOPIC" },
//       { accessor: "last_update", Header: "LAST UPDATE" },
//       { accessor: "replies", Header: "REPLIES" },
//       { accessor: "read", Header: "ACTION" },
      
      
//     ],
//     []
//   )
// poll data

  return (
    <>
    <div  id="maindiv">
    <div id="leftside">
      <div className="container-fluid calculated-bodywidth"  id="blaa" style={{paddingLeft:25}}>
                

                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body " >
                                <h5>Forum</h5>
                                
                                  <button id='forumbtn' data-toggle="modal" data-target="#AddForumTopic" >Add New Forum Topic </button>
                                  <AddForumTopic/>
                                
                                  <br></br><MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="All Forums"
                    columns={[
                      {
                        field: "title",
                        title: "Forum Topic",
                        
                      },
                      {
                        field: "name",
                        title: "Created By",
                      },
                      { field: "startDate", title: "Started Date", minWidth: "150px" },
                      
                      {
                        field: "replies",
                        title: "Replies",
                        
                      },
                      
                      
                    ]}
                    data={ForumData}
                    actions={[
                      {
                        
                        icon: () => {
                          return (
                            <button
                              type="button"
                              class="btn"
                              data-toggle="modal"
                              // data-target="#CoordinateEventForm"
                              style={{
                                backgroundColor: "#2596BE",
                                width: "6rem",
                                border: "none",
                                marginRight: 0,
                              }}
                            >
                              View
                            </button>
                          );
                        },
                        onClick: (event, rowData) => {
                          setForumData(rowData);
                          setSelected(true);
                          window.location.href = "/adminviewforum";
                          console.log("selected!");
                        },
                        // tooltip: "View Location",
                      },

                      
                      
                    ]}

                    

                    

                    
                  />
                                
                                 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div> 
            {selected && <DiscussionTopic setSelected={setSelected} viewForumData={viewForumData}/>}
            {/* {selected && <ViewForum setSelected={setSelected} data={ForumData}/>} */}

            </div>
          </>
  );
}
