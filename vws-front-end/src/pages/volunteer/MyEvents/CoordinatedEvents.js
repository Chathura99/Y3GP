import React, { useEffect,useState } from 'react';
import PieChart from './../../../utilities/Charts/PieChart';
import EditCoordinatedForm from './EditCoordinatedForm';
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
import { getApprovedCoordinatedEvents, getCoordinatedEvents } from './../../../services/eventServices/eventService';


export default function CoordinatedEvents() {
  

      // const [pieChartData, setPieChartData] = useState([
      //   ["Event", "Completed precentage"],
      //   ["Ganitha Saviya", 60],
      //   ["Re-green Earth", 40],
      // ]);

    useEffect(() => {
        checkValidate();
        MyCoordinatedEvent();
        MyPendingCoordinatedEvent();

    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const MyCoordinatedEvent = async () => {
      const res = await getApprovedCoordinatedEvents();
      setApprovedCoordinatedEventData(res.data);
    };
    
    const MyPendingCoordinatedEvent = async () => {
      const res = await getCoordinatedEvents();
      setNotApprovedCoordinatedEventData(res.data);
    };

    const [approvedCoordinatedEventData, setApprovedCoordinatedEventData] = useState([]);
    const [notApprovedCoordinatedEventData, setNotApprovedCoordinatedEventData] = useState([]);

    const [eventData, setEventData] = useState({});
    const [selected, setSelected] = useState(false);

    return (
        <>
            <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
                

                {/* <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body">
                            <h5>Coordinated Event Progres</h5>
                                <PieChart data={pieChartData}/>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body">
                            <h5>My Coordinated Events</h5>
                            <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="Coordinated Events"
                    columns={[
                      {
                        field: "eventId",
                        title: "EVENT ID",
                        
                      },
                      {
                        field: "category",
                        title: "CATEGORY",
                      },
                      { field: "name", title: "COORDINATOR" },
                      
                      {
                        field: "startDate",
                        title: "STARTED ON",
                        minWidth: "150px",
                      },
                      {
                        field: "endDate",
                        title: "ENDS ON",
                        minWidth: "150px",
                      },
                      {
                        field: "noOfVolunteers",
                        title: "NO OF MEMBERS",
                      },
                      {
                        field: "place",
                        title: "Location",
                      },
                      
                    ]}
                    data={approvedCoordinatedEventData}
                    actions={[
                      {
                        
                        icon: () => {
                          return (
                            <button
                              type="button"
                              class="btn"
                              data-toggle="modal"
                              style={{
                                backgroundColor: "#96BE25",
                                width: "6rem",
                                border: "none",
                                marginRight: 0,
                              }}
                            >
                              Edit
                            </button>
                          );
                        },
                        onClick: (event, rowData) => {
                          setEventData(rowData);
                          setSelected(true);
                        },
                        tooltip: "Edit Details",
                      },

                     
                      
                    ]}
                    />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                            <h5>Pending Coordinated Events (till get Approval)</h5><br></br>
                            <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="Coordinated Events"
                    columns={[
                      {
                        field: "eventId",
                        title: "EVENT ID",
                        
                      },
                      {
                        field: "category",
                        title: "CATEGORY",
                      },
                      { field: "name", title: "COORDINATOR" },
                      
                      {
                        field: "startDate",
                        title: "STARTED ON",
                        minWidth: "150px",
                      },
                      {
                        field: "endDate",
                        title: "ENDS ON",
                        minWidth: "150px",
                      },
                      {
                        field: "noOfVolunteers",
                        title: "NO OF MEMBERS",
                      },
                      {
                        field: "place",
                        title: "Location",
                      },
                      
                    ]}
                    data={notApprovedCoordinatedEventData}
                    actions={[
                      {
                        
                        icon: () => {
                          return (
                            <button
                              type="button"
                              class="btn"
                              data-toggle="modal"
                              style={{
                                backgroundColor: "#BE4D25",
                                width: "6rem",
                                border: "none",
                                marginRight: 0,
                              }}
                            >
                              Cancel
                            </button>
                          );
                        },
                        onClick: (event, rowData) => {
                          setEventData(rowData);
                          setSelected(true);
                        },
                        tooltip: "Edit Details",
                      },

                     
                      
                    ]}
                    
                    />


                            </div>
                        </div>
                    </div>
                </div>
                {selected && <EditCoordinatedForm setSelected={setSelected} eventData={eventData}/>}

            </div>
        </>
    );
}
