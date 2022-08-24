import React, { useEffect,useState } from 'react';
// import NewTable from '../../../utilities/Table/NewTable';
// import { useMemo } from 'react';
import "./ViewForum.css";
// import AddNewDiscussion from './AddNewDiscussion';
// import { Link } from "react-router-dom";
// import PieChart from "../../../utilities/Charts/PieChart";
import { Chart } from "react-google-charts";
// import DiscussionTopic from './DiscussionTopic';

export default function ViewPoll() {
    

 const options = {
  // title: "Poll Results",
  colors: ["#2596BE", "#BE2596", "#145369", "#BE4D25", "#96BE25"],
  chartArea: { width: 600, height: 600 },
  legend: {
    alignment: "center",
    
  },
};


    // pie chart
    const [pieChartData, setPieChartData] = useState([
        ["Task", "votes"],
        ["Lohithuthpada", 11],
        ["Re-green Earth", 4],
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
                
                <div className="card h-100"  id="outbox">
                <div className="card-body " >
                    <div className="row gutters ">
                    <h3 className="ml-3">
                        <h5>Poll Results</h5>
                        <h6>Title : Event for september</h6>
                    </h3>
                    </div>
                    <div className="row gutters " id='pollqdiv'>
                    <h6 id='pollq'>Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic ?</h6>
                    </div>
                    <div className="row gutters " id="outbox2">
                    {/* <PieChart  data={pieChartData} /> */}
                    <Chart
                        chartType="PieChart"
                        data={pieChartData}
                        options={options}
                        width={"900px"}
                        height={"500px"}
                        
                        
                        />
                    </div>
                </div>
                </div>
            
                

        
            </div>
        </>
    );
}
