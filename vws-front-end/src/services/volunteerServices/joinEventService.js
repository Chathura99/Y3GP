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