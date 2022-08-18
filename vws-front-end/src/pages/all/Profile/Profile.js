import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./profile.css";
import { fetchUserData } from "../../../services/authenticationService";
import {
  getProfile,
  updateProfile,
  updatePassword,
} from "../../../services/userService";

import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import Loading from "../../../utilities/Loading/Loading";

export default function Profile() {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const [userdata, setData] = useState([]);
  const [userrole, setUserRoles] = useState([]);
  const [canEdit, setCanEdit] = useState(false);
  const [myEmail, setMyEmail] = useState("");
  const [profile, setProfile] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    universityCollege: "",
    district: "",
  });
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    reNewPassword: "",
  });

  useEffect(() => {
    userData();
  }, []);

  // open success/error pop up modals and set display message
  const [popup, setPopUp] = useState("");
  const [message, setMessage] = useState("");
  // close pop up modal
  const closePopUp = () => {
    setPopUp("");
  };
  // open confirmation pop up modal
  const confirm1 = (e) => {
    e.preventDefault();
    setMessage("Update profile");
    setPopUp("confirm1");
  };
  const confirm2 = (e) => {
    e.preventDefault();
    setMessage("Update password");
    setPopUp("confirm2");
  };

  const userData = async () => {
    const res = await fetchUserData();
    setData(res.data);
    setUserRoles(res.data.roles);
    getProfileData(res.data.id);
    // console.log(res.data);
  };

  const getProfileData = async (userId) => {
    const res = await getProfile(userId);
    setProfile(res.data);
    setMyEmail(res.data.email);
    // console.log(res.data);
  };

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.name + "-" + e.target.value);
    setProfile((profile) => ({
      ...profile,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePassword = (e) => {
    e.persist();
    console.log(e.target.name + "-" + e.target.value);
    setPassword((password) => ({
      ...password,
      [e.target.name]: e.target.value,
    }));
  };
  // change basic details
  const handleSubmit1 = (e) => {
    console.log(profile);
    // get role
    const role = document.getElementById("role").innerHTML;
    updateProfile(profile, role)
      .then((response) => {
        if (response.data == 2) {
          setMessage("Update Successful!");
          setPopUp("success");
          setTimeout(() => {
            window.location.href = "/viewprofile";
          }, 3000);
        } else {
          setMessage("Update Failed!");
          setPopUp("failed");
        }
      })
      .catch((err) => {
        setMessage(err);
        setPopUp("failed");
      });
  };
  // change password
  const handleSubmit2 = (e) => {
    updatePassword(password, userdata.id)
      .then((response) => {
        if (response.data == 1) {
          setMessage("Update Successful!");
          setPopUp("success");
        } else {
          setMessage("Update Failed!");
          setPopUp("failed");
        }
      })
      .catch((err) => {
        setMessage(err);
        setPopUp("failed");
      });
  };
  return (
    <>
      <Loading change={[popup]} time={100} />

      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Maxwell Admin"
                      />
                    </div>
                    <h5 className="user-name">
                      {userdata && `${userdata.firstName} ${userdata.lastName}`}
                    </h5>
                    {/* <h6 className="user-email">{profile.userName}</h6> */}
                    <h6 className="user-email">{myEmail}</h6>
                  </div>
                  <div className="about">
                    <h5>About</h5>
                    <h6>User ID : {userdata.id}</h6>
                    {userrole.map((role, index) => (
                      <div key={role.id}>
                        <h6 id="role">{role.roleCode} </h6>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <form onSubmit={confirm1}>
                  <div className="row gutters ">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h4 className="mb-2">Details</h4>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group ">
                        <label for="firstName">First Name</label>
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
                          placeholder="Enter first name"
                          value={profile.firstName}
                          name="firstName"
                          onChange={handleChange}
                        />
                        <p className="formerror">{errors.firstName?.message}</p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group ">
                        <label for="lastName">Last Name</label>
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
                          placeholder="Enter last name"
                          value={profile.lastName}
                          name="lastName"
                          onChange={handleChange}
                        />
                        <p className="formerror">{errors.lastName?.message}</p>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="eMail">Email</label>
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
                          id="eMail"
                          placeholder="Enter email ID"
                          value={profile.email}
                          name="email"
                          onChange={handleChange}
                        />
                        <p className="formerror">{errors.email?.message}</p>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="phone">Phone</label>
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
                          id="phone"
                          placeholder="Enter phone number"
                          value={profile.phoneNumber}
                          name="phoneNumber"
                          onChange={handleChange}
                        />
                        <p className="formerror">
                          {errors.phoneNumber?.message}
                        </p>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="text">University/School</label>
                        <input
                          {...register("universityCollege", {
                            required: "University is required...",
                          })}
                          type="text"
                          className="form-control"
                          id="universityCollege"
                          placeholder="University or School"
                          value={profile.universityCollege}
                          name="universityCollege"
                          onChange={handleChange}
                        />
                        <p className="formerror">
                          {errors.universityCollege?.message}
                        </p>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="address">Home Address</label>
                        <input
                          {...register("address", {
                            required: "District is required...",
                          })}
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="Adrress"
                          value={profile.address}
                          name="address"
                          onChange={handleChange}
                          // {...canEdit === false && console.log("disabled")}
                        />
                        <p className="formerror">{errors.address?.message}</p>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="district">District</label>
                        <input
                          {...register("district", {
                            required: "District is required...",
                          })}
                          type="text"
                          className="form-control"
                          id="district"
                          placeholder="District"
                          value={profile.district}
                          name="district"
                          onChange={handleChange}
                          // {...canEdit === false && console.log("dis")}
                        />
                        <p className="formerror">{errors.district?.message}</p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group"></div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="text-center mt-3 ">
                        {canEdit === true && (
                          <>
                            <button
                              type="button"
                              id="submit"
                              name="submit"
                              className="btn btn-secondary m-2"
                              onClick={() => setCanEdit(false)}
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              id="submit"
                              name="submit"
                              className="btn btn-primary"
                            >
                              Update
                            </button>
                          </>
                        )}

                        {canEdit === false && (
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setCanEdit(true)}
                          >
                            Edit
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </form>

                <form onSubmit={confirm2}>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h4 className="mt-3 mb-2">Security</h4>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="oldPassword">Current Password</label>
                        <input
                          {...register("oldPassword", {
                            required: "Old password is required...",
                          })}
                          type="text"
                          className="form-control"
                          id="oldPassword"
                          placeholder="Enter Current Password"
                          name="oldPassword"
                          onChange={handlePassword}
                        />
                        <p className="formerror">
                          {errors.oldPassword?.message}
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="newPassword">New Password</label>
                        <input
                          {...register("newPassword", {
                            required: "New password is required...",
                            minLength: {
                              value: 8,
                              message:
                                "Password must be atleast 8 characters long...",
                            },
                          })}
                          type="text"
                          className="form-control"
                          id="newPassword"
                          placeholder="Enter New Password"
                          name="newPassword"
                          onChange={handlePassword}
                        />
                        <p className="formerror">
                          {errors.newPassword?.message}
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="reNewPassword">Re-New Password</label>
                        <input
                          {...register("reNewPassword", {
                            required: "Renew password is required...",
                            minLength: {
                              value: 8,
                              message:
                                "Password must be atleast 8 characters long...",
                            },
                          })}
                          type="text"
                          className="form-control"
                          id="reNewPassword"
                          placeholder="Re-Enter New Password"
                          name="reNewPassword"
                          onChange={handlePassword}
                        />
                        <p className="formerror">
                          {errors.reNewPassword?.message}
                        </p>
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
                          className="btn btn-secondary m-2"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          id="submit"
                          name="submit"
                          className="btn btn-primary"
                          onClick={""}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">Content</div>
            </div>
          </div>
        </div>
        {popup === "success" && (
          <SuccessPopUp message={message} closePopUp={closePopUp} />
        )}
        {popup === "failed" && (
          <FailedPopUp message={message} closePopUp={closePopUp} />
        )}
        {popup === "confirm1" && (
          <ConfirmPopUp
            message={message}
            closePopUp={closePopUp}
            handleSubmit={handleSubmit1}
          />
        )}
        {popup === "confirm2" && (
          <ConfirmPopUp
            message={message}
            closePopUp={closePopUp}
            handleSubmit={handleSubmit2}
          />
        )}
      </div>
    </>
  );
}
