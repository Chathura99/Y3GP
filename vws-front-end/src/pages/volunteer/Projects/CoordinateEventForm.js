import React, { useState } from "react";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import { addCoordinatedEvents } from './../../../services/eventServices/eventService';

export default function CoordinateEventForm(props) {

  const [newEvent, setNewEvent] = useState({
    startDate: "",
    endDate: "",
    place: "",
    volunteerId:1,
    projectId:2,
    noOfVolunteers: "",

  });

  

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.name + "-" + e.target.value);
    setNewEvent((newEvent) => ({
      ...newEvent,
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
    setMessage("Coordinated New Event !");
    setPopUp("confirm");
  };

  const handleSubmit = (e) => {
    // evt.preventDefault();
    console.log("reached!")
    addCoordinatedEvents(newEvent)
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
        class="modal fade show"
        id="addCoordinatedEvents"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        style={{ display: "block" }}
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
                onClick={() => {
                  props.setSelected(false);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form onSubmit={confirm}>
                <div className="row gutters ">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h4 className="mb-2" style={{textAlign:"center",fontSize:15,marginTop:-10,color:"#808080"}}>{props.projectData}</h4>
                  </div>
{console.log(props.projectData)}
                 <h1></h1>

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group ">
                      <label for="fullName">Proposed By </label>
                      <input
                        type="text"
                        className="form-control"
                        id="proposedBy"
                        // value={coordinateEventToProject.firstName}
                        
                        
                        name="firstName"
                        // onChange={handleChange}
                      />
                    </div>
                  </div> */}

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="place">Place</label>
                      <input
                        type="text"
                        className="form-control"
                        id="place"
                        name="place"
                        value={newEvent.place}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="startDate">Starts On</label>
                      <input
                        type="date"
                        className="form-control"
                        id="startDate"
                        value={newEvent.startDate}
                        name="startDate"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="endDate">Ends On</label>
                      <input
                        type="date"
                        className="form-control"
                        id="endDate"
                        value={newEvent.endDate}
                        name="endDate"
                        onChange={handleChange}
                      />
                    </div>
                  </div>



                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="noOfVolunteers">No.of volunteers need</label>
                      <input
                        type="number"
                        className="form-control"
                        id="noOfVolunteers"
                        name="noOfVolunteers"
                        value={newEvent.noOfVolunteers}
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

                 
                </div>

                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-center mt-3 ">
                      <div class="modal-footer justify-content-center ">
                        <button
                          type="button"
                          className="btn btn-secondary m-2"
                          data-dismiss="modal"
                          onClick={()=>{
                            props.setSelected(false)
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          id="submit"
                          name="submit"
                          className="btn btn-primary"
                          
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
      <div class="modal-backdrop fade show"></div>
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
