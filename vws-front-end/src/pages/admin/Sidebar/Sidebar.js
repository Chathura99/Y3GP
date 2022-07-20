import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { fetchUserData } from "../../../services/authenticationService";

export default function Sidebar(page) {
  const [isActive, setIsActive] = useState("");
  const [body, setBody] = useState("");
  const [selected, setSelected] = useState(0);
  const [userdata, setData] = useState([]);
  const [userrole, setUserRoles] = useState([]);

  useEffect(() => {
    // checkValidate();
    userData();
  }, []);

  const checkValidate = async () => {
    // const y = JSON.parse(localStorage.getItem("USER_KEY"));
    const y = localStorage.getItem("USER_KEY");
    console.log(y);
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
    setUserRoles(res.data.roles);
  };

  function showHide() {
    if (isActive === "") setIsActive("active");
    else setIsActive("");
  }

  return (
    <>
      <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar" className={isActive}>
          <div className="p-2 pt-3">
            <a
              href={""}
              className="img logo"
              style={{ backgroundImage: "./images/Sasnaka-logo.png" }}
            ></a>
            <ul className="list-unstyled components mb-5">
              <li className="active">
                <a href={"/adminhome"}>
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
                    <a href={"adminongoingproject"}>Ongoing Projects</a>
                  </li>
                  <li className="ml-5">
                    <a href={"adminproposedproject"}>Proposed Projects</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href={"adminevent"}>
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
                    <a href={"/admincurrentuser"}>Current Users</a>
                  </li>
                  <li className="ml-5">
                    <a href={"/adminnewuser"}>New Users</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href={"/adminviewannouncement"}>
                  <i className="fa fa-bullhorn ml-3 mr-4"></i>Announcements
                </a>
              </li>
              <li>
                <a href={"/adminforum"}>
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
                    <a href={"/admineventsummary"}>Events</a>
                  </li>
                  <li className="ml-5">
                    <a href={"/adminprojectsummary"}>Projects</a>
                  </li>
                  <li className="ml-5">
                    <a href={"/adminmembersummary"}>Members</a>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="footer">     
                {userrole.map((role, index) => (
                <div key={role.id}>
                  <h6>User ID : </h6>
                  {role.id}
                  <h6>User Role : </h6>
                  {role.roleDescription}
                </div>
              ))}
              
            </div>
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
                    <a className="nav-link" onClick={logOut}>
                      Log Out
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" >
                      {userdata && `${userdata.firstName} ${userdata.lastName}`}
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
