import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./signup.css";
import { joinRequest } from "../../../services/guestUserServices/signUpService";
import { Link } from "react-router-dom";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import Loading from "../../../utilities/Loading/Loading";

export default function SignUp() {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  // console.log(errors, Object.keys(errors).length === 1);

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
      qa1:"",
    },
    []
  );
  // open success/error pop up modals and set display message
  const [popup, setPopUp] = useState("");
  const [message, setMessage] = useState("");
  // close pop up modal
  const closePopUp = () => {
    setPopUp("");
    window.location.href="/signUp"
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
    console.log(e.target.name + "-" + e.target.value);
    setRequestData((requestData) => ({
      ...requestData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Loading change={[popup]} time={200} />
      <div className="global-containerbackground">
        <div className="container-fluid calculated-bodywidth">
          <div className="row gutters mt-4">
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
              <div
                className="card h-100"
                id="contentcard"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <div className="card-body">
                  <form onSubmit={confirm} method="post">
                    <div className="row gutters ">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3 className="mb-4" style={{ color: "white" }}>
                          <center>
                            <b>Member Registration</b>
                          </center>
                        </h3>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group ">
                          <label for="firstName" id="formLbl">
                            First Name
                          </label>
                          <input
                            {...register("firstName", {
                              required: "First name is required...",
                              minLength: {
                                value: 5,
                                message:
                                  "First Name must be atleast 3 characters long...",
                              },
                            })}
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="Enter Your First Name"
                            name="firstName"
                            value={requestData.firstName}
                            onChange={handleChange}
                            required
                          />
                          <p className="formerror">
                            {errors.firstName?.message}
                          </p>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label for="lastName" id="formLbl">
                            Last Name
                          </label>
                          <input
                            {...register("lastName", {
                              required: "Last name is required...",
                              minLength: {
                                value: 5,
                                message:
                                  "Last Name must be atleast 3 characters long...",
                              },
                            })}
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="Enter Your Last Name"
                            name="lastName"
                            value={requestData.lastName}
                            onChange={handleChange}
                            required

                          />
                          <p className="formerror">
                            {errors.lastName?.message}
                          </p>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label for="email" id="formLbl">
                            Email
                          </label>
                          <input
                            {...register("email", {
                              required: "Email is required...",
                              pattern: {
                                value:
                                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Email must be valid",
                              },
                            })}
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Your Email"
                            name="email"
                            value={requestData.email}
                            onChange={handleChange}
                          />
                          <p className="formerror">{errors.email?.message}</p>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label for="phoneNumber" id="formLbl">
                            Phone
                          </label>
                          <input
                            {...register("phoneNumber", {
                              required: "Phone number is required...",
                              pattern: {
                                value: /^(?:7|0|(?:\+94))[0-9]{9,10}$/,
                                message: "Phone number must be valid",
                              },
                            })}
                            type="text"
                            className="form-control"
                            id="phoneNumber"
                            placeholder="Enter Your Phone Number"
                            name="phoneNumber"
                            value={requestData.phoneNumber}
                            onChange={handleChange}
                          />
                          <p className="formerror">
                            {errors.phoneNumber?.message}
                          </p>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label for="district" id="formLbl">
                            District
                          </label>
                          <input
                            {...register("district", {
                              required: "District is required...",
                            })}
                            type="text"
                            className="form-control"
                            id="district"
                            placeholder="Enter Your District"
                            name="district"
                            value={requestData.district}
                            onChange={handleChange}
                          />
                          <p className="formerror">
                            {errors.district?.message}
                          </p>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label for="address" id="formLbl">
                            Address
                          </label>
                          <input
                            {...register("address", {
                              required: "District is required...",
                            })}
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Enter Your Address"
                            name="address"
                            value={requestData.address}
                            onChange={handleChange}
                          />
                          <p className="formerror">{errors.address?.message}</p>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label for="universityCollege" id="formLbl">
                            University/School
                          </label>
                          <input
                            {...register("universityCollege", {
                              required: "University is required...",
                            })}
                            type="text"
                            className="form-control"
                            id="universityCollege"
                            placeholder="Enter Your University/School"
                            name="universityCollege"
                            value={requestData.universityCollege}
                            onChange={handleChange}
                          />
                          <p className="formerror">
                            {errors.universityCollege?.message}
                          </p>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label for="nic" id="formLbl">
                            NIC/Passport
                          </label>
                          <input
                            {...register("nic", {
                              required: "NIC is required...",
                              pattern: {
                                value: /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/,
                                message: "NIC must be valid",
                              },
                            })}
                            type="text"
                            className="form-control"
                            id="nic"
                            placeholder="Enter Your NIC/Passport Number"
                            name="nic"
                            value={requestData.nic}
                            onChange={handleChange}
                          />
                          <p className="formerror">{errors.nic?.message}</p>
                        </div>
                      </div>

                  {/*
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label for="formFile" class="form-label" id="formLbl">
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

                      
                      */}


                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <label for="formFile" class="form-label" id="formLbl">
                            Select your qualifications
                          </label>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault" 
                            name="qa1"
                            value="interpersonal skills"
                            onChange={handleChange}
                            />
                            <label class="form-check-label" id="qualifications" for="flexCheckDefault">
                              interpersonal skills
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="flexCheckChecked" 
                            name="qa2"
                            value="Leadership"
                            onChange={handleChange}/>
                            <label class="form-check-label" id="qualifications" for="flexCheckChecked">
                              Leadership
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckChecked" 
                            name="qa3"
                            value="Teamwork and collaboration"
                            onChange={handleChange}/>
                            <label class="form-check-label" id="qualifications" for="flexCheckChecked">
                              Teamwork and collaboration
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckChecked" 
                            name="qa4"
                            value="Physical abilities"
                            onChange={handleChange}/>
                            <label class="form-check-label" id="qualifications" for="flexCheckChecked">
                              Physical abilities
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="flexCheckChecked" 
                            name="qa5"
                            value="Oral and written communications skills"
                            onChange={handleChange}/>
                            <label class="form-check-label" id="qualifications" for="flexCheckChecked">
                              Oral and written communications skills
                            </label>
                          </div>

                        </div>
                      </div>

                    </div>


                    <div className="row gutters">

                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <label for="info" id="formLbl">
                            What are the other potentials you have?
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
                          <label for="other" id="formLbl">
                            Other comments?
                          </label>
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
                          {(Object.keys(errors).length) > 0 ? (
                            <button
                              type="submit"
                              id="submitbtn"
                              name="submit"
                              class="btn btn-secondary btn-sm"
                              style={{ backgroundColor: "white" }}
                              title="Please fill the form correctly!"
                              disabled="true"
                            >
                              Submit
                            </button>
                          ) :
                            (
                              <button
                                type="submit"
                                id="submitbtn"
                                name="submit"
                                class="btn btn-secondary btn-sm"
                                style={{ backgroundColor: "white" }}
                                title="Please fill the form correctly!"
                              >
                                Submit
                              </button>
                            )
                          }



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
      </div>
    </>
  );
}
