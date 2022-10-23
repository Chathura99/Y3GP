import React ,{useState,useEffect}from 'react'
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
import MoreDetails from './MoreDetails';

export default function Scholarship() {
    const [selected, setSelected] = useState(false);

  return (
    
    <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
      <div className="row gutters mt-10">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
          <div className="card h-100" id="contentcard">
            <div className="card-body">
            <h4 className="">Scholarship Applicants</h4>
              <div className="row gutters "></div>
              <div
                className="row gutters "
                style={{ justifyContent: "center" }}
              >
        
                <MaterialTable
                  components={{
                    Container: (props) => <Paper {...props} elevation={0} />,
                  }}
                  options={{ actionsColumnIndex: -1 }}
                  title=""
                  columns={[
                    { field: "scholarshipId", title: "SCHOLARSHIP ID" ,hidden:"true"},
                    { field: "name", title: "APPLICANT NAME" },
                    { field: "phoneNumber", title: "PHONE" },
                    { field: "date", title: "DATE" },
                    { field: "type", title: "TYPE" },
                    { field: "hometown", title: "HOME TOWN" },
                  ]}
                  data={


                    [{"scholarshipId":1,
                    "name":"sd",
                    "phoneNumber":"15151511",
                    "date":"ds",
                    "type":"ds",
                    "hometown":"dsf"}]


                  }
                  actions={[
                    {
                      icon: () => {
                        return (
                          <button
                            type="button"
                            className="btn mt-0"
                            style={{
                              backgroundColor: "#96BE25",
                              border: "none",
                            }}
                          >
                            Details
                          </button>
                        );
                      },
                      onClick: (event, rowData) => {
                        // setSelectedJoinRequestsData(rowData);
                        setSelected(true);
                      },
                      // tooltip: "Register User",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {selected && (
          <MoreDetails setSelected={setSelected} data={""} />
        )}
    </div>
  
  )
}
