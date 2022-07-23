import React from 'react'

export default function pcOngoingEvents() {
  return (
    <>
    <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
      <div className="row gutters mt-10">
        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
          <div className="card h-100" id="contentcard">
            <div className="card-body">
              <div className="row gutters">On Going Project</div>
              <div className="row gutters ">line 1</div>
              <div className="row gutters">line 2</div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
          <div className="card h-100" id="contentcard">
            <div className="card-body">
              <div className="row gutters ">
                <h3 className="ml-3">Title</h3>
              </div>
              <div className="row gutters ">
                Content
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row gutters mt-3">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card h-100" id="contentcard">
            <div className="card-body ">
             Content
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
