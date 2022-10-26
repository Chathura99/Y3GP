import { red } from "@material-ui/core/colors";
import React, { useState } from "react";
import { addNewPoll } from "../../../services/pollServices/pollService";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";

export default function AddNewPoll() {
  const [poll, setPoll] = useState({
    title: "",
    description: "",
    option1: "",
    option2: "",
    endDate: "",
    
    
  });

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.name + "-" + e.target.value);
    setPoll((poll) => ({
      ...poll,
      [e.target.name]: e.target.value,
    }));
  };

  const [popup, setPopUp] = useState("");
  const [message, setMessage] = useState("");

 const closePopUp = () => {
    setPopUp("");
  };

  const confirm = (e) => {
    e.preventDefault();
    setMessage("Add New Poll !");
    setPopUp("confirm");
  };

  const handleSubmit = (e) => {
    // evt.preventDefault();
    console.log("reached!")
    addNewPoll(poll)
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
        id="AddNewPoll"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Add New Poll 
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
                <div className="row gutters ">
                  

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group ">
                      <label for="fullName">Created By</label>
                      <input
                        type="text"
                        className="form-control"
                        id="proposedBy"
                        placeholder="Chathura Senevirathna"
                        // value={profile.firstName}
                        name="firstName"
                        disabled
                        // onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="startDate">Starts On</label>
                      <input
                        type="date"
                        className="form-control"
                        id="startDate"

                        
                        value={poll.startDate}
                        name="startDate"
                        onChange={handleChange}

                        disabled
                      />
                    </div>
                  </div> */}

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="title">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={poll.title}

                        placeholder="Enter Poll Title"
                        onChange={handleChange}

                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="endDate">Ends On</label>
                      <input
                        type="date"
                        name="endDate"
                        value={poll.endDate}

                        className="form-control"
                        id="endDate"
                        onChange={handleChange}

                        
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" >
                    <div className="form-group" style={{ width:460}}>
                      <label for="description">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={poll.description}
                        name="description"

                        placeholder="Content"
                        style={{height: 80 }}
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

                  <div style={{width: 460, backgroundColor: red }}>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"  style={{ float: "left"}}>
                    <div className="form-group">
                      <label for="option1">Option 1</label>
                      <input
                        type="text"
                        className="form-control"
                        id="option1"
                        name="option1"
                        value={poll.option1}


                        placeholder="Enter option 1"
                        onChange={handleChange}

                        
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" style={{ float: "right"}} >
                    <div className="form-group">
                      <label for="option2">Option 2</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Option2"
                        name="option2"
                        value={poll.option2}

                        placeholder="Enter option 2"
                        onChange={handleChange}

                        
                      />
                    </div>
                  </div>
                  </div>

                </div>

                <div className="row gutters" >
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" >
                    <div className="text-center mt-3 " >
                      <div class="modal-footer justify-content-center " >
                        <button
                          type="button"
                          
                          className="btn btn-secondary m-2"
                          data-dismiss="modal"
                          
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
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
