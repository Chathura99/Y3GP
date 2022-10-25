import React, { useEffect, useState } from "react";
import "./ourprojects.css";
import { Link } from "react-router-dom";
import { getOngoingProjects } from "../../../services/projectServices/projectService";

export default function OurProjects() {
  useEffect(() => {
    getOngoingProjectDetails();
  }, []);

  const [onGoingProjectData, setOnGoingProjectData] = useState([]);
  const [show, setShow] = useState(0);

  const getOngoingProjectDetails = async () => {
    const res = await getOngoingProjects();
    // console.log(res.data);
    setOnGoingProjectData(res.data);
  };
  return (
    <div>
      <div className=" container-fluid" id="project-cont">
        <h1 id="project-hedaing">Our Projects</h1>

        {onGoingProjectData.map(
          (pro, index) =>
            show === index && (
              <div className="row gutters" id="project">
                {/* left side */}
                <div
                  className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                  id="project-left"
                >
                  <h1 id="project-right-H1">{pro.name}</h1>

                  <img
                    src="https://img.freepik.com/free-vector/people-volunteering-donating-money_53876-66112.jpg"
                    class="img-fluid"
                    id="project-img"
                    alt="Project image"
                  ></img>

                  <div
                    className="d-flex justify-content-between"
                    id="icon-group"
                  >
                    <Link to="#">
                      <i
                        class="fa fa-arrow-circle-left fa-4x"
                        aria-hidden="true"
                        id="icon-left"
                        onClick={() => {
                            console.log(pro.projectId);
                            setShow(show - 1);
                          }}
                      ></i>
                    </Link>

                    <Link to="#">
                      <i
                        class="fa fa-arrow-circle-right fa-4x"
                        aria-hidden="true"
                        id="icon-right"
                        onClick={() => {
                          console.log(pro.projectId);
                          setShow(show + 1);
                        }}
                      ></i>
                    </Link>
                  </div>
                </div>

                {/* right side */}
                <div
                  className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                  id="project-right"
                >
                  <h4 id="project-right-H2">
                    <p>The {pro.name} project</p>
                    <p>Phone:{pro.phoneNumber}</p>
                    <p>Description:{pro.description}</p>
                    <p>Event Per Year:{pro.eventPerYear}</p>
                    <p>Contact Person:{pro.firstName + " " + pro.lastName}</p>
                  </h4>

                  <div className="btn-group">
                    <Link to="requestnewevent" smooth={true} spy={true}>
                      <button className="button p-button">
                        Request New Event
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
