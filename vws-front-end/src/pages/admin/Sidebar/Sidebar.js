import React, { useState } from "react";
import "./sidebar.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import HomePage from "../Home/HomePage";
import ViewAnnouncement from "../Announcement/ViewAnnouncement";
import Event from "../Event/Event";
import Forum from "../ForumPoll/Forum";
import Poll from "../ForumPoll/Poll";
import OnGoingProject from "../Project/OnGoingProject";
import ProposedProject from "../Project/ProposedProject";
import EventSummary from "../Summary/EventSummary";
import ProjectSummary from "../Summary/ProjectSummary";
import MemberSummary from "../Summary/MemberSummary";
import CurrentUser from "../User/CurrentUser";
import NewUser from "../User/NewUser";

export default function Sidebar() {
  const [isActive, setIsActive] = useState("");
  const [selected, setSelected] = useState(0);

  function showHide() {
    if (isActive === "") setIsActive("active");
    else setIsActive("");
  }
  return (
    <div className="wrapper d-flex align-items-stretch">
      <nav id="sidebar" className={isActive}>
        <div className="p-4 pt-3">
          <a
            href={""}
            className="img logo"
            style={{ backgroundImage: "./images/Sasnaka-logo.png" }}
          ></a>
          <ul className="list-unstyled components mb-5">
            <li className="active">
              <a href={"/"}>
                <i className="fa fa-home ml-3 mr-4"></i>Home
              </a>
            </li>
            <li>
              <a
                href="#projectSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fa fa-newspaper-o ml-3 mr-4"></i>Projects
              </a>
              <ul className="collapse list-unstyled" id="projectSubmenu">
                <li className="ml-5">
                  <a href={"ongoingproject"}>Ongoing Projects</a>
                </li>
                <li className="ml-5">
                  <a href={"proposedproject"}>Proposed Projects</a>
                </li>
              </ul>
            </li>
            <li>
              <a href={"event"}>
                <i className="fa fa-calendar-check-o ml-3 mr-4"></i>Events
              </a>
            </li>
            <li>
              <a
                href="#userSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fa fa-users ml-3 mr-4"></i>Users
              </a>
              <ul className="collapse list-unstyled" id="userSubmenu">
                <li className="ml-5">
                  <a href={"/currentuser"}>Current Users</a>
                </li>
                <li className="ml-5">
                  <a href={"/newuser"}>New Users</a>
                </li>
              </ul>
            </li>
            <li>
              <a href={"/viewannouncement"}>
                <i className="fa fa-bullhorn ml-3 mr-4"></i>Announcements
              </a>
            </li>
            <li>
              <a href={"/forum"}>
                <i className="fa fa-comments-o ml-3 mr-4"></i>Forum/Poll
              </a>
            </li>
            <li>
              <a
                href="#summarySubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fa fa-bar-chart ml-3 mr-4"></i>Summary
              </a>
              <ul className="collapse list-unstyled" id="summarySubmenu">
                <li className="ml-5">
                  <a href={"/eventsummary"}>Events</a>
                </li>
                <li className="ml-5">
                  <a href={"/projectsummary"}>Projects</a>
                </li>
                <li className="ml-5">
                  <a href={"/membersummary"}>Members</a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="footer">
            <p>footer</p>
          </div>
        </div>
      </nav>

      <div id="content" className="p-md-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-primary"
              onClick={showHide}
            >
              <i className="fa fa-bars"></i>
              <span className="sr-only">Toggle Menu</span>
            </button>
            <button
              className="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route path="/viewannouncement" element={<ViewAnnouncement/>}></Route>
            <Route path="/event" element={<Event/>}></Route>
            <Route path="/forum" element={<Forum/>}></Route>
            <Route path="/poll" element={<Poll/>}></Route>
            <Route path="/ongoingproject" element={<OnGoingProject/>}></Route>
            <Route path="/proposedproject" element={<ProposedProject/>}></Route>
            <Route path="/eventsummary" element={<EventSummary/>}></Route>
            <Route path="/projectsummary" element={<ProjectSummary/>}></Route>
            <Route path="/membersummary" element={<MemberSummary/>}></Route>
            <Route path="/currentuser" element={<CurrentUser/>}></Route>
            <Route path="/newuser" element={<NewUser/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
