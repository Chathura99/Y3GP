import React, { useState, useEffect,useMemo } from "react";
import EnhancedTable from "../../../utilities/Table/ForumTable";
import "./forum.css"
import NewTable from "../../../utilities/Table/NewTable.js";
import AddForumTopic from "./AddForum";
import { Link } from "react-router-dom";
import AddNewPoll from "./AddPoll";

export default function PcPoll() {


  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
  const [ProjectsData, setProjectsData] = useState([
    {
      topic: "Blood Donation",
      starteddate:"2022 07 11",
      last_update: "2022 07 12",
      votes: "25",
      enddate:"2022 07 13",


      read: (
              <button
                type="button"
                id="submit"
                name="submit"
                className="btn p-1"
                data-toggle="modal"
                data-target="#CoordinateEventForm"
                style={{backgroundColor:"#2596BE",border:"none",marginTop: 10,marginBottom: 10}}
                // #96BE25,#BE4D25
                // onClick={handleSubmit}
              >
                <Link to="/adminviewpoll" className="sign-up">
                    <b>Read</b>
                  </Link>
              </button>
            ),

          },
    //       {
    //         project_name: "Re-green Earth",
    //         description: "Re-green Earth is a ...",
    //         idea_by: "Sadaru Avishka",
    //         date: "2022 09 02",


    //         read: (
    //           <button
    //             type="button"
    //             id="submit"
    //             name="submit"
    //             data-toggle="modal"
    //             data-target="#CoordinateEventForm"
    //             className="btn p-1"
    //             style={{backgroundColor:"#2596BE",border:"none",marginTop: 10,marginBottom: 10}}
    //             // #96BE25-green,#BE4D25-red
    //             // onClick={handleSubmit}
    //           >
    //             Read
    //           </button>
    //         ),

    // }
  ]);

const data = useMemo(
() => ProjectsData  )

  const ProjectsHeadings=useMemo(
    () => [

      { accessor: "topic", Header: "TOPIC" },
      { accessor: "starteddate", Header: "STARTED DATE" },
      { accessor: "last_update", Header: "LAST UPDATE" },
      { accessor: "votes", Header: "VOTES" },
      { accessor: "enddate", Header: "END DATE" },
      { accessor: "read", Header: "ACTION" },

    ],
    []
  )
// poll data

  return (
    <>
    <div  id="maindiv">

            <div id="rightside">
            <div className="container-fluid calculated-bodywidth" style={{paddingLeft:25}} id="blaaa">


                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                                <h5>Poll</h5>

                                  <button id='forumbtn' data-toggle="modal" data-target="#AddNewPoll">Add New Poll </button>
                                  <AddNewPoll/>

                                  <br></br><NewTable columns={ProjectsHeadings} data={ProjectsData}/>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
          </>
  );
}
