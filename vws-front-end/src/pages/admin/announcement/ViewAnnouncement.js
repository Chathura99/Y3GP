import React, { useState, useEffect } from "react";
import { getAnnouncement } from "../../../services/announcementServices/announcementServices";
import AddAnnouncement from "./AddAnnouncement";
import "./announcement.css";
import EditAnnouncement from "./EditAnnouncement";
export default function ViewAnnouncement() {
  const [announcement, setAnnouncement] = useState([]);
  const [editannouncement, setEditAnnouncement] = useState({
    title:"Title ",
    category:"All",
    content:"Content . . .",
    date:"2022-10-10",
    firstName:"Chathura",
    lastName:"Manohara",
    file:"",
  });

  useEffect(() => {
    checkValidate();
    readAnnouncement();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const readAnnouncement = async () => {
    const res = await getAnnouncement("other");
    console.log(res.data);
    setAnnouncement(res.data);
  };

  return (
    <>
      <div className="container-fluid calculated-bodywidth" id="bla">
        <div className="row gutters mt-10">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <h4 className="">Announcements</h4>
                <AddAnnouncement />
                <EditAnnouncement ann={editannouncement}/>
                <button
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#addAnnouncement"
                  style={{
                    backgroundColor: "#2596be",
                    border: "none",
                    marginRight: 0,
                    marginBottom:"10px"
                  }}
                >
                  ADD
                </button>        

                {announcement.map((ann, index) => (
                  <div key={ann.annId}>
                    <div className="card">
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
                              <b>{ann.firstName + " " + ann.lastName}</b>
                            </a>
                            <a className="nav-link">
                              {ann.role + " " + ann.date}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body" id="body">
                        <h6 className="card-title" style={{ color: "black" }}>
                          {ann.title}
                        </h6>
                        <p className="card-text">{ann.content}</p>
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
                        <i
                          className="fa fa-edit"
                          id="edit"
                          data-toggle="modal"
                          data-target="#editAnnouncement"
                        ></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters ">
                  <h4 className="ml-3">Publish New Announcement</h4>
                </div>
                <div className="row gutters ">Add announcement form</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
