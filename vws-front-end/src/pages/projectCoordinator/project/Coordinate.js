import React from "react";

export default function CoordinateEventForm() {
  return (
    <div>
      {/* <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Middle
      </button> */}

      <div
        class="modal fade"
        id="CoordinateEventForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Coordinate New Event
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
              <form onSubmit={""} style={{marginTop:0}}>
                <div className="row gutters ">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h4 className="mb-2" style={{textAlign:"center",fontSize:15,marginTop:-10,color:"#808080"}}>Adurata Eliyak</h4>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group ">
                      <label for="fullName">Proposed By</label>
                      <input
                        type="text"
                        className="form-control"
                        id="proposedBy"
                        placeholder="Ravindu Medagama"
                        // value={profile.firstName}
                        name="firstName"
                        // onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="eMail">Starts On</label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"

                        // value={profile.email}
                        name="email"
                        // onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="phone">Event Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="ProjectName"
                        placeholder="Enter event name"
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="eMail">Ends On</label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"

                        // value={profile.email}
                        name="email"
                        // onChange={handleChange}
                      />
                    </div>
                  </div>


                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="phone">Description</label>
                      <input
                        type="text"
                        style={{height:80}}
                        className="form-control"
                        id="description"
                        placeholder="Enter description"
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="phone">No.of volunteers need</label>
                      <input
                        type="text"
                        className="form-control"
                        id="ProjectName"
                        placeholder="Enter volunteer count"
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="website">Other</label>
                      <input
                        type="url"
                        className="form-control"
                        id="other"
                        placeholder="Content"
                      />
                    </div>
                  </div>


                </div>

                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-center mt-3 ">
                      <div class="modal-footer justify-content-center ">
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          className="btn btn-secondary m-2"
                          data-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          className="btn btn-primary"
                          // onClick={handleSubmit}
                        >
                          Save
                        </button>
                      </div>
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
