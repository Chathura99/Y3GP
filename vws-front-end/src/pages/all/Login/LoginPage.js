import React, { useState } from "react";
import { connect } from "react-redux";

import {
  authenticate,
  authFailure,
  authSuccess,
} from "../../../redux/authActions";
import "./loginPage.css";
import { userLogin } from "../../../services/authenticationService";
import { fetchUserData } from "../../../services/authenticationService";
import { Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = ({ loading, error, ...props }) => {
  // create "values" objecct
  const [values, setValues] = useState({
    userName: "",
    password: "",
  });

  const userData = async () => {
    const res = await fetchUserData();
    var user = res.data.roles[0].roleCode;
    alert(
      "Welcome " +
        res.data.firstName +
        " you login as " +
        res.data.roles[0].roleCode +
        "!"
    );
    if (user === "PROJECT_COORDINATOR") {
      window.location.href = "/pchome";
    } else if (user === "ADMIN") {
      window.location.href = "/adminhome";
    } else if (user === "VOLUNTEER") {
      window.location.href = "/volunteerhome";
    } else {
      localStorage.clear();
      window.location.href = "/";
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.authenticate();
    // console.log(props);
    //method called userLogin(userName,password) in authentication service as a authRequest
    userLogin(values)
      .then((response) => {
        // console.log("response->", response);
        if (response.status === 200) {
          // console.log("logging success");
          props.setUser(response.data);
          userData();
        } else {
          props.loginFailure("1.Something Wrong!Please Try Again");
        }
      })
      .catch((err) => {
        if (err && err.response) {
          switch (err.response.status) {
            case 401:
              console.log("401 status");
              props.loginFailure("Authentication Failed.Bad Credentials");
              break;
            default:
              props.loginFailure("2.Something Wrong!Please Try Again!");
          }
        } else {
          props.loginFailure("3.Something Wrong!Please Try Again");
        }
      });
    //console.log("Loading again",loading);
  };

  const handleChange = (e) => {
    e.persist();
    // console.log(e.target.name + "-" + e.target.value);
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="global-container">
      <div className="login-form">
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: 25,
            marginTop: 110,
            marginBottom: 186,
          }}
        >
          <div className="card-body">
            <h2 className="card-title">Login</h2>
            <hr
              style={{
                position: "absolute",
                background: "white",
                textAlign: "left",
                height: "1.5px",
                width: 80,
                marginTop: -10,
              }}
            />

            <h6 className="card-title" style={{ marginTop: 20 }}>
              Welcome to Sasnaka Sansada!
            </h6>
            {/* onsubmit then, call to {handleSubmit}*/}
            <form
              className="my-login-validation"
              onSubmit={handleSubmit}
              noValidate={false}
            >
              <div className="form-group">
                <label htmlFor="email" className="card-title">
                  User Name
                </label>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  minLength={4}
                  value={values.userName}
                  onChange={handleChange}
                  name="userName"
                  placeholder="Enter your username"
                  required
                />

                <div className="invalid-feedback">UserId is invalid</div>
              </div>

              <div className="form-group">
                <label className="card-title">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  minLength={8}
                  value={values.password}
                  onChange={handleChange}
                  name="password"
                  placeholder="Enter your password"
                  required
                />

                <div className="invalid-feedback">Password is required</div>

                <div>
                  <br></br>
                </div>

                <div className="custom-control custom-checkbox d-flex justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    <div className="card-title">Remember me</div>
                  </label>
                  <Link to="/forgotpassword">
                    <p className="card-title forgotpw">Forgot Password?</p>
                  </Link>
                </div>
              </div>

              <div className="form-group m-0">
                <button type="submit" id="logbtn" className="btn btn-block">
                  <b>LOGIN</b>
                  {loading && (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </div>
              <div className="sign-up">
                New to Sasnaka?
                <Link to="/signUp" className="sign-up">
                  <b>Register</b>
                </Link>
                Here
              </div>
              {error && (
                <Alert style={{ marginTop: "20px" }} variant="danger">
                  {error}
                </Alert>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  console.log("state ", auth);
  return {
    loading: auth.loading,
    error: auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: () => dispatch(authenticate()),
    //user details setted in above
    setUser: (data) => dispatch(authSuccess(data)),
    //error messages setted in above
    loginFailure: (message) => dispatch(authFailure(message)),
  };
};
//get data from store
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
