import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const getOngoingProjects = () => {
  return axios({
    method: "GET",
    url: `${USER_URL}/getOngoingProjects`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const getProposedProject = () => {
  return axios({
    method: "GET",
    url: `${USER_URL}/getProposedProjects`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};
