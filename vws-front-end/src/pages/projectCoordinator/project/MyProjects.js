import React, { useEffect,useState } from 'react';
import NewTable from '../../../utilities/Table/NewTable';
//import CoordinateEventForm from './Coordinate';
import "./Project.css"
import { useMemo } from 'react';
import EditProject from "./EditProject";

// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";

// services
import { getOngoingProjects } from "../../../services/projectServices/projectService";
import { getMyProjectsData } from "../../../services/projectServices/projectService";

export default function PcMyProject() {

    useEffect(() => {
        checkValidate();
        myProject();
        getOngoingProjectDetails();
    }, []);


      const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
          window.location.href = "/";
        }
      };


      const myProject = async () => {
        const res = await getMyProjectsData();
        console.log(res.data);
        setMyProjectsData(res.data);
      };

      const [myProjectsData, setMyProjectsData] = useState([]);

    const getOngoingProjectDetails = async () => {
        const res = await getOngoingProjects();
        // console.log(res.data);
        setOnGoingProjectData(res.data);
      };

    const [onGoingProjectData, setOnGoingProjectData] = useState([]);
    const [selectedProject, setSelectedProject] = useState({});

//  const [myProjectsData, setMyProjectsData] = useState([
//    {
//      project_id: "E001",
//      project_name: "Ganitha Saviya",
//      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//      coordinator: "Ravindu",
//      startdate: "2022 09 14",
//      // no_of_members: "13",
//      // location: "Nikawaratiya",
//
//      action: (
//        <button
//          type="button"
//          id="submit"
//          name="submit"
//          className="btn p-1"
//          style={{backgroundColor:"#96BE25",border:"none"}}
//          // #96BE25,#BE4D25
//          // onClick={handleSubmit}
//        >
//          Ongoing
//        </button>
//      ),
//    }
//  ]);
//  const [upcomingProjectsData, setUpComingProjectsData] = useState([
//    {
//      project_id: "E001",
//      project_name: "Ganitha Saviya",
//      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//      coordinator: "Ravindu",
//      startdate: "2022 09 14",
//      // no_of_members: "13",
//      // location: "Nikawaratiya",
//
//      action: (
//        <button
//          type="button"
//          id="submit"
//          name="submit"
//          className="btn btn-primary p-1"
//          data-toggle="modal"
//          data-target="#CoordinateEventForm"
//          style={{backgroundColor:"#96BE25",border:"none"}}
//          // #96BE25,#BE4D25
//          // onClick={handleSubmit}
//        >
//          Accept
//        </button>
//      ),
//    },
//    {
//      project_id: "E002",
//      project_name: "Widyawa Mulasita",
//      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//      coordinator: "Tharindu",
//      startdate: "2022 09 14",
//      // no_of_members: "8",
//      // location: "Horana",
//
//      action: (
//        <button
//          type="button"
//          id="submit"
//          name="submit"
//          className="btn btn-primary p-1"
//          data-toggle="modal"
//          data-target="#CoordinateEventForm"
//          style={{backgroundColor:"#96BE25",border:"none"}}
//          // #96BE25,#BE4D25
//          // onClick={handleSubmit}
//        >
//          Accept
//        </button>
//      ),
//    },
//  ]);
//
//  const [MyProjectsHeadings, setMyProjectsTableHead] = useState([
//    { accessor: "project_id", Header: "Project ID" },
//    { accessor: "project_name", Header: "Project Name" },
//    { accessor: "description", Header: "Description" },
//    { accessor: "coordinator", Header: "Coordinator" },
//    { accessor: "startdate", Header: "Start Date" },
//    // { id: "no_of_members", label: "Coordinate Events" },
//    // { id: "location", label: "Location" },
//    { accessor: "action", Header: "Status" },
//
//  ]);
//
//
//  const [UpcomingProjectsHeadings, setUpComingProjectsTableHead] = useState([
//    { accessor: "project_id", Header: "Project ID" },
//    { accessor: "project_name", Header: "Project Name" },
//    { accessor: "description", Header: "Description" },
//    { accessor: "coordinator", Header: "Coordinator" },
//    { accessor: "startdate", Header: "Start Date" },
//    // { id: "no_of_members", label: "Coordinate Events" },
//    // { id: "location", label: "Location" },
//    { accessor: "action", Header: "Action" },
//
//  ]);
//
//useEffect(() => {
//    checkValidate();
//}, []);
//
//const checkValidate = async () => {
//    const y = localStorage.getItem("USER_KEY");
//    if (!y) {
//        window.location.href = "/";
//    }
//};

    const [selected, setSelected] = useState(false);

  return (
    <>
    <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
      <div className="row gutters mt-10">
        <div className="col-xl-12 col-lg-12 col-md-24 col-sm-12 col-12">
          <div className="card h-100" id="contentcard">
            <div className="card-body">
            <div
                className="row gutters "
                style={{ justifyContent: "center" }}
            >
                <MaterialTable
                    components={{
                        Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="My Project"
                    columns={[
                        { field: "projectId", title: "PROJECT ID" },
                        {
                            field: "name",
                            title: "PROJECT NAME",
                            minWidth: "150px",
                        },
                        { field: "firstName", title: "COORDINATOR" },
                        { field: "phoneNumber", title: "PHONE" },
                        {
                            field: "startDate",
                            title: "STARTED ON",
                            minWidth: "150px",
                        },
                    ]}
                    data={onGoingProjectData}
                    actions={[
                        {
                            icon: () => {
                                return (
                                    <button
                                        type="button"
                                        class="btn"
                                        style={{
                                            backgroundColor: "#96BE25",
                                            border: "none",
                                            marginRight: 0,
                                        }}
                                    >
                                        Edit
                                    </button>
                                );
                            },
                            onClick: (event, rowData) => {
                                setSelectedProject(rowData);
                                setSelected(true);
                            },

                            // tooltip: "Register User",
                        },
                    ]}
                />
            </div>

            </div>
          </div>
        </div>

        {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
          <div className="card h-100" id="contentcard">
            <div className="card-body">
              <div className="row gutters ">
                <h3 className="ml-3">Title</h3>
              </div>
              <div className="row gutters ">
                Content
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="row gutters mt-3">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card h-100" id="contentcard">
            <div className="card-body ">

                <div
                  className="row gutters "
                  style={{ justifyContent: "center" }}
                >
                  <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="Event Requests"
                    columns={[
                      { field: "projectId", title: "PROJECT ID" },
                      {
                        field: "name",
                        title: "PROJECT NAME",
                        minWidth: "150px",
                      },
                      { field: "firstName", title: "COORDINATOR" },
                      { field: "phoneNumber", title: "PHONE" },
                      {
                        field: "startDate",
                        title: "STARTED ON",
                        minWidth: "150px",
                      },
                    ]}
                    data={onGoingProjectData}
                    actions={[
                      {
                        icon: () => {
                          return (
                            <button
                              type="button"
                              class="btn"
                              style={{
                                backgroundColor: "#96BE25",
                                border: "none",
                                marginRight: 0,
                              }}
                            >
                              Edit
                            </button>
                          );
                        },
                        onClick: (event, rowData) => {
                          setSelectedProject(rowData);
                          setSelected(true);
                        },
                        // tooltip: "Register User",
                      },
                    ]}
                  />
            </div>
          </div>
        </div>
      </div>
    </div>
    {selected && (
              <EditProject setSelected={setSelected} data={selectedProject} />
            )}

            <br></br>
    </div>
  </>
  )
}
