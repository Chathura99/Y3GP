import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// services
import { getVolunteer } from "../../../services/projectServices/projectService";
import { editProject } from "../../../services/projectServices/projectService";
// popups
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import Loading from "../../../utilities/Loading/Loading";
export default function MoreDetails(props) {
  useEffect(() => {
    
  }, []);

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
    setMessage("Edit project details");
    setPopUp("confirm");
  };

  const handleSubmit = (e) => {
    // evt.preventDefault();
    console.log("reached!");
    editProject(scholarship).then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        setMessage("edit success");
        setPopUp("success");
      }
    });
  };

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.name + "-" + e.target.value);
    setScholarship((project) => ({
      ...scholarship,
      [e.target.name]: e.target.value,
    }));
  };

  const [scholarship, setScholarship] = useState(props.data);

  return (
    <div>
      <div
        class="modal fade show"
        id="editproject"
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
                Scholarship Selction
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
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
                    Applicant's name : {scholarship.firstName}{" "}
                    {scholarship.lastName}
                  </small>
                  <br></br>
                  <small>Phone : {scholarship.phoneNumber}</small>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <small>Date : {scholarship.startDate}</small>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group ">
                    <label for="projectname" id="formLabel">
                      CCCCCCCCC
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={scholarship.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>        

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="meetinglink" id="formLabel">
                      Meeting link(Interview)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="meetinglink"
                      name="meetinglink"
                      value={scholarship.meetinglink}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="eventPerYear" id="formLabel">
                      AAAAAAAAAAAA
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="eventPerYear"
                      name="eventPerYear"
                      value={scholarship.eventPerYear}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-center mt-3 ">
                    <Link to="/adminongoingproject">
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
                      title="Please fill the form correctly!"
                      onClick={confirm}
                    >
                      Send
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
