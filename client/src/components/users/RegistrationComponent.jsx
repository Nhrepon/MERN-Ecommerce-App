import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import UserStore from "../../store/UserStore";
import ValidationHelper from "../../utility/ValidationHelper";

const RegistrationComponent = () => {

  const {registrationFormValue, registrationFormOnChange, userRegistration}=UserStore();

  const onFormSubmit=async()=>{
    
    if (!ValidationHelper.IsEmail(registrationFormValue.email)) {
      toast.error("Valid email required!");
    }else{
      const response = await userRegistration(registrationFormValue);
      toast.success(response);
    }
  }


  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="card col-12 col-md-6 col-lg-4 my-5 shadow-lg">
            <form className="row g-3 needs-validation my-1 card-body">
              <div className="col-12">
                <input 
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email address"
                  value={registrationFormValue.email}
                  onChange={(e)=>{
                    registrationFormOnChange("email", e.target.value);
                  }}
                  required
                />
              </div>
              <div className="col-12">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={registrationFormValue.password}
                  onChange={(e)=>{
                    registrationFormOnChange("password", e.target.value);
                  }}
                  required
                />
              </div>

              <div className="col-12 text-center">
                <button className="btn btn-success" type="submit" onClick={onFormSubmit}>
                  Create account
                </button>
                <p className=" my-5">Already have an account? <Link to="/login" className="nav-link fw-bold" >Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationComponent;
