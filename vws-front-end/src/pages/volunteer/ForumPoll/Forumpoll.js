import React, { useState, useEffect,useMemo } from "react";
import EnhancedTable from "../../../utilities/Table/ForumTable";
import "../../admin/ForumPoll/Forum.css";
import NewTable from "../../../utilities/Table/NewTable.js";
// import AddForumTopic from "./AddForumTopic";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
// import AddNewPoll from "./AddNewPoll";
import { getForumInfo } from "../../../services/forumServices/forumService";

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
                                
                                  {/* <button id='forumbtn' data-toggle="modal" data-target="#AddForumTopic">Add New Forum Topic </button>
                                  <AddForumTopic/> */}
                                <br></br><MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="All Forums"
                    columns={[
                      {
                        field: "title",
                        title: "Topic",
                        
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
                              Read
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
            
            </div>
          </>
  );
}
