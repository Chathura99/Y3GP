import React from "react";

export default function MapFormPopUp() {
  return (
    <div>
      {/* <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Middle
      </button> */}

      <div
        class="modal fade"
        id="MapForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                View in Map
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
            <div class="modal-body">

            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31627.51292771125!2d80.09954441535213!3d7.743159642812479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcd5e12ad2b2e5%3A0x6e1f23e96c120ed3!2zTWFoYXNlbiBOYXRpb25hbCBTY2hvb2wg4La44LeE4LeD4LeZ4Lax4LeKIOC2ouC3j-C2reC3kuC2miDgtrTgt4_gt4Pgtr0!5e0!3m2!1sen!2slk!4v1658951746159!5m2!1sen!2slk"
        width="461"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
