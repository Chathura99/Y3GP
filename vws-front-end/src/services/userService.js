import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const getUsers = () => {
  // return axios.get(USER_URL);
  return axios({
    method: "GET",
    url: `${USER_URL}/users`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const getProfile = (id) => {
  // return axios.get(USER_URL);
  return axios({
    method: "GET",
    url: `${USER_URL}/users/${id}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const updateProfile = (profile,role) => {
  // return axios.get(USER_URL);
  return axios({
    method: "PUT",
    url: `${USER_URL}/updateProfile/${role}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    data:profile,
  });
};

export const updatePassword = (password,id) => {
  console.log(password);
  // return axios.get(USER_URL);
  return axios({
    method: "PUT",
    url: `${USER_URL}/changePassword/${id}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    data:password,
  });
};


