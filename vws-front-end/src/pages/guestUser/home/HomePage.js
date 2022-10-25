import React, { useState, useEffect } from "react";
import "./homepage.css";
import { Link } from "react-router-dom";

import Navbar from "../LandingPageNavbar/navbar";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import OurProjects from "../OurProjects/OurProjects";
import OurLatestEvents from "../OurLatestEvents/OurLatestEvents";
import VisionMission from "../VisionMission/VisionMission";
import AboutUs from "../AboutUs/About";
import ContactUs from "../ContactUs/ContactUs";
import Scholarship from "../Scholarship/Scholarship";

export default function HomePage() {
//   useEffect(() => {
//     initialize();
//   }, []);
// const [paymentData,setPaymentData]=useState({});
//   const initialize = () => {
//     let orderId = "Order_" + new Date().getTime();

//     // Sandbox Credentials
//     let mid = ""; // Merchant ID
//     let mkey = ""; // Merchant Key
//     var paytmParams = {};

//     paytmParams.body = {
//       requestType: "Payment",
//       mid: mid,
//       websiteName: "WEBSTAGING",
//       orderId: orderId,
//       callbackUrl: "https://merchant.com/callback",
//       txnAmount: {
//         value: 100,
//         currency: "INR",
//       },
//       userInfo: {
//         custId: "1001",
//       },
//     };

//     PaytmChecksum.generateSignature(
//       JSON.stringify(paytmParams.body),
//       mkey
//     ).then(function (checksum) {
//       console.log(checksum);
//       paytmParams.head = {
//         signature: checksum,
//       };

//       var post_data = JSON.stringify(paytmParams);

//       var options = {
//         /* for Staging */
//         // hostname: "securegw-stage.paytm.in" /* for Production */,

//         hostname: "securegw.paytm.in",

//         port: 443,
//         path: `/theia/api/v1/initiateTransaction?mid=${mid}&orderId=${orderId}`,
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Content-Length": post_data.length,
//         },
//       };

//       var response = "";
//       var post_req = https.request(options, function (post_res) {
//         post_res.on("data", function (chunk) {
//           response += chunk;
//         });
//         post_res.on("end", function () {
//           console.log("Response: ", response);
//           // res.json({data: JSON.parse(response), orderId: orderId, mid: mid, amount: amount});
//           setPaymentData({
//             ...paymentData,
//             token: JSON.parse(response).body.txnToken,
//             order: orderId,
//             mid: mid,
//             amount: 100,
//           });
//         });
//       });

//       post_req.write(post_data);
//       post_req.end();
//     });
//   };
//   const makePayment = () => {
//     var config = {
//       root: "",
//       style: {
//         bodyBackgroundColor: "#fafafb",
//         bodyColor: "",
//         themeBackgroundColor: "#0FB8C9",
//         themeColor: "#ffffff",
//         headerBackgroundColor: "#284055",
//         headerColor: "#ffffff",
//         errorColor: "",
//         successColor: "",
//         card: {
//           padding: "",
//           backgroundColor: "",
//         },
//       },
//       data: {
//         orderId: paymentData.order,
//         token: paymentData.token,
//         tokenType: "TXN_TOKEN",
//         amount: paymentData.amount /* update amount */,
//       },
//       payMode: {
//         labels: {},
//         filter: {
//           exclude: [],
//         },
//         order: ["CC", "DC", "NB", "UPI", "PPBL", "PPI", "BALANCE"],
//       },
//       website: "WEBSTAGING",
//       flow: "DEFAULT",
//       merchant: {
//         mid: paymentData.mid,
//         redirect: false,
//       },
//       handler: {
//         transactionStatus: function transactionStatus(paymentStatus) {
//           console.log(paymentStatus);
//         },
//         notifyMerchant: function notifyMerchant(eventName, data) {
//           console.log("Closed");
//         },
//       },
//     };

//     if (window.Paytm && window.Paytm.CheckoutJS) {
//       window.Paytm.CheckoutJS.init(config)
//         .then(function onSuccess() {
//           window.Paytm.CheckoutJS.invoke();
//         })
//         .catch(function onError(error) {
//           console.log("Error => ", error);
//         });
//     }
//   };
  return (
    <>
      <div className="home-cont" id="home-cont">
        <div className="Navbar">
          <Navbar />
        </div>

        <div className=" container-fluid" id="Home">
          <div className="row gutters">
            {/* left side */}
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
              id="h-left"
            >
              <img
                src="https://img.freepik.com/free-vector/people-volunteering-donating-money_53876-66112.jpg"
                class="img-fluid"
                id="home-img"
                alt="Home image"
              ></img>
            </div>

            {/* right side */}
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
              id="h-right"
            >
              <h1 id="right-H1">Who We Are?</h1>

              <h4 id="right-H2">
                We are a charitable social service organization, initiated with
                the intention of building a just and equitable society with high
                level of human morality. We deliver our projects with the core
                of enabling human beings with optimum intellectual, social and
                spiritual balance. You are welcome to join our hands of
                rebuilding a nation with belief and intellect.
              </h4>

              <div className="btn-group">
                <Link to="#" smooth={true} spy={true}>
                  <button className="btn my-2 my-sm-0" id="h-button2" 
                  // onClick={makePayment}
                  >
                    Donate
                  </button>
                </Link>
              </div>

              <div className="h-icons"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="UpcomingEvents">
        <UpcomingEvents />
      </div>

      <div className="OurProjects">
        <OurProjects />
      </div>

      <div className="OurLatestEvents">
        <OurLatestEvents />
      </div>

      <div className="Scholarship">
        <Scholarship />
      </div>

      <div className="VisionMission">
        <VisionMission />
      </div>

      <div className="AboutUs">
        <AboutUs />
      </div>

      <div className="ContactUs">
        <ContactUs />
      </div>
    </>
  );
}
