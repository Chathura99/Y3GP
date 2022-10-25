import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const getAdminHomeSummary = () => {
  return axios({
    method: "GET",
    url: `${USER_URL}/getAdminHomeSummary`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const getProjectSummary = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getProjectSummary`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  export const getUserSummary = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getUserSummary`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

