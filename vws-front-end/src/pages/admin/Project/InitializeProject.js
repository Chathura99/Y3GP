import React, { useState } from "react";
import { Link } from "react-router-dom";
// services
import { initializeProject } from "../../../services/projectServices/projectService";
// popups
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import Loading from "../../../utilities/Loading/Loading";

export default function Initializeproject(props) {

  const [selectedProject, setSelectedProject] = useState(props.data);
   console.log(selectedProject)

  
  // open success/error pop up modals and set display message
  const [popup, setPopUp] = useState("");
  const [message, setMessage] = useState("");
  // close pop up modal
  const closePopUp = () => {
    setPopUp("");
  };
  // open confirmation pop up modal
  const confirm = (e) => {
    e.preventDefault();
    setMessage("Initialize new project");
    setPopUp("confirm");
  };

  const handleSubmit = (e) => {
    // evt.preventDefault();
    console.log("reached!")
    initializeProject(selectedProject)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setMessage(response.data);
          setPopUp("success");
        }
      })
      
  };
  return (

    <div>      
      <div
        class="modal fade show"
        id="initializeproject"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Initialize New Project
              </h5>
              <button
                type="button"
                class="close"
                onClick={() => {
                  props.setSelected(false);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="row gutters ">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <small>
                    Proposed Person : {selectedProject.firstName}{" "}
                    {selectedProject.lastName}{" "}
                  </small>
                  <br></br>
                  <small>Phone : {selectedProject.phoneNumber}</small>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <small>Date : {selectedProject.proposedDate}</small>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group ">
                    <label for="projectname" id="formLabel">
                      Project Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectname"
                      name="projectname"
                      value={selectedProject.name}
                        // onChange={handleChange}
                      disabled
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="projectCoordinator" id="formLabel">
                      Proposed Person
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectCoordinator"
                      name="projectCoordinator"
                      value={selectedProject.firstName}
                        // onChange={handleChange}
                      disabled
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="description" id="formLabel">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      value={selectedProject.description}
                      //   onChange={handleChange}
                      disabled
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="eventPerYear" id="formLabel">
                      Events Per Year
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="eventPerYear"
                      name="eventPerYear"
                      value={selectedProject.eventPerYear}
                      //   onChange={handleChange}
                      disabled
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  {/* <div className="form-group">
                    <label for="other" id="formLabel">
                      Other
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="other"
                      name="other"
                      value="There is ..."
                      //   onChange={handleChange}
                      disabled
                    />
                  </div> */}
                  Please consider the forum, poll results before initialize
                </div>
              </div>

              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-center mt-3 ">
                    <Link to="/adminproposedproject">
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        class="btn btn-secondary btn-sm"
                        onClick={() => {
                          props.setSelected(false);
                        }}
                      >
                        Cancel
                      </button>
                    </Link>

                    <button
                      type="submit"
                      name="submit"
                      class="btn btn-primary btn-sm"
                      //   {...(Object.keys(errors).length === true)}
                      //   style={{backgroundColor:"white"}}

                      title="Please fill the form correctly!"

                      onClick={confirm}
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade show"></div>
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
  );
}
