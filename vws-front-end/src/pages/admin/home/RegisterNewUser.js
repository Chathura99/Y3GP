import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import Loading from "../../../utilities/Loading/Loading";
import { signUpApprove } from "../../../services/adminServices/JoinRequestService";

export default function RegisterNewUser(props) {
  const [requestData, setRequestData] = useState(props.data);
  // open success/error pop up modals and set display message
  const [popup, setPopUp] = useState("");
  const [message, setMessage] = useState("");
  // close pop up modal
  const closePopUp = () => {
    setPopUp("");
    window.location.href="/adminhome"
  };

  // open confirmation pop up modal
  const confirm = (e) => {
    e.preventDefault();
    setMessage("Register "+ requestData.firstName + " with id " + requestData.id);
    setPopUp("confirm");
  };

  const handleSubmit = (evt) => {
    // evt.preventDefault();
    signUpApprove(requestData)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setMessage(response.data);
          setPopUp("success");
        }
      })
      .catch((err) => {
        if (err && err.response) {
          console.log(err.message);
          setMessage("Duplicate Entry!");
          setPopUp("failed");
        }
      });
  };
  console.log(requestData)

  return (
    <div>
      <div
        class="modal fade show"
        id="registerUser"
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
                Register New User
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                // for close popup -> set variable to {}
                onClick={() => props.setSelectedData({})}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form onSubmit={confirm}>
                <div className="row gutters ">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <small>
                      Name : {requestData.firstName} {requestData.lastName}
                    </small>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <small>Email : {requestData.email}</small>
                    <br />
                    <small>Date : {requestData.requestedDate}</small>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group ">
                      <label for="firstName" id="formLabel">
                        First Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={requestData.firstName}
                        //   onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="lastName" id="formLabel">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={requestData.lastName}
                        //   onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="email" id="formLabel">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={requestData.email}
                        //   onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="phoneNumber" id="formLabel">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={requestData.phoneNumber}
                        //   onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="district" id="formLabel">
                        District
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="district"
                        name="district"
                        value={requestData.district}
                        //   onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="address" id="formLabel">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={requestData.address}
                        //   onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="universityCollege" id="formLabel">
                        University/School
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="universityCollege"
                        name="universityCollege"
                        value={requestData.universityCollege}
                        //   onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="nic" id="formLabel">
                        NIC/Passport
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nic"
                        name="nic"
                        value={requestData.nic}
                        //   onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>
{/* 
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="formFile" class="form-label" id="formLabel">
                        Files
                      </label>
                      <input
                        class="form-control browse"
                        type="file"
                        id="formFile"
                        // name="copy"
                        // value={requestData.copy}
                        //   onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div> */}
                </div>

                <div className="row gutters">
                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="info" id="formLabel">
                        Potentials
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="info"
                        name="info"
                        value={requestData.protential}
                        //   onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div> */}

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="other" id="formLabel">
                        Other comments
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="other"
                        name="other"
                        value={requestData.other}
                        //   onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div> */}
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <label for="info" id="formLabel">
                        Qualifications :
                      </label>
                      <p>{requestData.qa1},{requestData.qa2},{requestData.qa3},{requestData.qa4},{requestData.qa5}</p>
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
                            class="btn btn-secondary btn-sm m-2"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => props.setSelectedData({})}
                          >
                            Cancel
                          </button>

                        <button
                          type="submit"
                          name="submit"
                          class="btn btn-primary btn-sm"
                          //   {...(Object.keys(errors).length === true)}
                          //   style={{backgroundColor:"white"}}

                          title="Please fill the form correctly!"

                          // onClick=
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
              </form>
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
