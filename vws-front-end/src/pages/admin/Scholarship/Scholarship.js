import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
import MoreDetails from "./MoreDetails";
import { getScholarship } from "../../../services/scholarshipServices/scholarshipServices";
import { RemoveScholarship } from "../../../services/scholarshipServices/scholarshipServices";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";

export default function Scholarship() {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    checkValidate();
    getScholarshipDetails();
    // getVolunteerData();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
  const [scholarshipData, setScholarshipData] = useState([]);
  const [selectedScholarshipData, setSelectedScholarshipData] = useState({});

  const getScholarshipDetails = async () => {
    const res = await getScholarship();
    console.log(res.data);
    setScholarshipData(res.data);
  };
    // open success/error pop up modals and set display message
    const [popup, setPopUp] = useState("");
    const [message, setMessage] = useState("");
    // close pop up modal
    const closePopUp = () => {
      setPopUp("");
    };

    const handleSubmit = (e) => {
      // evt.preventDefault();
      console.log("reached!"+selectedScholarshipData.id);
      RemoveScholarship(selectedScholarshipData.id).then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setMessage("removes success");
          setPopUp("success");
        }
      });
    };

  return (
    <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
      <div className="row gutters mt-10">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
          <div className="card h-100" id="contentcard">
            <div className="card-body">
              <h4 className="">Scholarship Applicants</h4>
              <div className="row gutters "></div>
              <div
                className="row gutters "
                style={{ justifyContent: "center" }}
              >
                <MaterialTable
                  components={{
                    Container: (props) => <Paper {...props} elevation={0} />,
                  }}
                  options={{ actionsColumnIndex: -1 }}
                  title=""
                  columns={[
                    {
                      field: "scholarshipId",
                      title: "SCHOLARSHIP ID",
                      hidden: "true",
                    },
                    { field: "fullName", title: "APPLICANT NAME" },
                    { field: "phoneNumber", title: "PHONE" },
                    { field: "requestedDate", title: "DATE" },
                    { field: "scholarshipType", title: "TYPE" ,hidden:true},
                    { field: "email", title: "EMAIL" },
                    { field: "district", title: "HOME TOWN" },
                  ]}
                  data={scholarshipData}
                  actions={[
                    {
                      icon: () => {
                        return (
                          <button
                            type="button"
                            className="btn mt-0"
                            style={{
                              backgroundColor: "#96BE25",
                              border: "none",
                            }}
                          >
                            Details
                          </button>
                        );
                      },
                      onClick: (event, rowData) => {
                        // setSelectedJoinRequestsData(rowData);
                        setSelected(true);
                        setSelectedScholarshipData(rowData);
                      },
                      // tooltip: "Register User",
                    },
                    {
                      icon: () => {
                        return (
                          <button
                            type="button"
                            className="btn mt-0"
                            style={{
                              backgroundColor: "#BE4D25",
                              border: "none",
                            }}
                          >
                            Reject
                          </button>
                        );
                      },
                      onClick: (event, rowData) => {
                        // setSelectedJoinRequestsData(rowData);
                        console.log("reject")
                        setPopUp("confirm");
                        setMessage("Remove application from applicant's list")
                      },
                      // tooltip: "Register User",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {selected && <MoreDetails setSelected={setSelected} data={selectedScholarshipData} />}
      {popup === "success" && (
        <SuccessPopUp message={message} closePopUp={closePopUp} />
      )}
      {popup === "failed" && (
        <FailedPopUp message={message} closePopUp={closePopUp} />
      )}
      {popup === "confirm" && (
        <ConfirmPopUp
          message={message}
          closePopUp={closePopUp}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
