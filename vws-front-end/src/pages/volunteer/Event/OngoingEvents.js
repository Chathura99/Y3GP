import React, { useEffect,useState } from 'react';
import Table from "../../../utilities/Table/Table";

// import Modal from 'react-bootstrap/Modal';
import TopFormPopUp from '../../../utilities/PopUps/TopFormPopUp';
import MapFormPopUp from './MapFormPopUp';



export default function OngoingEvents() {
  const [show, setShow] = useState(false);
  
    const [upcomingEventsData, setUpComingEventsData] = useState([
        {
          event_id: "E001",
          category: "Ganitha Saviya",
          event_coordinator: "Ravindu",
          phone: "+94 763314467",
          startdate: "2022 09 12",
          enddate: "2022 09 14",
          no_of_members: "13",
          location: 
          <button
          type="button"
          id="submit"
          name="submit"
          data-toggle="modal"
          data-target="#ModalCenter"
          className="btn p-1"
          style={{backgroundColor:"#2596BE",border:"none"}}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          View in Map
        </button>,
          
          action: (
            <button
              type="button"
              id="submit"
              name="submit"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              className="btn p-1"
              style={{backgroundColor:"#96BE25",border:"none"}}
              // #96BE25,#BE4D25
              // onClick={handleSubmit}
            >
              Join
            </button>
          ),
        },
        {
          event_id: "E002",
          category: "Re-green Earth",
          event_coordinator: "Sadaru",
          phone: "+94 719735645",
          startdate: "2022 09 02",
          enddate: "2022 09 04",
          no_of_members: "8",
          location: 
          <button
          type="button"
          id="submit"
          name="submit"
          data-toggle="modal"
          data-target="#ModalCenter"
          className="btn p-1"
          style={{backgroundColor:"#2596BE",border:"none"}}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          View in Map
        </button>,
          
          action: (
            <button
              type="button"
              id="submit"
              name="submit"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              className="btn p-1"
              style={{backgroundColor:"#96BE25",border:"none"}}
              // #96BE25,#BE4D25
              // onClick={handleSubmit}
            >
              Join
            </button>
          ),
        },
      ]);
    
      const [UpcomingEventsHeadings, setUpComingEventsTableHead] = useState([
        { id: "event_id", label: "EVENT ID" },
        { id: "category", label: "CATEGORY" },
        { id: "event_coordinator", label: "EVENT COORDINATOR" },
        { id: "phone", label: "PHONE" },
        { id: "startdate", label: "STARTS ON" },
        { id: "enddate", label: "ENDS ON" },
        { id: "no_of_members", label: "NO. OF MEMBERS" },
        { id: "location", label: "LOCATION" },
        { id: "action", label: "JOIN" },
    
      ]);

    useEffect(() => {
        checkValidate();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };
    return (
        <>
        
            <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
                

                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                            <h5>Ongoing Projects</h5>
                            
                                <Table rows={upcomingEventsData} headCells={UpcomingEventsHeadings} />
                                
                                <TopFormPopUp />
                                <MapFormPopUp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
