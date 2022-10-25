import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const editScholarship = (sch) => {
    console.log(sch)
    return axios({
      method: "PUT",
      url: `${USER_URL}/sendMeeting`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      data : sch
    });
  };

  export const getScholarship = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getScholarship`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  
  export const RemoveScholarship = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/RemoveScholarship`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  export const ApplyScholar = (sch) => {
    console.log(sch)
    return axios({
      method: "POST",
      url: `${USER_URL}/sendMeeting`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      data : sch
    });
  };