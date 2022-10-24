import React, { useEffect,useState } from 'react';
import NewTable from '../../../utilities/Table/NewTable';
import { useMemo } from 'react';
import "./ViewForum.css";
import AddNewDiscussion from './AddNewDiscussion';
import { Link } from "react-router-dom";
import DiscussionTopic from './DiscussionTopic';
import { getViewForumInfo } from '../../../services/forumServices/forumService';
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";

export default function ViewForum(props) {
    
  const [ForumData, setForumData] = useState(props.data);

  //   const [ProjectsData, setProjectsData] = useState([
  //     {
  //       discussion: "Places for campaign", 
  //       started_by:<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12" id='outestbox'>                              
  //           <div className="row gutters " id='row'>                           
  //               <ul className="nav ">
  //                 <li className="nav-item">
  //                   <a className="nav-link" href="#">
  //                     <img
  //                       id="profielimg"
  //                       src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
  //                     ></img>
  //                   </a>
  //                 </li>
  //                 <li
  //                   className="nav-item"
  //                   id="details"
  //                   style={{ marginTop: "10px" }}
  //                   >
  //                 {/*   style={{ marginTop: "8px" }} */}
  //                   <a className="nav-link" style={{color:"black", margin:0, padding:0,lineHeight:2 }}><b>R.R. Rathnayake</b></a>
  //                   <a className="nav-link" style={{fontSize:"smaller", margin:0, padding:0, lineHeight:2}}>ADMIN 2021-10-21 12:12</a>
  //                 </li> 
  //                 {/* <li><a className="nav-link" style={{fontSize:"smaller"}}>ADMIN 2021-10-21 12:12</a></li> */}
  //               </ul>                                                    
  //         </div>        
  //     </div>,
  //       last_update:<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12" id='outestbox'>                              
  //       <div className="row gutters " id='row'>                           
  //           <ul className="nav ">
  //             <li className="nav-item">
  //               <a className="nav-link" href="#">
  //                 <img
  //                   id="profielimg"
  //                   src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
  //                 ></img>
  //               </a>
  //             </li>
  //             <li
  //               className="nav-item"
  //               id="details"
  //               style={{ marginTop: "10px" }}
  //               >
  //             {/*   style={{ marginTop: "8px" }} */}
  //               <a className="nav-link" style={{color:"black", margin:0, padding:0,lineHeight:2 }}><b>R.R. Rathnayake</b></a>
  //               <a className="nav-link" style={{fontSize:"smaller", margin:0, padding:0, lineHeight:2}}>ADMIN 2021-10-21 12:12</a>
  //             </li> 
  //             {/* <li><a className="nav-link" style={{fontSize:"smaller"}}>ADMIN 2021-10-21 12:12</a></li> */}
  //           </ul>                                                    
  //     </div>        
  // </div>,
  //       replies: "02",
              
              
  //       action: (
  //         < Link to="/admindiscussiontopic" className="sign-up">
  //               <button
  //                 type="button"
  //                 id="submit"
  //                 name="submit"
  //                 className="btn p-1"
  //                 data-toggle="modal"
  //                 data-target="#DiscussionTopic"
  //                 style={{backgroundColor:"#2596BE",border:"none",marginTop: 10,marginBottom: 10}}
                  
  //                 // #96BE25,#BE4D25
  //                 // onClick={handleSubmit}
  //               >
                
  //                   <b>Read</b>
                  
  //               </button>
  //               </Link>
                
  //             ),
              
  //           },
  //           {
  //             discussion: "Dates for blood donation campaign",
  //             started_by: <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12" id='outestbox'>                              
  //             <div className="row gutters " id='row'>                           
  //                 <ul className="nav ">
  //                   <li className="nav-item">
  //                     <a className="nav-link" href="#">
  //                       <img
  //                         id="profielimg"
  //                         src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
  //                       ></img>
  //                     </a>
  //                   </li>
  //                   <li
  //                     className="nav-item"
  //                     id="details"
  //                     style={{ marginTop: "10px" }}
  //                     >
  //                   {/*   style={{ marginTop: "8px" }} */}
  //                     <a className="nav-link" style={{color:"black", margin:0, padding:0,lineHeight:2 }}><b>R.R. Rathnayake</b></a>
  //                     <a className="nav-link" style={{fontSize:"smaller", margin:0, padding:0, lineHeight:2}}>ADMIN 2021-10-21 12:12</a>
  //                   </li> 
  //                   {/* <li><a className="nav-link" style={{fontSize:"smaller"}}>ADMIN 2021-10-21 12:12</a></li> */}
  //                 </ul>                                                    
  //           </div>        
  //       </div>,
  //             last_update: <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12" id='outestbox'>                              
  //             <div className="row gutters " id='row'>                           
  //                 <ul className="nav ">
  //                   <li className="nav-item">
  //                     <a className="nav-link" href="#">
  //                       <img
  //                         id="profielimg"
  //                         src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
  //                       ></img>
  //                     </a>
  //                   </li>
  //                   <li
  //                     className="nav-item"
  //                     id="details"
  //                     style={{ marginTop: "10px" }}
  //                     >
  //                   {/*   style={{ marginTop: "8px" }} */}
  //                     <a className="nav-link" style={{color:"black", margin:0, padding:0,lineHeight:2 }}><b>R.R. Rathnayake</b></a>
  //                     <a className="nav-link" style={{fontSize:"smaller", margin:0, padding:0, lineHeight:2}}>ADMIN 2021-10-21 12:12</a>
  //                   </li> 
  //                   {/* <li><a className="nav-link" style={{fontSize:"smaller"}}>ADMIN 2021-10-21 12:12</a></li> */}
  //                 </ul>                                                    
  //           </div>        
  //       </div>,
  //             replies: "03",
              
              
  //             action: (
  //               <button
  //                 type="button"
  //                 id="submit"
  //                 name="submit"
  //                 data-toggle="modal"
  //                 data-target="#DiscussionTopic"
  //                 className="btn p-1"
  //                 style={{backgroundColor:"#2596BE",border:"none",marginTop: 10,marginBottom: 10}}
  //                 // #96BE25-green,#BE4D25-red
  //                 // onClick={handleSubmit}
  //               >
  //                 Read
  //               </button>
  //             ),
             
  //     }
  //   ]);
  
  // const data = useMemo(
  // () => ProjectsData  )
  
  //   const ProjectsHeadings=useMemo(
  //     () => [
       
  //       { accessor: "discussion", Header: "DISCUSSION" },
  //       { accessor: "started_by", Header: "STARTED BY" },
  //       { accessor: "last_update", Header: "LAST UPDATE" },
  //       { accessor: "replies", Header: "REPLIES" },
  //       { accessor: "action", Header: "Action" },
        
        
  //     ],
  //     []
  //   )

    useEffect(() => {
        checkValidate();
        getViewForumDetails();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };
    const getViewForumDetails = async () => {
      const res = await getViewForumInfo();
      console.log(res.data);
      setSeeForumData(res.data);
    };

    const [seeForumData, setSeeForumData] = useState([]);
  const [viewForumData, setViewForumData] = useState({});

  const [selected, setSelected] = useState(false);
  const [selectedForum, setSelectedForum] = useState({});

    return (
        <>
            <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
                

                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                                <h5>Forum- Blood Donation</h5>
                                
                                  <button id='proposenewbtn' data-toggle="modal" data-target="#AddNewDiscussion">Add New Discussion Topic </button>
                                  <AddNewDiscussion/>
                                  
                                <h5> </h5>
                                <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    // title="Ongoing Projects"
                    columns={[
                      // { field: "projectId", title: "PROJECT ID" },
                      {
                        field: "title",
                        title: "DISCUSSION",
                        minWidth: "150px",
                      },
                      {
                        field: "name",
                        title: "STARTED BY",
                      },
                      { field: "name", title: "LAST UPDATE" },
                      
                      {
                        field: "replies",
                        title: "REPLIES",
                        minWidth: "150px",
                      },
                      
                      
                    ]}
                    data={seeForumData}
                    actions={[
                      {
                        
                        icon: () => {
                          return (
                            <button
                              type="button"
                              className="btn"
                              // data-toggle="modal" data-target="#addCoordinatedEvents"
                              style={{
                                backgroundColor: "#2596BE",
                                width: "6rem",
                                border: "none",
                                marginRight: 0,
                              }}
                            
                              // id='proposenewbtn' 
                              // data-toggle="modal" 
                              // data-target="#addCoordinatedEvents"
                            
                            
                            >
                              Read
                            </button>
                            // <button id='proposenewbtn' data-toggle="modal" data-target="#addProposedProjects">Coordinatt </button>

                          );
                        },
                        onClick: (event, rowData) => {
                          // setProjectData(rowData);
                          // console.log(rowData)
                          window.location.href = "/admindiscussiontopic";
                          console.log("selected!");
                          setSelected(true);
                        },
                        tooltip: "Coordinate Event",
                      },

                     
                      
                    ]}
                  />

                                  {/* <br></br><NewTable columns={ProjectsHeadings} data={ProjectsData}/> */}
                                  
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
