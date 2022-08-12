import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function EditProject() {
  //   const [requestData, setRequestData] = useState(
  //     {
  //       firstName: "chathura",
  //       lastName: "manohara",
  //       email: "c@gmail.com",
  //       phoneNumber: "0715248569",
  //       address: "Polgahawela",
  //       universityCollege: "Colombo",
  //       district: "Kurunegala",
  //       date: "2021-10-11",
  //       status: 0,
  //       nic: "985475865v",
  //       info: "Singing",
  //       other: "",
  //     },
  //     []
  //   );

  const handleChange = (e) => {
    // e.persist();
    // console.log(e.target.name + "-" + e.target.value);
    // setAnn((ann) => ({
    //   ...ann,
    //   [e.target.name]: e.target.value,
    // }));
  };

  return (
    <div>
      <div
        class="modal fade"
        id="editproject"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Project
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="row gutters ">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <small>Current Coordinator : Malik Wijesuriya</small>
                  <br></br>
                  <small>Phone : 0712584568</small>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <small>Date : 2021-09-12</small>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group ">
                    <label for="projectname" id="formLabel">
                      Project Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectname"
                      name="projectname"
                      value="Ganitha Saviya"
                      //   onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="projectCoordinator" id="formLabel">
                      Project Coordinator
                    </label>
                    {/* <input
                      type="text"
                      className="form-control"
                      id="projectCoordinator"
                      name="projectCoordinator"
                      value="Kamal Silva"
                      onChange={handleChange}
                    /> */}
                    <select
                    type="text"
                    className="form-control"
                    id="projectCoordinator"
                    name="projectCoordinator"
                    value="Kamal Silva"
                    //   onChange={handleChange}
                    >
                        <option>Namal Priyan</option>
                        <option>Lasitha Nawarathne</option>
                    </select>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="description" id="formLabel">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      value="The mathematical seminar for GCE(OL) students in Srilanka"
                      //   onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="eventPerYear" id="formLabel">
                      Events Per Year
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="eventPerYear"
                      name="eventPerYear"
                      value="6"
                      //   onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-center mt-3 ">
                      <Link to="/adminproposedproject">
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          class="btn btn-secondary btn-sm"
                          data-dismiss="modal"
                aria-label="Close"
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
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
