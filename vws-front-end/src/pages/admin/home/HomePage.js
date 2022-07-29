import React, { useState, useEffect } from "react";
import Table from "../../../utilities/Table/Table";
import DonutChart from "../../../utilities/Charts/DonutChart";
import PieChart from "../../../utilities/Charts/PieChart";
import "./homepage.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { getJoinRequest } from "../../../services/adminServices/JoinRequestService";
import Loading from "../../../utilities/Loading/Loading";

export default function HomePage() {
  const [upComingEventsData, setUpComingEventsData] = useState([
    {
      eventId: "E001",
      project: "Ganitha Saviya",
      place: "Kurunegala",
      member: 25,
      coordinator: "Ravindu Prabasha",
      date: "2022 09 12",
    },
    {
      eventId: "E002",
      project: "Re-green Earth",
      place: "Kaduruwela",
      member: 100,
      coordinator: "Namal Upendra",
      date: "2022 09 25",
    },
    {
      eventId: "E003",
      project: "Re-green Earth",
      place: "Matara",
      member: 130,
      coordinator: "Sahan Kalhara",
      date: "2022 09 25",
    },
  ]);

  const [upComingEventsTableHead, setUpComingEventsTableHead] = useState([
    { id: "eventId", label: "EVENT ID" },
    { id: "project", label: "PROJECT NAME" },
    { id: "place", label: "PLACE" },
    { id: "member", label: "MEMBERS" },
    { id: "coordinator", label: "COORDINATOR" },
    { id: "date", label: "DATE" },
  ]);

  const [joinRequestsData, setJoinRequestsData] = useState([
    // {
    //   id: "",
    //   firstName: "",
    //   nic: "",
    //   phoneNumber: "",
    //   date: "",
    //   district: "",
    //   universityCollege: "",
    //   status: (
    //     <button
    //       type="button"
    //       id="submit"
    //       name="submit"
    //       className="btn mt-0"
    //       style={{
    //         backgroundColor: "#BE4D25",
    //         border: "none",
    //         marginRight: "2px",
    //       }}
    //       // #96BE25,#BE4D25
    //       // onClick={handleSubmit}
    //     >
    //       Rejected
    //     </button>
    //   ),
    // },
  ]);

  const [joinRequestsTableHead, setJoinRequestsTableHead] = useState([
    { id: "id", label: "REQUEST ID" },
    { id: "firstName", label: "NAME" },
    { id: "nic", label: "NIC" },
    { id: "phoneNumber", label: "PHONE" },
    { id: "date", label: "DATE" },
    { id: "district", label: "DISTRICT" },
    { id: "universityCollege", label: "UNIVERSITY" },
    { id: "status", label: "STATUS" },
  ]);

  useEffect(() => {
    checkValidate();
    getRequest();
  },[]);

  const getRequest = async () => {
    const res = await getJoinRequest();
    console.log(...res.data);
    // find mistake
    setJoinRequestsData([...joinRequestsData, res.data]);
    console.log(joinRequestsData);
  };

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 ">
            <div className="card h-8" id="contentcard">
              <div className="card-body" id="mid">
                <div className="row gutters">Volunteers</div>
                <div className="row gutters ">
                  <div className="featuredContainer">
                    <span className="featured">750</span>
                    <span className="rate">
                      0 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="rate">
                      +25 <ArrowUpward className="featuredIcon" />
                    </span>
                  </div>
                </div>
                <div className="row gutters">
                  <small>Compared to last month</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  ">
            <div className="card h-8" id="contentcard">
              <div className="card-body" id="mid">
                <div className="row gutters">Events Completed</div>
                <div className="row gutters ">
                  <div className="featuredContainer">
                    <span className="featured">119</span>
                    <span className="rate">
                      -3 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="rate">
                      0 <ArrowUpward className="featuredIcon" />
                    </span>
                  </div>
                </div>
                <div className="row gutters">
                  <small>Compared to last month</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 ">
            <div className="card h-10" id="contentcard">
              <div className="card-body" id="mid">
                <div className="row gutters">New Requests</div>
                <div className="row gutters ">
                  <div className="featuredContainer">
                    <span className="featured">8</span>
                    <span className="rate">
                      0 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="rate">
                      +3 <ArrowUpward className="featuredIcon" />
                    </span>
                  </div>
                </div>
                <div className="row gutters">
                  <small>Compared to last month</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  ">
            <div className="card h-10" id="contentcard">
              <div className="card-body" id="mid">
                <div className="row gutters">Total Projects</div>
                <div className="row gutters ">
                  <div className="featuredContainer">
                    <span className="featured">19</span>
                    <span className="rate">
                      0 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="rate">
                      +25 <ArrowUpward className="featuredIcon" />
                    </span>
                  </div>
                </div>
                <div className="row gutters">
                  <small>Compared to last month</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters">
                  {/* <h5>Upcoming Events</h5> */}
                </div>
                <div className="row gutters ">
                  <Table
                    rows={upComingEventsData}
                    headCells={upComingEventsTableHead}
                    tableName={"Up Coming Events"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters ">
                  <h3 className="ml-3">
                    <h5>Project Summary</h5>
                  </h3>
                </div>
                <div className="row gutters ">
                  <DonutChart />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
                <div className="row gutters ">
                  <h3 className="ml-3">
                    <h5>Poll Results</h5>
                    <h6>Title : Event for september</h6>
                  </h3>
                </div>
                <div className="row gutters ">
                  <PieChart />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
                <Table
                  rows={joinRequestsData}
                  headCells={joinRequestsTableHead}
                  tableName={"Join Requests"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
