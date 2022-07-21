<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { fetchUserData } from "../../../services/authenticationService";
import { Link } from "react-router-dom";
=======
import React, { useState } from 'react'
import './sidebar.css'
import Table from '../../../utilities/Table/Table';
>>>>>>> Yashodha

export default function Sidebar(page) {
  const [isActive, setIsActive] = useState("");
<<<<<<< HEAD
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
=======
>>>>>>> Yashodha

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
<<<<<<< HEAD
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
=======
    <div class="wrapper d-flex align-items-stretch">
      <nav id="sidebar" className={isActive}>
        <div class="p-4 pt-3">
          <a href="" class="img logo" style={{ backgroundImage: './images/Sasnaka-logo.png' }}></a>
          <ul class="list-unstyled components mb-5">
            <li class="active">
              <a href=""><i class="fa fa-home ml-3 mr-4"></i>Home</a>
            </li>
            <li >
              <a href="#projectSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-newspaper-o ml-3 mr-4"></i>Projects</a>
              <ul class="collapse list-unstyled" id="projectSubmenu">
                <li class="ml-5">
                  <a href="">Ongoing Projects</a>
                </li>
                <li class="ml-5">
                  <a href="">Proposed Projects</a>
                </li>
              </ul>
            </li>
            <li>
              <a href=""><i class="fa fa-calendar-check-o ml-3 mr-4"></i>Events</a>
            </li>
            <li>
              <a href="#userSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-users ml-3 mr-4"></i>Users</a>
              <ul class="collapse list-unstyled" id="userSubmenu">
                <li class="ml-5">
                  <a href="#">Current Users</a>
                </li>
                <li class="ml-5">
                  <a href="">New Users</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#"><i class="fa fa-bullhorn ml-3 mr-4"></i>Announcements</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-comments-o ml-3 mr-4"></i>Forum/Poll</a>
            </li>
            <li>
              <a href="#summarySubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-bar-chart ml-3 mr-4"></i>Summary</a>
              <ul class="collapse list-unstyled" id="summarySubmenu">
                <li class="ml-5">
                  <a href="#">Events</a>
                </li>
                <li class="ml-5">
                  <a href="#">Projects</a>
                </li>
                <li class="ml-5">
                  <a href="#">Members</a>
                </li>
              </ul>
            </li>
          </ul>

          <div class="footer">
            <p>footer</p>
          </div>

        </div>
      </nav>


      <div id="content" class="p-md-0">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">

            <button type="button" id="sidebarCollapse" class="btn btn-primary" onClick={showHide}>
              <i class="fa fa-bars"></i>
              <span class="sr-only">Toggle Menu</span>
            </button>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fa fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="container">

          <div>
            <div class="row gutters">

              <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 pr-0">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="row gutters">line 1</div>
                    <div class="row gutters ">line 2</div>
                    <div class="row gutters">line 3</div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 ">
                <div class="card h-100">
                  <div class="card-body">
                    left
                  </div>
                </div>
              </div>

            </div>

           
            <div class="row gutters mt-3">

              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                  <div class="card-body">
                    
                    <Table/>
                  </div>
                </div>
              </div>

              

            </div>

          

          </div>

        </div>

      </div>
    </div>
  )
>>>>>>> Yashodha
}

