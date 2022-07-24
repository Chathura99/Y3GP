import React, { useState } from "react";
import "./signup.css";
import { joinRequest } from "../../../services/guestUserServices/signUpService";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [requestData, setRequestData] = useState(
        {
            firstName: "Manuka",
            lastName: "Amarasinghe",
            email: "mam@gmail.com",
            phoneNumber: "0712548569",
            address: "Digana",
            universityCollege: "Peradeniya",
            district: "Kandy",
            date: "",
            status: 0,
        },
        []
    );

    const handleSubmit = (evt) => {
        console.log(requestData);
        evt.preventDefault();
        joinRequest(requestData).then((response) => {
            if (response.status === 200) {
                console.log("success");
            } else {
                console.log("error");
            }
        });
    };


    return (
        <div className="container-fluid calculated-bodywidth" >
            <div className="row gutters mt-4">
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
                    <div className="card h-100" id="contentcard">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row gutters ">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-4 text-primary">Member Registration</h6>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group ">
                                            <label for="firstName">First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                placeholder="Enter Your First Name"

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
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="formFile" class="form-label">NIC/Passport Copy</label>
                                            <input class="form-control browse" type="file" id="formFile" />
                                        </div>
                                    </div>

                                </div>

                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label for="info">What are the potentials you have?</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="info"
                                                placeholder="Type here"
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
                                            />
                                        </div>
                                    </div>

                                </div>

                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text-center mt-3 ">

                                            <button type="button"
                                                id="submit"
                                                name="submit"
                                                class="btn btn-primary btn-sm">Cancel
                                            </button>

                                            <button type="button"
                                                id="submit"
                                                name="submit"
                                                class="btn btn-secondary btn-sm"
                                                onClick={handleSubmit}>Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div >
                    </div >
                </div >
            </div >
        </div >


    );
}