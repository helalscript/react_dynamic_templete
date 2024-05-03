import React from 'react'
import Mainmenu from './main/Mainmenu'
import Footermenu from './main/Footermenu'

export default function Regstration() {
  return (
    
<>
<Mainmenu/>

  <section className="section signup">
  <div className="container">
    <div className="box-shadow">
      <div className="row justify-content-center no-gutters ">
        <div className="col-lg-6">
          <img src="images/about/signup.png" alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <div className="signup-form p-5 border-left">
            <div className="mb-4">
              <h2 className="mb-2">Welcome</h2>
              <p className="mb-5">
                Already have an account?{" "}
                <a href="login.html" className="text-color">
                  {" "}
                  Login now
                </a>
              </p>
            </div>
            <form action="#">
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone No"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email Address"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="#"
                  id="#"
                  cols={30}
                  rows={9}
                  className="form-control"
                  placeholder="Your Message"
                  defaultValue={""}
                />
              </div>
              <a href="#" className="btn btn-hero btn-rounded mt-4 ">
                Register Now
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Footermenu/>
</>

  )
}
