import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const getVolunteerHomeSummary = () => {
  return axios({
    method: "GET",
    url: `${USER_URL}/getVolunteerHomeSummary`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const getVolunteerProjectSummary = () => {
  return axios({
    method: "GET",
    url: `${USER_URL}/getVolunteerProjectSummary`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const getVolunteerCompletedEventSummary = () => {
  return axios({
    method: "GET",
    url: `${USER_URL}/getVolunteerCompletedEventSummary`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};



