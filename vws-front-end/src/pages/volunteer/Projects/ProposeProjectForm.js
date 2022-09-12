import React, { useState } from "react";
import { addProposedProjects } from "../../../services/projectServices/projectService";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";

export default function ProposeProjectForm() {
  const [pro, setPro] = useState({
    name: "",
    description: "",
    startDate: "",
    volunteerId:1,
    eventPerYear: "",
  });

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.name + "-" + e.target.value);
    setPro((pro) => ({
      ...pro,
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
    setMessage("Propose new project !");
    setPopUp("confirm");
  };

  const handleSubmit = (e) => {
    // evt.preventDefault();
    console.log("reached!")
    addProposedProjects(pro)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setMessage(response.data);
          setPopUp("success");
        }
      })
      
  };

  return (
    <div>
      

      <div
        class="modal fade"
        id="addProposedProjects"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Propose New Project
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
            <form onSubmit={confirm}>

              {/* <form onSubmit={""} style={{marginTop:0}}> */}
                <div className="row gutters ">
                  

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
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
                  </div> */}

                  
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="name">Project Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter project name"
                        value={pro.name}
                        onChange={handleChange}
                        

                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="startDate">Start Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="startDate"
                        value={pro.startDate}
                        name="startDate"
                        onChange={handleChange}
                        
                      />
                    </div>
                  </div>

                  

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="phone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div> */}

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="description">Description</label>
                      <input
                        type="text"
                        style={{height:80}}
                        className="form-control"
                        id="description"
                        name="description"
                        placeholder="Enter description"
                        value={pro.description}
                        onChange={handleChange}
                        

                      />
                    </div>
                  </div>

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="website">Other</label>
                      <input
                        type="url"
                        className="form-control"
                        id="other"
                        placeholder="Content"
                      />
                    </div>
                  </div> */}

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="eventPerYear">Events per year</label>
                      <input
                        type="number"
                        className="form-control"
                        id="eventPerYear"
                        name="eventPerYear"
                        placeholder="Enter number of events"
                        value={pro.eventPerYear}
                        onChange={handleChange}
                        


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
                          className="btn btn-secondary m-2"
                          data-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          name="submit"
                          id="submit"
                          className="btn btn-primary"
                         onClick={handleSubmit}
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
