import React, { useState, useEffect } from "react";
import { getFeedback } from "../../../services/guestUserServices/guestFeedbackService";
import { Consider } from "../../../services/notificationServices/notificationServices";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";

export default function Feedback() {
  const [feedback, setFeedback] = useState([]);
  const [feedbackId, setFeedbackId] = useState(0);
  const [selectedId, setSelectedId] = useState(0);
  const [notification, setNotification] = useState({
    description: "",
    heading: "",
    userId: "",
  });

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.name + "-" + e.target.value);
    setNotification((notification) => ({
      ...notification,
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
    setMessage("Send consideration details");
    setPopUp("confirm");
  };

  const handleSubmit = (e) => {
    // evt.preventDefault();
    console.log("reached!");
    Consider(feedbackId, notification).then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        setMessage(response.data);
        setPopUp("success");
      }
    });
  };

  useEffect(() => {
    checkValidate();
    readFeedback();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const readFeedback = async () => {
    const res = await getFeedback();
    console.log(res.data);
    setFeedback(res.data);
  };

  return (
    <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
      <div className="row gutters mt-10">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
          <div className="card h-100" id="contentcard">
            <div className="card-body">
              <h4 className="">Feedback</h4>
              <div className="row gutters "></div>
              <div
                className="row gutters "
                style={{ justifyContent: "center" }}
              >
                {feedback.map((fb, index) => (
                  <div key={fb.feedbackId}>
                    <div
                      className="card"
                      style={{ width: "500px", paddingRight: "10px" }}
                    >
                      <div className="card-header" id="head">
                        <ul className="nav ">
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              <img
                                id="profielimg"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                              ></img>
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            id="details"
                            style={{ marginTop: "8px" }}
                          >
                            <a className="nav-link" style={{ color: "black" }}>
                              <b>{"Anonymous User"}</b>
                            </a>
                            <a className="nav-link">
                              <b>{fb.date}</b>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body" id={fb.feedbackId}>
                        <h6
                          className="card-title"
                          style={{ color: "black" }}
                        ></h6>
                        <p className="card-text">{fb.feedback}</p>
                        <p className="card-text">
                          {/* <div className="pdfFiles">
                            <img
                              id="file"
                              src="data:image/png;base64,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"
                            ></img>
                            <a href="../../uploads/announcement/variable">
                              a.pdf
                            </a>
                          </div> */}
                        </p>
                        <button
                          type="button"
                          className="btn mt-0"
                          style={{
                            backgroundColor: "#96BE25",
                            border: "none",
                          }}
                          onClick={() => {
                            setSelectedId(fb.feedbackId);
                          }}
                        >
                          Consider
                        </button>
                        {selectedId === fb.feedbackId && (
                        <form onSubmit={confirm}>
                          <div className="row gutters ">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group ">
                                <label for="heading">Heading</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="heading"
                                  placeholder="Enter heading"
                                  value={notification.heading}
                                  name="heading"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="category">Coordinator</label>

                                <select
                                  type="text"
                                  className="form-control"
                                  id="userId"
                                  placeholder="Select category"
                                  value={notification.userId}
                                  name="userId"
                                  onChange={handleChange}
                                >
                                  <option value="4">Ravindu Medagama | Re-Green Earth</option>
                                  <option value="5">Kalana wishwajith | 	Sarasavi Piyageta</option>
                                  <option value="6">Kasun Wishwajith |	Sisu Mediya</option>
                                  <option value="7">Sadun Silva | Hisata Sewanak</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="content">Description</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="description"
                                  placeholder="Enter content"
                                  value={notification.description}
                                  name="description"
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
                                    onClick={() => {
                                      setSelectedId(0);
                                    }}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    id="submit"
                                    name="submit"
                                    className="btn btn-primary"
                                    onClick={() => {
                                      setFeedbackId(fb.feedbackId);
                                    }}
                                  >
                                    Send
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
