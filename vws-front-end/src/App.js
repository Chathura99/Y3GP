import "./App.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />}></Route>
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
