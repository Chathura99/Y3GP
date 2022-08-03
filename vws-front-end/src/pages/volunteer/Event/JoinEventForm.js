import React from "react";

export default function JoinEventForm() {
  return (
    <div>
      {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Upper
</button> */}

      <div
        class="modal fade"
        id="JoinEventForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
           
              
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" style={{float:"right",margin:10}}>&times;</span>
              </button>
           
            <div class="modal-body">
              <form onSubmit={""} style={{marginTop:0}}>
               
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h4 className="mb-2" style={{textAlign:"center",fontSize:40,marginTop:-40,color:"#96BE25"}}>Successfull !!!</h4>
                    <h6 className="mb-2" style={{textAlign:"center",fontSize:20,color:"#A6A6A6"}}>Requested to join</h6>
                  </div>

                  
                

                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-center mt-3 ">
                     
                        <button
                type="button"
                id="submit"
                name="submit"
                data-dismiss="modal"
                
                className="btn p-1"
                style={{backgroundColor:"#96BE25",border:"none",fontSize:15}}
                
              >
                OK
              </button>
                        
                      
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
