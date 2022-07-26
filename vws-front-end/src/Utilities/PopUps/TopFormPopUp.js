import React from "react";

export default function FormPopUp() {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Middle
      </button>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Modal title
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
            <div class="modal-body">...</div>
            <div class="modal-footer justify-content-center ">
              <button
                type="button"
                class="btn btn-secondary pl-4 pr-4 pt-1 pb-1"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary pl-4 pr-4 pt-1 pb-1">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
