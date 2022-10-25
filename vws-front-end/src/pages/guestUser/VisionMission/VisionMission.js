import React from 'react';
import "./visionmission.css";
import { Link } from 'react-router-dom';


export default function VisionMission() {
    return (
        <div classNameName=" container-fluid" id="vision-mission-cont" >


            <div className="card mx-auto" id="vision-card">
                <div className="card-header" id="vision-card-h">
                    Our Vision
                </div>
                <div className="card-body" id="vision-card-body">

                    <p id="vision-card-p">
                        “To build a just and equitable society with high level of human morality by creating an
                        intellectually developed and socially balanced individual"
                    </p>

                </div>
            </div>


            <div className="card-header" id="mission-card-h">
                Our Mission
            </div>
            

            <div className="row row-cols-1 row-cols-md-2 g-2" id="mission-cont">

                <div className="col" id="mission-col">
                    <div className="card h-100" id="mission-card">
                        <div className="card-body">
                            <h5 className="card-title" id="mission-text">
                                Extend Support to the potential young individuals who have the ability and
                                passion to grow and contribute to achieve the organization vision
                            </h5>

                        </div>
                    </div>
                </div>

                <div className="col" id="mission-col">
                    <div className="card h-100" id="mission-card">
                        <div className="card-body">
                            <h5 className="card-title" id="mission-text">Focus on continuos development of the membership in the areas of their
                                educational,professional and moral competencies, to be part of social development and
                                to take up any challenges in the future with utmost confidence
                            </h5>

                        </div>
                    </div>
                </div>

            </div>

            <div className="row row-cols-1 row-cols-md-2 g-2" id="mission-cont">

                <div className="col" id="mission-col">
                    <div className="card h-100" id="mission-card">
                        <div className="card-body">
                            <h5 className="card-title" id="mission-text">Inculcate sound ethics and moral values among the membership by doing various socio-religious activities
                            </h5>

                        </div>
                    </div>
                </div>

                <div className="col" id="mission-col">
                    <div className="card h-100" id="mission-card">
                        <div className="card-body">
                            <h5 className="card-title" id="mission-text">Contribute in social development by intervening to the most needed areas of support
                            </h5>

                        </div>
                    </div>
                </div>

            </div>



        </div>





    )
}