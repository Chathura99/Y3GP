import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// services
import { getVolunteer } from "../../../services/projectServices/projectService";
import { editProject } from "../../../services/projectServices/projectService";
import { updateCoordinatedEventStatus } from "../../../services/eventServices/eventService";
import { updateCoordinatedEventStatusReject } from "../../../services/eventServices/eventService";

// popups
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import Loading from "../../../utilities/Loading/Loading";

// function Starts
export default function EditProject(props) {
  useEffect(() => {
    getVolunteerData();
  }, []);

  // open success/error pop up modals and set display message
  const [popup, setPopUp] = useState("");
  const [message, setMessage] = useState("");
  // close pop up modal
  const closePopUp = () => {
    setPopUp("");
    window.location.href="/pchome"
  };
  // open confirmation pop up modal
  const confirm = (e) => {
    e.preventDefault();
    setMessage("Edit project details");
    setPopUp("confirm");
  };

const [selectedEventId, setSelectedEventId] = useState("");
  const handleSubmit = (e) => {
    // evt.preventDefault();
    console.log("reached!");
    updateCoordinatedEventStatus(selectedEventId).then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        setMessage("edit success");
        setPopUp("success");
      }
    });
  };

    const handleSubmit1 = (e) => {
      // evt.preventDefault();
      console.log("reached!");
      updateCoordinatedEventStatusReject(selectedEventId).then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setMessage("reject success");
          setPopUp("success");
        }
      });
    };

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.name + "-" + e.target.value);
    setSelectedProject((project) => ({
      ...selectedProject,
      [e.target.name]: e.target.value,
    }));
  };

  const [selectedProject, setSelectedProject] = useState(props.data);

  const [volunteertData, setvolunteertData] = useState([]);

  const getVolunteerData = async () => {
    const res = await getVolunteer();
    console.log(res.data);
    setvolunteertData(res.data);
  };

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
                Event Request
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
                    Name : {selectedProject.firstName}{" "}
                    {selectedProject.lastName}
                  </small>
                  <br></br>
                  <small>Phone : {selectedProject.phoneNumber}</small>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <small>Start Date : {selectedProject.startDate}</small>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group ">
                    <label for="projectname" id="formLabel">
                      Event Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={selectedProject.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="projectCoordinator" id="formLabel">
                      Available Volunteers
                    </label>

                    <select
                      type="text"
                      className="form-control"
                      id="coordinatorId"
                      name="coordinatorId"
                      // value={
                      //   selectedProject.firstName
                      // }
                      onChange={handleChange}
                    >
                      <option>{selectedProject.first_Name}</option>
                      {volunteertData.map((vol, index) => (
                        <option value={vol.volunteerId}>
                          {vol.volunteerId +
                            " :" +
                            vol.firstName +
                            " " +
                            vol.lastName}
                        </option>
                      ))}
                    </select>
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
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="eventPerYear" id="formLabel">
                      Place
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="eventPerYear"
                      name="eventPerYear"
                      value={selectedProject.place}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-center mt-3 ">

                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        style={{
                          width: "6rem",
                          border: "none",
                          marginRight: "10px",
                        }}
                        class="btn btn-secondary btn-sm"
                        title="Approve Request"
                        onClick={() => {
                        setSelectedEventId(selectedProject.eventId)
                        console.log(selectedProject.eventId);
                        setPopUp("confirm");
                        setMessage("Approve Request")
                        }}
                      >
                        Approve
                      </button>


                    <button
                      type="submit"
                      name="submit"
                      class="btn btn-primary btn-sm"
                      title="Reject Request"
                      onClick={()=>{
                      setSelectedEventId(selectedProject.eventId)
                      setPopUp("confirmReject");
                                              setMessage("Reject Request")

                      }}
                    >
                      Reject
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
      {popup === "confirmReject" && (
              <ConfirmPopUp
                message={message}
                closePopUp={closePopUp}
                handleSubmit={handleSubmit1}
              />
            )}
    </div>
  );
}
