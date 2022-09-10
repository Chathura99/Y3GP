import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const getAnnouncement = (category) => {
  return axios({
    method: "GET",
    url: `${USER_URL}/getAllAnnouncement/${category}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const editAnnouncement = (announcement) => {
  return axios({
    method: "PUT",
    url: `${USER_URL}/editAnnouncement`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    data : announcement
  });
};

export const getOneAnnouncement = (id) => {
  console.log(id);
  return axios({
    method: "GET",
    url: `${USER_URL}/getAnnouncementById/${id}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};
