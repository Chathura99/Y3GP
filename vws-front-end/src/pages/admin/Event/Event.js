import React from 'react'

export default function Event() {
  return (
    <div className="container-fluid">
      <div className="row gutters">
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="row gutters">Left</div>
              <div className="row gutters ">line 1</div>
              <div className="row gutters">line 2</div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 ">
          <div className="card h-100">
            <div className="card-body">
            <div className="row gutters ">Right</div>
            <div className="row gutters ">line 1</div>
            <div className="row gutters">line 2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row gutters mt-3">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">Events</div>
          </div>
        </div>
      </div>
    </div>
  )
}
