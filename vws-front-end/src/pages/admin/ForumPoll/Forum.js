import React, { useState, useEffect,useMemo } from "react";
import EnhancedTable from "../../../utilities/Table/ForumTable";
import "../ForumPoll/Forum.css"


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
  return (
    <>
<div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard" style={{width:"37rem"}}>
              <div className="card-body" >
                
                  <h3 className="ml-3"><center>Forum</center></h3>
                  <button id='forumbtn'>Add a new forum topic</button>
                
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

        
      </div>
          </>
  );
}
