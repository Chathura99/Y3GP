import React from "react";

export default function FailedPopUp(props) {
  return (
    <>
      <div
        className="modal fade failed show"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title font-weight-bold"
                id="exampleModalLabel"
              >
                Failed!
              </h5>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.closePopUp}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <small className="text-center">{props.message}</small>

            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn pl-4 pr-4 pt-1 pb-1"
                style={{ backgroundColor: "#BE4D25" }}
                onClick={props.closePopUp}
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
