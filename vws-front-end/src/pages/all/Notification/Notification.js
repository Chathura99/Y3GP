import React from 'react'
import FileUpload from '../FileUpload/FileUpload'

export default function Notification() {
  return (
    <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
    <div className="row gutters mt-10">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
        <div className="card h-100" id="contentcard">
          <div className="card-body">
          <h4 className="">Notification</h4>
            <div className="row gutters "></div>
            <div
              className="row gutters "
              style={{ justifyContent: "center" }}
            >
              
<FileUpload/>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
