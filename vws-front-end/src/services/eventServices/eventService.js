import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const getUpcomingEvents = () => {
  return axios({
    method: "GET",
    url: `${USER_URL}/getUpcomingEvents`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const getPreviousEvents = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getPreviousEvents`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  export const getOngoingEvents = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getOngoingEvents`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  export const getCoordinatedEvents = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getCoordinatedEvents`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  export const getApprovedCoordinatedEvents = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getApprovedCoordinatedEvents`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  export const getCompletedEvents = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getCompletedEvents`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  export const addCoordinatedEvents = (newEvent) =>{
    // console.log(pro);
    return axios({
      method: "POST",
      url: `${USER_URL}/addCoordinatedEvents`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      data: newEvent
    
    });
    };

 //ProjectCoordinator-Ravindu

    export const getEventRequest = () => {
        console.log("das")
        return axios({
          method: "GET",
          url: `${USER_URL}/getJoinRequest`,
          headers: {
            Authorization: "Bearer " + getToken(),
          },
        });
      };


export const updateCoordinatedEventStatus = (id) => {
        console.log("das")
        return axios({
          method: "PUT",
          url: `${USER_URL}/updateCoordinatedEventStatus/${id}`,
          headers: {
            Authorization: "Bearer " + getToken(),
          },
        });
      };

      export const updateCoordinatedEventStatusReject = (id) => {
              console.log("das")
              return axios({
                method: "PUT",
                url: `${USER_URL}/updateCoordinatedEventStatusReject/${id}`,
                headers: {
                  Authorization: "Bearer " + getToken(),
                },
              });
            };

export const editEvent = (pro) => {
  return axios({
    method: "PUT",
    url: `${USER_URL}/editEvent`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    data : pro
  });
};


  

  
  export const getProgressData = (id) => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getProgress/${id}`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },

    });
  };

export const editMyCoordinatedEvents = (newEvent) => {
    return axios({
      method: "PUT",
      url: `${USER_URL}/editMyCoordinatedEvents`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      data : newEvent
      });
  }; 


















  export const getMyNewUpcomingEvents = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getMyNewUpcomingEvents`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };

  export const getUpcomingEventsLimit = () => {
    return axios({
      method: "GET",
      url: `${USER_URL}/getUpcomingEventsLimit`,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  };
    

  export const deleteCoordinatedEvents = (deleteevent) => {
    return axios({
      method: "DELETE",
      url: `${USER_URL}/deleteCoordinatedEvents`,
      headers: {
      Authorization: "Bearer " + getToken(),
    },
    data: deleteevent
    });
    
  };

