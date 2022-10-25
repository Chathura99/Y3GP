import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const addFeedback = (feed) =>{
  
    return axios({
      method: "POST",
      url: `${USER_URL}/addFeedback`,
      //headers: {
      //  Authorization: "Bearer " + getToken(),
      //},
      data : feed
    })


};


export const getFeedback= () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getFeedback`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };



