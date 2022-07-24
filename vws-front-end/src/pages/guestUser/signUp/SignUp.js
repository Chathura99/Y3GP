import React, { useState } from "react";
import { joinRequest } from "../../../services/guestUserServices/signUpService";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [requestData, setRequestData] = useState(
    {
      firstName: "Manuka",
      lastName: "Amarasinghe",
      email: "mam@gmail.com",
      phoneNumber: "0712548569",
      address: "Digana",
      universityCollege: "Peradeniya",
      district: "Kandy",
      date: "",
      status: 0,
    },
    []
  );

  const handleSubmit = (evt) => {
    console.log(requestData);
    evt.preventDefault();
    joinRequest(requestData).then((response) => {
      if (response.status === 200) {
        console.log("success");
      } else {
        console.log("error");
      }
    });
  };
  

  return (
    <div class="container">
      <Link to="/login">login</Link>
      <form
        className="my-login-validation"
        onSubmit={handleSubmit}
        noValidate={false}
      >
        <div className="form-group m-0">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
