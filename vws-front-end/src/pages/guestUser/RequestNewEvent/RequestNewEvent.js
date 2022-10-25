import React, { useState, useEffect } from "react";
import "./requestnewevent.css";
import { eventRequest } from "../../../services/guestUserServices/eventRequestService";

import { Link } from "react-router-dom";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";

export default function RequestNewEvent() {
  const [requestData, setRequestData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      district: "",
      profession: "",
      nic: "",
      other: "",
      noOfVolunteers: "",
      startDate: "",
      status: 0,
      projectId:0
    },
    []
  );

  const handleSubmit = (evt) => {
    console.log(requestData);
    evt.preventDefault();
    eventRequest(requestData).then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        setPopUp("success")
        setMessage("Event request sent!")
      } else {
        console.log("Something went wrong");
      }
    });
  };

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.name + "-" + e.target.value);
    setRequestData((requestData) => ({
      ...requestData,
      [e.target.name]: e.target.value,
    }));
  };

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
      setMessage("Request new event!");
      setPopUp("confirm");
    };

  return (
    <div className="container-fluid calculated-bodywidth">
      <div className="row gutters mt-4">
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
          <div className="card h-100" id="contentcard">
            <div className="card-body">
              <form onSubmit={confirm}>
                <div className="row gutters ">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h3 className="mb-4">Request New Event</h3>
                    <h6 className="subTopic">Requester's Details:</h6>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group ">
                      <label for="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Enter Your First Name"
                        name="firstName"
                        value={requestData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="lastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Enter Your Last Name"
                        name="lastName"
                        value={requestData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={requestData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="phoneNumber">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        placeholder="Enter Your Phone Number"
                        name="phoneNumber"
                        value={requestData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="district">District</label>
                      <input
                        type="text"
                        className="form-control"
                        id="district"
                        placeholder="Enter Your District"
                        name="district"
                        value={requestData.district}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter Your Address"
                        name="address"
                        value={requestData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="profession">Profession</label>
                      <input
                        type="text"
                        className="form-control"
                        id="profession"
                        placeholder="Enter Your Profession"
                        name="profession"
                        value={requestData.profession}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="nic">NIC/Passport</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nic"
                        placeholder="Enter Your NIC/Passport Number"
                        name="nic"
                        value={requestData.nic}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="subTopic">Event Details:</h6>
                  </div>
                <div className="row gutters">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="projectId" id="formLabel">
                        Event{" "}
                      </label>

                      <select
                        type="text"
                        className="form-control"
                        id="projectId"
                        name="projectId"
                        // value={
                        //   selectedProject.firstName
                        // }
                        onChange={handleChange}
                      >
                        <option value="1">Ganitha Saviya</option>
                        <option value="2">Re-Green Earth </option>
                        <option value="3">Lohithuppada</option>
                        <option value="4">Pahe Hapan</option>

                        <option value="5">Adurata Eliyak</option>
                        <option value="6">Sisu Mediya</option>
                        <option value="7">Ganitha Saviya</option>
                      </select>
                    </div>
                  </div>

                 
{/* 
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="projectId">Event</label>
                      <input
                        type="text"
                        className="form-control"
                        id="projectId"
                        placeholder="Enter Event"
                        name="projectId"
                        value={requestData.projectId}
                        onChange={handleChange}
                      />
                    </div>
                  </div> */}

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="date">Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        placeholder="Enter Date"
                        name="startDate"
                        value={requestData.startDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="place">Place</label>
                      <input
                        type="text"
                        className="form-control"
                        id="place"
                        placeholder="Enter Place"
                        name="place"
                        value={requestData.place}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="noOfVolunteers">Volunteer Count</label>
                      <input
                        type="text"
                        className="form-control"
                        id="noOfVolunteers"
                        placeholder="Enter Number of Volunteers Needed"
                        name="noOfVolunteers"
                        value={requestData.noOfVolunteers}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <label for="other">Other information?</label>
                      <input
                        type="text"
                        className="form-control"
                        id="other"
                        placeholder="Type here"
                        name="other"
                        value={requestData.other}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-center mt-3 ">
                      <Link to="/login">
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          class="btn btn-primary btn-sm"
                        >
                          Cancel
                        </button>
                      </Link>

                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        class="btn btn-secondary btn-sm"
                        onClick={confirm}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
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
  );
}
