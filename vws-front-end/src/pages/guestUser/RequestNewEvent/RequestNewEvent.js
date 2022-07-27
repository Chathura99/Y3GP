import React, { useState } from "react";
import "./requestnewevent.css";
import { joinRequest } from "../../../services/guestUserServices/signUpService";
import { Link } from "react-router-dom";

export default function RequestNewEvent() {
  const [requestData, setRequestData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      universityCollege: "",
      district: "",
      date: "",
      status: 0,
      nic: "",
      info: "",
      other: ""
    },
    []
  );

  const handleSubmit = (evt) => {
    console.log(requestData);
    evt.preventDefault();
    joinRequest(requestData).then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.log("Something went wrong");
      }
    });
  };

  const handleChange = (e) => {
    e.persist();
    // console.log(e.target.name + "-" + e.target.value);
    setRequestData((requestData) => ({
      ...requestData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container-fluid calculated-bodywidth">
      <div className="row gutters mt-4">
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
          <div className="card h-100" id="contentcard">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
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

                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="subTopic">Event Details:</h6>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="event">Event</label>
                      <input
                        type="text"
                        className="form-control"
                        id="event"
                        placeholder="Enter Event"
                        name="event"
                        value={requestData.event}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="date">Date</label>
                      <input
                        type="text"
                        className="form-control"
                        id="date"
                        placeholder="Enter Date"
                        name="date"
                        value={requestData.date}
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
                      <label for="volunteers">Volunteer Count</label>
                      <input
                        type="text"
                        className="form-control"
                        id="volunteers"
                        placeholder="Enter Number of Volunteers Needed"
                        name="volunteers"
                        value={requestData.volunteers}
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
                        onClick={handleSubmit}
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
    </div>
  );
}
