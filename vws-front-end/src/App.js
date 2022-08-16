import "./App.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import LoginPage from "./pages/all/Login/LoginPage";
import AdminHomePage from "./pages/admin/Home/HomePage";
import PcHomePage from "./pages/projectCoordinator/Home/HomePage";
import VolunteerHomePage from "./pages/volunteer/home/HomePage";
import ViewAnnouncement from "./pages/admin/Announcement/ViewAnnouncement";
import Event from "./pages/admin/Event/Event";
import Forum from "./pages/admin/ForumPoll/Forum";
import Poll from "./pages/admin/ForumPoll/Poll";
import OnGoingProject from "./pages/admin/Project/OnGoingProject";
import ProposedProject from "./pages/admin/Project/ProposedProject";
import EventSummary from "./pages/admin/Summary/EventSummary";
import ProjectSummary from "./pages/admin/Summary/ProjectSummary";
import MemberSummary from "./pages/admin/Summary/MemberSummary";
import CurrentUser from "./pages/admin/User/CurrentUser";
import NewUser from "./pages/admin/User/NewUser";
import AdminSidebar from "./pages/admin/Sidebar/Sidebar";
import PcSidebar from "./pages/projectCoordinator/Sidebar/Sidebar";
import VolunteerSidebar from "./pages/volunteer/Sidebar/Sidebar";
import Guestpage from "./pages/guestUser/Home/HomePage";
import ForgotPassword from "./pages/all/ForgotPassword/ForgotPassword";
import Profile from "./pages/all/Profile/Profile";
import { fetchUserData } from "./services/authenticationService";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";

import SignUp from "./pages/guestUser/SignUp/SignUp";
import RequestNewEvent from "./pages/guestUser/RequestNewEvent/RequestNewEvent";
import UpcomingEventsFullPage from "./pages/guestUser/UpcomingEvents/UpcomingEventsFullPage";
import MoreLatestEvents from "./pages/guestUser/OurLatestEvents/MoreLatestEvents";

import Projects from "./pages/volunteer/Projects/Projects";
import OngoingEvents from "./pages/volunteer/Event/OngoingEvents";
import PreviousEvents from "./pages/volunteer/Event/PreviousEvents";
import UpcomingEvents from "./pages/volunteer/MyEvents/UpcomingEvents";
import CompletedEvents from "./pages/volunteer/MyEvents/CompletedEvents";
import CoordinatedEvents from "./pages/volunteer/MyEvents/CoordinatedEvents";

// Project Coordinator
import PcOngoingProject from "./pages/projectCoordinator/project/OngoingProject";
import PcMyProject from "./pages/projectCoordinator/project/MyProjects";
import PcUpcomingEvents from "./pages/projectCoordinator/Event/upcomingevents";
import PcPreviousEvents from "./pages/projectCoordinator/Event/previousevents";
import PcCompletedEvents from "./pages/projectCoordinator/MyEvents/completedevents";
import PcMyEvents from "./pages/projectCoordinator/MyEvents/myevents";
import PcCoordinatedEvents from "./pages/projectCoordinator/MyEvents/coordinatedevents";
import PcVolunteers from "./pages/projectCoordinator/Volunteers/volunteer";
import PcAnnouncements from "./pages/projectCoordinator/Announcement/announcements";
import PcForum from "./pages/projectCoordinator/Poll/forum";
import PcSummary from "./pages/projectCoordinator/Summary/summary";
import Loading from "./utilities/Loading/Loading";
import ViewForum from "./pages/admin/ForumPoll/ViewForum";
import Event1 from './pages/guestUser/OurLatestEvents/Event1';


