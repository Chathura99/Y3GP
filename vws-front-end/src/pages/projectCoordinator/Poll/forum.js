import React, { useState, useEffect,useMemo } from "react";
import EnhancedTable from "../../../utilities/Table/ForumTable";
import "./forum.css"
import NewTable from "../../../utilities/Table/NewTable.js";
import AddForumTopic from "./AddForum";
import { Link } from "react-router-dom";
import AddNewPoll from "./AddPoll";

export default function PcForum() {

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
      last_update: "2022 07 12",
      replies: "05",



      read: (
        <Link to="/adminviewforum" className="sign-up">
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
                
                    <b>Read</b>
                  
              </button>
              </Link>
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
      { accessor: "last_update", Header: "LAST UPDATE" },
      { accessor: "replies", Header: "REPLIES" },
      { accessor: "read", Header: "ACTION" },


    ],
    []
  )
// poll data




  return (

 <>
    <div  id="maindiv">
    <div id="leftside">
      <div className="container-fluid calculated-bodywidth"  id="blaa" style={{paddingLeft:25}}>


                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body " >
                                <h5>Forum</h5>

                                  <button id='forumbtn' data-toggle="modal" data-target="#AddForumTopic">Add New Forum Topic </button>
                                  <AddForumTopic/>

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



//    <>
//    <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
//      <div className="row gutters mt-10">
//        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
//          <div className="card h-100" id="contentcard">
//            <div className="card-body">
//              <div className="row gutters">Forum | Poll</div>
//              <div className="row gutters ">line 1</div>
//              <div className="row gutters">line 2</div>
//            </div>
//          </div>
//        </div>
//
//        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
//          <div className="card h-100" id="contentcard">
//            <div className="card-body">
//              <div className="row gutters ">
//                <h3 className="ml-3">Title</h3>
//              </div>
//              <div className="row gutters ">
//                Content
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//
//      <div className="row gutters mt-3">
//        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//          <div className="card h-100" id="contentcard">
//            <div className="card-body ">
//             Content
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  </>
//  )
//}
