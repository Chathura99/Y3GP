import React, { useEffect, useState } from "react";
import "./profile.css";
import { fetchUserData } from "../../../services/authenticationService";

export default function Profile() {
    const [userdata, setData] = useState([]);
    const [userrole, setUserRoles] = useState([]);
    const [profile, setProfile] = useState({
        firstName: "",
        email: "",
    });

    useEffect(() => {
        userData();
    }, []);

    const userData = async () => {
        const res = await fetchUserData();
        setData(res.data);
        setUserRoles(res.data.roles);
    };

    const handleChange = (e) => {
        e.persist();
        console.log(e.target.name + "-" + e.target.value);
        setProfile((profile) => ({
            ...profile,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(profile);
        // ServicefunctionName(profile)
        //   .then((response) => {
        //     if (response) {
        //       //
        //     } else {
        //       // 
        //     }
        //   })
        //   .catch((err) => {
        //     // 
        //   });   
    };

    return (
        <>
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
                                        <h6 className="user-email">email . . .</h6>
                                    </div>
                                    <div className="about">
                                        <h5>About</h5>

                                        {userrole.map((role, index) => (
                                            <div key={role.id}>
                                                <h6>User ID : {role.id}</h6>

                                                <h6>{role.roleDescription} </h6>
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
                                <form onSubmit={handleSubmit}>
                                    <div className="row gutters ">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h6 className="mb-2 text-primary">Details</h6>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group ">
                                                <label for="fullName">Full Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fullName"
                                                    placeholder="Enter full name"
                                                    value={profile.firstName}
                                                    name="firstName"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="eMail">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="eMail"
                                                    placeholder="Enter email ID"
                                                    value={profile.email}
                                                    name="email"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="phone">Phone</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="phone"
                                                    placeholder="Enter phone number"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="website">University/School</label>
                                                <input
                                                    type="url"
                                                    className="form-control"
                                                    id="website"
                                                    placeholder="University or School"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h6 className="mt-3 mb-2 text-primary">Security</h6>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="Street">Street</label>
                                                <input
                                                    type="name"
                                                    className="form-control"
                                                    id="Street"
                                                    placeholder="Enter Street"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="ciTy">City</label>
                                                <input
                                                    type="name"
                                                    className="form-control"
                                                    id="ciTy"
                                                    placeholder="Enter City"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="sTate">State</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="sTate"
                                                    placeholder="Enter State"
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
                                                    className="btn btn-secondary m-2"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="button"
                                                    id="submit"
                                                    name="submit"
                                                    className="btn btn-primary"
                                                    onClick={handleSubmit}
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
            </div>
        </>
    );
}
