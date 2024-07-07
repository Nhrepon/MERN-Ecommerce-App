import React from 'react';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
    return (
        <div className='container-fluid'>
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
                  //value=""
                  required
                />
              </div>
              <div className="col-12">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  //value=""
                  required
                />
              </div>

              <div className="col-12 text-center">
                <button className="btn btn-success" type="submit">
                  Login
                </button>
                <hr />
                
                <div className="d-flex gap-2">
                    <p>Login with:</p>
                    <i class="bi bi-google"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-github"></i>
                    <i class="bi bi-whatsapp"></i>
                </div>
                <p className=" my-5">Don't have an account? <Link to="/registration" className="nav-link fw-bold" >Create account</Link></p>
              </div>
            </form>
          </div>
        </div>
            </div>
        </div>
    );
};

export default LoginComponent;