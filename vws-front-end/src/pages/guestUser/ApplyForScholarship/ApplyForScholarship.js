import React, { useState } from "react";
import "./applyforscholarship.css";

import { ApplyScholar } from "../../../services/scholarshipServices/scholarshipServices";
import { Link } from "react-router-dom";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";


export default function ApplyForScholarship() {
  const [requestData, setRequestData] = useState(
    {
      fullName: "",
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
      scholarshipType: "1"
    },
    []
  );

  const handleSubmit = (evt) => {
    console.log(requestData);
    evt.preventDefault();
    ApplyScholar(requestData).then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        setPopUp("success")
        setMessage("Event request sent!")
      } else {
        console.log("Something went wrong");
        setPopUp("failed")
        setMessage("Something went wrong")
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
    setMessage("Send Application for request scholarship!");
    setPopUp("confirm");
  };


  return (
    <div className="container-fluid" id="scholar-cont">
      <div className="row gutters mt-4">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
          <div className="card h-100" id="contentcard-scholar"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
            <div className="card-body" id="scholar-card">
              <form onSubmit={handleSubmit}>
                <div className="row gutters ">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h3 className="mb-4" style={{ color: "white" }}>
                      <center>
                        <b>Apply For Scholarship</b>
                      </center></h3>
                    <h6 className="subTopic" style={{ color: "white" }}>Candidate's Details:</h6>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="fullName" style={{ color: "white" }}>Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Enter Your Full Name"
                        name="fullName"
                        value={requestData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>


                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="nic" style={{ color: "white" }}>NIC/Passport</label>
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


                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="phoneNumber" style={{ color: "white" }}>Phone</label>
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
                      <label for="email" style={{ color: "white" }}>Email</label>
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
                      <label for="district" style={{ color: "white" }}>District</label>
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
                      <label for="address" style={{ color: "white" }}>Address</label>
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
                      <label for="school" style={{ color: "white" }}>School/University:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="universityCollege"
                        placeholder="Enter Your School/University"
                        name="universityCollege"
                        value={requestData.universityCollege}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="nic" style={{ color: "white" }}>Select the scholarship type</label>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="scholarshipType" id="flexRadioDefault1" onChange={handleChange} value={requestData.scholarshipType} />
                        <label class="form-check-label" for="flexRadioDefault1" style={{ color: "white" }}>
                          O/L Passed (A/L Students)
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="scholarshipType" id="flexRadioDefault2" onChange={handleChange} value={requestData.scholarshipType} />
                        <label class="form-check-label" for="flexRadioDefault2" style={{ color: "white" }}>
                          A/L Passed (Undergraduates)
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="formFile1" class="form-label" id="formLbl1" style={{ color: "white" }}>
                        Result sheet
                      </label>
                      <input
                        class="form-control browse"
                        type="file"
                        id="formFile1"
                      // name="copy"
                      // value={requestData.copy}
                      // onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="formFile2" class="form-label" id="formLbl2" style={{ color: "white" }}>
                        Income Certificate
                      </label>
                      <input
                        class="form-control browse"
                        type="file"
                        id="formFile2"
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
                      <label for="other" style={{ color: "white" }}>Other information?</label>
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
