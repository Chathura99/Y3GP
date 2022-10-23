import React from 'react';
import "./scholarship.css";
import { Link } from 'react-router-dom';
import "../ApplyForScholarship/ApplyForScholarship";

export default function Scholarship() {
    return (
        <div>

            <div className=" container-fluid" id="scholarship-cont">

                <div className="row gutters" id="scholarship">

                    {/* left side - image*/}
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id="scholarship-left">

                        <img src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1659636791/BestColleges.com/BC-Resource_Grants-Scholarships_FTR_2_1471534499/BC-Resource_Grants-Scholarships_FTR_2_1471534499.jpg?_i=AA" class="img-fluid" id="about-img" alt="about image"></img>
                    </div>

                    {/* right side */}
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id="scholarship-right">

                        <h1 id="scholarship-right-H1">
                            Apply for Scholarship
                        </h1>

                        <h4 id="scholarship-right-H2">
                        Both grants and scholarships offer free money to students who are doing A/Ls and undergraduate students. 
                        Grants are generally based on financial need, whereas scholarships are based on merit.
                        </h4>

                        <div class="text-center">
                            <div className='btn-group'>
                        
                                <Link to="/applyforscholarship" smooth={true} spy={true}>
                                    <button className="button s-button">Apply for Scholarship</button>
                                </Link>

                            </div>
                        </div>


                    </div>
                </div>
            </div>




        </div>

    )
}

