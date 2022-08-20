import React,{useState} from "react";

export default function PcAnnouncements() {
  const [ann, setAnn] = useState({
    title: "",
    category: "",
    content:"",
    file:"",
  });

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.name + "-" + e.target.value);
    setAnn((ann) => ({
      ...ann,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <div
        class="modal fade"
        id="addAnnouncement"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Announcement
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
              <form onSubmit={""}>
                <div className="row gutters ">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group ">
                      <label for="title">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter title"
                        value={ann.title}
                        name="title"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="category">Category</label>

                      <select
                        type="text"
                        className="form-control"
                        id="category"
                        placeholder="Select category"
                        value={ann.category}
                        name="category"
                        onChange={handleChange}
                      >
                        <option value="all">All</option>
                        <option value="guest">Guest</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="content">Content</label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Enter content"
                        value={ann.content}
                        name="content"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="file">File</label>
                      <input
                        type="file"
                        className="form-control"
                        id=""
                        placeholder="file"
                        value={ann.file}
                        name="file"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-center mt-3 ">
                      <div class="modal-footer justify-content-center ">
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          className="btn btn-secondary m-2"
                          data-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          className="btn btn-primary"
                          // onClick={handleSubmit}
                        >
                          Update
                        </button>
                      </div>
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















//import React from 'react'
//
//export default function PcAnnouncements() {
//  return (
//    <>
//    <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
//      <div className="row gutters mt-10">
//        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
//          <div className="card h-100" id="contentcard">
//            <div className="card-body">
//              <div className="row gutters">Announcements</div>
//              <div className="row gutters ">line 1</div>
//              <div className="row gutters">line 2</div>
//            </div>
//          </div>
//        </div>
//
//        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
//          <div className="card h-100" id="contentcard">
//            <div className="card-body">
//              <div className="row gutters ">
//                <h3 className="ml-3">Title</h3>
//              </div>
//              <div className="row gutters ">
//                Content
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//
//      <div className="row gutters mt-3">
//        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//          <div className="card h-100" id="contentcard">
//            <div className="card-body ">
//             Content
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  </>
//  )
//}
