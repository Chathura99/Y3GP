import React, { useState, useEffect } from "react";
import NewTable from "../../../utilities/Table/NewTable";
import RegisterNewUser from "./RegisterNewUser";
import MaterialTable from "material-table";
import Save from "@material-ui/icons/Save";
import Delete from "@material-ui/icons/Delete";
import Search from "@material-ui/icons/Search";
import { getJoinRequest } from "../../../services/adminServices/JoinRequestService";
import { deleteRequest } from "../../../services/adminServices/JoinRequestService";

import FailedPopUp from "../../../utilities/PopUps/FailedPopUp";
import SuccessPopUp from "../../../utilities/PopUps/SuccessPopUp";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";

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
    //
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
                <h5>New Users</h5>
                <MaterialTable
                  title=""
                  columns={[
                    { title: "REQUEST ID", field: "id" },
                    { title: "first Name", field: "firstName" },
                    { title: "Last Name", field: "lastName" },
                    { title: "NIC", field: "nic" },
                    { title: "PHONE", field: "phoneNumber" },
                    { title: "DATE", field: "date" },
                    { title: "DISTRICT", field: "district" },
                  ]}
                  data={joinRequestsData}
                  actions={[
                    {
                      icon: Save,
                      tooltip: "Save User",
                      onClick: (event, rowData) => {
                        setSelectedJoinRequestsData(rowData);
                        setSelected(true);
                      },
                    },
                    {
                      icon: Delete,
                      tooltip: "Delete User",
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
