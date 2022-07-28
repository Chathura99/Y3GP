import React, { useEffect,useState } from 'react';
import Table from "../../../utilities/Table/Table";

import Modal from 'react-bootstrap/Modal';


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
          location: <a variant="primary" style={{color: "blue"}} onClick={() => setShow(true)}>Nikawaratiya</a>,
          
          action: (
            <button
              type="button"
              id="submit"
              name="submit"
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
          location: <a variant="primary" style={{color: "blue"}} onClick={() => setShow(true)}>Horana</a>,
          
          action: (
            <button
              type="button"
              id="submit"
              name="submit"
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
                                <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            View in Map
          </Modal.Title>
          {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button> */}
        </Modal.Header>
        <Modal.Body>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31627.51292771125!2d80.09954441535213!3d7.743159642812479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcd5e12ad2b2e5%3A0x6e1f23e96c120ed3!2zTWFoYXNlbiBOYXRpb25hbCBTY2hvb2wg4La44LeE4LeD4LeZ4Lax4LeKIOC2ouC3j-C2reC3kuC2miDgtrTgt4_gt4Pgtr0!5e0!3m2!1sen!2slk!4v1658951746159!5m2!1sen!2slk"
        width="461"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
            
          
        </Modal.Body>
      </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
