import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

export const addFeedback = (guest_user_feedback) =>{
  
    return axios({
      method: "POST",
      url: `${USER_URL}/addFeedback`,
      //headers: {
      //  Authorization: "Bearer " + getToken(),
      //},
      data : guest_user_feedback
    });



};



