import React, { useState, useEffect } from "react";

export default function ViewAnnouncement() {
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
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <h4 className="ml-3">Announcements</h4>
                <div className="row gutters ">announcement 1</div>
                <div className="row gutters">announcement 2</div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters ">
                  <h4 className="ml-3">Publish New Announcement</h4>
                </div>
                <div className="row gutters ">Add announcement form</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
