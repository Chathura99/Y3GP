import React, { useState, useEffect,useMemo } from "react";
import EnhancedTable from "../../../utilities/Table/ForumTable";
import "./forum.css"
import NewTable from "../../../utilities/Table/NewTable.js";
import AddForumTopic from "./AddForum";
import { Link } from "react-router-dom";
// import AddNewPoll from "./AddPoll";
import { getPollInfo } from './../../../services/pollServices/pollService';
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
import AddNewPoll from './../../admin/ForumPoll/AddNewPoll';

export default function PcPoll() {


  useEffect(() => {
    checkValidate();
    getPollDetails();
  }, []);

  const getPollDetails = async () => {
    const res = await getPollInfo();
    console.log(res.data);
    setPollData(res.data);
  };

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const [PollData, setPollData] = useState([]);
  const [viewPollData, setViewPollData] = useState({});

  const [selected, setSelected] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState({});


 


// poll data

  return (
    <>
    <div  id="maindiv">

            <div id="rightside">
            <div className="container-fluid calculated-bodywidth" style={{paddingLeft:25}} id="blaaa">


                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                                <h5>Poll</h5>

                                  <button id='forumbtn' data-toggle="modal" data-target="#AddNewPoll">Add New Poll </button>
                                  <AddNewPoll/>

                                  <br></br><MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="All Polls"
                    columns={[
                      {
                        field: "title",
                        title: "Topic",
                        
                      },
                      {
                        field: "startDate",
                        title: "Started Date",
                      },
                      
                     
                      {
                        field: "endDate",
                        title: "End Date",
                      },
                      
                      
                    ]}
                    data={PollData}
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
                          setViewPollData(rowData);
                          setSelected(true);
                          window.location.href = "/adminviewpoll";
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
            {selected && <AddNewPoll setSelected={setSelected} viewPollData={viewPollData}/>}

            </div>
          </>
  );
}
