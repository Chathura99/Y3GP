import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

// const getToken = () => {
//   return localStorage.getItem("USER_KEY");
// };

export const joinRequest = (requestData) => {
  return axios({
    method: "POST",
    url: `${USER_URL}/signUp`,
    data: requestData,
  });
};



