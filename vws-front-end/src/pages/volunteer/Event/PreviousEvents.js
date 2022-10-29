import React, { useEffect,useState } from 'react';

// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
// services
import { getPreviousEvents } from './../../../services/eventServices/eventService';

export default function PreviousEvents() {
  


    useEffect(() => {
        checkValidate();
        getPreviousEventDetails();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };
    const getPreviousEventDetails = async () => {
      const res = await getPreviousEvents();
      // console.log(res.data);
      setPreviousEventData(res.data);
    };

    const [previousEventData, setPreviousEventData] = useState([]);
    const [selected, setSelected] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState({});

    return (
        <>
            <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
                

                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                            <h5>Previous Events</h5><br></br>
                            <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="Previous Events"
                    columns={[
                      { field: "eventId", title: "EVENT ID" },
                      { field: "category", title: "CATEGORY" },
                      { field: "name", title: "COORDINATOR" },
                      { field: "startDate", title: "STARTED ON" },
                      { field: "endDate", title: "ENDS ON" },
                      { field: "noOfVolunteers", title: "NO OF MEMBERS" },
                      { field: "place", title: "LOCATION" },
                    ]}
                    data={previousEventData}
                    // actions={[
                    //   {
                    //     icon: () => {
                    //       return (
                    //         <button
                    //           type="button"
                    //           className="btn mt-0"
                    //           style={{
                    //             backgroundColor: "#96BE25",
                    //             border: "none",
                    //           }}
                    //         >
                    //           Details
                    //         </button>
                    //       );
                    //     },
                    //     onClick: (event, rowData) => {
                    //       // setSelectedJoinRequestsData(rowData);
                    //       setSelected(true);
                    //     },
                    //      tooltip: "Event Details",
                    //   },
                    // ]}
                    />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
