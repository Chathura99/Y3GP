import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const participateToEvent = (joinEvent) =>{
    // console.log(pro);
    return axios({
      method: "POST",
      url: `${USER_URL}/participateToEvent`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      data: joinEvent
    
    });
  }

  export const leaveEvent = (leaveevent) => {
    return axios({
      method: "DELETE",
      url: `${USER_URL}/leaveEvent`,
      headers: {
      Authorization: "Bearer " + getToken(),
    },
    data: leaveevent
    });
    
  };

  // export const joinedEvent = () => {
  //   return axios({
  //     method: "GET",
  //     url: `${USER_URL}/joinedEvent`,
  //     headers: {
  //       Authorization: "Bearer " + getToken(),
  //     },
  //   });
  // };