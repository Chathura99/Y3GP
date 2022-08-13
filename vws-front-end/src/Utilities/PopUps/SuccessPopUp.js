import React from "react";

export default function SuccessPopUp(props) {
  return (
    <>
      <div
        className="modal fade success show"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="header">
              

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.closePopUp}
              >
                <span aria-hidden="true" style={{float:"right",margin:10}}>&times;</span>
              </button>
            </div>
            <h5
                className="modal-title font-weight-bold text-center"
                id="exampleModalLabel"
                style={{marginTop:-20,color:"#96BE25",fontSize:30}}
              >
                Successfull!
              </h5><br></br>
            <small className="text-center">{props.message}</small>

            <div className="text-center">
                <button
                  type="button"
                  className="btn pl-4 pr-4 pt-1 pb-1"
                  style={{ backgroundColor: "#96BE25",marginBottom:"1rem" }}
                  onClick={props.closePopUp}
                >
                  OK
                </button>
                <br></br>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade show"
      ></div>
    </>
  );
}
