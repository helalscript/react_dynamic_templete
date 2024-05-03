import React from 'react'
import Mainmenu from './main/Mainmenu'
import Footermenu from './main/Footermenu'

export default function LoginPage() {
  return (




    <>
<Mainmenu/>
      <section className="section login">
        <div className="container">
          <div className="row no-gutters box-shadow align-items-center">
            <div className="col-lg-6">
              <img src="images/about/login.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className="login-form  p-5 border-left">
                <h2 className="mb-2">Login</h2>
                <p className="mb-4">
                  Don’t have an account?{" "}
                  <a href="signup.html" className="text-color">
                    Create a free account
                  </a>
                </p>
                <form action="#">
                  <div className="form-group mb-4">
                    <label htmlFor="username">Enter username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Username"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass">Enter Password</label>
                    <a className="float-right" href="#">
                      Forget password?
                    </a>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                  </div>
                  <a href="#" className="btn btn-hero btn-rounded mt-3">
                    Login
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footermenu/>
    </>








  )
}


