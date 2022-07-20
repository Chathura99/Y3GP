import React from 'react'
import './form.css'

export default function Form() {
  return (
    <div>
    <div className="row gutters">
    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
    <div className="card h-100">
        <div className="card-body">
            <div className="account-settings">
                <div className="user-profile">
                    <div className="user-avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"/>
                    </div>
                    <h5 className="user-name">Chathura Manohara</h5>
                    <h6 className="user-email">cm@gmail.com</h6>
                </div>
                <div className="about">
                    <h5>About</h5>
                    <p>Volunteer</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
    <div className="card h-100">
        <div className="card-body text-start">
            <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Edit Profile</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group ">
                        <label for="fullName">Full Name</label>
                        <input type="text" className="form-control" id="fullName" placeholder="Enter full name"/>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                        <label for="eMail">Email</label>
                        <input type="email" className="form-control" id="eMail" placeholder="Enter email ID"/>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                        <label for="phone">Phone</label>
                        <input type="text" className="form-control" id="phone" placeholder="Enter phone number"/>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                        <label for="website">University/School</label>
                        <input type="url" className="form-control" id="website" placeholder="University or School"/>
                    </div>
                </div>
            </div>
            <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mt-3 mb-2 text-primary">Address</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                        <label for="Street">Street</label>
                        <input type="name" className="form-control" id="Street" placeholder="Enter Street"/>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                        <label for="ciTy">City</label>
                        <input type="name" className="form-control" id="ciTy" placeholder="Enter City"/>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                        <label for="sTate">State</label>
                        <input type="text" className="form-control" id="sTate" placeholder="Enter State"/>
                    </div>
                </div>
                
            </div>

            <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-center mt-3 ">
                        <button type="button" id="submit" name="submit" className="btn btn-secondary m-2">Cancel</button>
                        <button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>	
  )
}
