import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const getOngoingProjects = () => {
  return axios({
    method: "GET",
    url: `${USER_URL}/getOngoingProjects`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const getProposedProject = () => {
  return axios({
    method: "GET",
    url: `${USER_URL}/getProposedProjects`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const getVolunteer = () => {
  return axios({
    method: "GET",
    url: `${USER_URL}/getAllVolunteers`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const editProject = (pro) => {
  return axios({
    method: "PUT",
    url: `${USER_URL}/editProject`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    data : pro
  });
};

export const initializeProject = (pro) => {
  return axios({
    method: "POST",
    url: `${USER_URL}/initializeProject`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    data : pro
  });
};

export const addProposedProjects = (pro) =>{
  console.log(pro);
  return axios({
    method: "POST",
    url: `${USER_URL}/addProposedProjects`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    data: pro
  
  });
}

export const getMyProjectsData = () => {
  return axios({
    method: "GET",
    url: `${USER_URL}/getMyProjectsData`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

// Project Coordinator - Ravindu
export const getCurrentProjects = () => {
  console.log("das")
  return axios({
    method: "GET",
    url: `${USER_URL}/getCurrentProjects`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};