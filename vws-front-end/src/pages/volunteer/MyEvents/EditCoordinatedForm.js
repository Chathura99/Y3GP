import React, { useState } from "react";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import { Link } from "react-router-dom";
import { editMyCoordinatedEvents } from "../../../services/eventServices/eventService";

import ImageUploadComponent from "./ImageUploadComponent";


export default function EditCoordinatedForm(props) {

  const [eventData, setEventData] = useState(props.eventData);
  console.log(eventData.eventId+"jnvjnn");

  const [newEvent, setNewEvent] = useState({
    description: "",
    participatedVolunteersCount: "",
    eventId:eventData.eventId,
    actualDays: ""
    

  });

  


  const handleChange = (e) => {
    e.persist();
    console.log(e.target.name + "-" + e.target.value);
   
    setNewEvent((newEvent) => ({
      ...newEvent,
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
    // setMessage("Update and Saved Details");
    setPopUp("confirm");
  };
  

  const handleSubmit = (e) => {
    // evt.preventDefault();
    console.log("reached!")
    editMyCoordinatedEvents(newEvent)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setMessage("Saved Details");
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
        class="modal fade show"
        id="EditCoordinatedEvent"
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
                Edit Coordinated Event Details
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
            
                <div className="row gutters ">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <small>Coordinator : {eventData.name}</small>
                  <br></br>
                  <small>Phone : {eventData.phoneNumber}</small>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <small>Start Date : {eventData.startDate} </small>
                  <br />
                  <small>End Date : {eventData.endDate} </small>
                  <br />
                </div>
              </div>
              <form onSubmit={confirm}>
                <div className="row gutters ">

                  
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <label for="location" id="formLabel">
                      Upload Images
                    </label>
                    <ImageUploadComponent />
                  {/* <div class="row">
                    <div class="col">
                      <img
                        style={{ width: "100px", padding: "4px",border: '0.5px solid black' }}
                        src="https://static.vecteezy.com/system/resources/thumbnails/004/640/699/small/circle-upload-icon-button-isolated-on-white-background-vector.jpg"
                      />
                      <img
                        style={{ width: "100px", padding: "4px",border: '0.5px solid black' }}
                        src="https://static.vecteezy.com/system/resources/thumbnails/004/640/699/small/circle-upload-icon-button-isolated-on-white-background-vector.jpg"
                      />
                    </div>
                    <div class="col">
                      <img
                        style={{ width: "100px", padding: "4px",border: '0.5px solid black' }}
                        src="https://static.vecteezy.com/system/resources/thumbnails/004/640/699/small/circle-upload-icon-button-isolated-on-white-background-vector.jpg"
                      />
                      <img
                        style={{ width: "100px", padding: "4px",border: '0.5px solid black' }}
                        src="https://static.vecteezy.com/system/resources/thumbnails/004/640/699/small/circle-upload-icon-button-isolated-on-white-background-vector.jpg"
                      />
                    </div>
                  </div> */}
                </div>
{/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group ">
                    <label for="progress" id="formLabel">
                      Upload Images
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
                </div> */}

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="description">Description</label>
                      <input
                        type="text"
                        style={{height:80}}
                        className="form-control"
                        value={newEvent.description}
                        id="description"
                        name="description"
                        placeholder="Enter description"
                        onChange={handleChange}

                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                    <label
                        for="formFile"
                        class="form-label"
                        id="formLbl"
                        style={{ color: "gray" }}
                      >
                        Progress
                      </label>
                    <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          checked
                        />
                        <label
                          class="form-check-label"
                          id="qualifications"
                          for="flexCheckDefault"
                          style={{ color: "black" }}
                        >
                          criteria 1
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          class="form-check-label"
                          id="qualifications"
                          for="flexCheckChecked"
                          style={{ color: "black" }}
                        >
                          criteria 2
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          class="form-check-label"
                          id="qualifications"
                          for="flexCheckChecked"
                          style={{ color: "black" }}
                        >
                          criteria 3{" "}
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="eMail">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        // placeholder="Enter location"
                        // value={profile.email}
                        value={eventData.place}
                        name="location"
                        // onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="eMail">No.of Volunteers</label>
                      <input
                        type="number"
                        className="form-control"
                        id="volunteercount"
                        // placeholder="Enter volunteer count"
                        value={eventData.noOfVolunteers}
                        name="volunteercount"
                        // onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>

                  

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="participatedVolunteersCount">No.of Participated Volunteers</label>
                      <input
                        type="number"
                        className="form-control"
                        id="participatedVolunteersCount"
                        placeholder="Enter volunteer count"
                        value={newEvent.participatedVolunteersCount}
                        name="participatedVolunteersCount"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="actualDays">Actual number of days to complete</label>
                      <input
                        type="number"
                        className="form-control"
                        id="actualDays"
                        placeholder="Enter Actual No.of Days"
                        value={newEvent.actualDays}
                        name="actualDays"
                        onChange={handleChange}
                        // disabled
                      />
                    </div>
                  </div>

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="eMail">Progress</label>
                      <input
                        type="range"
                        className="form-control" min="0" max="100"
                        id="progress"
                        // placeholder="Enter location"
                        // value={profile.email}
                        name="location"
                        // onChange={handleChange}
                      />
                    </div>
                  </div> */}



                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="progress">Progress</label>

                      <ImageUploadComponent />
                    </div>
                  </div> */}

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="progress">Status</label>
                      </div>
                      </div> */}
                      
                      {/* <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group mr-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-secondary" style={{marginLeft:15,backgroundColor:"#96BE25"}}>Success</button>
    
  </div>
  <div class="btn-group mr-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary" style={{backgroundColor:"#2596BE"}}>Ongoing</button>
    
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-secondary" style={{backgroundColor:"#BE4D25"}}>Cancel</button>
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
                          Back
                        </button>
                        <button
                          type="submit"
                          id="submit"
                          name="submit"
                          className="btn btn-primary"
                          // onClick={handleSubmit}
                        >
                          Update
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
