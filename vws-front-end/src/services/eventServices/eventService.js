import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const getUpcomingEvents = () => {
  return axios({
    method: "GET",
    url: `${USER_URL}/getUpcomingEvents`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const getPreviousEvents = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getPreviousEvents`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

