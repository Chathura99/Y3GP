import React,{useEffect,useState} from "react";
import { MDBNotification, MDBContainer } from "mdbreact";
import { getNotification } from "../../../services/notificationServices/notificationServices";

export default function Notification(){

  const [notification, setNotification] = useState([]);
  
  useEffect(() => {
    checkValidate();
    readNotification();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const readNotification = async () => {
    const res = await getNotification(1);
    // console.log(res.data);
    setNotification(res.data);
    console.log(res.data);
  };
    return (
      <MDBContainer
        style={{
          width: "600px",
          position: "fixed",
          top: "50px",
          right: "10px",
          zIndex: 9999
        }}
      >
        {notification.map((not, index) => (
          <MDBNotification
          show
          fade
          iconClassName="text-primary"
          title={not.heading}
          message={not.description}
          text={not.date}
        />
        ))}
        
        
      </MDBContainer>
    );
  
}

