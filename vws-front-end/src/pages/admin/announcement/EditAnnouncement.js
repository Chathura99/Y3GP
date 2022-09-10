import React, { useState } from "react";
import { editAnnouncement } from "../../../services/announcementServices/announcementServices";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import Loading from "../../../utilities/Loading/Loading";

export default function EditAnnouncement(props) {
  const [ann, setAnn] = useState(props.ann);

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
    setMessage("Update Announcement");
    setPopUp("confirm");
  };

  const handleSubmit = (evt) => {
    // evt.preventDefault();
    editAnnouncement(ann)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setMessage(response.data);
          if (response.data === "") {
            setPopUp("failed");
          } else if (response.data === "") {
            setPopUp("failed");
          } else {
            setPopUp("success");
          }
        }
      })
      .catch((err) => {
        if (err && err.response) {
          console.log(err);
          setMessage(err.message);
          setPopUp("failed");
        }
      });
  };

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.name + "-" + e.target.value);
    setAnn((ann) => ({
      ...ann,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <div
        class="modal fade show"
        id="editAnnouncement"
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
                Update Announcement
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => props.setSelectedAnnouncementId("")}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="row gutters ">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <h5>{ann.title}</h5>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <small>
                    Date : {ann.date}
                    <br />
                    by {ann.firstName + " " + ann.lastName}
                  </small>
                </div>
              </div>

              <form onSubmit={confirm}>
                <div className="row gutters ">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group ">
                      <label for="title">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter title"
                        value={ann.title}
                        name="title"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="category">Category</label>

                      <select
                        type="text"
                        className="form-control"
                        id="category"
                        placeholder="Select category"
                        // value={ann.category}
                        name="category"
                        onChange={handleChange}
                      >
                        <option value="all">{ann.category}</option>
                        <option value="all">all</option>
                        <option value="guest">guest</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="content">Content</label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Enter content"
                        value={ann.content}
                        name="content"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="file">File</label>
                      <input
                        type="file"
                        className="form-control"
                        id=""
                        placeholder="file"
                        value={ann.file}
                        name="file"
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
                          id="submit"
                          name="submit"
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
