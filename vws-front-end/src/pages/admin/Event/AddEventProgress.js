import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { getProgressData } from "../../../services/eventServices/eventService";

export default function AddEventProgress(props) {
  const [eventProgressData, setEventProgressData] = useState(
    props.eventProgressData
  );
  console.log(eventProgressData);

  const [progress, setProgress] = useState({});

  useEffect(() => {
    checkValidate();
    getProgress();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const getProgress = async () => {
    const res = await getProgressData(eventProgressData.eventId);
    setProgress(res.data);
  };
  console.log(progress);

  return (
    <div>
      <div
        class="modal fade show"
        id="addeventprogress"
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
                Event Progress - Previous Events
              </h5>
              <button
                type="button"
                class="close"
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
                  <small>Coordinator : {eventProgressData.name} </small>
                  <br></br>
                  <small>Phone : {eventProgressData.phoneNumber}</small>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <small>Start Date : {eventProgressData.startDate} </small>
                  <br />
                  <small>End Date : {eventProgressData.endDate} </small>
                  <br />
                  <small>Status : {progress.status}</small>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <label
                        for="formFile"
                        class="form-label"
                        id="formLbl"
                        style={{ color: "gray" }}
                      >
                        Progress
                      </label>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          checked
                        />
                        <label
                          class="form-check-label"
                          id="qualifications"
                          for="flexCheckDefault"
                          style={{ color: "black" }}
                        >
                          criteria 1
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          class="form-check-label"
                          id="qualifications"
                          for="flexCheckChecked"
                          style={{ color: "black" }}
                        >
                          criteria 2
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          class="form-check-label"
                          id="qualifications"
                          for="flexCheckChecked"
                          style={{ color: "black" }}
                        >
                          criteria 3{" "}
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          class="form-check-label"
                          id="qualifications"
                          for="flexCheckChecked"
                          style={{ color: "black" }}
                        >
                          criteria 4{" "}
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          class="form-check-label"
                          id="qualifications"
                          for="flexCheckChecked"
                          style={{ color: "black" }}
                        >
                          criteria 5{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="row">
                    <div class="col">
                      <img
                        style={{ width: "100px", padding: "4px" }}
                        src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/88148396_2835630146473168_7460508207769714688_n.jpg?stp=dst-jpg_p296x100&_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=XkShSIFW0uUAX8n35nx&_nc_oc=AQm6qMttBhOG0Aj_ckyZ9NRpmAXPl6c8DSlzAMOKKEVxRugb1INRXhYdQxaSUvGEePpBxRnyZhN8whSD5AXqqQHE&_nc_ht=scontent.fcmb1-2.fna&oh=00_AT8r2xfWborJZ6hj_dzMQSl0VxCJD-rtoLzw9nepTezZHQ&oe=637C4DD4"
                      />
                      <img
                        style={{ width: "100px", padding: "4px" }}
                        src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/88148396_2835630146473168_7460508207769714688_n.jpg?stp=dst-jpg_p296x100&_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=XkShSIFW0uUAX8n35nx&_nc_oc=AQm6qMttBhOG0Aj_ckyZ9NRpmAXPl6c8DSlzAMOKKEVxRugb1INRXhYdQxaSUvGEePpBxRnyZhN8whSD5AXqqQHE&_nc_ht=scontent.fcmb1-2.fna&oh=00_AT8r2xfWborJZ6hj_dzMQSl0VxCJD-rtoLzw9nepTezZHQ&oe=637C4DD4"
                      />
                    </div>
                    <div class="col">
                      <img
                        style={{ width: "100px", padding: "4px" }}
                        src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/88148396_2835630146473168_7460508207769714688_n.jpg?stp=dst-jpg_p296x100&_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=XkShSIFW0uUAX8n35nx&_nc_oc=AQm6qMttBhOG0Aj_ckyZ9NRpmAXPl6c8DSlzAMOKKEVxRugb1INRXhYdQxaSUvGEePpBxRnyZhN8whSD5AXqqQHE&_nc_ht=scontent.fcmb1-2.fna&oh=00_AT8r2xfWborJZ6hj_dzMQSl0VxCJD-rtoLzw9nepTezZHQ&oe=637C4DD4"
                      />
                      <img
                        style={{ width: "100px", padding: "4px" }}
                        src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/88148396_2835630146473168_7460508207769714688_n.jpg?stp=dst-jpg_p296x100&_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=XkShSIFW0uUAX8n35nx&_nc_oc=AQm6qMttBhOG0Aj_ckyZ9NRpmAXPl6c8DSlzAMOKKEVxRugb1INRXhYdQxaSUvGEePpBxRnyZhN8whSD5AXqqQHE&_nc_ht=scontent.fcmb1-2.fna&oh=00_AT8r2xfWborJZ6hj_dzMQSl0VxCJD-rtoLzw9nepTezZHQ&oe=637C4DD4"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="location" id="formLabel">
                      Location
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                      value={eventProgressData.place}
                      //   onChange={handleChange}
                      disabled
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="numberOfMembers" id="formLabel">
                      Number Of Participations
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="numberOfMembersr"
                      name="numberOfMembers"
                      value={eventProgressData.noOfVolunteers}
                      //   onChange={handleChange}
                      disabled
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="district" id="formLabel">
                      Description :<p>{progress.description}</p>
                    </label>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="district" id="formLabel">
                      Summary :
                    </label>
                    <p>Actual participations : 50%</p>
                    <p>Actual date : 100%</p>
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-center mt-3 ">
                    <Link to="/adminevent">
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

                      // onClick=
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade show"></div>
    </div>
  );
}
