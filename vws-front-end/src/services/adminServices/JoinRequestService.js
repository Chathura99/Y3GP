import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const getJoinRequest = () => {
  return axios({
    method: "GET",
    url: `${USER_URL}/joinRequests`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const signUpApprove = (requestData) => {
  console.log(requestData);
  return axios({
    method: "POST",
    url: `${USER_URL}/signUpApproved`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    data: requestData,
  });
};

export const getParticularJoinRequestData= (id) => {
  console.log("from->"+id);
  return axios({
    method: "GET",
    url: `${USER_URL}/getJoinRequestData/${id}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const deleteRequest = (id) => {
  return axios({
    method: "DELETE",
    url: `${USER_URL}/deleteRequest/${id}`,
    headers: {
    Authorization: "Bearer " + getToken(),
  },
  });
  
};
