import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1/users";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const getUsers = () => {
  // return axios.get(USER_URL);
  return axios({
    method: "GET",
    url: USER_URL,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};
