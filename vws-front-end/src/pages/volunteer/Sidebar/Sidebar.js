import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { fetchUserData } from "../../../services/authenticationService";
import { Link } from "react-router-dom";

export default function Sidebar(page) {
  const [isActive, setIsActive] = useState("");
  const [body, setBody] = useState("");
  const [selected, setSelected] = useState(1);
  const [linkdark, setLinkdark] = useState(0);
  const [userdata, setData] = useState([]);

  useEffect(() => {
    checkValidate();
    userData();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    const xx = JSON.parse(localStorage.getItem('authorization'));
    if (!y) {
      window.location.href = "/";
    }
  };

  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
    // props.history.push('/');
  };

  const userData = async () => {
    const res = await fetchUserData();
    // console.log(res.data)
    // console.log(res.data.roles)
    setData(res.data);
  };

  function showHide() {
    if (isActive === "")
      setIsActive("active");
    else
      setIsActive("");
  }

  function highLight(i) {
    // console.log("Selected :" + i);
    setSelected(i);
  }

  return (
    <>
      <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar" className={isActive}>
          <div className="p-2 pt-3">
          <div className="sidebar-logo">
            
            </div>
            <ul className="list-unstyled components mb-5">
              <li
                className={selected === 1 ? "active" : ""}
                onClick={() => {
                  highLight(1);
                }}
              >
                <Link to="/volunteerhome">
                  <i className="fa fa-home ml-3 mr-4"></i>Home
                </Link>
              </li>

              <li
                className={selected === 2 ? "active" : ""}
                onClick={() => {
                  highLight(2);
                }}
              >
                <Link to="/volunteerProjects">
                  <i className="fa fa-newspaper-o ml-3 mr-4"></i>Projects
                </Link>
              </li>

              <li
                className={selected === 3 ? "active" : ""}
                onClick={() => {
                  highLight(3);
                }}
              >
                <a
                  href="#eventSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  <i className="fa fa-calendar-check-o ml-3 mr-4"></i>Events
                </a>
                <ul className="collapse list-unstyled" id="eventSubmenu">
                  <li className="ml-5">
                    <Link to="/volunteerOngoingEvents" className="p-1">
                      <div
                        className={linkdark === 3.1 ? "linkdark" : ""}
                        onClick={() => {
                          setLinkdark(3.1);
                        }}
                      >Ongoing Events</div>
                    </Link>
                  </li>
                  <li className="ml-5">
                    <Link to="/volunteerPreviousEvents" className="p-1">
                      <div
                        className={linkdark === 3.2 ? "linkdark" : ""}
                        onClick={() => {
                          setLinkdark(3.2);
                        }}
                      >Previous Events</div>
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={selected === 4 ? "active" : ""}
                onClick={() => {
                  highLight(4);
                }}
              >
                <a
                  href="#myEventSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  <i className="fa fa-calendar-plus-o ml-3 mr-4"></i>My Events
                </a>
                <ul className="collapse list-unstyled" id="myEventSubmenu">
                  <li className="ml-5">
                    <Link to="/volunteerUpcomingEvents" className="p-1">
                      <div
                        className={linkdark === 4.1 ? "linkdark" : ""}
                        onClick={() => {
                          setLinkdark(4.1);
                        }}
                      >Upcoming Events</div>
                    </Link>
                  </li>
                  <li className="ml-5">
                    <Link to="/volunteerCompletedEvents" className="p-1">
                      <div
                        className={linkdark === 4.2 ? "linkdark" : ""}
                        onClick={() => {
                          setLinkdark(4.2);
                        }}
                      >Completed Events</div>
                    </Link>
                  </li>
                  <li className="ml-5">
                    <Link to="/volunteerCoordinatedEvents" className="p-1">
                      <div
                        className={linkdark === 4.3 ? "linkdark" : ""}
                        onClick={() => {
                          setLinkdark(4.3);
                        }}
                      >Coordinated Events</div>
                    </Link>
                  </li>
                </ul>
              </li>

              

              {/* <li
                className={selected === 6 ? "active" : ""}
                onClick={() => {
                  highLight(6);
                }}
              >
                <Link to="/volunteerForumpoll">
                  <i className="fa fa-comments ml-3 mr-4"></i>Forum | Poll
                </Link>
              </li> */}
              <li
                className={selected === 6 ? "active" : ""}
                onClick={() => {
                  highLight(6);
                }}
              >
                <a
                  href="#forumpollsubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  <i className="fa fa-users ml-3 mr-4"></i>Forum | Poll
                </a>
                <ul className="collapse list-unstyled" id="forumpollsubmenu">
                  <li className="ml-5">
                    <Link to="/volunteerForumpoll" className="p-1">
                      <div
                        className={linkdark === 6.1 ? "linkdark" : ""}
                        onClick={() => {
                          setLinkdark(6.1);
                        }}
                      >Forum</div>
                    </Link>
                  </li>
                  <li className="ml-5">
                    <Link to="/volunteerVPoll" className="p-1">
                      <div
                        className={linkdark === 6.2 ? "linkdark" : ""}
                        onClick={() => {
                          setLinkdark(6.2);
                        }}
                      >Poll</div>
                    </Link>
                  </li>
                </ul>
              </li>

              

            </ul>

            <div className="footer"></div>
          </div>
        </nav>

        <div className="navwidth" id="nav">
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

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav ml-auto">
                  <li
                    className="nav-item"
                  >
                    <Link to="/adminhome" className="nav-link">

                      <div
                        className={linkdark === 0 ? "linkdark" : ""}
                        onClick={() => {
                          setLinkdark(0);
                        }}
                      >Home</div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/volunteernotification" className="nav-link">
                      <div
                        className={linkdark === 1 ? "linkdark" : ""}
                        onClick={() => {
                          setLinkdark(1);
                          highLight(99);
                        }}
                      >
                        
                        <i class="fa fa-bell" aria-hidden="true"></i>
                      </div>
                    </Link>
                  </li>
                 
                  <li
                    className="nav-item"
                  >
                    <Link to="/viewprofile" className="nav-link">

                      <div
                        className={linkdark === 3 ? "linkdark" : ""}
                        onClick={() => {
                          setLinkdark(3);
                        }}
                      >{userdata && `${userdata.firstName} ${userdata.lastName}`}</div>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" onClick={logOut}>
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                    </a>
                  </li>

                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

