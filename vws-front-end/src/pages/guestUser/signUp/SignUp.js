import React, { useState } from "react";
import "./signup.css";
import { joinRequest } from "../../../services/guestUserServices/signUpService";
import { Link } from "react-router-dom";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import Loading from "../../../utilities/Loading/Loading";

export default function SignUp() {
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
      other: "",
    },
    []
  );
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
    setMessage("Request to join");
    setPopUp("confirm");
  };

  const handleSubmit = (evt) => {
    // evt.preventDefault();
    joinRequest(requestData)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setMessage(response.data);
          if (response.data === "You have already an account!") {
            setPopUp("failed");
          } else if (response.data === "You have already pending request!") {
            setPopUp("failed");
          } else {
            setPopUp("success");
          }
        }
      })
      .catch((err) => {
        if (err && err.response) {
          console.log(err);
          setMessage(err.message);
          setPopUp("failed");
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
    <>
    <Loading change={[popup]}/>
      <div className="container-fluid calculated-bodywidth">
        <div className="row gutters mt-4">
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <form onSubmit={confirm} method="post">
                  <div className="row gutters ">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h3 className="mb-4">Member Registration</h3>
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
                          required
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
                          required
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
                          required
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                          pattern="^(?:7|0|(?:\+94))[0-9]{9,10}$"
                          required
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
                          required
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
                          required
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="universityCollege">University/School</label>
                        <input
                          type="text"
                          className="form-control"
                          id="universityCollege"
                          placeholder="Enter Your University/School"
                          name="universityCollege"
                          value={requestData.universityCollege}
                          onChange={handleChange}
                          required
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
                          required
                          pattern="^([0-9]{9}[x|X|v|V]|[0-9]{12})$"
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="formFile" class="form-label">
                          NIC/Passport Copy
                        </label>
                        <input
                          class="form-control browse"
                          type="file"
                          id="formFile"
                          // name="copy"
                          // value={requestData.copy}
                          // onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <label for="info">
                          What are the potentials you have?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="info"
                          placeholder="Type here"
                          name="info"
                          value={requestData.info}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <label for="other">Other comments?</label>
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
                          type="submit"
                          id="submit"
                          name="submit"
                          class="btn btn-secondary btn-sm"
                          // onClick=
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
    </>
  );
}
