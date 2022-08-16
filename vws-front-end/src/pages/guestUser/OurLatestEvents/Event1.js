import React from 'react';
import "./morelatestevents.css";
import "../AboutUs/about.css"

import Navbar from '../LandingPageNavbar/navbar';
import ImagesliderComponent from './ImageSliderComponent';


export default function Event1() {
    return (

        <div className=" container-fluid" id="morelatestevents-cont">

            <div className='Navbar'>
                <Navbar />
            </div>
            <br></br>
            <h2><center><b>Donation of School Equipment At Kosgama Maha Vidyalaya</b></center></h2>
            <br></br>

            <ImagesliderComponent/>
            <br></br>
        
            <div className=" container-fluid" style={{width:"100%", backgroundColor:"#145369",margin:"auto",color:"#ffffff",padding:"20px"}}>
            
            The fourth phase of the Math Lab project for the year 2019, was successfully launched on 01st, 02nd & 
                03rd of November at Damahana Maha Vidyalaya, Balangoda enriching students’ interest in mathematics and inculcating
                 mathematical concepts in fun mathematical games. This was financially supported by the CSR Trust of 
                 Commercial Bank of Ceylon PLC. Veteran actor Palitha Silva conducted a theatrical and motivational session
                  at the beginning of the program. The Math camp was held with the participation of nearly 125 students in grades 6-11.
                   The "Mathematical Circle" of the school was also established in parallel to the program. Mr. Dharmasiri Hengodage,
                    the founder of the Math Lab concept, several resource persons, 
                and many Sasnaka Sansada members participated in this three-day program.
                

            </div>

            


        </div>

    )
}


