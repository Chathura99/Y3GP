import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const getNotification= (id) => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getUserNotification/${id}`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  
export const Consider= (id,notification) => {
  return axios({
    method: "PUT",
    url: `${USER_URL}/consider/${id}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    data:notification
  });
};