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
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <h4 className="ml-3">Announcements</h4>
                {/* <div className="row gutters "> */}
                  <div class="card text-center">
                    <div class="card-header">
                      <ul class="nav nav-pills card-header-pills">
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            User
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Link
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link disabled"
                            href="#"
                            tabindex="-1"
                            aria-disabled="true"
                          >
                            Disabled
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="card-body">
                      <h6 class="card-title" style={{color:"black"}}>Title</h6>
                      <p class="card-text">
                        Content in here . . .
                      </p>
                      <a href="#" class="btn btn-secondary">
                        Go
                      </a>
                    </div>
                  </div>
                {/* </div> */}
                <div className="row gutters">announcement 2</div>
              </div>
            </div>
          </div>

          {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters ">
                  <h4 className="ml-3">Publish New Announcement</h4>
                </div>
                <div className="row gutters ">Add announcement form</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
