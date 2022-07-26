import React from "react";

export default function ConfirmPopUp() {
  function getButton() {
    if (0) {
      return (
        <button
          type="button"
          class="btn btn-primary pl-4 pr-4 pt-1 pb-1"
          // #96BE25,#BE4D25
        >
          OK
        </button>
      );
    } else if (0) {
      return (
        <button
          type="button"
          class="btn btn-primary pl-4 pr-4 pt-1 pb-1"
          style={{ backgroundColor: "#BE4D25" }}
        >
          OK
        </button>
      );
    } else if (1) {
      return (
        <button
          type="button"
          class="btn btn-primary pl-4 pr-4 pt-1 pb-1"
          style={{ backgroundColor: "#96BE25" }}
        >
          OK
        </button>
      );
    }
  }
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target=".bd-example-modal-sm"
      >
        Confirm
      </button>

      <div
        class="modal fade bd-example-modal-sm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title font-weight-bold" id="exampleModalLabel">
                Are You Sure?
              </h5>

              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-footer justify-content-center">{getButton()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
