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
    if (isActive === "") setIsActive("active");
    else setIsActive("");
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
            <a
              href={""}
              className="img logo"
              style={{ backgroundImage:"./sss.png"  }}
            ></a>
            <ul className="list-unstyled components mb-5">
              <li
                className={selected === 1 ? "active" : ""}
                onClick={() => {
                  highLight(1);
                }}
              >
                <Link to="/adminhome">
                  <i className="fa fa-home ml-3 mr-4"></i>Home
                </Link>
              </li>
              <li
                className={selected === 2 ? "active" : ""}
                onClick={() => {
                  highLight(2);
                }}
              >
                <a
                  href="#projectSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <i className="fa fa-newspaper-o ml-3 mr-4"></i>Projects
                </a>
                <ul className="collapse list-unstyled" id="projectSubmenu">
                  <li className="ml-5">
                    <Link to="/adminongoingproject" className="p-1">
                      <div 
                      className={linkdark === 2.1 ? "linkdark" : ""}
                      onClick={() => {
                        setLinkdark(2.1);
                      }}
                      >Ongoing Projects</div>
                    </Link>
                  </li>
                  <li className="ml-5">
                    <Link to="/adminproposedproject" className="p-1">
                    <div 
                    className={linkdark === 2.2 ? "linkdark" : ""}
                    onClick={() => {
                      setLinkdark(2.2);
                    }}
                    >Proposed Projects</div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={selected === 3 ? "active" : ""}
                onClick={() => {
                  highLight(3);
                }}
              >
                <Link to="adminevent">
                  <i className="fa fa-calendar-check-o ml-3 mr-4"></i>Events
                </Link>
              </li>
              <li
                className={selected === 4 ? "active" : ""}
                onClick={() => {
                  highLight(4);
                }}
              >
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
                    <Link to="/admincurrentuser" className="p-1">
                      
                      <div 
                    className={linkdark === 4.1 ? "linkdark" : ""}
                    onClick={() => {
                      setLinkdark(4.1);
                    }}
                    >Current User</div>
                    </Link>
                  </li>
                  <li className="ml-5">
                    <Link to="/adminnewuser" className="p-1">
                      
                      <div 
                    className={linkdark === 4.2 ? "linkdark" : ""}
                    onClick={() => {
                      setLinkdark(4.2);
                    }}
                    >New User</div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={selected === 5 ? "active" : ""}
                onClick={() => {
                  highLight(5);
                }}
              >
                <Link to="/adminviewannouncement">
                  <i className="fa fa-bullhorn ml-3 mr-4"></i>Announcements
                </Link>
              </li>
              <li
                className={selected === 6 ? "active" : ""}
                onClick={() => {
                  highLight(6);
                }}
              >
                <Link to="/adminforum">
                  <i className="fa fa-bullhorn ml-3 mr-4"></i>Forum | Poll
                </Link>
              </li>
              <li
                className={selected === 7 ? "active" : ""}
                onClick={() => {
                  highLight(7);
                }}
              >
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
                    <Link to="/admineventsummary" className="p-1">
                      
                      <div 
                    className={linkdark === 7.1 ? "linkdark" : ""}
                    onClick={() => {
                      setLinkdark(7.1);
                    }}
                    >Events</div>
                    </Link>
                  </li>
                  <li className="ml-5">
                    <Link to="/adminprojectsummary" className="p-1">
                      
                      <div 
                    className={linkdark === 7.2  ? "linkdark" : ""}
                    onClick={() => {
                      setLinkdark(7.2);
                    }}
                    >Projects</div>
                    </Link>
                  </li>
                  <li className="ml-5">
                    <Link to="/adminmembersummary" className="p-1">
                      
                      <div 
                    className={linkdark === 7.3 ? "linkdark" : ""}
                    onClick={() => {
                      setLinkdark(7.3);
                    }}
                    >Members</div>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="footer"></div>
          </div>
        </nav>

        <div className="navwidth">
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
                  <li
                    className="nav-item"

                  >
                    <Link to="/adminhome" className="nav-link">
                     
                      <div 
                    className={linkdark === 1 ? "linkdark" : ""}
                    onClick={() => {
                      setLinkdark(1);
                    }}
                    > Notification</div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={logOut}>
                      Log Out
                    </a>
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
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
