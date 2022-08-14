import React from "react";

export default function ConfirmPopUp(props) {
  return (
    <>
      <div
        class="modal fade confirm show"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <div class="modal-dialog modal-sm">
          <div class="modal-content  justify-content-center">
            <div class="header">
              

              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.closePopUp}
              >
                <span aria-hidden="true" style={{float:"right",margin:10}}>&times;</span>
              </button>
            </div>
            <h5 class="modal-title font-weight-bold text-center" 
            id="exampleModalLabel" style={{marginTop:-20,fontSize:30}}>
                Are You Sure?
              </h5><br></br>
            <small className="text-center">{props.message}</small>
            <div class="text-center">
                <button
                  type="button"
                  class="btn pl-4 pr-4 pt-1 pb-1"
                  style={{ backgroundColor: "#2596be",marginBottom:"1rem" }}
                  onClick={props.handleSubmit}
                >
                  OK
                </button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade show"></div>
    </>
  );
}
