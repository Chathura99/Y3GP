import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

export const addFeedback = (feed) =>{
  
    return axios({
      method: "POST",
      url: `${USER_URL}/addFeedback`,
      //headers: {
      //  Authorization: "Bearer " + getToken(),
      //},
      data : feed
    });



};



