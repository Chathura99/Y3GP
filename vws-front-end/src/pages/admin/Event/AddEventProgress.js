import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddEventProgress(props) {
  return (
    <div>
      <div
        class="modal fade show"
        id="addeventprogress"
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
                Event Progress - Previous Events
              </h5>
              <button
                type="button"
                class="close"
                aria-label="Close"
                onClick={() => {
                  props.setSelected(false);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="row gutters ">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <small>Event Coordinator : Malik Wijesuriya</small>
                  <br></br>
                  <small>Phone : 0712584568</small>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <small>Date : "2021-09-12"</small>
                  <br />
                  <small>Status : </small>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group ">
                    <label for="progress" id="formLabel">
                      Progress
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="progress1"
                      name="progress1"
                      value="img 1"
                      //   onChange={handleChange}
                      disabled
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="text"
                      className="form-control"
                      id="progress2"
                      name="progress2"
                      value="img 2"
                      //   onChange={handleChange}
                      disabled
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="text"
                      className="form-control"
                      id="progress3"
                      name="progress3"
                      value="img 3"
                      //   onChange={handleChange}
                      disabled
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="text"
                      className="form-control"
                      id="progress4"
                      name="progress4"
                      value="img 4"
                      //   onChange={handleChange}
                      disabled
                    />
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
                      value="
                      The second programme of the...
                      "
                      //   onChange={handleChange}
                      disabled
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="location" id="formLabel">
                      Location
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                      value="Galenbidunuwewa"
                      //   onChange={handleChange}
                      disabled
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="numberOfMembers" id="formLabel">
                      Number Of Members
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="numberOfMembersr"
                      name="numberOfMembers"
                      value="20"
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
                      value="Anuradhapura"
                      //   onChange={handleChange}
                      disabled
                    />
                  </div>
                </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-center mt-3 ">
                      <Link to="/adminevent">
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          class="btn btn-secondary btn-sm"
                          onClick={() => {
                            props.setSelected(false);
                          }}
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
                        OK
                      </button>
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade show"></div>
    </div>
  );
}
