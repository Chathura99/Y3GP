import React, { useState, useEffect,useMemo } from "react";
import { LineChart } from "../../../utilities/Charts/LineChart";
import NewTable from "../../../utilities/Table/NewTable.js";
import Table from "../../../utilities/Table/Table";
import { red } from "@mui/material/colors";
// import EditProject from "./EditProject";
import "./Summary.css";
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
import { getOngoingProjects } from "../../../services/projectServices/projectService";

export default function ProjectSummary() {
  useEffect(() => {
    checkValidate();
    getOngoingProjectDetails();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
  const getOngoingProjectDetails = async () => {
    const res = await getOngoingProjects();
    // console.log(res.data);
    setOnGoingProjectData(res.data);
  };

  const [onGoingProjectData, setOnGoingProjectData] = useState([]);
  const [projectData, setProjectData] = useState({});
  const [selected, setSelected] = useState(false);
  
  const [lineChartData, setLineChartData] = useState([
    [
      "Month",
      "No of Projects",
      // "MathLab",
      // "Regreen Earth",
      // "Lohithuppada",
      // "Sarasavi Piyageta",
    ],
    ["Jan", 10],
    ["Feb", 15],
    ["Mar", 12],
    ["Apr", 25],
    ["May", 30],
    ["Jun", 20],
    // ["Jan", 100, 5, 15, 1, 1],
    // ["Feb", 150, 0, 15, 2, 2],
    // ["Mar", 120, 0, 5, 2, 2],
    // ["Apr", 250, 0, 15, 2, 3],
    // ["May", 300, 4, 18, 1, 1],
    // ["Jun", 200, 5, 20, 1, 1],
  ]);
  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters ">
                  <h5>Project Summary</h5>
                </div>
                <div id="selectionrow">
                  
                    <form onSubmit={""}>
                    <div id="q5" >
                        <button type="button" className="btn p-1" id="generate"> Generate</button>
                      </div>
                      <div id="qQ3">
                        <label for="datefrom" id="qQ3label" ><b>Year</b> </label>
                        <input type="date"
                        className="form-control"
                        id="fromdate"
                        placeholder="select date"
                        // value={profile.firstName}
                        name="datefrom"/>
                      </div>
                      
                      

                    </form>
                  
                </div>
                <div className="row gutters ">
                  <LineChart data={lineChartData} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3" id="outertablebox">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" id="outertablebox2" >
            <div className="card h-100" id="contentcard2">
              <div className="card-body ">
                <div id="selectionrow">
                  
                    <form onSubmit={""}>
                      <div id="q1" >
                        <label for="event" id="q1label"><b>Event</b> </label>
                        <select id="eventlist" name="event" size="1" className="form-control" >
                          <option value="Completed">Completed</option>
                          <option value="Ongoing">Ongoing</option>
                          <option value="Upcoming">Upcoming</option>
                          
                        </select>
                      </div>
                      {/* <div id="q2">
                        <label for="event" id="q2label" ><b>District</b> </label>
                        <select id="Disctrictlist" name="event" size="1" className="form-control" >
                          <option value="Colombo">Colombo</option>
                          <option value="Kalutara">Kalutara</option>
                          <option value="Gampaha">Gampaha</option>
                          
                        </select>
                      </div> */}
                      <div id="q3">
                        <label for="datefrom" id="q3label" ><b>Date From</b> </label>
                        <input type="date"
                        className="form-control"
                        id="fromdate"
                        placeholder="select date"
                        // value={profile.firstName}
                        name="datefrom"/>
                      </div>
                      <div id="q4">
                        <label for="datefrom" id="q4label" ><b>To</b> </label>
                        <input type="date"
                        className="form-control"
                        id="todate"
                        placeholder="select date"
                        // value={profile.firstName}
                        name="datefrom"/>
                      </div>
                      <div id="q5" >
                        <button type="button" className="btn p-1" id="generate"> Generate</button>
                      </div>

                    </form>
                  
                </div>
                <div id="eventleftside">
                    <div className="container-fluid calculated-bodywidth"  id="Eblaa" >
                

                        <div className="row gutters mt-3">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card h-100" id="contentcard">
                                    <div className="card-body " >                          
                                    <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="Ongoing Projects"
                    columns={[
                      // { field: "projectId", title: "PROJECT ID" },
                      {
                        field: "name",
                        title: "PROJECT NAME",
                        minWidth: "150px",
                      },
                      {
                        field: "description",
                        title: "DESCRIPTION",
                        minWidth: "200px",
                      },
                      { field: "firstName", title: "COORDINATOR" },
                      
                      {
                        field: "startDate",
                        title: "STARTED ON",
                        minWidth: "150px",
                      },
                      
                    ]}
                    data={onGoingProjectData}
                 
                  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
