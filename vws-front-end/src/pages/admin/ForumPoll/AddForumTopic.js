import { red } from "@material-ui/core/colors";
import React, { useState } from "react";
import { addNewForum } from "../../../services/forumServices/forumService";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";

export default function AddForumTopic() {

  const [forum, setForum] = useState({
    title: "",
    description: "",
   
    endDate: "",
    userId:1,
    
  });

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.name + "-" + e.target.value);
    setForum((forum) => ({
      ...forum,
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
    setMessage("Add New Forum Topic !");
    setPopUp("confirm");
  };

  const handleSubmit = (e) => {
    // evt.preventDefault();
    console.log("reached!")
    addNewForum(forum)
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
        id="AddForumTopic"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Add New Forum Topic 
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
                        value={forum.name}
                        name="firstName"
                        onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="eMail">Starts On</label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        
                        value={forum.startDate}
                        name="email"
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
                        placeholder="Enter forum Title"
                        value={forum.title}
                        name="title"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="phone">Ends On</label>
                      <input
                        type="date"
                        className="form-control"
                        id="endDate"
                        name="endDate"
                        value={forum.endDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <label for="phone">Description</label>
                      <input
                        type="text"
                        style={{height:80, width:460}}
                        className="form-control"
                        id="description"
                        value={forum.description}
                        name="description"
                        placeholder="Enter description"
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

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="website">Events per year</label>
                      <input
                        type="url"
                        className="form-control"
                        id="numberOfEvents"
                        placeholder="Enter number of events"
                      />
                    </div>
                  </div> */}

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
