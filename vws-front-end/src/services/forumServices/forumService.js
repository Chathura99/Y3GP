import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
    return localStorage.getItem("USER_KEY");
  };
  
  export const getForumInfo = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getForumInfo`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  export const getViewForumInfo = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getViewForumInfo`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  export const getReplyToForum = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getReplyToForum`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  export const addNewForum = (forum) =>{
    console.log(forum);
    return axios({
      method: "POST",
      url: `${USER_URL}/addNewForum`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      data: forum
    
    });
  }