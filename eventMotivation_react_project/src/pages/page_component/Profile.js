import React from 'react'

export default function Profile() {
  return (
    <section className="section cta-wrap ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7">
          <div className="cta-content">
            <span className="lead">10% Sale offer for early birds</span>
            <h2 className="mt-3 mb-4 text-md">
              Meet top <span className="text-color">digital masters </span>{" "}
              <br />
              &amp; influencers in a unique{" "}
              <span className="text-color">3-days</span> experience.
            </h2>
            <a href="#" className="btn btn-secondary btn-rounded">
              Get ticket
            </a>
          </div>
        </div>
        <div className="col-lg-5 mt-5 mt-lg-0 d-none d-lg-block">
          <img
            src="images/banner/rev-slider-09.png"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  </section>
  )
}
