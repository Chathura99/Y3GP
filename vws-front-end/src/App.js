import "./App.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import LoginPage from "./pages/all/Login/LoginPage";
import HomePage from "./pages/admin/Home/HomePage";
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
import Sidebar from "./pages/admin/Sidebar/Sidebar";
import Guestpage from "./pages/guestUser/home/HomePage";
import ForgotPassword from "./pages/all/ForgotPassword/ForgotPassword";
import Profile from "./pages/all/Profile/Profile";


function App() {

  function sidebar(){
    if(localStorage.getItem("USER_KEY")){
      return <Sidebar />
    }
  }
  
  return (
    <div className="App">
      <BrowserRouter>
      {sidebar()}
        <Routes>
          <Route exact path="/" element={<Guestpage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
          <Route path="/viewprofile" element={<Profile/>}></Route>

          {/* admin part */}
          <Route path="/adminhome" element={<HomePage />}></Route>
          <Route
            path="/adminviewannouncement"
            element={<ViewAnnouncement />}
          ></Route>
          <Route path="/adminevent" element={<Event />}></Route>
          <Route path="/adminforum" element={<Forum />}></Route>
          <Route path="/adminpoll" element={<Poll />}></Route>
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
          <Route path="/adminmembersummary" element={<MemberSummary />}></Route>
          <Route path="/admincurrentuser" element={<CurrentUser />}></Route>
          <Route path="/adminnewuser" element={<NewUser />}></Route>


          {/* project coordinator part */}



          {/* volunteer part */}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

// 2596BE light blue
// 96BE25 dark green
// BE4D25 dark orange
// 145369 dark blue
// 6C25BE purple
// BE2596 pink
// 49BE25 light green
// BEA925 brown
// A6A6A6 gray
