import React, { useState, useEffect } from "react";
// component
import RegisterNewUser from "./RegisterNewUser";
// service access
import { getJoinRequest } from "../../../services/adminServices/JoinRequestService";
import { deleteRequest } from "../../../services/adminServices/JoinRequestService";
// popups
import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";

export default function NewUser() {
  useEffect(() => {
    checkValidate();
    getRequest();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
  const [joinRequestsData, setJoinRequestsData] = useState([]);

  const [selectedJoinRequestsData, setSelectedJoinRequestsData] = useState({});

  const getRequest = async () => {
    const res = await getJoinRequest();
    console.log(res.data);
    setJoinRequestsData([...res.data]);
  };

  const [selected, setSelected] = useState(false);

  const [popup, setPopUp] = useState("");
  const [message, setMessage] = useState("");

  const closePopUp = () => {
    setPopUp("");
  };

  const saveSelectedRequest = () => {
    console.log("saved");
    //To Do
  };
  const deleteSelectedRequest = () => {
    console.log("deleted " + selectedJoinRequestsData.id);
    deleteRequest(selectedJoinRequestsData.id)
      .then((response) => {
        if (response.status === 200 && response.data == 1) {
          setMessage("Request deleted successfully!");
          setPopUp("success");
        } else {
          setPopUp("failed");
        }
      })
      .catch((err) => {
        if (err && err.response) {
          console.log(err.message);
          setMessage("Duplicate Entry!");
          setPopUp("failed");
        }
      });
    setPopUp("");
  };

  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-3">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
                <MaterialTable
                  components={{
                    Container: (props) => <Paper {...props} elevation={0} />,
                  }}
                  options={{ actionsColumnIndex: -1 }}
                  title="New Users"
                  columns={[
                    { title: "REQUEST ID", field: "id" },
                    { title: "FIRST NAME", field: "firstName" },
                    { title: "LAST NAME", field: "lastName" },
                    { title: "NIC", field: "nic" },
                    { title: "PHONE", field: "phoneNumber" },
                    { title: "DATE", field: "date" },
                    { title: "DISTRICT", field: "district" },
                  ]}
                  data={joinRequestsData}
                  actions={[
                    {
                      icon: () => {
                        return (
                          <button
                            type="button"
                            className="btn mt-0"
                            style={{
                              backgroundColor: "#BE4D25",
                              border: "none",
                              // marginRight: "2px",
                            }}
                          >
                            Remove
                          </button>
                        );
                      },
                      // tooltip: "Remove Request",
                      onClick: (event, rowData) => {
                        setSelectedJoinRequestsData(rowData);
                        {
                          setPopUp("confirmDelete");
                        }
                        setMessage(
                          "Delete request from " +
                            rowData.firstName +
                            " with id " +
                            rowData.id
                        );
                      },
                    },
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
                            Register
                          </button>
                        );
                      },
                      onClick: (event, rowData) => {
                        setSelectedJoinRequestsData(rowData);
                        setSelected(true);
                      },
                      // tooltip: "Register User",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        {selected && (
          <RegisterNewUser
            data={selectedJoinRequestsData}
            setSelected={setSelected}
            // saveRequest={saveRequest}
          />
        )}
      </div>
      {popup === "confirmDelete" && (
        <ConfirmPopUp
          message={message}
          closePopUp={closePopUp}
          handleSubmit={deleteSelectedRequest}
        />
      )}
      {popup === "confirmSave" && (
        <ConfirmPopUp
          message={message}
          closePopUp={closePopUp}
          handleSubmit={saveSelectedRequest}
        />
      )}
      {popup === "success" && (
        <SuccessPopUp message={message} closePopUp={closePopUp} />
      )}
      {popup === "failed" && (
        <FailedPopUp message={message} closePopUp={closePopUp} />
      )}
    </>
  );
}
