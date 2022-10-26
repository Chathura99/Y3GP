import React, { useState,useEffect } from "react";
//import "../../volunteer/home/homepage.css";
import { useMemo } from 'react';
import "./DiscussionTopic.css" ;
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
import { getReplyToForum } from "../../../services/forumServices/forumService";

export default function DiscussionTopic(props) {

  useEffect(() => {
    checkValidate();
    getAllReplies();
}, []);

const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
        window.location.href = "/";
    }
};

const getAllReplies = async () => {
  const res = await getReplyToForum();
  console.log(res.data);
  setSeeReplyData(res.data);
};
  
const [seeReplyData, setSeeReplyData] = useState([]);
const [selected, setSelected] = useState(false);
  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        

        <div className="row gutters mt-3" id="contentcard02">
          {/* <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12" id="contentcard01" > */}
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                
                <div className="row gutters ">
                  <h5>Forum- Blood Donations</h5>
                  <div className="card" id="cardtopic">
                  
                  <div className="card-body" id="topicbody">
                    <p className="card-text" style={{ marginTop: "0" }}><b>
                    This dicussion topic is to finalize the location for blood donation. Loaction shouldn't be to far from the colombo. Because we have to bring the equipments from the blood bank. Thank you.
                      
                      </b></p>   
                      {/* Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic */}
                  </div>
                </div>
                  <div className="card">
                  <div className="card-header" id="head">
                    
                    <ul className="nav ">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <img
                            id="profielimg"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                          ></img>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        id="details"
                        style={{ marginTop: "8px" }}
                      >
                        <a className="nav-link" style={{color:"black"}}><b>K.S.Ranathunge</b></a>
                        <a className="nav-link">Volunteer 2021-10-21 12:12</a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body" id="body">
                    <h6 className="card-title" style={{ color: "black" }}>
                
                    </h6>
                    <p className="card-text" style={{ marginTop: "-25px" }}>
  
                      Narahenpita temple will be the best option. Because it will near to the blood bank and will be easy to trasport medical equipments.
                    </p> 
                    {/* Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic */}
                    <p className="card-text"style={{ marginTop: "-10px" }}>
                      <div className="pdfFiles">
                       
                        
                          
                        
                        {/* <h6 style={{textAlign: "right",fontSize: 15,color:"#2596BE"}}><a href="../../uploads/announcement/variable">Reply</a></h6> */}
                      </div>
                    </p>
                    
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="head">
                    <ul className="nav ">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <img
                            id="profielimg"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                          ></img>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        id="details"
                        style={{ marginTop: "8px" }}
                      >
                        <a className="nav-link" style={{color:"black"}}><b>R.R. Rathnayake</b></a>
                        <a className="nav-link">ADMIN 2021-10-21 12:12</a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body" id="body">
                    <h6 className="card-title" style={{ color: "black" }}>
                
                    </h6>
                    <p className="card-text" style={{ marginTop: "-25px" }}>
                      If we get the weekend date for the blood donation, Anula college also good for the blood donation. Easy to transport quipments.
                      And can be gaththered more people for the donation easily.
                    </p>
                    {/* <p className="card-text" style={{ marginTop: "-25px" }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic
                    </p> */}
                    <p className="card-text" style={{ marginTop: "-10px" }}>
                      <div className="pdfFiles">
                        
                      <h6 style={{textAlign: "right",fontSize: 15,color:"#2596BE"}}><a href="../../uploads/announcement/variable">Reply</a></h6>
                      </div>
                    </p>
                    
                  </div>
                </div>
                  
                  
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