function App() {
  const [userrole, setUserRoles] = useState([]);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    const res = await fetchUserData();
    setUserId(res.data.id);
    setUserRoles(res.data.roles[0].roleCode);
    // console.log(userId, userrole);
  };

  function sidebar() {
    // console.log("current URL :", window.location.href);
    // "http://localhost:3000/signUp"
    if (!(window.location.href === "http://localhost:3000/login")) {
      if (localStorage.getItem("USER_KEY")) {
        if (userrole === "PROJECT_COORDINATOR") return <PcSidebar />;
        else if (userrole === "ADMIN") return <AdminSidebar />;
        else if (userrole === "VOLUNTEER") return <VolunteerSidebar />;
      }
    }
  }
  // for overide material table style
  const theme = createTheme({
    overrides: {
      MuiTableCell: {
        root: {
          padding: 2,
          "&:last-child": {
            paddingRight: 5,
          },
        },
      },
    },
  });

  return (

    <MuiThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          {sidebar()}
          <Routes>
            <Route exact path="/" element={<Guestpage />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route
              exact
              path="/requestnewevent"
              element={<RequestNewEvent />}
            ></Route>

            <Route exact path="/allupcomingevents" element={<UpcomingEventsFullPage />}></Route>
            <Route exact path="/morelatestevents" element={<MoreLatestEvents />}></Route>
            <Route exact path="/Event1" element={<Event1/>}></Route>


            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
            <Route path="/viewprofile" element={<Profile />}></Route>

            {/* admin part */}
            <Route path="/adminhome" element={<AdminHomePage />}></Route>
            <Route
              path="/adminviewannouncement"
              element={<ViewAnnouncement />}
            ></Route>
            <Route path="/adminevent" element={<Event />}></Route>
            <Route path="/adminforum" element={<Forum />}></Route>
            <Route path="/adminpoll" element={<Poll />}></Route>
            <Route path="/adminviewforum" element={<ViewForum />}></Route>
            
            
            <Route
              path="/adminongoingproject"
              element={<OnGoingProject />}
            ></Route>
            <Route
              path="/adminproposedproject"
              element={<ProposedProject />}
            ></Route>
            <Route path="/admineventsummary" element={<EventSummary />}></Route>
            <Route
              path="/adminprojectsummary"
              element={<ProjectSummary />}
            ></Route>
            <Route
              path="/adminmembersummary"
              element={<MemberSummary />}
            ></Route>
            <Route path="/admincurrentuser" element={<CurrentUser />}></Route>
            <Route path="/adminnewuser" element={<NewUser />}></Route>
            <Route path="/loading" element={<Loading />}></Route>

            {/* project coordinator part */}
            <Route path="/pchome" element={<PcHomePage />}></Route>

            {/* project coordinator part */}
            <Route path="/pchome" element={<PcHomePage />}></Route>
            <Route
              path="/pcongoingproject"
              element={<PcOngoingProject />}
            ></Route>
            <Route path="/pcmyproject" element={<PcMyProject />}></Route>
            <Route
              path="/pcupcomingevents"
              element={<PcUpcomingEvents />}
            ></Route>
            <Route
              path="/pcpreviousevents"
              element={<PcPreviousEvents />}
            ></Route>
            <Route
              path="/pccompletedevents"
              element={<PcCompletedEvents />}
            ></Route>
            <Route path="/pcmyevents" element={<PcMyEvents />}></Route>
            <Route
              path="/pccoordinatedevents"
              element={<PcCoordinatedEvents />}
            ></Route>
            <Route path="/pcvolunteers" element={<PcVolunteers />}></Route>
            <Route
              path="/pcannouncements"
              element={<PcAnnouncements />}
            ></Route>
            <Route path="/pcforum" element={<PcForum />}></Route>
            <Route path="/pcsummary" element={<PcSummary />}></Route>



            {/* volunteer part */}
            <Route path="/volunteerhome" element={<VolunteerHomePage />}></Route>
            <Route path="/volunteerProjects" element={<Projects />}></Route>
            <Route path="/volunteerOngoingEvents" element={<OngoingEvents />}>

            </Route>
            <Route path="/volunteerPreviousEvents" element={<PreviousEvents />}></Route>
            <Route path="/volunteerUpcomingEvents" element={<UpcomingEvents />}></Route>
            <Route path="/volunteerCompletedEvents" element={<CompletedEvents />}></Route>
            <Route path="/volunteerCoordinatedEvents" element={<CoordinatedEvents />}></Route>


          </Routes>
        </BrowserRouter>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
