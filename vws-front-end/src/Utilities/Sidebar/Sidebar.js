import React, {useState} from 'react'
import './sidebar.css'
export default function Sidebar() {
const [isActive, setIsActive] = useState("");
 
 function showHide(){
    if(isActive==="")
        setIsActive("active");
    else
        setIsActive("");
 }
  return (
    <div class="wrapper d-flex align-items-stretch">
    <nav id="sidebar" className={isActive}>
        <div class="p-4 pt-3">
          <a href="" class="img logo" style={{ backgroundImage:'./images/Sasnaka-logo.png'}}></a>
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
 
<h2 class="mb-4">Content</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
</div>
  )
}
 
