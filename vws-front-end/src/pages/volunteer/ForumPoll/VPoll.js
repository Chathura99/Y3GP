import React, { useState, useEffect,useMemo } from "react";
// import EnhancedTable from "../../../utilities/Table/ForumTable";
import "../../admin/ForumPoll/Forum.css";
import NewTable from "../../../utilities/Table/NewTable.js";
// import AddForumTopic from "./AddForumTopic";
import { Link } from "react-router-dom";
// import AddNewPoll from "./AddNewPoll";
import {  getPollInfo } from "../../../services/pollServices/pollService";
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import { addReactToPoll } from './../../../services/pollServices/pollService';

export default function VPoll() {
  
  const [pollVote, setPollVote] = useState({
    id: "",
    option1: "",
    option2: "",
    
  });

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.name + "-" + e.target.value);
    setPollVote((pollVote) => ({
      ...pollVote,
      [e.target.name]: e.target.value,
    }));
  };

  const confirm = (e) => {
    e.preventDefault();
    setMessage("Vote Added !");
    setPopUp("confirm");
  };

  const handleSubmit = (e) => {
    // evt.preventDefault();
    console.log("reached!")
    addReactToPoll(pollVote)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setMessage(response.data);
          setPopUp("success");
        }
      })
      
  };
  const closePopUp = () => {
    setPopUp("");
  };
  const [popup, setPopUp] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    checkValidate();
    getPollDetails();
    getReplyToPollDetails();


  }, []);
  const getPollDetails = async () => {
    const res = await getPollInfo();
    console.log(res.data);
    setPollData(res.data);
  };

  const getReplyToPollDetails = async () => {
    const res = await addReactToPoll();
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
    <div id="rightside2">
            <div className="container-fluid calculated-bodywidth" style={{paddingLeft:25}} id="blaaa">
                

                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                                <h5>{PollData.title}</h5>
                                    
                            
                                <div id="pollquestion">
                                        <h6>
                                        Which project is more recently used
                                        </h6>
                                        <form onSubmit={confirm}>
                <div className="row gutters " id="pollradio" >
                  

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group ">
                      
                      <input
                        type="radio"
                        name="option1"
                        id="option1"
                        // placeholder="Ravindu Medagama"
                        // value={pollVote.option1}
                        
                        // onChange={handleChange}
                      />
                      <label for="option1"  style={{ marginLeft:5 , fontSize: 12 }}>Lohitha uthpaadana</label> <br/>
                      <input
                        type="radio"
                        
                        name="option2"
                        id="option2"
                        // placeholder="Ravindu Medagama"
                        // value={pollVote.option2}
                        // name="firstName"
                        // onChange={handleChange}
                      />
                      <label for="option2"  style={{ marginLeft:5 , fontSize: 12 }}> Ganitha Saviya</label>
                    </div>
                  </div>

                </div>

                <div className="row gutters" >
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" >
                    <div className="text-center mt-3 " >
                      <div class="modal-footer justify-content-center " >
                        
                        <button
                          type="submit"
                          id="submit"
                      
                          name="submit"
                          className="btn btn-primary"
                          // onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

                                    </div>
                                  
                                
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    
            <div id="rightside">
            <div className="container-fluid calculated-bodywidth" style={{paddingLeft:25}} id="blaaa">
                

                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                                <h5>Poll</h5>
                                    
                            
                                
                                  {/* <button id='forumbtn' data-toggle="modal" data-target="#AddNewPoll">Add New Poll </button>
                                  <AddNewPoll/> */}
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
            {popup === "success" && (
        <SuccessPopUp message={message} closePopUp={closePopUp} />
      )}
      {popup === "failed" && (
        <FailedPopUp message={message} closePopUp={closePopUp} />
      )}
      {popup === "confirm" && (
        <ConfirmPopUp
          message={message}
          closePopUp={closePopUp}
          handleSubmit={handleSubmit}
        />
      )}
            </div>
          </>
  );
}
