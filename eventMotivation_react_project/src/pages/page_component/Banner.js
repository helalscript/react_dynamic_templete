import React from 'react'

export default function Banner() {
  return (
    <>
     <section
    className="section-banner d-flex align-items-center"
    style={{ backgroundImage: "url(images/banner/fsf.jpg)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-7 mr-auto">
          <div className="banner-content">
            <span>November 12, at 10.00am</span>
            <h1 className="mt-3 mb-5">
              The future <br />
              &amp; Tech Expo
            </h1>
            <a href="#" className="btn btn-hero btn-rounded">
              Discover more
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
