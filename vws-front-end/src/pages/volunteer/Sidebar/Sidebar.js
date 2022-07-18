import React, { useState } from 'react'
import './sidebar.css'
import Table from '../../../Utilities/Table/Table';

export default function Sidebar() {
  const [isActive, setIsActive] = useState("");

  function showHide() {
    if (isActive === "")
      setIsActive("active");
    else
      setIsActive("");
  }
  return (
    <div class="wrapper d-flex align-items-stretch">
      <nav id="sidebar" className={isActive}>
        <div class="p-4 pt-3">
          <a href="" class="img logo" style={{ backgroundImage: './images/Sasnaka-logo.png' }}></a>
          <ul class="list-unstyled components mb-5">
            <li class="active">
              <a href=""><i class="fa fa-home ml-3 mr-4"></i>Home</a>
            </li>
            <li >
              <a href=""><i class="fa fa-newspaper-o ml-3 mr-4"></i>Projects</a>
            </li>
            <li>
              <a href="#eventSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-calendar-check-o ml-3 mr-4"></i>Events</a>
              <ul class="collapse list-unstyled" id="eventSubmenu">
                <li class="ml-5">
                  <a href="">Ongoing Events</a>
                </li>
                <li class="ml-5">
                  <a href="">Previous Events</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#myEventSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-calendar-plus-o ml-3 mr-4"></i>My Events</a>
              <ul class="collapse list-unstyled" id="myEventSubmenu">
                <li class="ml-5">
                  <a href="#">Upcoming Events</a>
                </li>
                <li class="ml-5">
                  <a href="">Completed Events</a>
                </li>
                <li class="ml-5">
                  <a href="">Coordinated Events</a>
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
              <a href="#"><i class="fa fa-bar-chart ml-3 mr-4"></i>Summary</a>
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

                    <Table />
                  </div>
                </div>
              </div>



            </div>



          </div>

        </div>

      </div>
    </div>
  )
}

