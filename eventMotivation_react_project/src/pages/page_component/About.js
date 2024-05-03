import React from 'react'

export default function About() {
  return (
    <section className="section about">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-5">
          <div className="about-img position-relative">
            <img
              src="images/about/h1-gallery-img-7.jpg"
              alt=""
              className="img-fluid w-100"
            />
            <div className="img-block">
              <img
                src="images/about/main-home-img-1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-7">
          <div className="about-content-wrap mt-5 mt-md-0">
            <span className="stroke-text">event</span>
            <div className="ml-90">
              <h2 className="text-lg mb-3 mt-3">
                The New Era of Tech Companies{" "}
              </h2>
              <p>
                Lorem ipsum proin gravida nibh vel velit auctor aliquet.
                Aeneansollicitudin, lorem quis bibendum auctonisi elit consequat
                ipsum nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
                vulputate cursusa sit nibh vel velit.
              </p>
              <a href="#" className="btn btn-hero btn-rounded mt-3">
                Discover More{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
