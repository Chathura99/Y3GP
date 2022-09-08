import React, { useEffect,useState } from 'react';
import PieChart from './../../../utilities/Charts/PieChart';
import EditCoordinatedForm from './EditCoordinatedForm';
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
import { getApprovedCoordinatedEvents } from './../../../services/eventServices/eventService';


export default function CoordinatedEvents() {
  

      const [pieChartData, setPieChartData] = useState([
        ["Event", "Completed precentage"],
        ["Ganitha Saviya", 60],
        ["Re-green Earth", 40],
      ]);

    useEffect(() => {
        checkValidate();
        MyCoordinatedEvent();

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
    const [selected, setSelected] = useState(false);
  
    const [approvedCoordinatedEventData, setApprovedCoordinatedEventData] = useState([]);

    return (
        <>
            <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
                

                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body">
                            <h5>Coordinated Event Progres</h5>
                                <PieChart data={pieChartData}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                            <h5>Coordinated Events</h5><br></br>
                            <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="Ongoing Events"
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
                              data-target="#CoordinateEventForm"
                              style={{
                                backgroundColor: "#2596BE",
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
                          setApprovedCoordinatedEventData(rowData);
                          setSelected(true);
                        },
                        tooltip: "View Location",
                      },

                     
                      
                    ]}
                    />


                                <EditCoordinatedForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
