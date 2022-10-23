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

  export const getOngoingEvents = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getOngoingEvents`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  export const getCoordinatedEvents = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getCoordinatedEvents`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  export const getApprovedCoordinatedEvents = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getApprovedCoordinatedEvents`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  export const getCompletedEvents = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getCompletedEvents`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  export const addCoordinatedEvents = (newEvent) =>{
    // console.log(pro);
    return axios({
      method: "POST",
      url: `${USER_URL}/addCoordinatedEvents`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      data: newEvent
    
    });
  }

  export const editMyCoordinatedEvents = (event) => {
    return axios({
      method: "PUT",
      url: `${USER_URL}/editMyCoordinatedEvents`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      data : event
    });
  };