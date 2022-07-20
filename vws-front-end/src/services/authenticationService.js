import axios from "axios";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const userLogin = (authRequest) => {
  return axios({
    method: "POST",
    url: `${process.env.hostUrl || "http://localhost:8080"}/api/v1/auth/login`,
    //authRequest->userName and password
    data: authRequest,
  });
};

export const fetchUserData = () => {
  return axios({
    method: "GET",
    url: `${process.env.hostUrl || "http://localhost:8080"}/api/v1/auth/userinfo`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};


//service file for connect with back end
