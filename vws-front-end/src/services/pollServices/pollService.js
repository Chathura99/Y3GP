import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
    return localStorage.getItem("USER_KEY");
  };
  
  export const getPollInfo = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getPollInfo`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  export const addNewPoll = (poll) =>{
    console.log(poll);
    return axios({
      method: "POST",
      url: `${USER_URL}/addNewPoll`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      data: poll
    
    });
  }